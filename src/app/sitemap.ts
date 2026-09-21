import type { MetadataRoute } from "next";
import { allQuizzes } from "@/lib/quizzes";
import { CATEGORIES } from "@/lib/types";
import { allArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://megaquiz.app.br";

  const quizPages = allQuizzes.map((quiz) => ({
    url: `${baseUrl}/quiz/${quiz.slug}`,
    lastModified: new Date(quiz.lastReviewedAt ?? quiz.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const latestQuizDate = allQuizzes.reduce((latest, q) => {
    const d = new Date(q.lastReviewedAt ?? q.createdAt);
    return d > latest ? d : latest;
  }, new Date(0));

  const latestArticleDate = allArticles.reduce((latest, a) => {
    const d = new Date(a.lastReviewedAt ?? a.date);
    return d > latest ? d : latest;
  }, new Date(0));

  const latestContentDate =
    latestArticleDate > latestQuizDate ? latestArticleDate : latestQuizDate;

  const categoryPages = CATEGORIES.map((cat) => {
    const catQuizzes = allQuizzes.filter((q) => q.category === cat.id);
    const latestInCat = catQuizzes.reduce((latest, q) => {
      const d = new Date(q.lastReviewedAt ?? q.createdAt);
      return d > latest ? d : latest;
    }, new Date(0));
    return {
      url: `${baseUrl}/categoria/${cat.id}`,
      lastModified: latestInCat.getTime() > 0 ? latestInCat : latestContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: latestContentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/categorias`,
      lastModified: latestContentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politica-editorial`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...allArticles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.lastReviewedAt ?? article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...quizPages,
    ...categoryPages,
  ];
}
