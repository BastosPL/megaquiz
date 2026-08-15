"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Newspaper, LayoutGrid, Puzzle } from "lucide-react";
import { CATEGORIES } from "@/lib/types";
import { CategoryIcon } from "@/lib/icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-surface-v2">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Puzzle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="text-h3 font-bold text-ink">
            Mega<span className="text-brand-dark">Quiz</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Categorias principais">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-small font-medium text-text-secondary transition-colors hover:bg-brand-soft/50 hover:text-brand-dark"
            >
              <CategoryIcon category={cat.id} className="h-4 w-4 shrink-0" aria-hidden="true" />
              {cat.name}
            </Link>
          ))}
          <Link
            href="/categorias"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-small font-medium text-text-secondary transition-colors hover:bg-brand-soft/50 hover:text-brand-dark"
          >
            <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />
            Ver todas
          </Link>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-small font-medium text-text-secondary transition-colors hover:bg-brand-soft/50 hover:text-brand-dark"
          >
            <Newspaper className="h-4 w-4 shrink-0" aria-hidden="true" />
            Blog
          </Link>
          <Link
            href="/sobre"
            className="shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-small font-medium text-text-secondary transition-colors hover:bg-brand-soft/50 hover:text-brand-dark"
          >
            Sobre
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg p-2 text-text-secondary hover:bg-brand-soft/50 hover:text-brand-dark lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-surface-v2 lg:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3" aria-label="Menu principal">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categoria/${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-small font-medium text-text-secondary hover:bg-brand-soft/50 hover:text-brand-dark"
              >
                <CategoryIcon category={cat.id} className="h-4 w-4" aria-hidden="true" />
                {cat.name}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-small font-medium text-text-secondary hover:bg-brand-soft/50 hover:text-brand-dark"
            >
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              Blog
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-small font-medium text-text-secondary hover:bg-brand-soft/50 hover:text-brand-dark"
            >
              Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
