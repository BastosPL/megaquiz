import type { Quiz } from "@/lib/types";

export const qiTeste: Quiz = {
  id: "qi-teste",
  slug: "desafio-conhecimentos-gerais-8-perguntas",
  title: "Você consegue acertar 8 destas 10 perguntas?",
  description:
    "Um desafio de conhecimentos gerais que vai testar o que você sabe!",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🧠",
  color: "#3B82F6",
  tags: ["conhecimentos gerais", "desafio", "cultura geral", "trivia"],
  createdAt: "2026-06-08",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "Britannica — General Knowledge", organization: "Encyclopædia Britannica", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Dez perguntas que misturam lógica, cultura geral, ciência e atualidades — um desafio curto, mas que pega muita gente de surpresa.",
  disclaimer: "Este quiz é um desafio de conhecimentos gerais para diversão. Não mede QI, inteligência ou capacidade cognitiva.",
  questions: [
    {
      id: "q1",
      text: "Qual é o menor país do mundo?",
      options: [
        { id: "a", text: "Mônaco", isCorrect: false },
        { id: "b", text: "Vaticano", isCorrect: true },
        { id: "c", text: "San Marino", isCorrect: false },
        { id: "d", text: "Liechtenstein", isCorrect: false },
      ],
      explanation: "O Vaticano tem apenas 0,44 km², sendo o menor país do mundo.",
    },
    {
      id: "q2",
      text: "Qual elemento químico tem o símbolo 'Au'?",
      options: [
        { id: "a", text: "Prata", isCorrect: false },
        { id: "b", text: "Alumínio", isCorrect: false },
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
      explanation: "O corpo humano adulto tem 206 ossos. Os bebês nascem com cerca de 270, que se fundem com o crescimento.",
    },
    {
      id: "q4",
      text: "Qual planeta do sistema solar é conhecido como 'Estrela D'Alva'?",
      options: [
        { id: "a", text: "Marte", isCorrect: false },
        { id: "b", text: "Júpiter", isCorrect: false },
        { id: "c", text: "Vênus", isCorrect: true },
        { id: "d", text: "Mercúrio", isCorrect: false },
      ],
      explanation: "Vênus é visível a olho nu como a estrela mais brilhante ao amanhecer ou anoitecer, por isso o apelido 'Estrela D'Alva'.",
    },
    {
      id: "q5",
      text: "Qual cientista formulou a teoria da relatividade?",
      options: [
        { id: "a", text: "Isaac Newton", isCorrect: false },
        { id: "b", text: "Albert Einstein", isCorrect: true },
        { id: "c", text: "Nikola Tesla", isCorrect: false },
        { id: "d", text: "Niels Bohr", isCorrect: false },
      ],
      explanation: "Albert Einstein publicou a teoria da relatividade especial em 1905 e a geral em 1915, revolucionando a física moderna.",
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
      explanation: "O Nilo tem ~6.650 km. O Amazonas é o maior em volume de água.",
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
      explanation: "Neil Armstrong pisou na Lua em 20 de julho de 1969, durante a missão Apollo 11 da NASA.",
    },
    {
      id: "q8",
      text: "Qual desses animais é um mamífero?",
      options: [
        { id: "a", text: "Tubarão", isCorrect: false },
        { id: "b", text: "Golfinho", isCorrect: true },
        { id: "c", text: "Polvo", isCorrect: false },
        { id: "d", text: "Tartaruga", isCorrect: false },
      ],
      explanation: "Golfinhos são mamíferos que respiram ar, amamentam seus filhotes e são de sangue quente.",
    },
    {
      id: "q9",
      text: "Qual país tem formato de bota no mapa?",
      options: [
        { id: "a", text: "Grécia", isCorrect: false },
        { id: "b", text: "Portugal", isCorrect: false },
        { id: "c", text: "Itália", isCorrect: true },
        { id: "d", text: "Espanha", isCorrect: false },
      ],
      explanation: "A península italiana tem formato de bota, sendo uma das silhuetas mais reconhecíveis no mapa-múndi.",
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
      explanation: "World Wide Web foi inventada por Tim Berners-Lee em 1989 no CERN, na Suíça.",
    },
  ],
};
