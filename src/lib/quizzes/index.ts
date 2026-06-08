import type { Quiz } from "@/lib/types";
import { copa2026Trivia } from "./copa-2026-trivia";
import { qualCidadeBrasileira } from "./qual-cidade-brasileira";
import { qiTeste } from "./qi-teste";
import { timesBrasileiros } from "./times-brasileiros";
import { mundoAnimal } from "./mundo-animal";
import { capitaisDoMundo } from "./capitais-do-mundo";
import { musicaBrasileira } from "./musica-brasileira";
import { perfilProfissionalDisc } from "./perfil-profissional-disc";
import { areaTiIdeal } from "./area-ti-ideal";

export const allQuizzes: Quiz[] = [
  copa2026Trivia,
  qualCidadeBrasileira,
  perfilProfissionalDisc,
  areaTiIdeal,
  musicaBrasileira,
  qiTeste,
  timesBrasileiros,
  mundoAnimal,
  capitaisDoMundo,
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
