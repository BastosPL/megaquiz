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
    title: `${article.title} | MegaQuiz`,
    description: article.excerpt,
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
          </div>
        </header>

        <div className="space-y-5 text-text-light leading-relaxed text-base">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

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
