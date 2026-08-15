import Link from "next/link";
import { ArrowRight, ListChecks } from "lucide-react";
import type { Quiz } from "@/lib/types";
import { CategoryIcon, QuizTypeIcon, getQuizTypeLabel } from "@/lib/icons";
import { CATEGORIES } from "@/lib/types";
import { accessibleForeground } from "@/lib/color";

/**
 * Card padrão de exploração — substitui o QuizCard.tsx antigo nas novas
 * seções da homepage. Mesma anatomia do FeaturedQuizCard em escala menor:
 * painel de ícone, categoria, título, meta, CTA.
 */
export default function StandardQuizCard({ quiz }: { quiz: Quiz }) {
  const categoryName = CATEGORIES.find((c) => c.id === quiz.category)?.name ?? quiz.category;
  const safeColor = accessibleForeground(quiz.color);

  return (
    <Link
      href={`/quiz/${quiz.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-surface-v2 shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="flex h-32 items-center justify-center"
        style={{ backgroundColor: `${quiz.color}14` }}
      >
        <CategoryIcon
          category={quiz.category}
          className="h-12 w-12"
          style={{ color: safeColor }}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-caption font-semibold uppercase tracking-wide" style={{ color: safeColor }}>
          {categoryName}
        </span>

        <h3 className="text-h3 font-semibold text-ink leading-snug line-clamp-2 group-hover:text-brand-dark transition-colors">
          {quiz.title}
        </h3>

        <p className="text-small text-text-secondary line-clamp-2 flex-1">
          {quiz.description}
        </p>

        <div className="mt-1 flex items-center justify-between text-caption text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <QuizTypeIcon type={quiz.type} className="h-4 w-4" aria-hidden="true" />
            {getQuizTypeLabel(quiz.type)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            {quiz.questions.length}
          </span>
        </div>

        <span className="mt-1 inline-flex items-center gap-1 text-small font-semibold text-brand-dark">
          Jogar
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
