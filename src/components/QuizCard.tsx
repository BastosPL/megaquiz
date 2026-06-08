import Link from "next/link";
import type { Quiz } from "@/lib/types";

function formatPlays(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

const CARD_PATTERNS: Record<string, string> = {
  "copa-do-mundo": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  personalidade: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  "series-filmes": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.12' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
  "conhecimentos-gerais": `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.12' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
  esportes: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  carreira: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20h20v20H20zM0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
};

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  const pattern = CARD_PATTERNS[quiz.category] || CARD_PATTERNS["conhecimentos-gerais"];

  return (
    <Link
      href={`/quiz/${quiz.slug}`}
      className="group block bg-bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Cover com gradiente + pattern + emoji */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${quiz.color}, ${quiz.color}dd, ${quiz.color}99)`,
          backgroundImage: `${pattern}, linear-gradient(135deg, ${quiz.color}, ${quiz.color}dd, ${quiz.color}99)`,
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />

        {/* Emoji grande */}
        <span className="relative text-7xl group-hover:scale-115 transition-transform duration-300 drop-shadow-lg">
          {quiz.emoji}
        </span>

        {/* Badge de tipo no canto */}
        <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
          {quiz.type === "trivia" ? "🎯 Trivia" : "🧠 Personalidade"}
        </span>

        {/* Quantidade de perguntas no canto */}
        <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-black/20 text-white backdrop-blur-sm">
          {quiz.questions.length} perguntas
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-text text-base leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
          {quiz.title}
        </h3>

        <p className="text-sm text-text-light line-clamp-2 mb-3">
          {quiz.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-light">
            🎮 {formatPlays(quiz.plays)} plays
          </span>
          <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full bg-primary group-hover:bg-primary-dark transition-colors">
            Jogar →
          </span>
        </div>
      </div>
    </Link>
  );
}
