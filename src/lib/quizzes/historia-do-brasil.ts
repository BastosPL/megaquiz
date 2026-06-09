import type { Quiz } from "@/lib/types";

export const historiaDoBrasil: Quiz = {
  id: "historia-do-brasil",
  slug: "quiz-historia-do-brasil",
  title: "Quiz Historia do Brasil",
  description: "Do descobrimento a republica — quanto voce sabe sobre a historia do nosso pais?",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🇧🇷",
  color: "#009739",
  plays: 6340,
  tags: ["historia", "brasil", "educacao", "enem", "vestibular"],
  createdAt: "2026-06-09",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Em que ano Pedro Alvares Cabral chegou ao Brasil?",
      options: [
        { id: "a", text: "1492", isCorrect: false },
        { id: "b", text: "1500", isCorrect: true },
        { id: "c", text: "1510", isCorrect: false },
        { id: "d", text: "1534", isCorrect: false },
      ],
      explanation: "Cabral chegou ao litoral baiano em 22 de abril de 1500.",
    },
    {
      id: "q2",
      text: "Quem proclamou a Independencia do Brasil?",
      options: [
        { id: "a", text: "Dom Pedro II", isCorrect: false },
        { id: "b", text: "Jose Bonifacio", isCorrect: false },
        { id: "c", text: "Dom Pedro I", isCorrect: true },
        { id: "d", text: "Tiradentes", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Em que ano foi abolida a escravidao no Brasil?",
      options: [
        { id: "a", text: "1822", isCorrect: false },
        { id: "b", text: "1850", isCorrect: false },
        { id: "c", text: "1888", isCorrect: true },
        { id: "d", text: "1889", isCorrect: false },
      ],
      explanation: "A Lei Aurea foi assinada pela Princesa Isabel em 13 de maio de 1888, sendo o Brasil o ultimo pais das Americas a abolir a escravidao.",
    },
    {
      id: "q4",
      text: "Quem foi o primeiro presidente do Brasil?",
      options: [
        { id: "a", text: "Getulio Vargas", isCorrect: false },
        { id: "b", text: "Deodoro da Fonseca", isCorrect: true },
        { id: "c", text: "Floriano Peixoto", isCorrect: false },
        { id: "d", text: "Prudente de Morais", isCorrect: false },
      ],
    },
    {
      id: "q5",
      text: "Qual era o nome do movimento de Tiradentes?",
      options: [
        { id: "a", text: "Revolta dos Farrapos", isCorrect: false },
        { id: "b", text: "Inconfidencia Mineira", isCorrect: true },
        { id: "c", text: "Conjuracao Baiana", isCorrect: false },
        { id: "d", text: "Guerra dos Canudos", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Quem construiu Brasilia?",
      options: [
        { id: "a", text: "Getulio Vargas", isCorrect: false },
        { id: "b", text: "Juscelino Kubitschek", isCorrect: true },
        { id: "c", text: "Joao Goulart", isCorrect: false },
        { id: "d", text: "Tancredo Neves", isCorrect: false },
      ],
      explanation: "JK inaugurou Brasilia em 21 de abril de 1960 com o projeto urbanistico de Lucio Costa e arquitetura de Oscar Niemeyer.",
    },
    {
      id: "q7",
      text: "Quanto tempo durou a ditadura militar no Brasil?",
      options: [
        { id: "a", text: "10 anos (1964-1974)", isCorrect: false },
        { id: "b", text: "15 anos (1964-1979)", isCorrect: false },
        { id: "c", text: "21 anos (1964-1985)", isCorrect: true },
        { id: "d", text: "25 anos (1964-1989)", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Qual foi a principal riqueza do Brasil colonia no seculo XVIII?",
      options: [
        { id: "a", text: "Cafe", isCorrect: false },
        { id: "b", text: "Cana-de-acucar", isCorrect: false },
        { id: "c", text: "Ouro", isCorrect: true },
        { id: "d", text: "Borracha", isCorrect: false },
      ],
      explanation: "O Ciclo do Ouro (seculo XVIII) transformou Minas Gerais no centro economico da colonia.",
    },
    {
      id: "q9",
      text: "Quem assinou a Lei Aurea?",
      options: [
        { id: "a", text: "Dom Pedro II", isCorrect: false },
        { id: "b", text: "Princesa Isabel", isCorrect: true },
        { id: "c", text: "Jose do Patrocinio", isCorrect: false },
        { id: "d", text: "Joaquim Nabuco", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "O que foi o 'Grito do Ipiranga'?",
      options: [
        { id: "a", text: "A abolicao da escravidao", isCorrect: false },
        { id: "b", text: "A proclamacao da Republica", isCorrect: false },
        { id: "c", text: "A declaracao de Independencia", isCorrect: true },
        { id: "d", text: "O inicio da ditadura", isCorrect: false },
      ],
    },
    {
      id: "q11",
      text: "Em que ano o Brasil se tornou Republica?",
      options: [
        { id: "a", text: "1822", isCorrect: false },
        { id: "b", text: "1888", isCorrect: false },
        { id: "c", text: "1889", isCorrect: true },
        { id: "d", text: "1891", isCorrect: false },
      ],
      explanation: "A Republica foi proclamada em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca.",
    },
    {
      id: "q12",
      text: "Qual presidente ficou conhecido como 'Pai dos Pobres'?",
      options: [
        { id: "a", text: "Juscelino Kubitschek", isCorrect: false },
        { id: "b", text: "Getulio Vargas", isCorrect: true },
        { id: "c", text: "Lula", isCorrect: false },
        { id: "d", text: "Joao Goulart", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Que pais colonizou o Brasil?",
      options: [
        { id: "a", text: "Espanha", isCorrect: false },
        { id: "b", text: "Franca", isCorrect: false },
        { id: "c", text: "Portugal", isCorrect: true },
        { id: "d", text: "Holanda", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "A primeira capital do Brasil foi:",
      options: [
        { id: "a", text: "Rio de Janeiro", isCorrect: false },
        { id: "b", text: "Salvador", isCorrect: true },
        { id: "c", text: "Sao Paulo", isCorrect: false },
        { id: "d", text: "Recife", isCorrect: false },
      ],
      explanation: "Salvador foi a primeira capital (1549-1763), seguida pelo Rio de Janeiro (1763-1960) e depois Brasilia.",
    },
    {
      id: "q15",
      text: "Qual movimento pediu eleicoes diretas em 1984?",
      options: [
        { id: "a", text: "Semana de Arte Moderna", isCorrect: false },
        { id: "b", text: "Tropicalia", isCorrect: false },
        { id: "c", text: "Diretas Ja", isCorrect: true },
        { id: "d", text: "Caras-Pintadas", isCorrect: false },
      ],
    },
  ],
};
