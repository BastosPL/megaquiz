import type { Quiz } from "@/lib/types";

export const mitologiaGrega: Quiz = {
  id: "mitologia-grega",
  slug: "quiz-mitologia-grega",
  title: "Quiz Mitologia Grega",
  description: "De Zeus a Hercules — quanto voce sabe sobre os deuses do Olimpo?",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "⚡",
  color: "#D97706",
  plays: 3400,
  tags: ["mitologia", "grecia", "deuses", "educacao", "historia"],
  createdAt: "2026-06-11",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Quem e o rei dos deuses na mitologia grega?",
      options: [
        { id: "a", text: "Poseidon", isCorrect: false },
        { id: "b", text: "Zeus", isCorrect: true },
        { id: "c", text: "Hades", isCorrect: false },
        { id: "d", text: "Ares", isCorrect: false },
      ],
    },
    {
      id: "q2",
      text: "Qual deus governa os mares?",
      options: [
        { id: "a", text: "Hermes", isCorrect: false },
        { id: "b", text: "Apolo", isCorrect: false },
        { id: "c", text: "Poseidon", isCorrect: true },
        { id: "d", text: "Dionisio", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Quem e a deusa do amor e da beleza?",
      options: [
        { id: "a", text: "Atena", isCorrect: false },
        { id: "b", text: "Afrodite", isCorrect: true },
        { id: "c", text: "Artemis", isCorrect: false },
        { id: "d", text: "Hera", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Qual heroi matou a Medusa?",
      options: [
        { id: "a", text: "Hercules", isCorrect: false },
        { id: "b", text: "Perseu", isCorrect: true },
        { id: "c", text: "Teseu", isCorrect: false },
        { id: "d", text: "Aquiles", isCorrect: false },
      ],
      explanation: "Perseu cortou a cabeca da Medusa usando um escudo espelhado pra nao olhar diretamente pra ela!",
    },
    {
      id: "q5",
      text: "Qual e o ponto fraco de Aquiles?",
      options: [
        { id: "a", text: "O coracao", isCorrect: false },
        { id: "b", text: "O calcanhar", isCorrect: true },
        { id: "c", text: "Os olhos", isCorrect: false },
        { id: "d", text: "A mao direita", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Quem ficou preso num labirinto com o Minotauro?",
      options: [
        { id: "a", text: "Perseu", isCorrect: false },
        { id: "b", text: "Teseu", isCorrect: true },
        { id: "c", text: "Odisseu (Ulisses)", isCorrect: false },
        { id: "d", text: "Jasao", isCorrect: false },
      ],
      explanation: "Teseu entrou no labirinto de Creta, matou o Minotauro e saiu usando o fio de Ariadne!",
    },
    {
      id: "q7",
      text: "Quem foi condenado a empurrar uma pedra montanha acima eternamente?",
      options: [
        { id: "a", text: "Prometeu", isCorrect: false },
        { id: "b", text: "Sisifo", isCorrect: true },
        { id: "c", text: "Tantalo", isCorrect: false },
        { id: "d", text: "Atlas", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Quem roubou o fogo dos deuses e deu aos humanos?",
      options: [
        { id: "a", text: "Hefesto", isCorrect: false },
        { id: "b", text: "Prometeu", isCorrect: true },
        { id: "c", text: "Hermes", isCorrect: false },
        { id: "d", text: "Dionisio", isCorrect: false },
      ],
      explanation: "Como castigo, Zeus acorrentou Prometeu a uma rocha onde uma aguia comia seu figado todos os dias — que se regenerava!",
    },
    {
      id: "q9",
      text: "O que havia dentro da caixa de Pandora?",
      options: [
        { id: "a", text: "Ouro e joias", isCorrect: false },
        { id: "b", text: "Todos os males do mundo", isCorrect: true },
        { id: "c", text: "Poderes divinos", isCorrect: false },
        { id: "d", text: "Almas dos mortos", isCorrect: false },
      ],
      explanation: "Quando Pandora abriu a caixa, todos os males escaparam. So a esperanca ficou dentro!",
    },
    {
      id: "q10",
      text: "Qual deus governa o mundo dos mortos?",
      options: [
        { id: "a", text: "Ares", isCorrect: false },
        { id: "b", text: "Hades", isCorrect: true },
        { id: "c", text: "Thanatos", isCorrect: false },
        { id: "d", text: "Cronos", isCorrect: false },
      ],
    },
    {
      id: "q11",
      text: "Quem construiu o famoso Cavalo de Troia?",
      options: [
        { id: "a", text: "Aquiles", isCorrect: false },
        { id: "b", text: "Odisseu (Ulisses)", isCorrect: true },
        { id: "c", text: "Ajax", isCorrect: false },
        { id: "d", text: "Agamemnon", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Quantos trabalhos Hercules teve que completar?",
      options: [
        { id: "a", text: "7", isCorrect: false },
        { id: "b", text: "10", isCorrect: false },
        { id: "c", text: "12", isCorrect: true },
        { id: "d", text: "15", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Quem e a deusa da sabedoria e da guerra estrategica?",
      options: [
        { id: "a", text: "Hera", isCorrect: false },
        { id: "b", text: "Atena", isCorrect: true },
        { id: "c", text: "Artemis", isCorrect: false },
        { id: "d", text: "Deméter", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "Qual criatura tem corpo de leao e cabeca humana e faz enigmas?",
      options: [
        { id: "a", text: "Minotauro", isCorrect: false },
        { id: "b", text: "Esfinge", isCorrect: true },
        { id: "c", text: "Centauro", isCorrect: false },
        { id: "d", text: "Hidra", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Quem olhava pra Medusa se transformava em:",
      options: [
        { id: "a", text: "Ouro", isCorrect: false },
        { id: "b", text: "Pedra", isCorrect: true },
        { id: "c", text: "Cobra", isCorrect: false },
        { id: "d", text: "Cinzas", isCorrect: false },
      ],
    },
  ],
};
