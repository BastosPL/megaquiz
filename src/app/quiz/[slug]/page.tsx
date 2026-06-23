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
      url: `https://megaquiz.app.br/quiz/${slug}`,
      siteName: "MegaQuiz",
    },
    twitter: {
      card: "summary_large_image",
      title: `${quiz.emoji} ${quiz.title}`,
      description: quiz.description,
    },
  };
}

export default async function QuizPage({ params }: Props) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: quiz.title,
    description: quiz.description,
    educationalAlignment: quiz.category,
    numberOfQuestions: quiz.questions.length,
    about: {
      "@type": "Thing",
      name: quiz.tags.join(", "),
    },
    provider: {
      "@type": "Organization",
      name: "MegaQuiz",
      url: "https://megaquiz.app.br",
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        </div>
      </div>

      {/* Quiz engine */}
      <QuizEngine quiz={quiz} />

      {/* Server-rendered quiz content for SEO */}
      <section className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-text mb-4">
          Sobre este quiz: {quiz.title}
        </h2>
        <p className="text-text-light mb-6">
          {quiz.type === "trivia"
            ? `Teste seus conhecimentos com ${quiz.questions.length} perguntas sobre ${quiz.tags.slice(0, 3).join(", ")}. Cada pergunta tem uma resposta correta — quantas você consegue acertar?`
            : `Responda ${quiz.questions.length} perguntas e descubra qual perfil combina mais com você. Um quiz de personalidade sobre ${quiz.tags.slice(0, 3).join(", ")}.`}
        </p>

        <h3 className="text-lg font-semibold text-text mb-3">
          Perguntas deste quiz
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-text-light">
          {quiz.questions.map((q) => (
            <li key={q.id}>{q.text}</li>
          ))}
        </ol>

        {quiz.type === "personality" && quiz.profiles && (
          <>
            <h3 className="text-lg font-semibold text-text mt-6 mb-3">
              Resultados possíveis
            </h3>
            <ul className="space-y-3">
              {quiz.profiles.map((profile) => (
                <li key={profile.id} className="text-text-light">
                  <span className="font-medium text-text">
                    {profile.emoji} {profile.title}
                  </span>{" "}
                  — {profile.description}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-6 p-4 bg-primary/5 rounded-xl">
          <p className="text-sm text-text-light">
            <strong className="text-text">Como jogar:</strong> Clique em
            &quot;Começar Quiz&quot; acima para iniciar.{" "}
            {quiz.type === "trivia"
              ? "Selecione a resposta que você acredita ser a correta. Você tem 3 vidas — a cada erro, perde uma."
              : "Escolha a opção que mais combina com você em cada pergunta. No final, descubra seu perfil!"}
          </p>
        </div>
      </section>
    </div>
  );
}
