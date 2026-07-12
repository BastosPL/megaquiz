import type { Quiz } from "@/lib/types";

export const golsHistoricosCopa: Quiz = {
  id: "gols-historicos-copa",
  slug: "voce-lembra-desses-gols-historicos-de-copa",
  title: "Voce Lembra Desses Gols Historicos de Copa?",
  description: "De Pele a Messi — teste sua memoria sobre os gols mais marcantes das Copas!",
  type: "trivia",
  category: "copa-do-mundo",
  emoji: "🥅",
  color: "#059669",
  tags: ["copa", "gols", "futebol", "historia", "selecao"],
  createdAt: "2026-06-11",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Quem fez o gol do titulo do Brasil na final da Copa de 2002?",
      options: [
        { id: "a", text: "Rivaldo", isCorrect: false },
        { id: "b", text: "Ronaldo (2 gols)", isCorrect: true },
        { id: "c", text: "Ronaldinho", isCorrect: false },
        { id: "d", text: "Roberto Carlos", isCorrect: false },
      ],
      explanation: "Ronaldo Fenomeno fez os 2 gols na final contra a Alemanha (2x0), se redimindo da Copa de 98.",
    },
    {
      id: "q2",
      text: "Qual jogador marcou o 'Gol do Seculo' na Copa de 1986?",
      options: [
        { id: "a", text: "Pele", isCorrect: false },
        { id: "b", text: "Zidane", isCorrect: false },
        { id: "c", text: "Maradona", isCorrect: true },
        { id: "d", text: "Platini", isCorrect: false },
      ],
      explanation: "Maradona driblou meia selecao inglesa num gol historico nas quartas de final. No mesmo jogo fez o 'Mao de Deus'.",
    },
    {
      id: "q3",
      text: "Messi marcou na final da Copa 2022. Qual foi o placar final?",
      options: [
        { id: "a", text: "Argentina 2x1 Franca", isCorrect: false },
        { id: "b", text: "Argentina 3x3 (penaltis 4x2)", isCorrect: true },
        { id: "c", text: "Argentina 4x2 Franca", isCorrect: false },
        { id: "d", text: "Argentina 2x0 Franca", isCorrect: false },
      ],
      explanation: "Considerada a melhor final da historia! Mbappe fez hat-trick mas a Argentina venceu nos penaltis.",
    },
    {
      id: "q4",
      text: "Quem marcou o primeiro gol da historia das Copas (1930)?",
      options: [
        { id: "a", text: "Hector Castro (Uruguai)", isCorrect: false },
        { id: "b", text: "Lucien Laurent (Franca)", isCorrect: true },
        { id: "c", text: "Guillermo Stabile (Argentina)", isCorrect: false },
        { id: "d", text: "Bert Patenaude (EUA)", isCorrect: false },
      ],
    },
    {
      id: "q5",
      text: "Na Copa de 1970, Pele marcou quantos gols?",
      options: [
        { id: "a", text: "2", isCorrect: false },
        { id: "b", text: "4", isCorrect: true },
        { id: "c", text: "6", isCorrect: false },
        { id: "d", text: "8", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Qual alemao marcou gol historico na semifinal contra o Brasil (7x1) em 2014?",
      options: [
        { id: "a", text: "Muller (abriu o placar)", isCorrect: true },
        { id: "b", text: "Klose", isCorrect: false },
        { id: "c", text: "Ozil", isCorrect: false },
        { id: "d", text: "Gotze", isCorrect: false },
      ],
    },
    {
      id: "q7",
      text: "Zidane marcou 2 gols de cabeca na final de 1998. Contra quem?",
      options: [
        { id: "a", text: "Alemanha", isCorrect: false },
        { id: "b", text: "Brasil", isCorrect: true },
        { id: "c", text: "Italia", isCorrect: false },
        { id: "d", text: "Holanda", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Quem fez o gol do titulo da Alemanha na final da Copa 2014?",
      options: [
        { id: "a", text: "Muller", isCorrect: false },
        { id: "b", text: "Klose", isCorrect: false },
        { id: "c", text: "Mario Gotze", isCorrect: true },
        { id: "d", text: "Schweinsteiger", isCorrect: false },
      ],
      explanation: "Gotze marcou na prorrogacao contra a Argentina, aos 113 minutos!",
    },
    {
      id: "q9",
      text: "Na Copa de 2022, qual foi o gol mais rapido do torneio?",
      options: [
        { id: "a", text: "Gol de Alphonso Davies (Canada) contra Croacia", isCorrect: true },
        { id: "b", text: "Gol de Gakpo (Holanda) contra Equador", isCorrect: false },
        { id: "c", text: "Gol de Al-Dawsari (Arabia) contra Argentina", isCorrect: false },
        { id: "d", text: "Gol de Richarlison (Brasil) contra Serbia", isCorrect: false },
      ],
      explanation: "Davies marcou aos 1 minuto e 8 segundos contra a Croacia, o gol mais rapido da Copa 2022.",
    },
    {
      id: "q10",
      text: "Qual foi eleito o gol mais bonito da Copa 2022?",
      options: [
        { id: "a", text: "Messi vs Mexico", isCorrect: false },
        { id: "b", text: "Richarlison vs Serbia (bicicleta)", isCorrect: true },
        { id: "c", text: "Mbappe vs Polonia", isCorrect: false },
        { id: "d", text: "Enzo vs Croacia", isCorrect: false },
      ],
      explanation: "A bicicleta de Richarlison contra a Serbia foi eleita pela FIFA como o gol mais bonito da Copa 2022.",
    },
    {
      id: "q11",
      text: "Quem marcou o gol do titulo da Espanha na Copa 2010?",
      options: [
        { id: "a", text: "David Villa", isCorrect: false },
        { id: "b", text: "Andres Iniesta", isCorrect: true },
        { id: "c", text: "Xavi", isCorrect: false },
        { id: "d", text: "Fernando Torres", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Klose se tornou o maior artilheiro de Copas em qual edicao?",
      options: [
        { id: "a", text: "Copa 2006 (Alemanha)", isCorrect: false },
        { id: "b", text: "Copa 2010 (Africa do Sul)", isCorrect: false },
        { id: "c", text: "Copa 2014 (Brasil)", isCorrect: true },
        { id: "d", text: "Copa 2002 (Japao/Coreia)", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Roberto Carlos fez um gol de falta historico contra a Franca em 1997. Como foi?",
      options: [
        { id: "a", text: "A bola fez uma curva impossivel", isCorrect: true },
        { id: "b", text: "Chute de 40 metros no angulo", isCorrect: false },
        { id: "c", text: "Cobranca por baixo da barreira", isCorrect: false },
        { id: "d", text: "Falta batida com a perna direita", isCorrect: false },
      ],
      explanation: "A bola desviou tanto que os fisicos ate hoje estudam aquela curva! Nao foi em Copa, mas e iconica.",
    },
    {
      id: "q14",
      text: "Qual jogador marcou o gol mais rapido da historia das Copas (11 segundos)?",
      options: [
        { id: "a", text: "Ronaldo", isCorrect: false },
        { id: "b", text: "Hakan Sukur (Turquia)", isCorrect: true },
        { id: "c", text: "Miroslav Klose", isCorrect: false },
        { id: "d", text: "Clint Dempsey (EUA)", isCorrect: false },
      ],
      explanation: "Hakan Sukur marcou aos 11 segundos na disputa de 3o lugar contra Coreia do Sul em 2002.",
    },
    {
      id: "q15",
      text: "Quem fez o gol 'Mao de Deus' na Copa de 1986?",
      options: [
        { id: "a", text: "Pele", isCorrect: false },
        { id: "b", text: "Zico", isCorrect: false },
        { id: "c", text: "Maradona", isCorrect: true },
        { id: "d", text: "Platini", isCorrect: false },
      ],
    },
  ],
};
