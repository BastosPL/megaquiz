import type { Quiz } from "@/lib/types";
import { copa2026Trivia } from "./copa-2026-trivia";
import { qualCidadeBrasileira } from "./qual-cidade-brasileira";
import { qiTeste } from "./qi-teste";

export const allQuizzes: Quiz[] = [
  copa2026Trivia,
  qualCidadeBrasileira,
  qiTeste,
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return allQuizzes.find((q) => q.slug === slug);
}

export function getQuizzesByCategory(category: string): Quiz[] {
  return allQuizzes.filter((q) => q.category === category);
}

export function getFeaturedQuizzes(): Quiz[] {
  return allQuizzes.filter((q) => q.featured);
}
