import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LayoutGrid, ListChecks } from "lucide-react";
import { CATEGORIES } from "@/lib/types";
import { getQuizzesByCategory } from "@/lib/quizzes";
import { CategoryIcon } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";

export const metadata: Metadata = {
  title: "Todas as Categorias",
  description: "Explore todas as categorias de quizzes do MegaQuiz",
  alternates: {
    canonical: "/categorias",
  },
};

export default function CategoriasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <section className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <LayoutGrid className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Categorias</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Escolha um assunto e comece a jogar. Trivia com explicações e
          quizzes de personalidade, todos em português.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => {
          const quizCount = getQuizzesByCategory(cat.id).length;
          const safeColor = accessibleForeground(cat.color);
          return (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="group flex flex-col gap-4 rounded-2xl border border-black/5 bg-surface-v2 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${cat.color}14` }}
              >
                <CategoryIcon
                  category={cat.id}
                  className="h-7 w-7"
                  style={{ color: safeColor }}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <div className="flex-1">
                <h2 className="text-h3 font-semibold text-ink transition-colors group-hover:text-brand-dark">
                  {cat.name}
                </h2>
                <p className="mt-1.5 text-small text-text-secondary">
                  {cat.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-black/5 pt-4 text-caption text-text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <ListChecks className="h-4 w-4" aria-hidden="true" />
                  {quizCount} quiz{quizCount !== 1 ? "zes" : ""}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand-dark">
                  Explorar
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
