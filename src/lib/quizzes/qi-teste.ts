import type { Quiz } from "@/lib/types";

export const qiTeste: Quiz = {
  id: "qi-teste",
  slug: "so-quem-tem-qi-acima-de-120-acerta-8",
  title: "So quem tem QI acima de 120 acerta 8/10",
  description:
    "Sera que voce e mais inteligente que 92% da populacao? Faca este teste e descubra!",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🧠",
  color: "#3B82F6",
  plays: 8432,
  tags: ["qi", "inteligencia", "conhecimentos gerais", "desafio"],
  createdAt: "2026-06-08",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Qual e o menor pais do mundo?",
      options: [
        { id: "a", text: "Monaco", isCorrect: false },
        { id: "b", text: "Vaticano", isCorrect: true },
        { id: "c", text: "San Marino", isCorrect: false },
        { id: "d", text: "Liechtenstein", isCorrect: false },
      ],
      explanation: "O Vaticano tem apenas 0,44 km², sendo o menor pais do mundo.",
    },
    {
      id: "q2",
      text: "Qual elemento quimico tem o simbolo 'Au'?",
      options: [
        { id: "a", text: "Prata", isCorrect: false },
        { id: "b", text: "Aluminio", isCorrect: false },
        { id: "c", text: "Ouro", isCorrect: true },
        { id: "d", text: "Cobre", isCorrect: false },
      ],
      explanation: "Au vem do latim 'Aurum', que significa ouro.",
    },
    {
      id: "q3",
      text: "Quantos ossos tem o corpo humano adulto?",
      options: [
        { id: "a", text: "196", isCorrect: false },
        { id: "b", text: "206", isCorrect: true },
        { id: "c", text: "216", isCorrect: false },
        { id: "d", text: "186", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Qual planeta do sistema solar e conhecido como 'Estrela D'Alva'?",
      options: [
        { id: "a", text: "Marte", isCorrect: false },
        { id: "b", text: "Jupiter", isCorrect: false },
        { id: "c", text: "Venus", isCorrect: true },
        { id: "d", text: "Mercurio", isCorrect: false },
      ],
    },
    {
      id: "q5",
      text: "Qual a capital da Australia?",
      options: [
        { id: "a", text: "Sydney", isCorrect: false },
        { id: "b", text: "Melbourne", isCorrect: false },
        { id: "c", text: "Camberra", isCorrect: true },
        { id: "d", text: "Brisbane", isCorrect: false },
      ],
      explanation: "Muita gente pensa que e Sydney, mas a capital e Camberra!",
    },
    {
      id: "q6",
      text: "Qual o rio mais longo do mundo?",
      options: [
        { id: "a", text: "Rio Amazonas", isCorrect: false },
        { id: "b", text: "Rio Nilo", isCorrect: true },
        { id: "c", text: "Rio Yangtzé", isCorrect: false },
        { id: "d", text: "Rio Mississippi", isCorrect: false },
      ],
      explanation: "O Nilo tem ~6.650 km. O Amazonas e o maior em volume de agua.",
    },
    {
      id: "q7",
      text: "Em que ano o homem pisou na Lua pela primeira vez?",
      options: [
        { id: "a", text: "1967", isCorrect: false },
        { id: "b", text: "1969", isCorrect: true },
        { id: "c", text: "1971", isCorrect: false },
        { id: "d", text: "1965", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Qual desses animais e um mamifero?",
      options: [
        { id: "a", text: "Tubarao", isCorrect: false },
        { id: "b", text: "Golfinho", isCorrect: true },
        { id: "c", text: "Polvo", isCorrect: false },
        { id: "d", text: "Tartaruga", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Qual pais tem formato de bota no mapa?",
      options: [
        { id: "a", text: "Grecia", isCorrect: false },
        { id: "b", text: "Portugal", isCorrect: false },
        { id: "c", text: "Italia", isCorrect: true },
        { id: "d", text: "Espanha", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "O que 'www' significa na internet?",
      options: [
        { id: "a", text: "World Web Wide", isCorrect: false },
        { id: "b", text: "World Wide Web", isCorrect: true },
        { id: "c", text: "Web World Wide", isCorrect: false },
        { id: "d", text: "Wide World Web", isCorrect: false },
      ],
    },
  ],
};
