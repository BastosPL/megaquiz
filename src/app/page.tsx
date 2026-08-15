import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Flame, Users, Newspaper, Compass } from "lucide-react";
import FeaturedQuizCard from "@/components/FeaturedQuizCard";
import StandardQuizCard from "@/components/StandardQuizCard";
import CompactQuizCard from "@/components/CompactQuizCard";
import { CategoryIcon } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";
import {
  allQuizzes,
  getFeaturedQuizzes,
  getDailyChallenge,
} from "@/lib/quizzes";
import { CATEGORIES } from "@/lib/types";
import { allArticles } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = getFeaturedQuizzes();
  const dailyChallenge = getDailyChallenge();

  const emAlta = featured
    .filter((q) => q.slug !== dailyChallenge.slug)
    .slice(0, 3);

  const escolhasDaEquipe = featured
    .filter(
      (q) => q.slug !== dailyChallenge.slug && !emAlta.some((e) => e.slug === q.slug)
    )
    .slice(0, 3);

  const jaExibidos = new Set([
    dailyChallenge.slug,
    ...emAlta.map((q) => q.slug),
    ...escolhasDaEquipe.map((q) => q.slug),
  ]);
  const continueExplorando = allQuizzes
    .filter((q) => !jaExibidos.has(q.slug))
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      {/* 1. Hero — espaço negativo, CTA único, sem grade de cards */}
      <section className="mx-auto max-w-2xl py-10 text-center sm:py-16">
        <h1 className="text-display font-extrabold text-ink">
          Descubra, desafie e{" "}
          <span className="text-brand-dark">compartilhe</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
          Quizzes de trivia e personalidade em português. Teste seus
          conhecimentos, descubra seu perfil e desafie seus amigos.
        </p>
        <Link
          href={`/quiz/${dailyChallenge.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3.5 text-body-lg font-semibold text-white transition-[filter] hover:brightness-90"
        >
          Jogar o desafio de hoje
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>

      {/* 2. Desafio do Dia */}
      <section className="mt-6 mb-16">
        <SectionHeading icon={CalendarDays} title="Desafio do Dia" />
        <FeaturedQuizCard
          quiz={dailyChallenge}
          eyebrow="Desafio do Dia"
          eyebrowIcon={CalendarDays}
        />
      </section>

      {/* 3. Em Alta */}
      {emAlta.length > 0 && (
        <section className="mb-16">
          <SectionHeading icon={Flame} title="Em Alta" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {emAlta.map((quiz) => (
              <StandardQuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      )}

      {/* 4. Explore por Assunto */}
      <section className="mb-16">
        <SectionHeading icon={Compass} title="Explore por Assunto" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-black/5 bg-surface-v2 px-3 py-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: `${cat.color}14` }}
              >
                <CategoryIcon category={cat.id} className="h-6 w-6" style={{ color: accessibleForeground(cat.color) }} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-small font-semibold text-ink group-hover:text-brand-dark transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Escolhas da Equipe */}
      {escolhasDaEquipe.length > 0 && (
        <section className="mb-16">
          <SectionHeading icon={Users} title="Escolhas da Equipe" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {escolhasDaEquipe.map((quiz) => (
              <StandardQuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      )}

      {/* 6. Artigos */}
      <section className="mb-16">
        <div className="mb-5 flex items-center justify-between">
          <SectionHeading icon={Newspaper} title="Artigos" noMargin />
          <Link href="/blog" className="text-small font-semibold text-brand-dark hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {allArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-2xl border border-black/5 bg-surface-v2 p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-caption font-semibold uppercase tracking-wide text-brand-dark">
                {article.category}
              </span>
              <h3 className="mt-2 mb-2 text-small font-bold leading-snug text-ink">
                {article.title}
              </h3>
              <p className="text-caption text-text-secondary line-clamp-2">
                {article.excerpt}
              </p>
              <span className="mt-2 block text-caption text-text-secondary">
                {article.readTime} min de leitura
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Continue Explorando */}
      {continueExplorando.length > 0 && (
        <section>
          <SectionHeading icon={Compass} title="Continue Explorando" />
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

function SectionHeading({
  icon: Icon,
  title,
  noMargin,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  noMargin?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${noMargin ? "" : "mb-5"}`}>
      <Icon className="h-5 w-5 text-brand-dark" aria-hidden="true" />
      <h2 className="text-h2 font-bold text-ink">{title}</h2>
    </div>
  );
}
