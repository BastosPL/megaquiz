"use client";

import { useState, useCallback, useMemo } from "react";
import type { Quiz, QuizResult, QuizProfile } from "@/lib/types";
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

  const shuffledQuestions = useMemo(
    () =>
      shuffleArray(quiz.questions).map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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

  const questions = isTrivia ? shuffledQuestions : quiz.questions;
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
      const percentile =
        percentage >= 90 ? 95 : percentage >= 70 ? 80 : percentage >= 50 ? 55 : 30;
      return {
        score: finalScore,
        totalQuestions: total,
        percentage,
        percentile,
        shareText: `Acertei ${finalScore}/${total} no quiz "${quiz.title}"! Consegue me superar?`,
      };
    },
    [quiz]
  );

  const handleExtraLife = () => {
    // Futuro: aqui entra a propaganda (rewarded ad)
    // Por enquanto, simula assistir propaganda
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
      const newScore = isCorrect ? score + 1 : score;
      const newLives = isCorrect ? lives : lives - 1;

      if (isCorrect) setScore(newScore);
      if (!isCorrect) setLives(newLives);

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
      <div className="max-w-lg mx-auto text-center animate-slide-up">
        <div className="bg-bg-card rounded-2xl border border-border p-8 shadow-lg">
          <span className="text-6xl block mb-4">💀</span>
          <h2 className="text-2xl font-extrabold text-text mb-2">
            Voce perdeu!
          </h2>
          <p className="text-text-light mb-2">
            Acertou <span className="font-bold text-primary">{score}</span> de{" "}
            {currentQuestion + 1} perguntas
          </p>
          <p className="text-text-light mb-6">
            Suas 3 vidas acabaram...
          </p>

          {/* Oferta de vida extra */}
          <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-5 mb-6 animate-pulse-glow">
            <span className="text-3xl block mb-2">🎬</span>
            <h3 className="font-bold text-text mb-1">Ganhe +1 Vida!</h3>
            <p className="text-sm text-text-light mb-3">
              Assista um video curto e continue jogando
            </p>
            <button
              onClick={handleExtraLife}
              className="w-full py-3 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-light transition-colors"
            >
              ▶ Assistir e Continuar
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setResult(calculateTriviaResult(score, currentQuestion + 1))}
              className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Ver meu resultado
            </button>
            <button
              onClick={handleRestart}
              className="text-sm text-primary hover:underline font-medium"
            >
              🔄 Tentar novamente (do inicio)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <QuizResultView quiz={quiz} result={result} onRestart={handleRestart} />
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar + Lives */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-text-light mb-2">
          <span>
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <div className="flex items-center gap-3">
            {isTrivia && (
              <span className="flex items-center gap-1">
                {Array.from({ length: maxLives }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg transition-all duration-300 ${
                      i < lives ? "scale-100 opacity-100" : "scale-75 opacity-30 grayscale"
                    }`}
                  >
                    ❤️
                  </span>
                ))}
              </span>
            )}
            {isTrivia && (
              <span className="font-medium text-primary">
                {score} acerto{score !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
        <div className="h-2.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${quiz.color}, ${quiz.color}cc)`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="animate-fade-in" key={currentQuestion}>
        <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 text-center leading-snug">
          {question.text}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            const letters = ["A", "B", "C", "D", "E", "F"];
            let optionStyle =
              "bg-bg-card border-border hover:border-primary/50 hover:shadow-md cursor-pointer";

            if (showFeedback && isTrivia) {
              if (option.isCorrect) {
                optionStyle = "bg-success/10 border-success";
              } else if (option.id === selectedOption && !option.isCorrect) {
                optionStyle = "bg-error/10 border-error shake";
              } else {
                optionStyle = "bg-bg-card border-border opacity-40";
              }
            } else if (selectedOption === option.id && !isTrivia) {
              optionStyle = "border-primary bg-primary/10 shadow-md";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: `${quiz.color}15`,
                      color: quiz.color,
                    }}
                  >
                    {letters[index]}
                  </span>
                  <span className="font-medium text-text">{option.text}</span>
                  {showFeedback && option.isCorrect && (
                    <span className="ml-auto text-success text-xl">✓</span>
                  )}
                  {showFeedback &&
                    option.id === selectedOption &&
                    !option.isCorrect && (
                      <span className="ml-auto text-error text-xl">✗</span>
                    )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showFeedback && question.explanation && (
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl animate-fade-in">
            <p className="text-sm text-text-light">
              <span className="font-semibold text-primary">💡 Sabia?</span>{" "}
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
