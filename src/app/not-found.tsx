import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center sm:py-28">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft">
        <Compass className="h-8 w-8 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h1 className="text-h1 font-bold text-ink">Página não encontrada</h1>
      <p className="mt-3 text-body-lg text-text-secondary">
        Essa página não existe ou foi removida. Mas temos mais de 30 quizzes
        esperando por você.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Voltar para o início
        </Link>
        <Link
          href="/categorias"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-small font-semibold text-ink transition-colors hover:bg-brand-soft/40"
        >
          Explorar categorias
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
