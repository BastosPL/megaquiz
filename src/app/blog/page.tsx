import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { allArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

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
  const [firstArticle, ...restArticles] = allArticles;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <section className="mx-auto mb-10 max-w-2xl text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <Newspaper className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Blog do MegaQuiz</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Curiosidades, cultura, esportes e ciência — leia nossos artigos e
          depois teste seus conhecimentos nos quizzes.
        </p>
      </section>

      {firstArticle && (
        <section className="mb-10">
          <ArticleCard article={firstArticle} featured />
        </section>
      )}

      {restArticles.length > 0 && (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {restArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      )}
    </div>
  );
}
