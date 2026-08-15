"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Flame,
  ThumbsUp,
  Dumbbell,
  Sparkles,
  Link2,
  Check,
  RotateCcw,
  ShoppingBag,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { Quiz, QuizResult, QuizAnswerLogEntry } from "@/lib/types";
import { getAffiliateLink } from "@/lib/affiliate-links";
import { getNextQuiz, getRelatedQuizzes } from "@/lib/quizzes";
import CompactQuizCard from "./CompactQuizCard";

interface QuizResultProps {
  quiz: Quiz;
  result: QuizResult;
  onRestart: () => void;
  answerLog?: QuizAnswerLogEntry[];
}

export default function QuizResultView({
  quiz,
  result,
  onRestart,
  answerLog = [],
}: QuizResultProps) {
  const [copied, setCopied] = useState(false);
  const isTrivia = quiz.type === "trivia";

  const affiliate =
    !isTrivia && result.profile
      ? getAffiliateLink(quiz.id, result.profile.id)
      : null;

  const nextQuiz = getNextQuiz(quiz);
  const relatedQuizzes = getRelatedQuizzes(quiz, 3);

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const quizUrl = `${siteUrl}/quiz/${quiz.slug}`;

  const shareMessage = isTrivia
    ? `Acertei ${result.score}/${result.totalQuestions} no quiz "${quiz.title}"!\n\nConsegue me superar? Jogue agora:\n${quizUrl}`
    : `Fiz o quiz "${quiz.title}" e meu resultado foi: ${result.profile?.title}!\n\nDescubra o seu:\n${quizUrl}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(quizUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silencioso
    }
  };

  const ScoreIcon = (() => {
    if (!result.percentage) return Sparkles;
    if (result.percentage >= 90) return Trophy;
    if (result.percentage >= 70) return Flame;
    if (result.percentage >= 50) return ThumbsUp;
    return Dumbbell;
  })();

  const getScoreMessage = () => {
    if (!result.percentage) return "";
    if (result.percentage === 100)
      return "Perfeito! Você acertou todas as perguntas — conhecimento impressionante!";
    if (result.percentage >= 90)
      return "Excelente! Você domina esse assunto de verdade.";
    if (result.percentage >= 70)
      return "Muito bem! Você sabe bastante, mas ainda tem espaço para aprender mais.";
    if (result.percentage >= 50)
      return "Resultado razoável — vale a pena revisar o que errou e tentar de novo.";
    if (result.percentage >= 30)
      return "Deu para perceber que o tema é desafiador. Que tal pesquisar um pouco e voltar?";
    return "Não desanime! Releia as explicações e tente novamente.";
  };

  // Circunferência do anel de progresso (r=54)
  const ringCircumference = 2 * Math.PI * 54;
  const ringOffset =
    ringCircumference - ((result.percentage ?? 0) / 100) * ringCircumference;

  return (
    <div className="mx-auto max-w-lg animate-slide-up">
      <div className="overflow-hidden rounded-3xl border border-black/5 bg-surface-v2 shadow-lg">
        {/* 1. Score dominante */}
        <div className="flex flex-col items-center gap-3 px-6 pt-8 pb-6 text-center">
          {isTrivia ? (
            <div className="relative flex h-32 w-32 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-brand-soft)" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="var(--color-brand-bright)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <ScoreIcon className="mb-1 h-6 w-6 text-brand-dark" aria-hidden="true" />
                <span className="text-h3 font-extrabold text-ink">
                  {result.score}/{result.totalQuestions}
                </span>
              </div>
            </div>
          ) : (
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft">
              <Sparkles className="h-10 w-10 text-brand-dark" aria-hidden="true" />
            </span>
          )}

          <h2 className="text-h2 font-extrabold text-ink">
            {isTrivia ? "Resultado do quiz" : result.profile?.title}
          </h2>
          {isTrivia && (
            <p className="max-w-sm text-small text-text-secondary">{getScoreMessage()}</p>
          )}
        </div>

        <div className="px-6 pb-6">
          {/* 2. Interpretação / resumo do perfil */}
          {!isTrivia && result.profile && (
            <p className="mb-4 text-center leading-relaxed text-text-secondary">
              {result.profile.description}
            </p>
          )}

          {/* 3. Resumo (trivia) */}
          {isTrivia && (
            <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-bg-v2 p-3 text-center">
              <div>
                <p className="text-h3 font-bold text-brand-dark">{result.score}</p>
                <p className="text-caption text-text-secondary">Acertos</p>
              </div>
              <div>
                <p className="text-h3 font-bold text-brand-dark">
                  {(result.totalQuestions ?? 0) - (result.score ?? 0)}
                </p>
                <p className="text-caption text-text-secondary">Erros</p>
              </div>
              <div>
                <p className="text-h3 font-bold text-brand-dark">{result.percentage}%</p>
                <p className="text-caption text-text-secondary">Aproveitamento</p>
              </div>
            </div>
          )}

          {quiz.disclaimerResult && (
            <p className="mb-4 text-center text-caption italic text-text-secondary/80">
              {quiz.disclaimerResult}
            </p>
          )}

          {quiz.methodologyNote && !isTrivia && (
            <div className="mb-4 rounded-xl border border-black/5 bg-bg-v2 p-4">
              <p className="whitespace-pre-line text-small text-text-secondary">
                {quiz.methodologyNote}
              </p>
            </div>
          )}

          {/* Affiliate CTA */}
          {affiliate && (
            <div className="mb-4">
              <p className="mb-1 text-center text-caption text-text-secondary/70">Publicidade</p>
              <a
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="block rounded-xl border border-black/10 bg-bg-v2 p-4 text-center transition-colors hover:border-brand-bright/50"
              >
                <p className="mb-1 text-small text-text-secondary">
                  Vista a camisa do seu craque!
                </p>
                <p className="inline-flex items-center gap-2 text-body-lg font-bold text-ink">
                  <ShoppingBag className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                  {affiliate.label}
                </p>
                {affiliate.price && (
                  <p className="mt-1 text-small font-semibold text-brand-dark">
                    A partir de {affiliate.price} na Shopee
                  </p>
                )}
              </a>
            </div>
          )}

          {/* 4. Revisar respostas */}
          {answerLog.length > 0 && (
            <details className="group mb-4 rounded-xl border border-black/10">
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-small font-semibold text-ink">
                Revisar respostas ({answerLog.length} pergunta{answerLog.length !== 1 ? "s" : ""})
                <ChevronDown className="h-4 w-4 text-text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <ul className="flex flex-col gap-3 border-t border-black/10 p-4 pt-3">
                {answerLog.map((entry, i) => (
                  <li key={i} className="text-small">
                    <p className="mb-1 font-medium text-ink">{entry.questionText}</p>
                    {entry.isCorrect === undefined ? (
                      <p className="text-text-secondary">Sua resposta: {entry.selectedOptionText}</p>
                    ) : (
                      <>
                        <p
                          className={`flex items-center gap-1.5 ${
                            entry.isCorrect ? "text-brand-dark" : "text-red-600"
                          }`}
                        >
                          {entry.isCorrect ? (
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                          ) : (
                            <XCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                          )}
                          Você respondeu: {entry.selectedOptionText}
                        </p>
                        {!entry.isCorrect && entry.correctOptionText && (
                          <p className="text-text-secondary">
                            Resposta correta: {entry.correctOptionText}
                          </p>
                        )}
                      </>
                    )}
                    {entry.explanation && (
                      <p className="mt-1 text-text-secondary">{entry.explanation}</p>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          )}

          {/* 5. Tentar novamente + Compartilhar */}
          <div className="space-y-3">
            <p className="text-center text-small font-semibold text-ink">
              Compartilhe seu resultado!
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white transition-colors hover:bg-[#1da851]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Compartilhar no WhatsApp
            </a>

            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Compartilhar no X
            </a>

            <button
              onClick={handleCopyLink}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black/10 py-3 font-semibold text-ink transition-colors hover:bg-bg-v2"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5" aria-hidden="true" /> Link copiado!
                </>
              ) : (
                <>
                  <Link2 className="h-5 w-5" aria-hidden="true" />
                  Copiar link
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-1.5 text-small font-medium text-brand-dark hover:underline"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Jogar novamente
            </button>
          </div>
        </div>
      </div>

      {/* 6. Próximo desafio */}
      {nextQuiz && (
        <div className="mt-8">
          <h3 className="mb-3 text-small font-semibold uppercase tracking-wide text-text-secondary">
            Próximo desafio
          </h3>
          <Link
            href={`/quiz/${nextQuiz.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-black/5 bg-surface-v2 p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="font-semibold text-ink">{nextQuiz.title}</span>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-brand-dark transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      )}

      {/* 7. Conteúdos relacionados */}
      {relatedQuizzes.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-small font-semibold uppercase tracking-wide text-text-secondary">
            Conteúdos relacionados
          </h3>
          <div className="flex flex-col gap-2">
            {relatedQuizzes.map((q) => (
              <CompactQuizCard key={q.id} quiz={q} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 font-semibold text-white transition-[filter] hover:brightness-90"
        >
          Ver mais quizzes
        </Link>
      </div>
    </div>
  );
}
