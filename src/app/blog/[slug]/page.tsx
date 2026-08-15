import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock,
  ExternalLink,
  Info,
  Puzzle,
  UserRound,
} from "lucide-react";
import { allArticles, getArticleBySlug } from "@/lib/articles";
import { ArticleTopicIcon } from "@/lib/icons";
import ArticleCard from "@/components/ArticleCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://megaquiz.app.br/blog/${slug}`,
      siteName: "MegaQuiz",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const articleText = article.content.map((s) => s.text).join(" ");
  const wordCount = articleText.split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.lastReviewedAt || article.date,
    wordCount,
    author: {
      "@type": "Organization",
      name: article.author || "Equipe Editorial MegaQuiz",
      url: "https://megaquiz.app.br/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "MegaQuiz",
      url: "https://megaquiz.app.br",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://megaquiz.app.br/blog/${slug}`,
    },
  };

  const otherArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-dark hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar ao Blog
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <span className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-wide text-brand-dark">
            <ArticleTopicIcon topic={article.category} className="h-4 w-4" aria-hidden="true" />
            {article.category}
          </span>
          <h1 className="mt-3 text-h1 font-bold leading-tight text-ink">
            {article.title}
          </h1>
          <p className="mt-3 text-body-lg text-text-secondary">
            {article.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-black/5 pt-4 text-small text-text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {new Date(article.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {article.readTime} min de leitura
            </span>
            {article.author && (
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4" aria-hidden="true" />
                {article.author}
              </span>
            )}
          </div>
        </header>

        <div className="space-y-5 text-body leading-relaxed text-ink">
          {article.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="mb-3 mt-9 text-h3 font-bold text-ink">
                  {section.heading}
                </h2>
              )}
              <p className="text-text-secondary">{section.text}</p>
            </div>
          ))}
        </div>

        {article.disclaimer && (
          <div className="mt-6 flex gap-3 rounded-xl border border-black/5 bg-brand-soft/40 p-4">
            <Info className="h-5 w-5 flex-shrink-0 text-brand-dark" aria-hidden="true" />
            <p className="text-small text-text-secondary">{article.disclaimer}</p>
          </div>
        )}

        {article.sources && article.sources.length > 0 && (
          <details className="group mt-8 rounded-xl border border-black/10" open>
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-small font-semibold text-ink">
              Fontes
              <ChevronDown className="h-4 w-4 text-text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <ul className="flex flex-col gap-2 border-t border-black/10 p-4 pt-3 text-small text-text-secondary">
              {article.sources.map((source, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-brand-dark hover:underline"
                    >
                      {source.label}
                      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{source.label}</span>
                  )}
                  {source.organization && (
                    <span className="text-text-secondary/70">— {source.organization}</span>
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}

        {(article.author || article.lastReviewedAt) && (
          <div className="mt-6 flex items-start gap-3 border-t border-black/5 pt-6">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-soft">
              <UserRound className="h-4 w-4 text-brand-dark" aria-hidden="true" />
            </span>
            <div className="text-caption text-text-secondary">
              {article.author && (
                <p>
                  <span className="font-semibold text-ink">{article.author}</span>
                  {article.authorBio ? ` — ${article.authorBio}` : ""}
                </p>
              )}
              {article.lastReviewedAt && (
                <p className="mt-1">
                  Última revisão:{" "}
                  {new Date(article.lastReviewedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-black/5 bg-surface-v2 p-6 text-center shadow-sm">
          <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft">
            <Puzzle className="h-5 w-5 text-brand-dark" aria-hidden="true" />
          </span>
          <h2 className="text-h3 font-bold text-ink">Teste seus conhecimentos</h2>
          <p className="mx-auto mt-2 max-w-sm text-small text-text-secondary">
            Gostou do artigo? Faça o quiz relacionado e descubra o quanto você
            sabe sobre o assunto.
          </p>
          <Link
            href={`/quiz/${article.relatedQuizSlug}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
          >
            Jogar quiz
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      {otherArticles.length > 0 && (
        <div className="mt-12 border-t border-black/5 pt-10">
          <h3 className="mb-5 text-small font-semibold uppercase tracking-wide text-text-secondary">
            Outros artigos
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
