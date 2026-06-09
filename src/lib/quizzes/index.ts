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
import { seriesNetflix } from "./series-netflix";
import { filmesClassicos } from "./filmes-classicos";
import { historiaDoBrasil } from "./historia-do-brasil";
import { qualPersonagemVoceSeria } from "./qual-personagem-voce-seria";

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
  seriesNetflix,
  filmesClassicos,
  qualPersonagemVoceSeria,
  historiaDoBrasil,
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
