import type { Quiz } from "@/lib/types";

export const qualSignoDeveriaSer: Quiz = {
  id: "qual-signo-deveria-ser",
  slug: "qual-signo-voce-deveria-ser",
  title: "Qual Signo Voce Deveria Ser?",
  description: "Sera que seu signo real combina com sua personalidade? Descubra qual deveria ser!",
  type: "personality",
  category: "personalidade",
  emoji: "♈",
  color: "#EC4899",
  plays: 11200,
  tags: ["signo", "zodiaco", "personalidade", "astrologia", "viral"],
  createdAt: "2026-06-11",
  featured: true,
  profiles: [
    {
      id: "aries",
      title: "Aries ♈ (Fogo)",
      emoji: "🔥",
      description:
        "Voce deveria ser ariano(a)! Corajoso, impulsivo e cheio de energia. Voce nao espera as coisas acontecerem — faz acontecer! Lider nato, competitivo e com uma paixao que contagia. Pode ser cabeca dura, mas ninguem duvida da sua determinacao!",
    },
    {
      id: "leao",
      title: "Leao ♌ (Fogo)",
      emoji: "👑",
      description:
        "Voce deveria ser leonino(a)! Dramatico, carismatico e adora ser o centro das atencoes. Generoso com quem ama e leal ate o fim. Seu ego e grande, mas seu coracao e maior! Nasceu pra brilhar!",
    },
    {
      id: "escorpiao",
      title: "Escorpiao ♏ (Agua)",
      emoji: "🦂",
      description:
        "Voce deveria ser escorpiano(a)! Intenso, misterioso e com uma presenca magnética. Voce sente tudo profundamente e nao perdoa facilmente. Sua intuicao e afiada e voce enxerga o que os outros escondem!",
    },
    {
      id: "aquario",
      title: "Aquario ♒ (Ar)",
      emoji: "💫",
      description:
        "Voce deveria ser aquariano(a)! Unico, rebelde e a frente do seu tempo. Voce pensa diferente de todo mundo e nao se importa em ser 'estranho'. Humanitario, inventivo e com ideias que as pessoas so entendem 10 anos depois!",
    },
    {
      id: "touro",
      title: "Touro ♉ (Terra)",
      emoji: "🌿",
      description:
        "Voce deveria ser taurino(a)! Estavel, sensorial e gourmet. Voce ama conforto, boa comida e as coisas boas da vida. Leal e paciente, mas quando perde a paciencia... corre! Pes no chao e coracao no lugar certo.",
    },
    {
      id: "gemeos",
      title: "Gemeos ♊ (Ar)",
      emoji: "🎭",
      description:
        "Voce deveria ser geminiano(a)! Comunicativo, curioso e nunca entediado. Tem duas (ou mais) personalidades e consegue conversar sobre qualquer assunto. Versatil e sociavel — o melhor papo de qualquer festa!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Numa festa, voce:",
      options: [
        { id: "a", text: "Sou o primeiro a chegar e o ultimo a sair", profilePoints: { aries: 3, leao: 1 } },
        { id: "b", text: "Sou o centro da roda de conversa", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo tudo de um canto estrategico", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Converso com todo mundo sobre tudo", profilePoints: { gemeos: 3, aquario: 1 } },
        { id: "e", text: "Fico no canto confortavel com comida e drink", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q2",
      text: "O que mais te define?",
      options: [
        { id: "a", text: "Coragem e impulsividade", profilePoints: { aries: 3 } },
        { id: "b", text: "Carisma e generosidade", profilePoints: { leao: 3 } },
        { id: "c", text: "Intensidade e misterio", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Originalidade e independencia", profilePoints: { aquario: 3 } },
        { id: "e", text: "Estabilidade e sensualidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como voce lida com uma traicao?",
      options: [
        { id: "a", text: "Explodo na hora — raiva instantanea", profilePoints: { aries: 3 } },
        { id: "b", text: "Fico dramatico(a) e faço questao que todos saibam", profilePoints: { leao: 3 } },
        { id: "c", text: "Guardo e planejo minha vinganca gelada", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Processo racionalmente e sigo em frente", profilePoints: { aquario: 3, gemeos: 1 } },
        { id: "e", text: "Demoro pra aceitar mas corto a pessoa pra sempre", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual e seu amor incondicional?",
      options: [
        { id: "a", text: "Adrenalina e aventura", profilePoints: { aries: 3 } },
        { id: "b", text: "Atencao e admiracao", profilePoints: { leao: 3 } },
        { id: "c", text: "Conexao profunda e verdadeira", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Liberdade e ideias novas", profilePoints: { aquario: 3 } },
        { id: "e", text: "Conforto, comida e natureza", profilePoints: { touro: 3 } },
        { id: "f", text: "Conversas e novas pessoas", profilePoints: { gemeos: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Seu maior defeito?",
      options: [
        { id: "a", text: "Impulsividade — ajo sem pensar", profilePoints: { aries: 3 } },
        { id: "b", text: "Ego — preciso ser o centro", profilePoints: { leao: 3 } },
        { id: "c", text: "Ciumes e possessividade", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Frieza emocional", profilePoints: { aquario: 3 } },
        { id: "e", text: "Teimosia absoluta", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual elemento voce mais se identifica?",
      options: [
        { id: "a", text: "Fogo — paixao e energia", profilePoints: { aries: 2, leao: 2 } },
        { id: "b", text: "Agua — emocao e profundidade", profilePoints: { escorpiao: 3 } },
        { id: "c", text: "Ar — razao e comunicacao", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "d", text: "Terra — estabilidade e praticidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que voce faz quando gosta de alguem?",
      options: [
        { id: "a", text: "Chego junto direto — sem medo", profilePoints: { aries: 3 } },
        { id: "b", text: "Conquisto com charme e presentes", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo de longe e descubro tudo sobre a pessoa", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Viro amigo primeiro e vejo se rola", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Sou romantico(a) — flores, jantares, gestos", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual cor voce mais veste?",
      options: [
        { id: "a", text: "Vermelho", profilePoints: { aries: 3 } },
        { id: "b", text: "Dourado/Amarelo", profilePoints: { leao: 3 } },
        { id: "c", text: "Preto", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Cores diferentes e chamativas", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Tons terrosos e neutros", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Voce se considera mais:",
      options: [
        { id: "a", text: "Competitivo e guerreiro", profilePoints: { aries: 3 } },
        { id: "b", text: "Confiante e luminoso", profilePoints: { leao: 3 } },
        { id: "c", text: "Intenso e transformador", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Visionario e diferente", profilePoints: { aquario: 3 } },
        { id: "e", text: "Firme e confiavel", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se voce pudesse ter um superpoder:",
      options: [
        { id: "a", text: "Super forca", profilePoints: { aries: 3 } },
        { id: "b", text: "Controlar o fogo", profilePoints: { leao: 3 } },
        { id: "c", text: "Ler mentes", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Teletransporte", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Imortalidade", profilePoints: { touro: 3 } },
      ],
    },
  ],
};
