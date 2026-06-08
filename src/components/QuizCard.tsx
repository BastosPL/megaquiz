import Link from "next/link";
import type { Quiz } from "@/lib/types";

function formatPlays(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Link
      href={`/quiz/${quiz.slug}`}
      className="group block bg-bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div
        className="h-36 flex items-center justify-center text-6xl"
        style={{ backgroundColor: `${quiz.color}15` }}
      >
        <span className="group-hover:scale-110 transition-transform duration-200">
          {quiz.emoji}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: quiz.color }}
          >
            {quiz.type === "trivia" ? "Trivia" : "Personalidade"}
          </span>
          <span className="text-xs text-text-light">
            {quiz.questions.length} perguntas
          </span>
        </div>

        <h3 className="font-bold text-text leading-snug mb-1 group-hover:text-primary transition-colors">
          {quiz.title}
        </h3>

        <p className="text-sm text-text-light line-clamp-2 mb-3">
          {quiz.description}
        </p>

        <div className="flex items-center justify-between text-xs text-text-light">
          <span>🎮 {formatPlays(quiz.plays)} plays</span>
          <span className="text-primary font-medium group-hover:underline">
            Jogar →
          </span>
        </div>
      </div>
    </Link>
  );
}
