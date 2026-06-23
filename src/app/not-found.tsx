import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <span className="text-7xl block mb-6">🤔</span>
      <h1 className="text-3xl font-extrabold text-text mb-3">
        Página não encontrada
      </h1>
      <p className="text-text-light mb-8">
        Essa página não existe ou foi removida. Mas temos mais de 30 quizzes
        esperando por você!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
      >
        🧩 Voltar para os quizzes
      </Link>
    </div>
  );
}
