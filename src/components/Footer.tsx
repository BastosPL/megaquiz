"use client";

import Link from "next/link";
import { Puzzle, Settings2 } from "lucide-react";
import { CATEGORIES } from "@/lib/types";
import { getFeaturedQuizzes } from "@/lib/quizzes";

/**
 * Footer definitivo — SPEC Fase 2, secao 2: quatro colunas (MegaQuiz,
 * Explorar, Legal, Privacidade). A logica do botao "Gerenciar cookies"
 * (dispatch do evento que o CookieConsent escuta) e preservada 100% —
 * apenas o tratamento visual muda.
 */
export default function Footer() {
  const relevantQuizzes = getFeaturedQuizzes().slice(0, 3);

  return (
    <footer className="mt-auto bg-ink text-white/70">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* MegaQuiz */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bright text-ink">
                <Puzzle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-h3 font-bold text-white">
                Mega<span className="text-brand-bright">Quiz</span>
              </span>
            </div>
            <p className="text-small leading-relaxed text-white/60">
              Quizzes de trivia e personalidade em português, com perguntas
              originais e fontes verificadas.
            </p>
          </div>

          {/* Explorar */}
          <div>
            <h3 className="mb-3 text-label font-semibold uppercase tracking-wide text-white/40">
              Explorar
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/categorias" className="text-small text-white/70 transition-colors hover:text-white">
                Categorias
              </Link>
              <Link href="/blog" className="text-small text-white/70 transition-colors hover:text-white">
                Blog
              </Link>
              {relevantQuizzes.map((quiz) => (
                <Link
                  key={quiz.slug}
                  href={`/quiz/${quiz.slug}`}
                  className="text-small text-white/70 transition-colors hover:text-white line-clamp-1"
                >
                  {quiz.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* MegaQuiz (institucionais) */}
          <div>
            <h3 className="mb-3 text-label font-semibold uppercase tracking-wide text-white/40">
              MegaQuiz
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/sobre" className="text-small text-white/70 transition-colors hover:text-white">
                Sobre
              </Link>
              <Link href="/metodologia" className="text-small text-white/70 transition-colors hover:text-white">
                Metodologia
              </Link>
              <Link href="/politica-editorial" className="text-small text-white/70 transition-colors hover:text-white">
                Política Editorial
              </Link>
              <Link href="/contato" className="text-small text-white/70 transition-colors hover:text-white">
                Contato
              </Link>
            </nav>
          </div>

          {/* Legal + Privacidade */}
          <div>
            <h3 className="mb-3 text-label font-semibold uppercase tracking-wide text-white/40">
              Legal
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="/privacidade" className="text-small text-white/70 transition-colors hover:text-white">
                Privacidade
              </Link>
              <Link href="/termos" className="text-small text-white/70 transition-colors hover:text-white">
                Termos de Uso
              </Link>
            </nav>

            <h3 className="mb-3 mt-6 text-label font-semibold uppercase tracking-wide text-white/40">
              Privacidade
            </h3>
            <button
              onClick={() =>
                window.dispatchEvent(new Event("cookie-consent-reopen"))
              }
              className="inline-flex cursor-pointer items-center gap-1.5 text-left text-small text-white/70 transition-colors hover:text-white"
            >
              <Settings2 className="h-3.5 w-3.5" aria-hidden="true" />
              Gerenciar cookies
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/40">
            &copy; {new Date().getFullYear()} MegaQuiz. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Categorias no rodapé">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categoria/${cat.id}`}
                className="text-caption text-white/40 transition-colors hover:text-white/70"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
