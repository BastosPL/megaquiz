import type { Quiz } from "@/lib/types";

export const seriesNetflix: Quiz = {
  id: "series-netflix",
  slug: "quiz-series-da-netflix",
  title: "Quiz Series da Netflix",
  description: "Quanto voce sabe sobre as series mais famosas da Netflix? Teste agora!",
  type: "trivia",
  category: "series-filmes",
  emoji: "📺",
  color: "#E50914",
  plays: 4780,
  tags: ["netflix", "series", "filmes", "streaming", "entretenimento"],
  createdAt: "2026-06-08",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Em qual pais se passa 'La Casa de Papel'?",
      options: [
        { id: "a", text: "Portugal", isCorrect: false },
        { id: "b", text: "Espanha", isCorrect: true },
        { id: "c", text: "Italia", isCorrect: false },
        { id: "d", text: "Argentina", isCorrect: false },
      ],
      explanation: "La Casa de Papel e uma serie espanhola que se tornou a serie de lingua nao inglesa mais assistida da Netflix.",
    },
    {
      id: "q2",
      text: "Qual o nome verdadeiro do Professor em La Casa de Papel?",
      options: [
        { id: "a", text: "Andres de Fonollosa", isCorrect: false },
        { id: "b", text: "Sergio Marquina", isCorrect: true },
        { id: "c", text: "Alberto Vicuna", isCorrect: false },
        { id: "d", text: "Martin Berrote", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Em 'Stranger Things', como se chama o mundo paralelo?",
      options: [
        { id: "a", text: "Mundo Sombrio", isCorrect: false },
        { id: "b", text: "Mundo de Baixo", isCorrect: false },
        { id: "c", text: "Mundo Invertido (Upside Down)", isCorrect: true },
        { id: "d", text: "Mundo Obscuro", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Qual serie coreana da Netflix bateu recordes em 2021?",
      options: [
        { id: "a", text: "All of Us Are Dead", isCorrect: false },
        { id: "b", text: "Round 6 (Squid Game)", isCorrect: true },
        { id: "c", text: "Sweet Home", isCorrect: false },
        { id: "d", text: "Kingdom", isCorrect: false },
      ],
      explanation: "Round 6 se tornou a serie mais assistida da historia da Netflix com 1,65 bilhao de horas em 28 dias.",
    },
    {
      id: "q5",
      text: "Em 'You', qual a profissao de Joe Goldberg?",
      options: [
        { id: "a", text: "Professor", isCorrect: false },
        { id: "b", text: "Escritor", isCorrect: false },
        { id: "c", text: "Livreiro / Gerente de livraria", isCorrect: true },
        { id: "d", text: "Jornalista", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Qual e o jogo final (mais famoso) de Round 6?",
      options: [
        { id: "a", text: "Cabo de guerra", isCorrect: false },
        { id: "b", text: "Batatinha frita 1, 2, 3", isCorrect: false },
        { id: "c", text: "Jogo de bolinhas de gude", isCorrect: false },
        { id: "d", text: "Jogo da lula", isCorrect: true },
      ],
      explanation: "O Jogo da Lula (Squid Game) e o jogo final que da nome a serie toda.",
    },
    {
      id: "q7",
      text: "Em 'Bridgerton', em qual epoca se passa a historia?",
      options: [
        { id: "a", text: "Era Vitoriana (1837-1901)", isCorrect: false },
        { id: "b", text: "Regencia Inglesa (1811-1820)", isCorrect: true },
        { id: "c", text: "Idade Media", isCorrect: false },
        { id: "d", text: "Seculo 20", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Quantas temporadas tem 'Breaking Bad'?",
      options: [
        { id: "a", text: "3", isCorrect: false },
        { id: "b", text: "4", isCorrect: false },
        { id: "c", text: "5", isCorrect: true },
        { id: "d", text: "6", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Em 'The Witcher', qual o nome do personagem de Henry Cavill?",
      options: [
        { id: "a", text: "Vesemir", isCorrect: false },
        { id: "b", text: "Geralt de Rivia", isCorrect: true },
        { id: "c", text: "Jaskier", isCorrect: false },
        { id: "d", text: "Emhyr", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "Qual dessas series brasileiras fez sucesso na Netflix?",
      options: [
        { id: "a", text: "3%", isCorrect: true },
        { id: "b", text: "Cidade de Deus", isCorrect: false },
        { id: "c", text: "Tropa de Elite", isCorrect: false },
        { id: "d", text: "Central do Brasil", isCorrect: false },
      ],
      explanation: "3% foi a primeira serie brasileira original da Netflix, lancada em 2016.",
    },
    {
      id: "q11",
      text: "Em 'Peaky Blinders', qual familia e protagonista?",
      options: [
        { id: "a", text: "Familia Corleone", isCorrect: false },
        { id: "b", text: "Familia Shelby", isCorrect: true },
        { id: "c", text: "Familia Soprano", isCorrect: false },
        { id: "d", text: "Familia Byrne", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Qual serie tem o trono de ferro?",
      options: [
        { id: "a", text: "The Witcher", isCorrect: false },
        { id: "b", text: "O Senhor dos Aneis", isCorrect: false },
        { id: "c", text: "Game of Thrones", isCorrect: true },
        { id: "d", text: "Vikings", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Em 'Wednesday', qual escola a personagem frequenta?",
      options: [
        { id: "a", text: "Hogwarts", isCorrect: false },
        { id: "b", text: "Academia Nevermore", isCorrect: true },
        { id: "c", text: "Academia Umbrella", isCorrect: false },
        { id: "d", text: "Escola Xavier", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "Qual ator interpreta o Onze (Eleven) em Stranger Things?",
      options: [
        { id: "a", text: "Sadie Sink", isCorrect: false },
        { id: "b", text: "Millie Bobby Brown", isCorrect: true },
        { id: "c", text: "Natalia Dyer", isCorrect: false },
        { id: "d", text: "Maya Hawke", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Qual serie se passa numa prisao feminina?",
      options: [
        { id: "a", text: "Wentworth", isCorrect: false },
        { id: "b", text: "Vis a Vis", isCorrect: false },
        { id: "c", text: "Orange Is the New Black", isCorrect: true },
        { id: "d", text: "Todas as anteriores", isCorrect: false },
      ],
      explanation: "Todas se passam em prisoes femininas, mas Orange Is the New Black e a mais famosa da Netflix!",
    },
  ],
};
