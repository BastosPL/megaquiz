import type { Metadata } from "next";
import QuizCard from "@/components/QuizCard";
import CategoryBadge from "@/components/CategoryBadge";
import { allQuizzes, getFeaturedQuizzes } from "@/lib/quizzes";
import { CATEGORIES } from "@/lib/types";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = getFeaturedQuizzes();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
          🧩 Descubra, Desafie e{" "}
          <span className="text-primary">Compartilhe!</span>
        </h1>
        <p className="text-text-light text-lg max-w-xl mx-auto mb-4">
          Quizzes de trivia e personalidade em português. Teste seus
          conhecimentos, descubra seu perfil e desafie seus amigos!
        </p>
        <p className="text-text-light text-sm max-w-2xl mx-auto">
          Mais de 30 quizzes gratuitos em 6 categorias: Copa do Mundo 2026,
          personalidade, séries e filmes, conhecimentos gerais, esportes e
          carreira. Perguntas originais com explicações e fontes — jogue,
          aprenda e compartilhe com seus amigos.
        </p>
      </section>

      {/* Categorias */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text">Categorias</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <CategoryBadge key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Quizzes em Destaque */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text">🔥 Em Destaque</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>

      {/* Todos os Quizzes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text">Todos os Quizzes</h2>
          <span className="text-sm text-text-light">
            {allQuizzes.length} quizzes
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>
    </div>
  );
}
