import type { Quiz } from "@/lib/types";

export const verdadeOuMitoSaude: Quiz = {
  id: "verdade-ou-mito-saude",
  slug: "verdade-ou-mito-edicao-saude",
  title: "Verdade ou Mito — Edição Saúde",
  description: "Beber água em jejum emagrece? Estalar os dedos causa artrite? Descubra a verdade!",
  type: "trivia",
  category: "conhecimentos-gerais",
  emoji: "🏥",
  color: "#10B981",
  tags: ["saude", "mitos", "verdade", "corpo humano", "curiosidades"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Patrick Bastos",
  authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
  sources: [
    { label: "OMS — Fact Sheets", url: "https://www.who.int/news-room/fact-sheets", organization: "OMS/WHO", accessedAt: "2026-07-12" },
    { label: "PubMed — National Library of Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/", organization: "NIH/NLM", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Estalar os dedos causa artrite? Ler no escuro estraga a visão? Algumas crenças de saúde são mito puro, outras têm base científica — veja se você sabe separar.",
  disclaimer: "Este quiz tem finalidade educativa e de entretenimento. As informações apresentadas são baseadas em fontes científicas, mas não substituem orientação médica profissional. Consulte um profissional de saúde para decisões sobre sua saúde.",
  disclaimerResult: "Resultado recreativo. Não constitui orientação médica.",
  questions: [
    {
      id: "q1",
      text: "Estalar os dedos causa artrite?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Estudos mostram que estalar os dedos não causa artrite. O som vem de bolhas de gás no líquido sinovial.",
    },
    {
      id: "q2",
      text: "Comer manga com leite faz mal?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito total! Essa lenda foi criada na época da escravidão para impedir que escravizados consumissem leite (que era caro).",
    },
    {
      id: "q3",
      text: "Dormir menos de 6 horas por noite prejudica a saúde?",
      options: [
        { id: "a", text: "Verdade", isCorrect: true },
        { id: "b", text: "Mito", isCorrect: false },
      ],
      explanation: "Verdade! Dormir menos de 6h aumenta riscos de doenças cardiovasculares, diabetes e problemas cognitivos.",
    },
    {
      id: "q4",
      text: "Você usa apenas 10% do seu cérebro?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Ressonâncias magnéticas mostram que usamos praticamente 100% do cérebro em diferentes momentos do dia.",
    },
    {
      id: "q5",
      text: "Tomar banho gelado após refeição pode causar congestão?",
      options: [
        { id: "a", text: "Verdade (em casos extremos)", isCorrect: true },
        { id: "b", text: "Mito total", isCorrect: false },
      ],
      explanation: "Parcialmente verdade! A mudança brusca de temperatura pode causar mal-estar, mas não é tão perigoso quanto diziam nossas mães.",
    },
    {
      id: "q6",
      text: "Açúcar causa hiperatividade em crianças?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Estudos científicos duplo-cegos não encontraram relação entre açúcar e hiperatividade. É efeito placebo dos pais!",
    },
    {
      id: "q7",
      text: "Ler no escuro prejudica a visão?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Pode causar cansaço nos olhos, mas não causa dano permanente à visão.",
    },
    {
      id: "q8",
      text: "Beber 2 litros de água por dia é necessário pra todos?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Depende da pessoa", isCorrect: true },
      ],
      explanation: "Depende! A necessidade varia com peso, atividade física e clima. A regra dos 2 litros é uma média que não serve pra todos.",
    },
    {
      id: "q9",
      text: "Celular causa câncer?",
      options: [
        { id: "a", text: "Verdade comprovada", isCorrect: false },
        { id: "b", text: "Não há evidência sólida", isCorrect: true },
      ],
      explanation: "Até hoje não há evidência científica sólida de que celulares causem câncer. A OMS classifica como 'possivelmente cancerígeno' por precaução.",
    },
    {
      id: "q10",
      text: "Fazer exercício à noite atrapalha o sono?",
      options: [
        { id: "a", text: "Verdade (exercício intenso)", isCorrect: true },
        { id: "b", text: "Mito total", isCorrect: false },
      ],
      explanation: "Exercício muito intenso perto da hora de dormir pode atrapalhar sim. Mas exercício leve/moderado não prejudica e pode até ajudar!",
    },
    {
      id: "q11",
      text: "Cabelo e unhas continuam crescendo após a morte?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! O que acontece é que a pele desidrata e encolhe, dando a ilusão de que cabelo e unhas cresceram.",
    },
    {
      id: "q12",
      text: "Comer à noite engorda mais do que comer de dia?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! O que importa é o total de calorias consumidas no dia, não o horário. Porém, comer tarde pode afetar a qualidade do sono.",
    },
    {
      id: "q13",
      text: "Vitamina C previne gripe?",
      options: [
        { id: "a", text: "Previne totalmente", isCorrect: false },
        { id: "b", text: "Pode reduzir a duração, mas não previne", isCorrect: true },
      ],
      explanation: "Estudos mostram que vitamina C pode reduzir a duração da gripe em cerca de 8%, mas não previne a infecção.",
    },
    {
      id: "q14",
      text: "Cruzar as pernas causa varizes?",
      options: [
        { id: "a", text: "Verdade", isCorrect: false },
        { id: "b", text: "Mito", isCorrect: true },
      ],
      explanation: "Mito! Varizes são causadas por fatores genéticos e hormonais. Cruzar as pernas pode piorar quem já tem, mas não causa.",
    },
    {
      id: "q15",
      text: "Ficar no frio causa resfriado?",
      options: [
        { id: "a", text: "Verdade direta", isCorrect: false },
        { id: "b", text: "Mito — vírus causa resfriado", isCorrect: true },
      ],
      explanation: "Resfriado é causado por vírus, não pelo frio! Porém, o frio pode enfraquecer o sistema imunológico, facilitando infecções.",
    },
  ],
};
