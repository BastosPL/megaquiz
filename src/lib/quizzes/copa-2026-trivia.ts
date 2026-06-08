import type { Quiz } from "@/lib/types";

export const copa2026Trivia: Quiz = {
  id: "copa-2026-trivia",
  slug: "quanto-voce-sabe-sobre-a-copa-2026",
  title: "Quanto voce sabe sobre a Copa do Mundo 2026?",
  description:
    "Teste seus conhecimentos sobre a maior Copa da historia! 48 selecoes, 3 paises-sede e muitas curiosidades.",
  type: "trivia",
  category: "copa-do-mundo",
  emoji: "⚽",
  color: "#16A34A",
  plays: 1247,
  tags: ["copa do mundo", "futebol", "2026", "fifa"],
  createdAt: "2026-06-08",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Quantas selecoes participam da Copa do Mundo 2026?",
      options: [
        { id: "a", text: "32", isCorrect: false },
        { id: "b", text: "48", isCorrect: true },
        { id: "c", text: "40", isCorrect: false },
        { id: "d", text: "64", isCorrect: false },
      ],
      explanation: "A Copa de 2026 e a primeira com 48 selecoes, um aumento em relacao as 32 de edicoes anteriores.",
    },
    {
      id: "q2",
      text: "Quais paises sediam a Copa do Mundo 2026?",
      options: [
        { id: "a", text: "EUA, Canada e Mexico", isCorrect: true },
        { id: "b", text: "EUA, Brasil e Argentina", isCorrect: false },
        { id: "c", text: "Canada, Mexico e Colombia", isCorrect: false },
        { id: "d", text: "EUA, Canada e Jamaica", isCorrect: false },
      ],
      explanation: "E a primeira Copa com 3 paises-sede na historia!",
    },
    {
      id: "q3",
      text: "Qual selecao e a maior campeã da Copa do Mundo?",
      options: [
        { id: "a", text: "Alemanha", isCorrect: false },
        { id: "b", text: "Italia", isCorrect: false },
        { id: "c", text: "Brasil", isCorrect: true },
        { id: "d", text: "Argentina", isCorrect: false },
      ],
      explanation: "O Brasil e pentacampeao mundial (1958, 1962, 1970, 1994, 2002).",
    },
    {
      id: "q4",
      text: "Quantos jogos serao disputados na Copa 2026?",
      options: [
        { id: "a", text: "64", isCorrect: false },
        { id: "b", text: "80", isCorrect: false },
        { id: "c", text: "104", isCorrect: true },
        { id: "d", text: "96", isCorrect: false },
      ],
      explanation: "Com 48 selecoes, o numero de jogos subiu de 64 para 104.",
    },
    {
      id: "q5",
      text: "Quem venceu a Copa do Mundo de 2022 no Qatar?",
      options: [
        { id: "a", text: "Franca", isCorrect: false },
        { id: "b", text: "Argentina", isCorrect: true },
        { id: "c", text: "Brasil", isCorrect: false },
        { id: "d", text: "Croacia", isCorrect: false },
      ],
      explanation: "A Argentina venceu a Franca nos penaltis na final de 2022.",
    },
    {
      id: "q6",
      text: "Qual jogador tem mais gols em Copas do Mundo na historia?",
      options: [
        { id: "a", text: "Pele", isCorrect: false },
        { id: "b", text: "Ronaldo Fenomeno", isCorrect: false },
        { id: "c", text: "Miroslav Klose", isCorrect: true },
        { id: "d", text: "Lionel Messi", isCorrect: false },
      ],
      explanation: "Klose marcou 16 gols em Copas (2002-2014), superando Ronaldo (15).",
    },
    {
      id: "q7",
      text: "Em que ano o Brasil ganhou sua ultima Copa do Mundo?",
      options: [
        { id: "a", text: "1998", isCorrect: false },
        { id: "b", text: "2002", isCorrect: true },
        { id: "c", text: "2006", isCorrect: false },
        { id: "d", text: "1994", isCorrect: false },
      ],
      explanation: "O penta veio em 2002, na Copa da Coreia e Japao, com Ronaldo, Rivaldo e Ronaldinho.",
    },
    {
      id: "q8",
      text: "Qual estadio sera a sede da final da Copa 2026?",
      options: [
        { id: "a", text: "Estadio Azteca (Mexico)", isCorrect: false },
        { id: "b", text: "MetLife Stadium (EUA)", isCorrect: true },
        { id: "c", text: "SoFi Stadium (EUA)", isCorrect: false },
        { id: "d", text: "BMO Field (Canada)", isCorrect: false },
      ],
      explanation: "O MetLife Stadium, em Nova Jersey, recebera a grande final.",
    },
    {
      id: "q9",
      text: "Qual selecao nunca venceu uma Copa do Mundo?",
      options: [
        { id: "a", text: "Uruguai", isCorrect: false },
        { id: "b", text: "Espanha", isCorrect: false },
        { id: "c", text: "Holanda", isCorrect: true },
        { id: "d", text: "Inglaterra", isCorrect: false },
      ],
      explanation: "A Holanda chegou a 3 finais (1974, 1978, 2010) mas nunca conquistou o titulo.",
    },
    {
      id: "q10",
      text: "Qual foi o placar da maior goleada da historia das Copas?",
      options: [
        { id: "a", text: "7 x 1", isCorrect: false },
        { id: "b", text: "10 x 1", isCorrect: true },
        { id: "c", text: "9 x 0", isCorrect: false },
        { id: "d", text: "8 x 0", isCorrect: false },
      ],
      explanation: "Hungria 10 x 1 El Salvador em 1982. O 7x1 do Brasil (2014) e 'so' o 6o maior.",
    },
  ],
};
