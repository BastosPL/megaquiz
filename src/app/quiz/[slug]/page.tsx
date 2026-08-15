import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ListChecks } from "lucide-react";
import { getQuizBySlug, allQuizzes } from "@/lib/quizzes";
import QuizEngine from "@/components/QuizEngine";
import { CategoryIcon, QuizTypeIcon, getQuizTypeLabel } from "@/lib/icons";
import { accessibleForeground } from "@/lib/color";

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
    alternates: {
      canonical: `/quiz/${slug}`,
    },
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
        <span
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${quiz.color}14` }}
        >
          <CategoryIcon category={quiz.category} className="h-8 w-8" style={{ color: accessibleForeground(quiz.color) }} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-extrabold text-ink mb-2">
          {quiz.title}
        </h1>
        <p className="text-body-lg text-text-secondary max-w-md mx-auto">{quiz.description}</p>
        {quiz.introText && (
          <p className="text-text-secondary text-small mt-3 max-w-lg mx-auto italic">
            {quiz.introText}
          </p>
        )}
        <div className="flex items-center justify-center gap-4 mt-3 text-small text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <QuizTypeIcon type={quiz.type} className="h-4 w-4" aria-hidden="true" />
            {getQuizTypeLabel(quiz.type)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            {quiz.questions.length} perguntas
          </span>
        </div>
      </div>

      {quiz.disclaimer && (
        <div className="max-w-2xl mx-auto mb-6 p-4 rounded-xl bg-brand-soft/40 border border-brand-bright/25" role="note" aria-label="Aviso">
          <p className="text-sm text-ink">
            {quiz.disclaimer}
          </p>
        </div>
      )}

      {/* Quiz engine */}
      <QuizEngine quiz={quiz} />

      {/* Server-rendered quiz content for SEO */}
      <section className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-h2 font-bold text-ink mb-4">
          Sobre este quiz: {quiz.title}
        </h2>
        <p className="text-text-secondary mb-6">
          {quiz.type === "trivia"
            ? `Este quiz de trivia reúne ${quiz.questions.length} perguntas sobre ${quiz.tags.slice(0, 3).join(", ")}. Você começa com 3 vidas e perde uma a cada erro — se zerar, é game over. Depois de cada resposta, uma explicação revela o contexto por trás da alternativa correta.`
            : `Neste quiz de personalidade, você responde ${quiz.questions.length} perguntas sobre ${quiz.tags.slice(0, 3).join(", ")}. Cada resposta acumula pontos para perfis diferentes, e no final o quiz indica qual deles mais combina com você.`}
        </p>

        <h3 className="text-h3 font-semibold text-ink mb-3">
          Perguntas deste quiz
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-text-secondary">
          {quiz.questions.map((q) => (
            <li key={q.id}>{q.text}</li>
          ))}
        </ol>

        {quiz.type === "personality" && quiz.profiles && (
          <>
            <h3 className="text-h3 font-semibold text-ink mt-6 mb-3">
              Resultados possíveis
            </h3>
            <ul className="space-y-3">
              {quiz.profiles.map((profile) => (
                <li key={profile.id} className="text-text-secondary">
                  <span className="font-medium text-ink">{profile.title}</span>{" "}
                  — {profile.description}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-6 p-4 bg-brand-soft/40 rounded-xl">
          <p className="text-sm text-text-secondary">
            <strong className="text-ink">Como jogar:</strong> Clique em
            &quot;Começar Quiz&quot; acima para iniciar.{" "}
            {quiz.type === "trivia"
              ? "Selecione a resposta que você acredita ser a correta. Você tem 3 vidas — a cada erro, perde uma."
              : "Escolha a opção que mais combina com você em cada pergunta. No final, descubra seu perfil!"}
          </p>
        </div>

        {quiz.sources && quiz.sources.length > 0 && (
          <div className="mt-8">
            <h3 className="text-h3 font-semibold text-ink mb-3">Fontes</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              {quiz.sources.map((source, i) => (
                <li key={i}>
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:underline">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                  {source.organization && <span className="text-text-secondary/70"> — {source.organization}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(quiz.author || quiz.lastReviewedAt) && (
          <div className="mt-6 pt-4 border-t border-black/10 text-xs text-text-secondary">
            {quiz.author && <p>{quiz.author}{quiz.authorBio ? ` — ${quiz.authorBio}` : ''}</p>}
            {quiz.lastReviewedAt && (
              <p className="mt-1">Última revisão: {new Date(quiz.lastReviewedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
