import type { Quiz } from "@/lib/types";

export const timesBrasileiros: Quiz = {
  id: "times-brasileiros",
  slug: "quanto-voce-sabe-sobre-os-times-brasileiros",
  title: "Quanto voce sabe sobre os times brasileiros?",
  description:
    "De Flamengo a Gremio, de Corinthians a Bahia. Teste seus conhecimentos sobre o futebol brasileiro! 3 erros e voce esta fora.",
  type: "trivia",
  category: "esportes",
  emoji: "⚽",
  color: "#F59E0B",
  plays: 5621,
  tags: ["futebol brasileiro", "times", "brasileirao", "esportes"],
  createdAt: "2026-06-08",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Qual time brasileiro tem mais titulos do Campeonato Brasileiro?",
      options: [
        { id: "a", text: "Santos", isCorrect: false },
        { id: "b", text: "Palmeiras", isCorrect: true },
        { id: "c", text: "Flamengo", isCorrect: false },
        { id: "d", text: "Corinthians", isCorrect: false },
      ],
      explanation: "O Palmeiras tem 12 titulos do Brasileirao, sendo o maior campeao.",
    },
    {
      id: "q2",
      text: "Qual o estadio do Flamengo?",
      options: [
        { id: "a", text: "Maracana", isCorrect: true },
        { id: "b", text: "Engenhao", isCorrect: false },
        { id: "c", text: "Sao Januario", isCorrect: false },
        { id: "d", text: "Ilha do Urubu", isCorrect: false },
      ],
      explanation: "O Flamengo manda seus jogos no Maracana, maior estadio do Brasil.",
    },
    {
      id: "q3",
      text: "Qual time e conhecido como 'Timao'?",
      options: [
        { id: "a", text: "Sao Paulo", isCorrect: false },
        { id: "b", text: "Palmeiras", isCorrect: false },
        { id: "c", text: "Corinthians", isCorrect: true },
        { id: "d", text: "Santos", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Quantas Libertadores o Flamengo conquistou?",
      options: [
        { id: "a", text: "2", isCorrect: false },
        { id: "b", text: "3", isCorrect: true },
        { id: "c", text: "4", isCorrect: false },
        { id: "d", text: "1", isCorrect: false },
      ],
      explanation: "O Flamengo venceu a Libertadores em 1981, 2019 e 2022.",
    },
    {
      id: "q5",
      text: "Qual time paulista e chamado de 'Verdao'?",
      options: [
        { id: "a", text: "Santos", isCorrect: false },
        { id: "b", text: "Sao Paulo", isCorrect: false },
        { id: "c", text: "Palmeiras", isCorrect: true },
        { id: "d", text: "Guarani", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Em que ano o Corinthians ganhou o Mundial de Clubes?",
      options: [
        { id: "a", text: "2010", isCorrect: false },
        { id: "b", text: "2012", isCorrect: true },
        { id: "c", text: "2011", isCorrect: false },
        { id: "d", text: "2013", isCorrect: false },
      ],
      explanation: "O Corinthians venceu o Chelsea por 1x0 na final em Yokohama, gol de Guerrero.",
    },
    {
      id: "q7",
      text: "Qual o classico entre Flamengo e Fluminense?",
      options: [
        { id: "a", text: "Classico dos Milhoes", isCorrect: false },
        { id: "b", text: "Fla-Flu", isCorrect: true },
        { id: "c", text: "Classico da Rivalidade", isCorrect: false },
        { id: "d", text: "Derby Carioca", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Qual time gaucho e conhecido como 'Tricolor'?",
      options: [
        { id: "a", text: "Internacional", isCorrect: false },
        { id: "b", text: "Gremio", isCorrect: true },
        { id: "c", text: "Juventude", isCorrect: false },
        { id: "d", text: "Caxias", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Pele fez a maior parte de sua carreira em qual time?",
      options: [
        { id: "a", text: "Corinthians", isCorrect: false },
        { id: "b", text: "Sao Paulo", isCorrect: false },
        { id: "c", text: "Santos", isCorrect: true },
        { id: "d", text: "Flamengo", isCorrect: false },
      ],
      explanation: "Pele jogou no Santos de 1956 a 1974, marcando mais de 1.000 gols pelo clube.",
    },
    {
      id: "q10",
      text: "Qual time brasileiro nunca foi rebaixado para a Serie B?",
      options: [
        { id: "a", text: "Flamengo", isCorrect: false },
        { id: "b", text: "Santos", isCorrect: false },
        { id: "c", text: "Sao Paulo", isCorrect: true },
        { id: "d", text: "Palmeiras", isCorrect: false },
      ],
      explanation: "O Sao Paulo e o unico grande que nunca caiu para a segunda divisao.",
    },
    {
      id: "q11",
      text: "Qual time mineiro e chamado de 'Galo'?",
      options: [
        { id: "a", text: "Cruzeiro", isCorrect: false },
        { id: "b", text: "Atletico Mineiro", isCorrect: true },
        { id: "c", text: "America Mineiro", isCorrect: false },
        { id: "d", text: "Atletico Goianiense", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Em que ano o Palmeiras ganhou sua primeira Libertadores?",
      options: [
        { id: "a", text: "1999", isCorrect: true },
        { id: "b", text: "2000", isCorrect: false },
        { id: "c", text: "2020", isCorrect: false },
        { id: "d", text: "1995", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Qual o maior artilheiro da historia do Campeonato Brasileiro?",
      options: [
        { id: "a", text: "Romario", isCorrect: false },
        { id: "b", text: "Zico", isCorrect: false },
        { id: "c", text: "Roberto Dinamite", isCorrect: true },
        { id: "d", text: "Edmundo", isCorrect: false },
      ],
      explanation: "Roberto Dinamite marcou 190 gols no Brasileirao, pelo Vasco da Gama.",
    },
    {
      id: "q14",
      text: "O estadio 'Beira-Rio' pertence a qual time?",
      options: [
        { id: "a", text: "Gremio", isCorrect: false },
        { id: "b", text: "Internacional", isCorrect: true },
        { id: "c", text: "Atletico Paranaense", isCorrect: false },
        { id: "d", text: "Coritiba", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Qual time nordestino tem mais titulos do Brasileirao?",
      options: [
        { id: "a", text: "Sport", isCorrect: false },
        { id: "b", text: "Bahia", isCorrect: true },
        { id: "c", text: "Fortaleza", isCorrect: false },
        { id: "d", text: "Nautico", isCorrect: false },
      ],
      explanation: "O Bahia venceu o Brasileirao em 1959 e 1988.",
    },
    {
      id: "q16",
      text: "Qual time e conhecido como 'Mengao'?",
      options: [
        { id: "a", text: "Vasco", isCorrect: false },
        { id: "b", text: "Botafogo", isCorrect: false },
        { id: "c", text: "Flamengo", isCorrect: true },
        { id: "d", text: "Fluminense", isCorrect: false },
      ],
    },
    {
      id: "q17",
      text: "Quantas vezes o Santos ganhou a Libertadores?",
      options: [
        { id: "a", text: "2 vezes", isCorrect: false },
        { id: "b", text: "3 vezes", isCorrect: true },
        { id: "c", text: "4 vezes", isCorrect: false },
        { id: "d", text: "1 vez", isCorrect: false },
      ],
      explanation: "O Santos venceu em 1962, 1963 e 2011.",
    },
    {
      id: "q18",
      text: "O classico 'Grenal' e entre quais times?",
      options: [
        { id: "a", text: "Gremio x Internacional", isCorrect: true },
        { id: "b", text: "Gremio x Juventude", isCorrect: false },
        { id: "c", text: "Inter x Caxias", isCorrect: false },
        { id: "d", text: "Gremio x Coritiba", isCorrect: false },
      ],
    },
    {
      id: "q19",
      text: "Qual time brasileiro tem a maior torcida do pais?",
      options: [
        { id: "a", text: "Corinthians", isCorrect: false },
        { id: "b", text: "Flamengo", isCorrect: true },
        { id: "c", text: "Sao Paulo", isCorrect: false },
        { id: "d", text: "Palmeiras", isCorrect: false },
      ],
      explanation: "O Flamengo tem a maior torcida do Brasil, estimada em mais de 40 milhoes.",
    },
    {
      id: "q20",
      text: "Qual time ganhou a primeira edicao da Copa do Brasil em 1989?",
      options: [
        { id: "a", text: "Flamengo", isCorrect: false },
        { id: "b", text: "Gremio", isCorrect: true },
        { id: "c", text: "Cruzeiro", isCorrect: false },
        { id: "d", text: "Palmeiras", isCorrect: false },
      ],
    },
  ],
};
