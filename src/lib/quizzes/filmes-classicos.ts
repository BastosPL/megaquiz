import type { Quiz } from "@/lib/types";

export const filmesClassicos: Quiz = {
  id: "filmes-classicos",
  slug: "quiz-filmes-classicos",
  title: "Quiz Filmes Classicos de Hollywood",
  description: "De Titanic a Matrix — quanto voce sabe sobre os maiores filmes da historia?",
  type: "trivia",
  category: "series-filmes",
  emoji: "🎬",
  color: "#FFD700",
  tags: ["filmes", "cinema", "hollywood", "classicos", "oscar"],
  createdAt: "2026-06-09",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Qual filme ganhou 11 Oscars em 1998, incluindo Melhor Filme?",
      options: [
        { id: "a", text: "O Resgate do Soldado Ryan", isCorrect: false },
        { id: "b", text: "Titanic", isCorrect: true },
        { id: "c", text: "Shakespeare Apaixonado", isCorrect: false },
        { id: "d", text: "Forrest Gump", isCorrect: false },
      ],
      explanation: "Titanic igualou o recorde de Ben-Hur com 11 estatuetas do Oscar.",
    },
    {
      id: "q2",
      text: "Em Matrix, qual pilula Neo escolhe?",
      options: [
        { id: "a", text: "Azul", isCorrect: false },
        { id: "b", text: "Verde", isCorrect: false },
        { id: "c", text: "Vermelha", isCorrect: true },
        { id: "d", text: "Branca", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Qual ator interpretou Jack em Titanic?",
      options: [
        { id: "a", text: "Brad Pitt", isCorrect: false },
        { id: "b", text: "Leonardo DiCaprio", isCorrect: true },
        { id: "c", text: "Johnny Depp", isCorrect: false },
        { id: "d", text: "Matt Damon", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "Qual e a frase iconica de 'O Poderoso Chefao'?",
      options: [
        { id: "a", text: "Eu sou inevitavel", isCorrect: false },
        { id: "b", text: "Vou fazer uma oferta irrecusavel", isCorrect: true },
        { id: "c", text: "Que a Forca esteja com voce", isCorrect: false },
        { id: "d", text: "Eu voltarei", isCorrect: false },
      ],
    },
    {
      id: "q5",
      text: "Em qual planeta se passa Avatar (2009)?",
      options: [
        { id: "a", text: "Tatooine", isCorrect: false },
        { id: "b", text: "Pandora", isCorrect: true },
        { id: "c", text: "Endor", isCorrect: false },
        { id: "d", text: "Krypton", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Quem dirigiu Jurassic Park (1993)?",
      options: [
        { id: "a", text: "James Cameron", isCorrect: false },
        { id: "b", text: "Steven Spielberg", isCorrect: true },
        { id: "c", text: "George Lucas", isCorrect: false },
        { id: "d", text: "Ridley Scott", isCorrect: false },
      ],
    },
    {
      id: "q7",
      text: "Em Vingadores: Ultimato, quem faz o estalo final?",
      options: [
        { id: "a", text: "Thor", isCorrect: false },
        { id: "b", text: "Thanos", isCorrect: false },
        { id: "c", text: "Homem de Ferro (Tony Stark)", isCorrect: true },
        { id: "d", text: "Hulk", isCorrect: false },
      ],
      explanation: "Tony Stark faz o estalo final com as Joias do Infinito, sacrificando sua vida para salvar o universo.",
    },
    {
      id: "q8",
      text: "Qual filme brasileiro ganhou indicacao ao Oscar de Melhor Filme Estrangeiro em 1999?",
      options: [
        { id: "a", text: "Cidade de Deus", isCorrect: false },
        { id: "b", text: "Central do Brasil", isCorrect: true },
        { id: "c", text: "Tropa de Elite", isCorrect: false },
        { id: "d", text: "O Auto da Compadecida", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Quantos filmes tem a saga original de Star Wars?",
      options: [
        { id: "a", text: "3", isCorrect: false },
        { id: "b", text: "6", isCorrect: false },
        { id: "c", text: "9", isCorrect: true },
        { id: "d", text: "12", isCorrect: false },
      ],
      explanation: "A saga Skywalker tem 9 filmes divididos em 3 trilogias (1977-2019).",
    },
    {
      id: "q10",
      text: "Qual e o filme de maior bilheteria de todos os tempos (ate 2026)?",
      options: [
        { id: "a", text: "Vingadores: Ultimato", isCorrect: false },
        { id: "b", text: "Avatar", isCorrect: true },
        { id: "c", text: "Titanic", isCorrect: false },
        { id: "d", text: "Star Wars: O Despertar da Forca", isCorrect: false },
      ],
    },
    {
      id: "q11",
      text: "Em qual cidade se passa Batman: O Cavaleiro das Trevas?",
      options: [
        { id: "a", text: "Metropolis", isCorrect: false },
        { id: "b", text: "Nova York", isCorrect: false },
        { id: "c", text: "Gotham City", isCorrect: true },
        { id: "d", text: "Star City", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Qual ator disse 'Eu sou o Groot' nos filmes da Marvel?",
      options: [
        { id: "a", text: "Chris Pratt", isCorrect: false },
        { id: "b", text: "Vin Diesel", isCorrect: true },
        { id: "c", text: "Dave Bautista", isCorrect: false },
        { id: "d", text: "Bradley Cooper", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Qual desses filmes NAO e da Pixar?",
      options: [
        { id: "a", text: "Toy Story", isCorrect: false },
        { id: "b", text: "Shrek", isCorrect: true },
        { id: "c", text: "Procurando Nemo", isCorrect: false },
        { id: "d", text: "Divertida Mente", isCorrect: false },
      ],
      explanation: "Shrek e da DreamWorks Animation, nao da Pixar!",
    },
    {
      id: "q14",
      text: "Em 'O Senhor dos Aneis', quem carrega o Um Anel ate a Montanha da Perdicao?",
      options: [
        { id: "a", text: "Aragorn", isCorrect: false },
        { id: "b", text: "Gandalf", isCorrect: false },
        { id: "c", text: "Frodo", isCorrect: true },
        { id: "d", text: "Legolas", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Qual personagem diz 'Hakuna Matata' no Rei Leao?",
      options: [
        { id: "a", text: "Simba e Nala", isCorrect: false },
        { id: "b", text: "Timao e Pumba", isCorrect: true },
        { id: "c", text: "Scar e as Hienas", isCorrect: false },
        { id: "d", text: "Mufasa e Rafiki", isCorrect: false },
      ],
    },
  ],
};
