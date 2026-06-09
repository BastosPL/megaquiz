import type { Quiz } from "@/lib/types";

export const curiosidadesCiencia: Quiz = {
  id: "curiosidades-ciencia",
  slug: "quiz-curiosidades-da-ciencia",
  title: "Quiz Curiosidades da Ciencia",
  description: "Do espaco ao corpo humano — teste seus conhecimentos cientificos!",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🔬",
  color: "#6366F1",
  plays: 3780,
  tags: ["ciencia", "curiosidades", "espaco", "biologia", "educacao"],
  createdAt: "2026-06-09",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Qual e o planeta mais quente do Sistema Solar?",
      options: [
        { id: "a", text: "Mercurio", isCorrect: false },
        { id: "b", text: "Venus", isCorrect: true },
        { id: "c", text: "Marte", isCorrect: false },
        { id: "d", text: "Jupiter", isCorrect: false },
      ],
      explanation: "Apesar de Mercurio ser mais proximo do Sol, Venus e mais quente (462°C) por causa do efeito estufa extremo!",
    },
    {
      id: "q2",
      text: "Quantos ossos tem o corpo humano adulto?",
      options: [
        { id: "a", text: "186", isCorrect: false },
        { id: "b", text: "206", isCorrect: true },
        { id: "c", text: "226", isCorrect: false },
        { id: "d", text: "256", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Qual e o elemento quimico mais abundante no universo?",
      options: [
        { id: "a", text: "Oxigenio", isCorrect: false },
        { id: "b", text: "Carbono", isCorrect: false },
        { id: "c", text: "Hidrogenio", isCorrect: true },
        { id: "d", text: "Helio", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Quanto tempo a luz do Sol demora pra chegar na Terra?",
      options: [
        { id: "a", text: "1 segundo", isCorrect: false },
        { id: "b", text: "8 minutos", isCorrect: true },
        { id: "c", text: "1 hora", isCorrect: false },
        { id: "d", text: "24 horas", isCorrect: false },
      ],
      explanation: "A luz viaja a 300.000 km/s e demora cerca de 8 minutos e 20 segundos pra percorrer os 150 milhoes de km ate a Terra.",
    },
    {
      id: "q5",
      text: "Qual orgao do corpo humano consome mais energia?",
      options: [
        { id: "a", text: "Coracao", isCorrect: false },
        { id: "b", text: "Figado", isCorrect: false },
        { id: "c", text: "Cerebro", isCorrect: true },
        { id: "d", text: "Musculos", isCorrect: false },
      ],
      explanation: "O cerebro consome cerca de 20% de toda energia do corpo, apesar de representar apenas 2% do peso!",
    },
    {
      id: "q6",
      text: "O que e um ano-luz?",
      options: [
        { id: "a", text: "Uma medida de tempo", isCorrect: false },
        { id: "b", text: "Uma medida de distancia", isCorrect: true },
        { id: "c", text: "Uma medida de velocidade", isCorrect: false },
        { id: "d", text: "Uma medida de energia", isCorrect: false },
      ],
    },
    {
      id: "q7",
      text: "Qual animal e o mais rapido do mundo?",
      options: [
        { id: "a", text: "Guepardo", isCorrect: false },
        { id: "b", text: "Falcao-peregrino", isCorrect: true },
        { id: "c", text: "Agulhao-vela (peixe)", isCorrect: false },
        { id: "d", text: "Aguia", isCorrect: false },
      ],
      explanation: "O falcao-peregrino atinge 389 km/h em mergulho! O guepardo e o mais rapido em terra (120 km/h).",
    },
    {
      id: "q8",
      text: "Qual porcentagem do corpo humano e agua?",
      options: [
        { id: "a", text: "40-50%", isCorrect: false },
        { id: "b", text: "50-60%", isCorrect: false },
        { id: "c", text: "60-70%", isCorrect: true },
        { id: "d", text: "70-80%", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Qual cientista formulou a Teoria da Relatividade?",
      options: [
        { id: "a", text: "Isaac Newton", isCorrect: false },
        { id: "b", text: "Albert Einstein", isCorrect: true },
        { id: "c", text: "Niels Bohr", isCorrect: false },
        { id: "d", text: "Stephen Hawking", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "O DNA humano e composto por quantos pares de cromossomos?",
      options: [
        { id: "a", text: "21", isCorrect: false },
        { id: "b", text: "23", isCorrect: true },
        { id: "c", text: "25", isCorrect: false },
        { id: "d", text: "46", isCorrect: false },
      ],
      explanation: "Temos 23 PARES, totalizando 46 cromossomos. A opcao 46 e o total, nao o numero de pares!",
    },
    {
      id: "q11",
      text: "Qual gas as plantas absorvem da atmosfera?",
      options: [
        { id: "a", text: "Oxigenio", isCorrect: false },
        { id: "b", text: "Nitrogenio", isCorrect: false },
        { id: "c", text: "Gas carbonico (CO2)", isCorrect: true },
        { id: "d", text: "Metano", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Qual e a temperatura do nucleo do Sol?",
      options: [
        { id: "a", text: "1 milhao de graus", isCorrect: false },
        { id: "b", text: "5 milhoes de graus", isCorrect: false },
        { id: "c", text: "15 milhoes de graus", isCorrect: true },
        { id: "d", text: "100 milhoes de graus", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Quantos litros de sangue tem o corpo humano em media?",
      options: [
        { id: "a", text: "2-3 litros", isCorrect: false },
        { id: "b", text: "4-5 litros", isCorrect: true },
        { id: "c", text: "7-8 litros", isCorrect: false },
        { id: "d", text: "10-12 litros", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "Qual e o metal mais abundante na crosta terrestre?",
      options: [
        { id: "a", text: "Ferro", isCorrect: false },
        { id: "b", text: "Aluminio", isCorrect: true },
        { id: "c", text: "Cobre", isCorrect: false },
        { id: "d", text: "Ouro", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Qual planeta do Sistema Solar tem mais luas?",
      options: [
        { id: "a", text: "Jupiter", isCorrect: false },
        { id: "b", text: "Saturno", isCorrect: true },
        { id: "c", text: "Urano", isCorrect: false },
        { id: "d", text: "Netuno", isCorrect: false },
      ],
      explanation: "Saturno tem mais de 140 luas conhecidas, ultrapassando Jupiter!",
    },
  ],
};
