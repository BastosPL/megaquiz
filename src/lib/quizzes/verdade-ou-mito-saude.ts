import type { Quiz } from "@/lib/types";

export const verdadeOuMitoSaude: Quiz = {
  id: "verdade-ou-mito-saude",
  slug: "verdade-ou-mito-edicao-saude",
  title: "Verdade ou Mito — Edicao Saude",
  description: "Beber agua em jejum emagrece? Estalar os dedos causa artrite? Descubra a verdade!",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🏥",
  color: "#10B981",
  tags: ["saude", "mitos", "verdade", "corpo humano", "curiosidades"],
  createdAt: "2026-06-11",
  featured: true,
  questions: [
    {
      id: "q1",
      text: "Estalar os dedos causa artrite?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Estudos mostram que estalar os dedos nao causa artrite. O som vem de bolhas de gas no liquido sinovial.",
    },
    {
      id: "q2",
      text: "Comer manga com leite faz mal?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito total! Essa lenda foi criada na epoca da escravidao para impedir que escravizados consumissem leite (que era caro).",
    },
    {
      id: "q3",
      text: "Dormir menos de 6 horas por noite prejudica a saude?",
      options: [
        { id: "a", text: "Verdade", isCorrect: true },
        { id: "b", text: "Mito", isCorrect: false },
      ],
      explanation: "Verdade! Dormir menos de 6h aumenta riscos de doencas cardiovasculares, diabetes e problemas cognitivos.",
    },
    {
      id: "q4",
      text: "Voce usa apenas 10% do seu cerebro?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Ressonancias magneticas mostram que usamos praticamente 100% do cerebro em diferentes momentos do dia.",
    },
    {
      id: "q5",
      text: "Tomar banho gelado apos refeicao pode causar congestao?",
      options: [
        { id: "a", text: "Verdade (em casos extremos)", isCorrect: true },
        { id: "b", text: "Mito total", isCorrect: false },
      ],
      explanation: "Parcialmente verdade! A mudanca brusca de temperatura pode causar mal-estar, mas nao e tao perigoso quanto diziam nossas maes.",
    },
    {
      id: "q6",
      text: "Acucar causa hiperatividade em criancas?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Estudos cientificos duplo-cegos nao encontraram relacao entre acucar e hiperatividade. E efeito placebo dos pais!",
    },
    {
      id: "q7",
      text: "Ler no escuro prejudica a visao?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Pode causar cansaco nos olhos, mas nao causa dano permanente a visao.",
    },
    {
      id: "q8",
      text: "Beber 2 litros de agua por dia e necessario pra todos?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Depende da pessoa", isCorrect: true },
      ],
      explanation: "Depende! A necessidade varia com peso, atividade fisica e clima. A regra dos 2 litros e uma media que nao serve pra todos.",
    },
    {
      id: "q9",
      text: "Celular causa cancer?",
      options: [
        { id: "a", text: "Verdade comprovada", isCorrect: false },
        { id: "b", text: "Nao ha evidencia solida", isCorrect: true },
      ],
      explanation: "Ate hoje nao ha evidencia cientifica solida de que celulares causem cancer. A OMS classifica como 'possivelmente cancerigeno' por precaucao.",
    },
    {
      id: "q10",
      text: "Fazer exercicio a noite atrapalha o sono?",
      options: [
        { id: "a", text: "Verdade (exercicio intenso)", isCorrect: true },
        { id: "b", text: "Mito total", isCorrect: false },
      ],
      explanation: "Exercicio muito intenso perto da hora de dormir pode atrapalhar sim. Mas exercicio leve/moderado nao prejudica e pode ate ajudar!",
    },
    {
      id: "q11",
      text: "Cabelo e unhas continuam crescendo apos a morte?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! O que acontece e que a pele desidrata e encolhe, dando a ilusao de que cabelo e unhas cresceram.",
    },
    {
      id: "q12",
      text: "Comer a noite engorda mais do que comer de dia?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! O que importa e o total de calorias consumidas no dia, nao o horario. Porem, comer tarde pode afetar a qualidade do sono.",
    },
    {
      id: "q13",
      text: "Vitamina C previne gripe?",
      options: [
        { id: "a", text: "Previne totalmente", isCorrect: false },
        { id: "b", text: "Pode reduzir a duracao, mas nao previne", isCorrect: true },
      ],
      explanation: "Estudos mostram que vitamina C pode reduzir a duracao da gripe em cerca de 8%, mas nao previne a infeccao.",
    },
    {
      id: "q14",
      text: "Cruzar as pernas causa varizes?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Varizes sao causadas por fatores geneticos e hormonais. Cruzar as pernas pode piorar quem ja tem, mas nao causa.",
    },
    {
      id: "q15",
      text: "Ficar no frio causa resfriado?",
      options: [
        { id: "a", text: "Verdade direta", isCorrect: false },
        { id: "b", text: "Mito — virus causa resfriado", isCorrect: true },
      ],
      explanation: "Resfriado e causado por virus, nao pelo frio! Porem, o frio pode enfraquecer o sistema imunologico, facilitando infeccoes.",
    },
  ],
};
