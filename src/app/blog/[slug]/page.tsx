import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allArticles, getArticleBySlug } from "@/lib/articles";

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

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="mb-6">
        <Link
          href="/blog"
          className="text-primary text-sm font-semibold hover:underline"
        >
          ← Voltar ao Blog
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <span className="text-xs font-semibold text-primary mb-2 block">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-light">
            <span>
              {new Date(article.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readTime} min de leitura</span>
            {article.author && (
              <>
                <span>·</span>
                <span>{article.author}</span>
              </>
            )}
          </div>
        </header>

        <div className="space-y-5 text-text-light leading-relaxed text-base">
          {article.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-text mt-8 mb-3">{section.heading}</h2>
              )}
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        {article.sources && article.sources.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border">
            <h2 className="text-lg font-bold text-text mb-3">Fontes</h2>
            <ul className="space-y-1 text-sm text-text-light">
              {article.sources.map((source, i) => (
                <li key={i}>
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                  {source.organization && <span className="text-text-light/70"> — {source.organization}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(article.author || article.lastReviewedAt) && (
          <div className="mt-4 text-xs text-text-light">
            {article.author && article.authorBio && <p>{article.author} — {article.authorBio}</p>}
            {article.lastReviewedAt && (
              <p className="mt-1">Última revisão: {new Date(article.lastReviewedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            )}
          </div>
        )}

        {article.disclaimer && (
          <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <p className="text-xs text-blue-800 dark:text-blue-200">{article.disclaimer}</p>
          </div>
        )}

        <div className="mt-10 bg-bg-card rounded-2xl border border-border p-6 text-center">
          <h2 className="text-lg font-bold text-text mb-2">
            🧩 Teste seus conhecimentos!
          </h2>
          <p className="text-text-light text-sm mb-4">
            Gostou do artigo? Faça o quiz relacionado e descubra o quanto você
            sabe sobre o assunto.
          </p>
          <Link
            href={`/quiz/${article.relatedQuizSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Jogar quiz →
          </Link>
        </div>
      </article>

      <div className="mt-10 border-t border-border pt-8">
        <h3 className="text-lg font-bold text-text mb-4">Outros artigos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allArticles
            .filter((a) => a.slug !== article.slug)
            .slice(0, 4)
            .map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="bg-bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors"
              >
                <span className="text-xs font-semibold text-primary">
                  {a.category}
                </span>
                <h4 className="text-sm font-bold text-text mt-1 leading-snug">
                  {a.title}
                </h4>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
