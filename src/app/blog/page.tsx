import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre curiosidades, esportes, psicologia, saúde e cultura. Leia e descubra fatos surpreendentes no blog do MegaQuiz.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | MegaQuiz",
    description:
      "Artigos sobre curiosidades, esportes, psicologia, saúde e cultura no MegaQuiz.",
    type: "website",
    url: "https://megaquiz.app.br/blog",
    siteName: "MegaQuiz",
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
          📝 Blog do MegaQuiz
        </h1>
        <p className="text-text-light text-lg max-w-xl mx-auto">
          Curiosidades, cultura, esportes e ciência — leia nossos artigos e
          depois teste seus conhecimentos nos quizzes!
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="bg-bg-card rounded-2xl border border-border p-5 hover:border-primary transition-colors flex flex-col"
          >
            <span className="text-xs font-semibold text-primary mb-2">
              {article.category}
            </span>
            <h2 className="text-lg font-bold text-text mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="text-text-light text-sm flex-1 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-text-light">
              <span>{article.readTime} min de leitura</span>
              <span>
                {new Date(article.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
