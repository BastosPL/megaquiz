"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/types";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🧩</span>
          <span className="text-xl font-bold text-primary">
            Mega<span className="text-secondary">Quiz</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              href={`/categoria/${cat.id}`}
              className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {cat.emoji} {cat.name}
            </Link>
          ))}
          <Link
            href="/categorias"
            className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
          >
            Ver todas
          </Link>
          <Link
            href="/blog"
            className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
          >
            📝 Blog
          </Link>
          <Link
            href="/sobre"
            className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
          >
            Sobre
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-light hover:text-primary"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white animate-fade-in">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categoria/${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              📝 Blog
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              ℹ️ Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
