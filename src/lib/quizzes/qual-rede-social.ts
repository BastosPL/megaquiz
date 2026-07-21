import type { Quiz } from "@/lib/types";

export const qualRedeSocial: Quiz = {
  id: "qual-rede-social",
  slug: "qual-rede-social-combina-com-voce",
  title: "Qual Rede Social Combina com Você?",
  description: "TikTok, Instagram, Twitter ou Reddit? Descubra qual app é a sua cara!",
  type: "personality",
  category: "personalidade",
  emoji: "📱",
  color: "#8B5CF6",
  tags: ["redes sociais", "personalidade", "internet", "viral", "divertido"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [],
  lastReviewedAt: "2026-07-12",
  introText: "TikTok, Instagram, X ou Reddit? Descubra qual rede social combina com seu jeito de usar a internet.",
  profiles: [
    {
      id: "tiktok",
      title: "TikTok",
      emoji: "🎵",
      description:
        "Você é pura energia e criatividade! Adora tendências, danças e humor rápido. Tem atenção curta mas consegue entreter qualquer um em 15 segundos. Você é a pessoa que faz todo mundo rir no grupo!",
    },
    {
      id: "instagram",
      title: "Instagram",
      emoji: "📸",
      description:
        "Você é estético e curador da própria vida! Gosta de mostrar o melhor lado de tudo, valoriza visual bonito e tem um feed impecável. Você é social, gosta de likes e sabe posar pra foto como ninguém!",
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      emoji: "🐦",
      description:
        "Você é opinião forte e humor afiado! Adora debater, comentar sobre tudo e soltar aquela frase que viraliza. Informado, irônico e com timing perfeito pra memes. Você é a voz da internet!",
    },
    {
      id: "reddit",
      title: "Reddit",
      emoji: "🤓",
      description:
        "Você é curioso e vai fundo nos assuntos! Prefere conteúdo de qualidade a selfies. Gosta de comunidades nichadas, debates longos e aprender coisas novas. Você é o intelectual da internet!",
    },
    {
      id: "youtube",
      title: "YouTube",
      emoji: "▶️",
      description:
        "Você é contador de histórias! Gosta de conteúdo aprofundado, tutoriais e vídeos longos. Tem paciência, curiosidade e adora ensinar ou aprender. Você é o tipo que assiste vídeos de 2 horas sobre qualquer coisa!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Quanto tempo você fica no celular por dia?",
      options: [
        { id: "a", text: "Horas scrollando sem parar", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Bastante — mas postando e vendo stories", profilePoints: { instagram: 3 } },
        { id: "c", text: "Abro rápido, leio, comento e fecho", profilePoints: { twitter: 3 } },
        { id: "d", text: "Leio artigos e discussões por horas", profilePoints: { reddit: 3, youtube: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Que tipo de conteúdo você mais consome?",
      options: [
        { id: "a", text: "Vídeos curtos e engraçados", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Fotos bonitas, reels e stories", profilePoints: { instagram: 3 } },
        { id: "c", text: "Notícias, opiniões e memes", profilePoints: { twitter: 3 } },
        { id: "d", text: "Tutoriais, documentários e deep dives", profilePoints: { youtube: 3, reddit: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Como você compartilha algo legal que viu?",
      options: [
        { id: "a", text: "Faço minha própria versão do vídeo", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Posto no story com uma legenda", profilePoints: { instagram: 3 } },
        { id: "c", text: "Comento com uma opinião ou piada", profilePoints: { twitter: 3 } },
        { id: "d", text: "Mando link direto pra quem eu sei que vai gostar", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q4",
      text: "O que te irrita na internet?",
      options: [
        { id: "a", text: "Conteúdo chato e lento", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Feed feio e sem estética", profilePoints: { instagram: 3 } },
        { id: "c", text: "Gente que fala besteira sem argumentos", profilePoints: { twitter: 3 } },
        { id: "d", text: "Conteúdo raso e clickbait", profilePoints: { reddit: 3, youtube: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Se você fosse criador de conteúdo, faria:",
      options: [
        { id: "a", text: "Danças, trends e desafios virais", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Fotos profissionais e lifestyle", profilePoints: { instagram: 3 } },
        { id: "c", text: "Threads e comentários virais", profilePoints: { twitter: 3 } },
        { id: "d", text: "Vídeos longos educativos", profilePoints: { youtube: 3 } },
        { id: "e", text: "Posts detalhados em comunidades", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual dessas palavras mais te define?",
      options: [
        { id: "a", text: "Divertido(a)", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Estético(a)", profilePoints: { instagram: 3 } },
        { id: "c", text: "Opinativo(a)", profilePoints: { twitter: 3 } },
        { id: "d", text: "Curioso(a)", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q7",
      text: "Você prefere anonimato ou ser reconhecido?",
      options: [
        { id: "a", text: "Quero ser famoso e viral!", profilePoints: { tiktok: 2, instagram: 2 } },
        { id: "b", text: "Gosto de ter seguidores que me conhecem", profilePoints: { instagram: 3 } },
        { id: "c", text: "Tanto faz — quero que minhas ideias sejam ouvidas", profilePoints: { twitter: 3 } },
        { id: "d", text: "Prefiro anonimato total", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Antes de dormir, você tá:",
      options: [
        { id: "a", text: "No TikTok até 3h da manhã", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Vendo stories e stalkeando perfis", profilePoints: { instagram: 3 } },
        { id: "c", text: "Lendo threads e polêmicas do dia", profilePoints: { twitter: 3 } },
        { id: "d", text: "Num rabbit hole de vídeos ou artigos", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q9",
      text: "Qual seu tipo de humor favorito?",
      options: [
        { id: "a", text: "Humor físico, pegadinhas e fails", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Humor estético e memes visuais", profilePoints: { instagram: 3 } },
        { id: "c", text: "Sarcasmo, ironia e humor negro", profilePoints: { twitter: 3, reddit: 1 } },
        { id: "d", text: "Humor inteligente e referências obscuras", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se a internet acabasse, você:",
      options: [
        { id: "a", text: "Morreria de tédio", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Tiraria fotos analógicas", profilePoints: { instagram: 3 } },
        { id: "c", text: "Iria debater ao vivo no bar", profilePoints: { twitter: 3 } },
        { id: "d", text: "Leria livros e enciclopédias", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
  ],
};
