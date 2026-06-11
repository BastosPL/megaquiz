import type { Quiz } from "@/lib/types";

export const qualRedeSocial: Quiz = {
  id: "qual-rede-social",
  slug: "qual-rede-social-combina-com-voce",
  title: "Qual Rede Social Combina com Voce?",
  description: "TikTok, Instagram, Twitter ou Reddit? Descubra qual app e a sua cara!",
  type: "personality",
  category: "personalidade",
  emoji: "📱",
  color: "#8B5CF6",
  plays: 9100,
  tags: ["redes sociais", "personalidade", "internet", "viral", "divertido"],
  createdAt: "2026-06-11",
  featured: true,
  profiles: [
    {
      id: "tiktok",
      title: "TikTok",
      emoji: "🎵",
      description:
        "Voce e pura energia e criatividade! Adora tendencias, dancas e humor rapido. Tem atencao curta mas consegue entreter qualquer um em 15 segundos. Voce e a pessoa que faz todo mundo rir no grupo!",
    },
    {
      id: "instagram",
      title: "Instagram",
      emoji: "📸",
      description:
        "Voce e estetico e curador da propria vida! Gosta de mostrar o melhor lado de tudo, valoriza visual bonito e tem um feed impecavel. Voce e social, gosta de likes e sabe posar pra foto como ninguem!",
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      emoji: "🐦",
      description:
        "Voce e opiniao forte e humor afiado! Adora debater, comentar sobre tudo e soltar aquela frase que viraliza. Informado, ironico e com timing perfeito pra memes. Voce e a voz da internet!",
    },
    {
      id: "reddit",
      title: "Reddit",
      emoji: "🤓",
      description:
        "Voce e curioso e vai fundo nos assuntos! Prefere conteudo de qualidade a selfies. Gosta de comunidades nichadas, debates longos e aprender coisas novas. Voce e o intelectual da internet!",
    },
    {
      id: "youtube",
      title: "YouTube",
      emoji: "▶️",
      description:
        "Voce e contador de historias! Gosta de conteudo aprofundado, tutoriais e videos longos. Tem paciencia, curiosidade e adora ensinar ou aprender. Voce e o tipo que assiste videos de 2 horas sobre qualquer coisa!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Quanto tempo voce fica no celular por dia?",
      options: [
        { id: "a", text: "Horas scrollando sem parar", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Bastante — mas postando e vendo stories", profilePoints: { instagram: 3 } },
        { id: "c", text: "Abro rapido, leio, comento e fecho", profilePoints: { twitter: 3 } },
        { id: "d", text: "Leio artigos e discussoes por horas", profilePoints: { reddit: 3, youtube: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Que tipo de conteudo voce mais consome?",
      options: [
        { id: "a", text: "Videos curtos e engracados", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Fotos bonitas, reels e stories", profilePoints: { instagram: 3 } },
        { id: "c", text: "Noticias, opinioes e memes", profilePoints: { twitter: 3 } },
        { id: "d", text: "Tutoriais, documentarios e deep dives", profilePoints: { youtube: 3, reddit: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Como voce compartilha algo legal que viu?",
      options: [
        { id: "a", text: "Faco minha propria versao do video", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Posto no story com uma legenda", profilePoints: { instagram: 3 } },
        { id: "c", text: "Comento com uma opiniao ou piada", profilePoints: { twitter: 3 } },
        { id: "d", text: "Mando link direto pra quem eu sei que vai gostar", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q4",
      text: "O que te irrita na internet?",
      options: [
        { id: "a", text: "Conteudo chato e lento", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Feed feio e sem estetica", profilePoints: { instagram: 3 } },
        { id: "c", text: "Gente que fala besteira sem argumentos", profilePoints: { twitter: 3 } },
        { id: "d", text: "Conteudo raso e clickbait", profilePoints: { reddit: 3, youtube: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Se voce fosse criador de conteudo, faria:",
      options: [
        { id: "a", text: "Dancas, trends e desafios virais", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Fotos profissionais e lifestyle", profilePoints: { instagram: 3 } },
        { id: "c", text: "Threads e comentarios virais", profilePoints: { twitter: 3 } },
        { id: "d", text: "Videos longos educativos", profilePoints: { youtube: 3 } },
        { id: "e", text: "Posts detalhados em comunidades", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual dessas palavras mais te define?",
      options: [
        { id: "a", text: "Divertido(a)", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Estetico(a)", profilePoints: { instagram: 3 } },
        { id: "c", text: "Opinativo(a)", profilePoints: { twitter: 3 } },
        { id: "d", text: "Curioso(a)", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q7",
      text: "Voce prefere anonimato ou ser reconhecido?",
      options: [
        { id: "a", text: "Quero ser famoso e viral!", profilePoints: { tiktok: 2, instagram: 2 } },
        { id: "b", text: "Gosto de ter seguidores que me conhecem", profilePoints: { instagram: 3 } },
        { id: "c", text: "Tanto faz — quero que minhas ideias sejam ouvidas", profilePoints: { twitter: 3 } },
        { id: "d", text: "Prefiro anonimato total", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Antes de dormir, voce ta:",
      options: [
        { id: "a", text: "No TikTok ate 3h da manha", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Vendo stories e stalkeando perfis", profilePoints: { instagram: 3 } },
        { id: "c", text: "Lendo threads e polêmicas do dia", profilePoints: { twitter: 3 } },
        { id: "d", text: "Num rabbit hole de videos ou artigos", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
    {
      id: "q9",
      text: "Qual seu tipo de humor favorito?",
      options: [
        { id: "a", text: "Humor fisico, pegadinhas e fails", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Humor estetico e memes visuais", profilePoints: { instagram: 3 } },
        { id: "c", text: "Sarcasmo, ironia e humor negro", profilePoints: { twitter: 3, reddit: 1 } },
        { id: "d", text: "Humor inteligente e referencias obscuras", profilePoints: { reddit: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se a internet acabasse, voce:",
      options: [
        { id: "a", text: "Morreria de tedio", profilePoints: { tiktok: 3 } },
        { id: "b", text: "Tiraria fotos analogicas", profilePoints: { instagram: 3 } },
        { id: "c", text: "Iria debater ao vivo no bar", profilePoints: { twitter: 3 } },
        { id: "d", text: "Leria livros e enciclopedias", profilePoints: { reddit: 2, youtube: 2 } },
      ],
    },
  ],
};
