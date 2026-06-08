import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/types";
import { getQuizzesByCategory } from "@/lib/quizzes";

export const metadata: Metadata = {
  title: "Todas as Categorias",
  description: "Explore todas as categorias de quizzes do MegaQuiz",
};

export default function CategoriasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-2">
          Todas as Categorias
        </h1>
        <p className="text-text-light">
          Escolha uma categoria e comece a jogar!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => {
          const quizCount = getQuizzesByCategory(cat.id).length;
          return (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="group block p-6 bg-bg-card border border-border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-4xl block mb-3">{cat.emoji}</span>
              <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-1">
                {cat.name}
              </h2>
              <p className="text-sm text-text-light mb-3">{cat.description}</p>
              <span className="text-xs font-medium text-primary">
                {quizCount} quiz{quizCount !== 1 ? "zes" : ""} →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
