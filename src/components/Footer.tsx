"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/types";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverted mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧩</span>
              <span className="text-xl font-bold">
                Mega<span className="text-secondary">Quiz</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Os melhores quizzes e testes da internet. Descubra, desafie e compartilhe!
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
              Categorias
            </h3>
            <nav className="flex flex-col gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categoria/${cat.id}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {cat.emoji} {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
              Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/sobre" className="text-sm text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/politica-editorial" className="text-sm text-gray-300 hover:text-white transition-colors">
                Política Editorial
              </Link>
              <Link href="/metodologia" className="text-sm text-gray-300 hover:text-white transition-colors">
                Metodologia
              </Link>
              <Link href="/contato" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
              <Link href="/privacidade" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="text-sm text-gray-300 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("cookie-consent-reopen"))
                }
                className="text-sm text-gray-300 hover:text-white transition-colors text-left cursor-pointer"
              >
                Gerenciar cookies
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MegaQuiz. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
