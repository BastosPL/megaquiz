import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getQuizzesByCategory } from "@/lib/quizzes";
import { CATEGORIES } from "@/lib/types";
import QuizCard from "@/components/QuizCard";

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

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-5xl mb-3 block">{category.emoji}</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-2">
          Quizzes de {category.name}
        </h1>
        <p className="text-text-light mb-3">{category.description}</p>
        <p className="text-text-light text-sm max-w-2xl mx-auto">
          {category.longDescription}
        </p>
      </div>

      {quizzes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="text-5xl mb-4 block">🔜</span>
          <h2 className="text-xl font-bold text-text mb-2">Em breve!</h2>
          <p className="text-text-light">
            Estamos preparando quizzes incríveis para esta categoria.
          </p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            Ver outros quizzes
          </a>
        </div>
      )}
    </div>
  );
}
