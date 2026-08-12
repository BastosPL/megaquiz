"use client";

import { useState } from "react";
import type { Quiz, QuizResult } from "@/lib/types";
import { getAffiliateLink } from "@/lib/affiliate-links";

interface QuizResultProps {
  quiz: Quiz;
  result: QuizResult;
  onRestart: () => void;
}

export default function QuizResultView({
  quiz,
  result,
  onRestart,
}: QuizResultProps) {
  const [copied, setCopied] = useState(false);
  const isTrivia = quiz.type === "trivia";

  const affiliate =
    !isTrivia && result.profile
      ? getAffiliateLink(quiz.id, result.profile.id)
      : null;

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const quizUrl = `${siteUrl}/quiz/${quiz.slug}`;

  const shareMessage = isTrivia
    ? `🧩 Acertei ${result.score}/${result.totalQuestions} no quiz "${quiz.title}"!\n\nConsegue me superar? Jogue agora:\n${quizUrl}`
    : `🧩 Fiz o quiz "${quiz.title}" e meu resultado foi: ${result.profile?.title} ${result.profile?.emoji}!\n\nDescubra o seu:\n${quizUrl}`;

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

  const getScoreEmoji = () => {
    if (!result.percentage) return "🎯";
    if (result.percentage >= 90) return "🏆";
    if (result.percentage >= 70) return "🔥";
    if (result.percentage >= 50) return "👍";
    return "💪";
  };

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

  return (
    <div className="max-w-lg mx-auto animate-slide-up">
      {/* Result Card */}
      <div
        className="rounded-2xl overflow-hidden shadow-xl"
        style={{ backgroundColor: `${quiz.color}08` }}
      >
        {/* Header colorido */}
        <div
          className="p-6 text-center text-white"
          style={{ backgroundColor: quiz.color }}
        >
          <span className="text-5xl block mb-3">
            {isTrivia ? getScoreEmoji() : result.profile?.emoji}
          </span>
          <h2 className="text-2xl font-extrabold mb-1">
            {isTrivia
              ? `${result.score}/${result.totalQuestions}`
              : result.profile?.title}
          </h2>
          {isTrivia && (
            <p className="text-white/80 text-sm">{getScoreMessage()}</p>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {!isTrivia && result.profile && (
            <p className="text-text-light text-center mb-4 leading-relaxed">
              {result.profile.description}
            </p>
          )}

          {quiz.disclaimerResult && (
            <p className="text-xs text-center text-text-light/70 mb-4 italic">
              {quiz.disclaimerResult}
            </p>
          )}

          {quiz.methodologyNote && !isTrivia && (
            <div className="mb-4 p-4 rounded-xl bg-bg border border-border">
              <p className="text-sm text-text-light whitespace-pre-line">{quiz.methodologyNote}</p>
            </div>
          )}

          {/* Affiliate CTA */}
          {affiliate && (
            <div className="mb-4">
              <p className="text-xs text-text-light text-center mb-1 opacity-70">Publicidade</p>
              <a
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="block p-4 rounded-xl border-2 border-dashed text-center transition-all hover:scale-[1.02]"
                style={{ borderColor: quiz.color, backgroundColor: `${quiz.color}10` }}
              >
                <p className="text-sm text-text-light mb-1">
                  Vista a camisa do seu craque!
                </p>
                <p className="font-bold text-text text-lg">
                  🛒 {affiliate.label}
                </p>
                {affiliate.price && (
                  <p className="text-sm font-semibold mt-1" style={{ color: quiz.color }}>
                    A partir de {affiliate.price} na Shopee
                  </p>
                )}
              </a>
            </div>
          )}

          {/* Share buttons */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-text text-center">
              Compartilhe seu resultado!
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Compartilhar no WhatsApp
            </a>

            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Compartilhar no X
            </a>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-border text-text font-semibold hover:bg-bg transition-colors"
            >
              {copied ? (
                <>
                  <span>✓</span> Link copiado!
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copiar link
                </>
              )}
            </button>
          </div>

          {/* Restart */}
          <div className="mt-6 text-center">
            <button
              onClick={onRestart}
              className="text-sm text-primary hover:underline font-medium"
            >
              🔄 Jogar novamente
            </button>
          </div>
        </div>
      </div>

      {/* CTA para mais quizzes */}
      <div className="mt-6 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          🧩 Ver mais quizzes
        </a>
      </div>
    </div>
  );
}
