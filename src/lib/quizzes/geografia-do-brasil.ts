import type { Quiz } from "@/lib/types";

export const geografiaDoBrasil: Quiz = {
  id: "geografia-do-brasil",
  slug: "quiz-geografia-do-brasil",
  title: "Quiz Geografia do Brasil",
  description: "Biomas, rios, estados e regioes — quanto voce manja do mapa do Brasil?",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🗺️",
  color: "#10B981",
  tags: ["geografia", "brasil", "estados", "enem", "educacao"],
  createdAt: "2026-06-09",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Qual e o maior estado do Brasil em area?",
      options: [
        { id: "a", text: "Minas Gerais", isCorrect: false },
        { id: "b", text: "Para", isCorrect: false },
        { id: "c", text: "Amazonas", isCorrect: true },
        { id: "d", text: "Mato Grosso", isCorrect: false },
      ],
      explanation: "O Amazonas tem 1,56 milhao de km² — e maior que muitos paises europeus juntos!",
    },
    {
      id: "q2",
      text: "Quantos estados tem o Brasil (contando o DF)?",
      options: [
        { id: "a", text: "25", isCorrect: false },
        { id: "b", text: "26", isCorrect: false },
        { id: "c", text: "27", isCorrect: true },
        { id: "d", text: "28", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Qual e o rio mais longo do Brasil?",
      options: [
        { id: "a", text: "Rio Sao Francisco", isCorrect: false },
        { id: "b", text: "Rio Amazonas", isCorrect: true },
        { id: "c", text: "Rio Parana", isCorrect: false },
        { id: "d", text: "Rio Tocantins", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Qual bioma ocupa a maior area do Brasil?",
      options: [
        { id: "a", text: "Cerrado", isCorrect: false },
        { id: "b", text: "Mata Atlantica", isCorrect: false },
        { id: "c", text: "Amazonia", isCorrect: true },
        { id: "d", text: "Caatinga", isCorrect: false },
      ],
      explanation: "A Amazonia ocupa cerca de 49% do territorio brasileiro.",
    },
    {
      id: "q5",
      text: "Qual e a capital do Mato Grosso do Sul?",
      options: [
        { id: "a", text: "Cuiaba", isCorrect: false },
        { id: "b", text: "Campo Grande", isCorrect: true },
        { id: "c", text: "Goiania", isCorrect: false },
        { id: "d", text: "Palmas", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Qual regiao do Brasil tem mais estados?",
      options: [
        { id: "a", text: "Sudeste", isCorrect: false },
        { id: "b", text: "Sul", isCorrect: false },
        { id: "c", text: "Nordeste", isCorrect: true },
        { id: "d", text: "Norte", isCorrect: false },
      ],
      explanation: "O Nordeste tem 9 estados, sendo a regiao com mais unidades federativas.",
    },
    {
      id: "q7",
      text: "Qual e o ponto mais alto do Brasil?",
      options: [
        { id: "a", text: "Pico da Bandeira", isCorrect: false },
        { id: "b", text: "Pico da Neblina", isCorrect: true },
        { id: "c", text: "Pico do Parana", isCorrect: false },
        { id: "d", text: "Pico das Agulhas Negras", isCorrect: false },
      ],
      explanation: "O Pico da Neblina tem 2.993 metros e fica no Amazonas, na fronteira com a Venezuela.",
    },
    {
      id: "q8",
      text: "Qual o unico pais da America do Sul que NAO faz fronteira com o Brasil?",
      options: [
        { id: "a", text: "Equador e Chile", isCorrect: true },
        { id: "b", text: "Colombia e Peru", isCorrect: false },
        { id: "c", text: "Argentina e Paraguai", isCorrect: false },
        { id: "d", text: "Bolivia e Suriname", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Qual estado brasileiro e o menor em area?",
      options: [
        { id: "a", text: "Alagoas", isCorrect: false },
        { id: "b", text: "Rio de Janeiro", isCorrect: false },
        { id: "c", text: "Sergipe", isCorrect: true },
        { id: "d", text: "Espirito Santo", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "O Pantanal fica principalmente em quais estados?",
      options: [
        { id: "a", text: "Goias e Tocantins", isCorrect: false },
        { id: "b", text: "Mato Grosso e Mato Grosso do Sul", isCorrect: true },
        { id: "c", text: "Para e Amazonas", isCorrect: false },
        { id: "d", text: "Minas Gerais e Bahia", isCorrect: false },
      ],
    },
    {
      id: "q11",
      text: "Qual cidade brasileira e conhecida como 'Capital do Frio'?",
      options: [
        { id: "a", text: "Gramado (RS)", isCorrect: false },
        { id: "b", text: "Sao Joaquim (SC)", isCorrect: false },
        { id: "c", text: "Urupema (SC)", isCorrect: true },
        { id: "d", text: "Campos do Jordao (SP)", isCorrect: false },
      ],
      explanation: "Urupema (SC) e considerada a cidade mais fria do Brasil, com temperaturas que chegam a -7°C.",
    },
    {
      id: "q12",
      text: "Qual e o maior arquipelago brasileiro?",
      options: [
        { id: "a", text: "Fernando de Noronha", isCorrect: false },
        { id: "b", text: "Arquipelago de Abrolhos", isCorrect: false },
        { id: "c", text: "Ilha de Marajo", isCorrect: true },
        { id: "d", text: "Ilhabela", isCorrect: false },
      ],
      explanation: "A Ilha de Marajo, no Para, e a maior ilha fluviomarinha do mundo!",
    },
    {
      id: "q13",
      text: "Em qual estado fica as Cataratas do Iguacu?",
      options: [
        { id: "a", text: "Santa Catarina", isCorrect: false },
        { id: "b", text: "Parana", isCorrect: true },
        { id: "c", text: "Rio Grande do Sul", isCorrect: false },
        { id: "d", text: "Mato Grosso do Sul", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "Qual fuso horario oficial do Brasil (horario de Brasilia)?",
      options: [
        { id: "a", text: "GMT -2", isCorrect: false },
        { id: "b", text: "GMT -3", isCorrect: true },
        { id: "c", text: "GMT -4", isCorrect: false },
        { id: "d", text: "GMT -5", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "A linha do Equador passa por quais estados brasileiros?",
      options: [
        { id: "a", text: "Amazonas, Para, Amapa e Roraima", isCorrect: true },
        { id: "b", text: "Acre, Rondonia e Tocantins", isCorrect: false },
        { id: "c", text: "Maranhao, Piaui e Ceara", isCorrect: false },
        { id: "d", text: "Mato Grosso, Goias e Bahia", isCorrect: false },
      ],
    },
  ],
};
