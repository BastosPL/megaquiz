import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getQuizBySlug, allQuizzes } from "@/lib/quizzes";
import QuizEngine from "@/components/QuizEngine";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allQuizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};

  return {
    title: quiz.title,
    description: quiz.description,
    openGraph: {
      title: `${quiz.emoji} ${quiz.title}`,
      description: quiz.description,
      type: "website",
    },
  };
}

export default async function QuizPage({ params }: Props) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quiz header */}
      <div className="text-center mb-8">
        <span className="text-5xl mb-3 block">{quiz.emoji}</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-2">
          {quiz.title}
        </h1>
        <p className="text-text-light max-w-md mx-auto">{quiz.description}</p>
        <div className="flex items-center justify-center gap-4 mt-3 text-sm text-text-light">
          <span>
            {quiz.type === "trivia" ? "🎯 Trivia" : "🧠 Personalidade"}
          </span>
          <span>📝 {quiz.questions.length} perguntas</span>
          <span>🎮 {quiz.plays.toLocaleString("pt-BR")} plays</span>
        </div>
      </div>

      {/* Quiz engine */}
      <QuizEngine quiz={quiz} />
    </div>
  );
}
