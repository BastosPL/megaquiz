import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";
import { ArticleTopicIcon } from "@/lib/icons";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface ArticleCardProps {
  article: Article;
  /** Card de destaque, maior, usado no topo do /blog. */
  featured?: boolean;
}

/**
 * Card editorial — deliberadamente diferente da anatomia dos QuizCards
 * (sem painel de ícone colorido, sem CTA "Jogar"). O usuário deve
 * reconhecer de imediato que está diante de um artigo, não de um quiz.
 * SPEC Fase 2, secao 2: "usuário distingue quiz de artigo imediatamente".
 */
export default function ArticleCard({ article, featured }: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group block overflow-hidden rounded-3xl border border-black/5 bg-surface-v2 p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-10"
      >
        <span className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-wide text-brand-dark">
          <ArticleTopicIcon topic={article.category} className="h-4 w-4" aria-hidden="true" />
          {article.category}
        </span>

        <h2 className="mt-3 text-h1 font-bold leading-snug text-ink transition-colors group-hover:text-brand-dark">
          {article.title}
        </h2>

        <p className="mt-3 max-w-2xl text-body-lg text-text-secondary">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-caption text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {article.readTime} min de leitura
          </span>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-brand-dark">
          Ler artigo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-black/5 bg-surface-v2 p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wide text-brand-dark">
        <ArticleTopicIcon topic={article.category} className="h-3.5 w-3.5" aria-hidden="true" />
        {article.category}
      </span>

      <h3 className="text-h3 font-semibold leading-snug text-ink transition-colors group-hover:text-brand-dark line-clamp-2">
        {article.title}
      </h3>

      <p className="flex-1 text-small text-text-secondary line-clamp-3">
        {article.excerpt}
      </p>

      <div className="mt-1 flex items-center justify-between border-t border-black/5 pt-3 text-caption text-text-secondary">
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime} min
          </span>
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand-dark">
          Ler
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
