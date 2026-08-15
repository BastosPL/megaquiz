import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ListChecks, Sparkles } from "lucide-react";
import { allQuizzes, getQuizzesByCategory } from "@/lib/quizzes";
import { CATEGORIES } from "@/lib/types";
import { CategoryIcon } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";
import StandardQuizCard from "@/components/StandardQuizCard";
import CompactQuizCard from "@/components/CompactQuizCard";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);
  if (!category) return {};

  return {
    title: `Quizzes de ${category.name}`,
    description: category.description,
    alternates: {
      canonical: `/categoria/${id}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);
  if (!category) notFound();

  const quizzes = getQuizzesByCategory(id);
  const safeColor = accessibleForeground(category.color);
  const otherCategories = CATEGORIES.filter((c) => c.id !== category.id);
  const continueExplorando = allQuizzes
    .filter((q) => q.category !== category.id)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      {/* Tema + contexto */}
      <section className="mx-auto mb-12 max-w-2xl text-center">
        <span
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${category.color}14` }}
        >
          <CategoryIcon
            category={category.id}
            className="h-8 w-8"
            style={{ color: safeColor }}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
        <h1 className="text-h1 font-bold text-ink">{category.name}</h1>
        <p className="mx-auto mt-3 text-body-lg text-text-secondary">
          {category.description}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-small text-text-secondary">
          {category.longDescription}
        </p>
      </section>

      {/* Quizzes disponíveis */}
      {quizzes.length > 0 ? (
        <section className="mb-16">
          <div className="mb-5 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-brand-dark" aria-hidden="true" />
            <h2 className="text-h2 font-bold text-ink">
              Quizzes de {category.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <StandardQuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mb-16 rounded-2xl border border-black/5 bg-surface-v2 px-6 py-16 text-center shadow-sm">
          <Sparkles className="mx-auto mb-4 h-10 w-10 text-text-secondary" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="text-h3 font-semibold text-ink">Em breve</h2>
          <p className="mx-auto mt-2 max-w-sm text-small text-text-secondary">
            Estamos preparando novos quizzes para esta categoria. Enquanto
            isso, explore outros assuntos.
          </p>
          <Link
            href="/categorias"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
          >
            Ver outras categorias
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      )}

      {/* Categorias relacionadas */}
      <section className="mb-16">
        <div className="mb-5 flex items-center gap-2">
          <Compass className="h-5 w-5 text-brand-dark" aria-hidden="true" />
          <h2 className="text-h2 font-bold text-ink">Categorias relacionadas</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {otherCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-black/5 bg-surface-v2 px-3 py-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: `${cat.color}14` }}
              >
                <CategoryIcon
                  category={cat.id}
                  className="h-5 w-5"
                  style={{ color: accessibleForeground(cat.color) }}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span className="text-small font-semibold text-ink transition-colors group-hover:text-brand-dark">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Continue explorando */}
      {continueExplorando.length > 0 && (
        <section>
          <div className="mb-5 flex items-center gap-2">
            <Compass className="h-5 w-5 text-brand-dark" aria-hidden="true" />
            <h2 className="text-h2 font-bold text-ink">Continue explorando</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {continueExplorando.map((quiz) => (
              <CompactQuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
