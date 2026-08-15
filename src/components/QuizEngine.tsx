"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Heart,
  HeartCrack,
  BatteryCharging,
  CheckCircle2,
  XCircle,
  Lightbulb,
  RotateCcw,
} from "lucide-react";
import type { Quiz, QuizResult, QuizProfile, QuizAnswerLogEntry } from "@/lib/types";
import { accessibleForeground } from "@/lib/color";
import QuizResultView from "./QuizResult";

interface QuizEngineProps {
  quiz: Quiz;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizEngine({ quiz }: QuizEngineProps) {
  const isTrivia = quiz.type === "trivia";
  const maxLives = isTrivia ? 3 : 0;

  /**
   * BUG CORRIGIDO (Fase 2): o embaralhamento usava Math.random() dentro de um
   * useMemo executado tanto no SSR quanto na hidratacao do cliente — como as
   * duas execucoes usam sementes diferentes, o HTML do servidor e a primeira
   * renderizacao do cliente mostravam perguntas em ordens diferentes,
   * causando um erro de hydration mismatch (confirmado no console do
   * navegador) em todo quiz de trivia, toda vez que a pagina carrega. React
   * descarta e reconstroi a arvore inteira quando isso acontece — custo de
   * performance real, alem do erro. Pre-existente desde o commit 301fc5f
   * (08/06/2026), muito antes do redesign.
   *
   * Correcao: a primeira renderizacao (servidor E cliente) usa a ordem
   * original e deterministica de quiz.questions — identica nos dois lados,
   * sem mismatch. O embaralhamento em si só acontece depois, num useEffect
   * (client-only, roda depois da hidratacao), via setState normal — não é
   * mais parte da hidratacao, então não gera o erro.
   */
  const [shuffledQuestions, setShuffledQuestions] = useState(quiz.questions);

  useEffect(() => {
    if (!isTrivia) return;
    // Intencional: este é exatamente o padrão recomendado para conteúdo
    // aleatório client-only sem quebrar a hidratação (ver comentário acima).
    // Não há alternativa sem reintroduzir o mismatch: o valor tem que nascer
    // determinístico (SSR-safe) e só virar aleatório depois de montado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShuffledQuestions(
      shuffleArray(quiz.questions).map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(maxLives);
  const [profileScores, setProfileScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showExtraLifeOffer, setShowExtraLifeOffer] = useState(false);
  const [usedExtraLife, setUsedExtraLife] = useState(false);
  const [answerLog, setAnswerLog] = useState<QuizAnswerLogEntry[]>([]);

  const questions = isTrivia ? shuffledQuestions : quiz.questions;
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const safeColor = accessibleForeground(quiz.color);

  const calculatePersonalityResult = useCallback(
    (finalScores: Record<string, number>): QuizResult => {
      const topProfileId = Object.entries(finalScores).sort(
        ([, a], [, b]) => b - a
      )[0]?.[0];
      const profile =
        quiz.profiles?.find((p) => p.id === topProfileId) || quiz.profiles?.[0];
      return {
        profile: profile as QuizProfile,
        shareText: `Fiz o quiz "${quiz.title}" e meu resultado foi: ${profile?.title}! ${profile?.emoji}`,
      };
    },
    [quiz]
  );

  const calculateTriviaResult = useCallback(
    (finalScore: number, total: number): QuizResult => {
      const percentage = Math.round((finalScore / total) * 100);
      return {
        score: finalScore,
        totalQuestions: total,
        percentage,
        shareText: `Acertei ${finalScore}/${total} no quiz "${quiz.title}"! Consegue me superar?`,
      };
    },
    [quiz]
  );

  const handleExtraLife = () => {
    setLives(1);
    setShowExtraLifeOffer(false);
    setGameOver(false);
    setUsedExtraLife(true);
    // Avança para próxima pergunta
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleSelect = (optionId: string) => {
    if (showFeedback || gameOver) return;
    setSelectedOption(optionId);

    if (isTrivia) {
      setShowFeedback(true);
      const option = question.options.find((o) => o.id === optionId);
      const isCorrect = option?.isCorrect ?? false;
      const correctOption = question.options.find((o) => o.isCorrect);
      const newScore = isCorrect ? score + 1 : score;
      const newLives = isCorrect ? lives : lives - 1;

      if (isCorrect) setScore(newScore);
      if (!isCorrect) setLives(newLives);

      setAnswerLog((prev) => [
        ...prev,
        {
          questionText: question.text,
          selectedOptionText: option?.text ?? "",
          correctOptionText: correctOption?.text,
          isCorrect,
          explanation: question.explanation,
        },
      ]);

      setTimeout(() => {
        // Perdeu todas as vidas
        if (newLives <= 0) {
          if (!usedExtraLife) {
            setShowExtraLifeOffer(true);
            setGameOver(true);
          } else {
            setResult(calculateTriviaResult(newScore, currentQuestion + 1));
          }
          return;
        }

        // Próxima pergunta ou resultado final
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedOption(null);
          setShowFeedback(false);
        } else {
          setResult(calculateTriviaResult(newScore, questions.length));
        }
      }, question.explanation ? 3500 : 1500);
    } else {
      // Personalidade — sem vidas
      const option = question.options.find((o) => o.id === optionId);
      const newScores = { ...profileScores };
      if (option?.profilePoints) {
        Object.entries(option.profilePoints).forEach(([profileId, points]) => {
          newScores[profileId] = (newScores[profileId] || 0) + points;
        });
      }
      setProfileScores(newScores);

      setAnswerLog((prev) => [
        ...prev,
        {
          questionText: question.text,
          selectedOptionText: option?.text ?? "",
        },
      ]);

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedOption(null);
        } else {
          setResult(calculatePersonalityResult(newScores));
        }
      }, 400);
    }
  };

  const handleRestart = () => {
    // Re-shuffle on restart
    window.location.reload();
  };

  // Tela de Game Over com oferta de vida extra
  if (showExtraLifeOffer) {
    return (
      <div className="mx-auto max-w-lg animate-slide-up text-center">
        <div className="rounded-3xl border border-black/5 bg-surface-v2 p-8 shadow-lg">
          <HeartCrack className="mx-auto mb-4 h-14 w-14 text-text-secondary" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="text-h2 font-extrabold text-ink mb-2">Você perdeu!</h2>
          <p className="text-text-secondary mb-1">
            Acertou <span className="font-bold text-brand-dark">{score}</span> de{" "}
            {currentQuestion + 1} perguntas
          </p>
          <p className="text-text-secondary mb-6">Suas 3 vidas acabaram.</p>

          {/* Oferta de segunda chance */}
          <div className="mb-6 rounded-2xl border-2 border-accent-entertainment bg-accent-entertainment/10 p-5">
            <BatteryCharging className="mx-auto mb-2 h-8 w-8 text-ink" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="font-bold text-ink mb-1">Segunda chance!</h3>
            <p className="text-small text-text-secondary mb-3">
              Você pode ganhar +1 vida e continuar de onde parou.
            </p>
            <button
              onClick={handleExtraLife}
              className="w-full rounded-xl bg-ink py-3 font-bold text-white transition-colors hover:bg-ink/85"
            >
              Continuar jogando
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setShowExtraLifeOffer(false);
                setResult(calculateTriviaResult(score, currentQuestion + 1));
              }}
              className="w-full rounded-xl bg-brand-dark py-3 font-semibold text-white transition-[filter] hover:brightness-90"
            >
              Ver meu resultado
            </button>
            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-1.5 text-small font-medium text-brand-dark hover:underline"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Tentar novamente (do início)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <QuizResultView
        quiz={quiz}
        result={result}
        onRestart={handleRestart}
        answerLog={answerLog}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Voltar */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-small font-medium text-text-secondary hover:text-brand-dark"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Voltar
        </Link>
      </div>

      {/* Progress bar + Lives */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-small text-text-secondary">
          <span>
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <div className="flex items-center gap-3">
            {isTrivia && (
              <span className="flex items-center gap-1" aria-label={`${lives} de ${maxLives} vidas restantes`}>
                {Array.from({ length: maxLives }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`h-4 w-4 transition-all duration-300 ${
                      i < lives ? "fill-brand-bright text-brand-bright" : "text-text-secondary/30"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </span>
            )}
            {isTrivia && (
              <span className="font-medium text-brand-dark">
                {score} acerto{score !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-brand-bright transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="animate-fade-in" key={currentQuestion}>
        <h2 className="mb-6 text-center text-h2 font-bold leading-snug text-ink">
          {question.text}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            const letters = ["A", "B", "C", "D", "E", "F"];
            let optionStyle =
              "border-black/10 bg-surface-v2 hover:border-brand-bright/60 hover:shadow-md cursor-pointer";

            if (showFeedback && isTrivia) {
              if (option.isCorrect) {
                optionStyle = "bg-brand-soft border-brand-bright";
              } else if (option.id === selectedOption && !option.isCorrect) {
                optionStyle = "bg-red-50 border-red-400 shake";
              } else {
                optionStyle = "border-black/10 bg-surface-v2 opacity-40";
              }
            } else if (selectedOption === option.id && !isTrivia) {
              optionStyle = "border-brand-dark bg-brand-soft shadow-md";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={showFeedback}
                className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-small font-bold"
                    style={{
                      backgroundColor: `${quiz.color}15`,
                      color: safeColor,
                    }}
                  >
                    {letters[index]}
                  </span>
                  <span className="font-medium text-ink">{option.text}</span>
                  {showFeedback && option.isCorrect && (
                    <CheckCircle2 className="ml-auto h-5 w-5 flex-shrink-0 text-brand-dark" aria-label="Resposta correta" />
                  )}
                  {showFeedback &&
                    option.id === selectedOption &&
                    !option.isCorrect && (
                      <XCircle className="ml-auto h-5 w-5 flex-shrink-0 text-red-500" aria-label="Resposta incorreta" />
                    )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showFeedback && question.explanation && (
          <div className="mt-4 animate-fade-in rounded-xl border border-brand-bright/25 bg-brand-soft/40 p-4">
            <p className="flex gap-2 text-small text-text-secondary">
              <Lightbulb className="h-4 w-4 flex-shrink-0 text-brand-dark" aria-hidden="true" />
              <span>
                <span className="font-semibold text-brand-dark">Sabia?</span>{" "}
                {question.explanation}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
