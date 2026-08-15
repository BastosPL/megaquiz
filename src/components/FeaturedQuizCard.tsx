import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowRight, ListChecks } from "lucide-react";
import type { Quiz } from "@/lib/types";
import { CategoryIcon, QuizTypeIcon, getQuizTypeLabel } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";

interface FeaturedQuizCardProps {
  quiz: Quiz;
  /** Rótulo do contexto de destaque, ex: "Desafio do Dia". */
  eyebrow?: string;
  eyebrowIcon?: ComponentType<{ className?: string }>;
}

/**
 * Card de maior presença visual — usado para Desafio do Dia e Escolha da
 * Equipe. Sem gradiente, sem glow: um painel de cor plana em baixa opacidade
 * como fundo do ícone e um CTA único e dominante.
 */
export default function FeaturedQuizCard({
  quiz,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
}: FeaturedQuizCardProps) {
  const safeColor = accessibleForeground(quiz.color);

  return (
    <Link
      href={`/quiz/${quiz.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-black/5 bg-surface-v2 shadow-sm transition-shadow hover:shadow-lg sm:grid-cols-[minmax(0,0.9fr)_1.1fr]"
    >
      <div
        className="relative flex min-h-48 items-center justify-center p-8 sm:min-h-full"
        style={{ backgroundColor: `${quiz.color}14` }}
      >
        <CategoryIcon
          category={quiz.category}
          className="h-20 w-20 transition-transform duration-300 group-hover:scale-110"
          style={{ color: safeColor }}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-entertainment/15 px-3 py-1 text-label font-semibold text-ink">
            {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
            {eyebrow}
          </span>
        )}

        <h3 className="text-h2 font-bold text-ink leading-snug">
          {quiz.title}
        </h3>

        <p className="text-body text-text-secondary line-clamp-2">
          {quiz.description}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-4 text-caption text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <QuizTypeIcon type={quiz.type} className="h-4 w-4" aria-hidden="true" />
            {getQuizTypeLabel(quiz.type)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            {quiz.questions.length} perguntas
          </span>
        </div>

        <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-body font-semibold text-white transition-[filter] group-hover:brightness-90">
          Jogar agora
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
