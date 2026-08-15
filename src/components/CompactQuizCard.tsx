import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Quiz } from "@/lib/types";
import { CategoryIcon } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";

/**
 * Card compacto em linha — usado em "Continue Explorando", relacionados e
 * listas secundárias. Sem imagem grande, sem botão próprio: a linha toda é
 * o alvo de clique.
 */
export default function CompactQuizCard({ quiz }: { quiz: Quiz }) {
  const safeColor = accessibleForeground(quiz.color);

  return (
    <Link
      href={`/quiz/${quiz.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-black/5 bg-surface-v2 p-3 transition-colors hover:bg-brand-soft/40"
    >
      <span
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${quiz.color}14` }}
      >
        <CategoryIcon category={quiz.category} className="h-5 w-5" style={{ color: safeColor }} strokeWidth={1.75} aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-small font-semibold text-ink leading-snug line-clamp-1 group-hover:text-brand-dark transition-colors">
          {quiz.title}
        </span>
        <span className="block text-caption text-text-secondary">
          {quiz.questions.length} perguntas
        </span>
      </span>

      <ChevronRight className="h-4 w-4 flex-shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
