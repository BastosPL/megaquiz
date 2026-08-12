import type { Quiz } from "@/lib/types";

export const qualSignoDeveriaSer: Quiz = {
  id: "qual-signo-deveria-ser",
  slug: "qual-signo-voce-deveria-ser",
  title: "Qual Signo Você Deveria Ser?",
  description: "Será que seu signo real combina com sua personalidade? Descubra qual deveria ser!",
  type: "personality",
  category: "personalidade",
  emoji: "♈",
  color: "#EC4899",
  tags: ["signo", "zodiaco", "personalidade", "astrologia", "viral"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  lastReviewedAt: "2026-07-12",
  introText: "Será que seu signo do zodíaco combina com sua personalidade? Descubra qual signo deveria ser o seu.",
  profiles: [
    {
      id: "aries",
      title: "Áries ♈ (Fogo)",
      emoji: "🔥",
      description:
        "Você deveria ser ariano(a)! Corajoso, impulsivo e cheio de energia. Você não espera as coisas acontecerem — faz acontecer! Líder nato, competitivo e com uma paixão que contagia. Pode ser cabeça dura, mas ninguém duvida da sua determinação!",
    },
    {
      id: "leao",
      title: "Leão ♌ (Fogo)",
      emoji: "👑",
      description:
        "Você deveria ser leonino(a)! Dramático, carismático e adora ser o centro das atenções. Generoso com quem ama e leal até o fim. Seu ego é grande, mas seu coração é maior! Nasceu pra brilhar!",
    },
    {
      id: "escorpiao",
      title: "Escorpião ♏ (Água)",
      emoji: "🦂",
      description:
        "Você deveria ser escorpiano(a)! Intenso, misterioso e com uma presença magnética. Você sente tudo profundamente e não perdoa facilmente. Sua intuição é afiada e você enxerga o que os outros escondem!",
    },
    {
      id: "aquario",
      title: "Aquário ♒ (Ar)",
      emoji: "💫",
      description:
        "Você deveria ser aquariano(a)! Único, rebelde e à frente do seu tempo. Você pensa diferente de todo mundo e não se importa em ser 'estranho'. Humanitário, inventivo e com ideias que as pessoas só entendem 10 anos depois!",
    },
    {
      id: "touro",
      title: "Touro ♉ (Terra)",
      emoji: "🌿",
      description:
        "Você deveria ser taurino(a)! Estável, sensorial e gourmet. Você ama conforto, boa comida e as coisas boas da vida. Leal e paciente, mas quando perde a paciência... corre! Pés no chão e coração no lugar certo.",
    },
    {
      id: "gemeos",
      title: "Gêmeos ♊ (Ar)",
      emoji: "🎭",
      description:
        "Você deveria ser geminiano(a)! Comunicativo, curioso e nunca entediado. Tem duas (ou mais) personalidades e consegue conversar sobre qualquer assunto. Versátil e sociável — o melhor papo de qualquer festa!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Numa festa, você:",
      options: [
        { id: "a", text: "Sou o primeiro a chegar e o último a sair", profilePoints: { aries: 3, leao: 1 } },
        { id: "b", text: "Sou o centro da roda de conversa", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo tudo de um canto estratégico", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Converso com todo mundo sobre tudo", profilePoints: { gemeos: 3, aquario: 1 } },
        { id: "e", text: "Fico no canto confortável com comida e drink", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q2",
      text: "O que mais te define?",
      options: [
        { id: "a", text: "Coragem e impulsividade", profilePoints: { aries: 3 } },
        { id: "b", text: "Carisma e generosidade", profilePoints: { leao: 3 } },
        { id: "c", text: "Intensidade e mistério", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Originalidade e independência", profilePoints: { aquario: 3 } },
        { id: "e", text: "Estabilidade e sensualidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como você lida com uma traição?",
      options: [
        { id: "a", text: "Explodo na hora — raiva instantânea", profilePoints: { aries: 3 } },
        { id: "b", text: "Fico dramático(a) e faço questão que todos saibam", profilePoints: { leao: 3 } },
        { id: "c", text: "Guardo e planejo minha vingança gelada", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Processo racionalmente e sigo em frente", profilePoints: { aquario: 3, gemeos: 1 } },
        { id: "e", text: "Demoro pra aceitar mas corto a pessoa pra sempre", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual é seu amor incondicional?",
      options: [
        { id: "a", text: "Adrenalina e aventura", profilePoints: { aries: 3 } },
        { id: "b", text: "Atenção e admiração", profilePoints: { leao: 3 } },
        { id: "c", text: "Conexão profunda e verdadeira", profilePoints: { escorpiao: 3 } },
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
        { id: "c", text: "Ciúmes e possessividade", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Frieza emocional", profilePoints: { aquario: 3 } },
        { id: "e", text: "Teimosia absoluta", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual elemento você mais se identifica?",
      options: [
        { id: "a", text: "Fogo — paixão e energia", profilePoints: { aries: 2, leao: 2 } },
        { id: "b", text: "Água — emoção e profundidade", profilePoints: { escorpiao: 3 } },
        { id: "c", text: "Ar — razão e comunicação", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "d", text: "Terra — estabilidade e praticidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que você faz quando gosta de alguém?",
      options: [
        { id: "a", text: "Chego junto direto — sem medo", profilePoints: { aries: 3 } },
        { id: "b", text: "Conquisto com charme e presentes", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo de longe e descubro tudo sobre a pessoa", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Viro amigo primeiro e vejo se rola", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Sou romântico(a) — flores, jantares, gestos", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual cor você mais veste?",
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
      text: "Você se considera mais:",
      options: [
        { id: "a", text: "Competitivo e guerreiro", profilePoints: { aries: 3 } },
        { id: "b", text: "Confiante e luminoso", profilePoints: { leao: 3 } },
        { id: "c", text: "Intenso e transformador", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Visionário e diferente", profilePoints: { aquario: 3 } },
        { id: "e", text: "Firme e confiável", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se você pudesse ter um superpoder:",
      options: [
        { id: "a", text: "Super força", profilePoints: { aries: 3 } },
        { id: "b", text: "Controlar o fogo", profilePoints: { leao: 3 } },
        { id: "c", text: "Ler mentes", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Teletransporte", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Imortalidade", profilePoints: { touro: 3 } },
      ],
    },
  ],
};
