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
import { qualProfissaoIdeal } from "./qual-profissao-ideal";
import { geografiaDoBrasil } from "./geografia-do-brasil";
import { futebolMundial } from "./futebol-mundial";
import { curiosidadesCiencia } from "./curiosidades-ciencia";
import { qualJogadorCopa2026 } from "./qual-jogador-copa-2026";
import { bandeirasCopa2026 } from "./bandeiras-copa-2026";
import { golsHistoricosCopa } from "./gols-historicos-copa";
import { qualArtilheiroHistorico } from "./qual-artilheiro-historico";
import { qualRedeSocial } from "./qual-rede-social";
import { qualGeracaoSuaAlma } from "./qual-geracao-sua-alma";
import { jeitoDeComerPersonalidade } from "./jeito-de-comer-personalidade";
import { qualSignoDeveriaSer } from "./qual-signo-deveria-ser";
import { casaDePapelPersonagem } from "./casa-de-papel-personagem";
import { round6Sobreviveria } from "./round6-sobreviveria";
import { qualVilaoDeSerie } from "./qual-vilao-de-serie";
import { vestibular1990 } from "./vestibular-1990";
import { mitologiaGrega } from "./mitologia-grega";
import { verdadeOuMitoSaude } from "./verdade-ou-mito-saude";

export const allQuizzes: Quiz[] = [
  // Copa do Mundo 2026
  copa2026Trivia,
  qualJogadorCopa2026,
  bandeirasCopa2026,
  golsHistoricosCopa,
  qualArtilheiroHistorico,
  // Personalidade
  qualCidadeBrasileira,
  qualRedeSocial,
  qualGeracaoSuaAlma,
  jeitoDeComerPersonalidade,
  qualSignoDeveriaSer,
  // Carreira
  perfilProfissionalDisc,
  areaTiIdeal,
  qualProfissaoIdeal,
  // Series & Filmes
  seriesNetflix,
  filmesClassicos,
  qualPersonagemVoceSeria,
  casaDePapelPersonagem,
  round6Sobreviveria,
  qualVilaoDeSerie,
  // Conhecimentos Gerais
  qiTeste,
  musicaBrasileira,
  mundoAnimal,
  capitaisDoMundo,
  historiaDoBrasil,
  geografiaDoBrasil,
  curiosidadesCiencia,
  vestibular1990,
  mitologiaGrega,
  verdadeOuMitoSaude,
  // Esportes
  timesBrasileiros,
  futebolMundial,
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

/**
 * Escolha determinística do "Desafio do Dia" — roda entre os quizzes em
 * destaque com base no dia do ano, então o mesmo dia sempre mostra o
 * mesmo quiz (estável para build estático) e o destaque muda diariamente.
 */
export function getDailyChallenge(referenceDate: Date = new Date()): Quiz {
  const featured = getFeaturedQuizzes();
  const pool = featured.length > 0 ? featured : allQuizzes;
  const start = Date.UTC(referenceDate.getUTCFullYear(), 0, 0);
  const diff = Date.UTC(
    referenceDate.getUTCFullYear(),
    referenceDate.getUTCMonth(),
    referenceDate.getUTCDate()
  ) - start;
  const dayOfYear = Math.floor(diff / 86_400_000);
  return pool[dayOfYear % pool.length];
}

/** Quizzes relacionados: prioriza a mesma categoria, completa com outras. */
export function getRelatedQuizzes(quiz: Quiz, limit = 3): Quiz[] {
  const sameCategory = allQuizzes.filter(
    (q) => q.category === quiz.category && q.slug !== quiz.slug
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = allQuizzes.filter(
    (q) => q.category !== quiz.category && q.slug !== quiz.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Próximo quiz na lista principal, usado para o CTA "próximo desafio". */
export function getNextQuiz(quiz: Quiz): Quiz | undefined {
  const idx = allQuizzes.findIndex((q) => q.slug === quiz.slug);
  if (idx === -1) return undefined;
  return allQuizzes[(idx + 1) % allQuizzes.length];
}
