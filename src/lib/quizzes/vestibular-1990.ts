import type { Quiz } from "@/lib/types";

export const vestibular1990: Quiz = {
  id: "vestibular-1990",
  slug: "voce-passaria-no-vestibular-de-1990",
  title: "Voce Passaria no Vestibular de 1990?",
  description: "Perguntas reais de vestibulares dos anos 90 — sera que voce passaria?",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "📚",
  color: "#D97706",
  tags: ["vestibular", "educacao", "enem", "historia", "nostalgia"],
  createdAt: "2026-06-11",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Qual foi o regime politico do Brasil entre 1964 e 1985?",
      options: [
        { id: "a", text: "Monarquia", isCorrect: false },
        { id: "b", text: "Ditadura militar", isCorrect: true },
        { id: "c", text: "Republica parlamentarista", isCorrect: false },
        { id: "d", text: "Anarquia", isCorrect: false },
      ],
    },
    {
      id: "q2",
      text: "Qual e a formula da agua?",
      options: [
        { id: "a", text: "CO2", isCorrect: false },
        { id: "b", text: "H2O", isCorrect: true },
        { id: "c", text: "NaCl", isCorrect: false },
        { id: "d", text: "O2", isCorrect: false },
      ],
    },
    {
      id: "q3",
      text: "Quem escreveu 'Dom Casmurro'?",
      options: [
        { id: "a", text: "Jose de Alencar", isCorrect: false },
        { id: "b", text: "Machado de Assis", isCorrect: true },
        { id: "c", text: "Monteiro Lobato", isCorrect: false },
        { id: "d", text: "Castro Alves", isCorrect: false },
      ],
      explanation: "Machado de Assis e considerado o maior escritor brasileiro. Dom Casmurro (1899) traz a famosa duvida: Capitu traiu ou nao?",
    },
    {
      id: "q4",
      text: "Qual e a raiz quadrada de 144?",
      options: [
        { id: "a", text: "10", isCorrect: false },
        { id: "b", text: "12", isCorrect: true },
        { id: "c", text: "14", isCorrect: false },
        { id: "d", text: "16", isCorrect: false },
      ],
    },
    {
      id: "q5",
      text: "Em que ano caiu o Muro de Berlim?",
      options: [
        { id: "a", text: "1987", isCorrect: false },
        { id: "b", text: "1989", isCorrect: true },
        { id: "c", text: "1991", isCorrect: false },
        { id: "d", text: "1993", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Qual e o maior osso do corpo humano?",
      options: [
        { id: "a", text: "Tibia", isCorrect: false },
        { id: "b", text: "Femur", isCorrect: true },
        { id: "c", text: "Umero", isCorrect: false },
        { id: "d", text: "Costela", isCorrect: false },
      ],
    },
    {
      id: "q7",
      text: "Qual e a capital da Australia?",
      options: [
        { id: "a", text: "Sydney", isCorrect: false },
        { id: "b", text: "Melbourne", isCorrect: false },
        { id: "c", text: "Canberra", isCorrect: true },
        { id: "d", text: "Brisbane", isCorrect: false },
      ],
      explanation: "A maioria erra essa! Canberra foi construida como capital de compromisso entre Sydney e Melbourne.",
    },
    {
      id: "q8",
      text: "O que e mitose?",
      options: [
        { id: "a", text: "Divisao celular que gera celulas identicas", isCorrect: true },
        { id: "b", text: "Processo de digestao de proteinas", isCorrect: false },
        { id: "c", text: "Reacao quimica do sangue", isCorrect: false },
        { id: "d", text: "Processo de fotossintese", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "Quem pintou a Mona Lisa?",
      options: [
        { id: "a", text: "Michelangelo", isCorrect: false },
        { id: "b", text: "Leonardo da Vinci", isCorrect: true },
        { id: "c", text: "Rafael", isCorrect: false },
        { id: "d", text: "Van Gogh", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "Qual e o resultado de 3² + 4²?",
      options: [
        { id: "a", text: "14", isCorrect: false },
        { id: "b", text: "25", isCorrect: true },
        { id: "c", text: "49", isCorrect: false },
        { id: "d", text: "7", isCorrect: false },
      ],
      explanation: "3² = 9 e 4² = 16. Portanto 9 + 16 = 25. E tambem o famoso triangulo pitagorico 3-4-5!",
    },
    {
      id: "q11",
      text: "Qual tratado dividiu o mundo entre Portugal e Espanha em 1494?",
      options: [
        { id: "a", text: "Tratado de Versalhes", isCorrect: false },
        { id: "b", text: "Tratado de Tordesilhas", isCorrect: true },
        { id: "c", text: "Tratado de Madrid", isCorrect: false },
        { id: "d", text: "Tratado de Utrecht", isCorrect: false },
      ],
    },
    {
      id: "q12",
      text: "Qual e o gas responsavel pelo efeito estufa?",
      options: [
        { id: "a", text: "Oxigenio (O2)", isCorrect: false },
        { id: "b", text: "Nitrogenio (N2)", isCorrect: false },
        { id: "c", text: "Gas carbonico (CO2)", isCorrect: true },
        { id: "d", text: "Helio (He)", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "Quem foi o lider da Revolucao Francesa que foi guilhotinado?",
      options: [
        { id: "a", text: "Napoleao Bonaparte", isCorrect: false },
        { id: "b", text: "Robespierre", isCorrect: true },
        { id: "c", text: "Voltaire", isCorrect: false },
        { id: "d", text: "Luis XVI", isCorrect: false },
      ],
      explanation: "Tanto Luis XVI quanto Robespierre foram guilhotinados, mas Robespierre foi o lider revolucionario que acabou vitima do proprio Terror.",
    },
    {
      id: "q14",
      text: "Qual e o sinonimo de 'prodigioso'?",
      options: [
        { id: "a", text: "Preguicoso", isCorrect: false },
        { id: "b", text: "Extraordinario", isCorrect: true },
        { id: "c", text: "Perigoso", isCorrect: false },
        { id: "d", text: "Produtivo", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Se um trem viaja a 120 km/h, quantos km percorre em 45 minutos?",
      options: [
        { id: "a", text: "80 km", isCorrect: false },
        { id: "b", text: "90 km", isCorrect: true },
        { id: "c", text: "100 km", isCorrect: false },
        { id: "d", text: "60 km", isCorrect: false },
      ],
    },
  ],
};
