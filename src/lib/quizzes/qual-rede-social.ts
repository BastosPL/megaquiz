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
  author: "Patrick Bastos",
  authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
  lastReviewedAt: "2026-07-12",
  introText: "TikTok premia criatividade, Instagram valoriza estética, X vive de opinião rápida e Reddit recompensa profundidade. Cada plataforma tem uma cultura própria — qual delas combina com o seu jeito de estar online?",
  profiles: [
    {
      id: "tiktok",
      title: "TikTok",
      emoji: "🎵",
      description:
        "Seu habitat natural é o algoritmo da For You Page, onde um vídeo de 15 segundos pode transformar um desconhecido em celebridade da noite pro dia. Você domina trends como a 'corn kid' e sons virais antes deles estourarem, e entende que o TikTok é a única rede onde o número de seguidores importa menos que a criatividade do conteúdo. Sua linguagem é o dueto, o stitch e a transição certeira.",
    },
    {
      id: "instagram",
      title: "Instagram",
      emoji: "📸",
      description:
        "Você pensa em grid, paleta de cores e golden hour. No Instagram, a cultura dos Stories criou uma segunda camada de comunicação onde o efêmero vale mais que o permanente, e você domina isso. Dos Reels ao Close Friends, você sabe que essa é a plataforma onde marcas, criadores e até restaurantes vivem ou morrem pelo visual. Seu feed conta uma história curada que o TikTok jamais contaria.",
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      emoji: "🐦",
      description:
        "Você vive na timeline onde jornalistas, políticos e comediantes disputam o mesmo espaço em 280 caracteres. O X (ex-Twitter) é a praça pública da internet: threads quilométricas viram reportagem, ratio é verbo, e trending topics ditam o que o resto da web vai discutir amanhã. Você tem opinião formada, timing de meme afiado e sabe que a Community Notes é o verdadeiro tribunal popular.",
    },
    {
      id: "reddit",
      title: "Reddit",
      emoji: "🤓",
      description:
        "Seu mundo é feito de subreddits com regras próprias, AMAs com especialistas e upvotes que separam conteúdo bom de lixo. No Reddit, o anonimato é a norma e o que importa é a qualidade do argumento, não quantos seguidores você tem. De r/explainlikeimfive a r/brasil, você prefere uma thread com fontes e debate longo a qualquer vídeo de 30 segundos.",
    },
    {
      id: "youtube",
      title: "YouTube",
      emoji: "▶️",
      description:
        "Você é da geração que aprendeu a trocar chuveiro, cozinhar e programar assistindo tutoriais. O YouTube é a segunda maior ferramenta de busca do mundo e o único lugar onde um vídeo-ensaio de 3 horas sobre a história do Tetris consegue milhões de views. Você entende que conteúdo longo constrói autoridade, e que o subscribe é um pacto de confiança entre criador e audiência.",
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
