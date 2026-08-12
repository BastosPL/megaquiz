import type { Quiz } from "@/lib/types";

export const qualGeracaoSuaAlma: Quiz = {
  id: "qual-geracao-sua-alma",
  slug: "qual-geracao-voce-tem-a-alma",
  title: "Qual Geração Você Tem a Alma?",
  description: "Boomer, Gen X, Millennial, Gen Z ou Alpha? Descubra de qual época você realmente é!",
  type: "personality",
  category: "personalidade",
  emoji: "⏳",
  color: "#8B5CF6",
  tags: ["geracao", "personalidade", "viral", "divertido", "millennial"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  lastReviewedAt: "2026-07-12",
  introText: "Boomer, Gen X, Millennial, Gen Z ou Alpha? Descubra de qual geração você realmente tem a alma.",
  profiles: [
    {
      id: "boomer",
      title: "Baby Boomer (1946-1964)",
      emoji: "📻",
      description:
        "Sua alma é clássica e tradicionalista! Você valoriza trabalho duro, estabilidade e respeito. Acha que as coisas eram melhores antes e tem opinião forte sobre tudo. Provavelmente manda áudio de 5 minutos no WhatsApp!",
    },
    {
      id: "genx",
      title: "Geração X (1965-1980)",
      emoji: "📼",
      description:
        "Você é o equilíbrio perfeito entre analógico e digital! Independente, prático e com um humor sarcástico incrível. Cresceu com MTV, locadora de vídeo e aprendeu a se virar sozinho. A geração mais subestimada!",
    },
    {
      id: "millennial",
      title: "Millennial (1981-1996)",
      emoji: "📱",
      description:
        "Você é nostálgico e adaptável! Lembra do Orkut, MSN e sabe o valor de um plano de dados. Idealista, gosta de experiências mais que coisas e provavelmente tem burnout. Mas ainda acredita que vai mudar o mundo!",
    },
    {
      id: "genz",
      title: "Gen Z (1997-2012)",
      emoji: "🤳",
      description:
        "Você é nativo digital e socialmente consciente! Humor afiado, domina memes e não tem paciência pra enrolação. Defende causas, questiona tudo e se comunica mais por vídeo do que por texto. Slay!",
    },
    {
      id: "alpha",
      title: "Geração Alpha (2013+)",
      emoji: "🤖",
      description:
        "Você é do futuro! Pensa em tecnologia como extensão do corpo, não tem medo de IA e acha tudo que veio antes 'vintage'. Multitarefa desde que nasceu e já sabe mais de internet que seus pais!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como você assiste TV/vídeo?",
      options: [
        { id: "a", text: "TV aberta no horário certinho", profilePoints: { boomer: 3 } },
        { id: "b", text: "TV a cabo ou DVD", profilePoints: { genx: 3 } },
        { id: "c", text: "Netflix/streaming no notebook", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok e YouTube no celular", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Qual dessas frases você mais usa?",
      options: [
        { id: "a", text: "No meu tempo era diferente", profilePoints: { boomer: 3 } },
        { id: "b", text: "Tanto faz, me deixa em paz", profilePoints: { genx: 3 } },
        { id: "c", text: "Tô cansado(a) e sem dinheiro", profilePoints: { millennial: 3 } },
        { id: "d", text: "Slay / é isso / cringe", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Como você se comunica com amigos?",
      options: [
        { id: "a", text: "Ligação telefônica", profilePoints: { boomer: 3 } },
        { id: "b", text: "Email ou mensagem de texto", profilePoints: { genx: 3 } },
        { id: "c", text: "WhatsApp e Instagram", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok, Discord ou BeReal", profilePoints: { genz: 3 } },
        { id: "e", text: "Metaverso ou IA", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual sua relação com tecnologia?",
      options: [
        { id: "a", text: "Uso o básico — celular e WhatsApp", profilePoints: { boomer: 3 } },
        { id: "b", text: "Me adapto mas prefiro simplicidade", profilePoints: { genx: 3 } },
        { id: "c", text: "Adoro mas sinto que perdi o controle", profilePoints: { millennial: 3 } },
        { id: "d", text: "É parte de mim — não vivo sem", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q5",
      text: "O que você faz quando está entediado?",
      options: [
        { id: "a", text: "Leio jornal, assisto telejornal ou converso", profilePoints: { boomer: 3 } },
        { id: "b", text: "Coloco um disco/CD ou assisto filme clássico", profilePoints: { genx: 3 } },
        { id: "c", text: "Abro Netflix ou podcast", profilePoints: { millennial: 3 } },
        { id: "d", text: "Scroll infinito nas redes sociais", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Qual música mais combina com você?",
      options: [
        { id: "a", text: "MPB, Roberto Carlos, samba", profilePoints: { boomer: 3 } },
        { id: "b", text: "Rock, grunge, pop 80s/90s", profilePoints: { genx: 3 } },
        { id: "c", text: "Pop, indie, R&B dos anos 2000", profilePoints: { millennial: 3 } },
        { id: "d", text: "Funk, trap, K-pop, lo-fi", profilePoints: { genz: 3 } },
        { id: "e", text: "IA generativa e beats personalizados", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Como você lida com conflitos?",
      options: [
        { id: "a", text: "Conversa séria e olho no olho", profilePoints: { boomer: 3 } },
        { id: "b", text: "Sarcasmo e ignorar até passar", profilePoints: { genx: 3 } },
        { id: "c", text: "Texto longo e emocional no WhatsApp", profilePoints: { millennial: 3 } },
        { id: "d", text: "Meme e print no grupo", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q8",
      text: "O que você pensa sobre trabalho?",
      options: [
        { id: "a", text: "Trabalho é dignidade — não reclame", profilePoints: { boomer: 3 } },
        { id: "b", text: "Trabalho pra viver, não vivo pra trabalhar", profilePoints: { genx: 3 } },
        { id: "c", text: "Quero propósito, não só salário", profilePoints: { millennial: 3 } },
        { id: "d", text: "Work-life balance ou nada feito", profilePoints: { genz: 3 } },
        { id: "e", text: "Trabalho remoto com IA fazendo o pesado", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual rede social você mais usaria?",
      options: [
        { id: "a", text: "Facebook", profilePoints: { boomer: 3, genx: 1 } },
        { id: "b", text: "Email e fóruns", profilePoints: { genx: 3 } },
        { id: "c", text: "Instagram e Twitter", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok e BeReal", profilePoints: { genz: 3 } },
        { id: "e", text: "Algo que ainda não existe", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Como você reage a mudanças?",
      options: [
        { id: "a", text: "Resisto — o que funciona não muda", profilePoints: { boomer: 3 } },
        { id: "b", text: "Aceito se fizer sentido", profilePoints: { genx: 3 } },
        { id: "c", text: "Aberto mas ansioso com tanta mudança", profilePoints: { millennial: 3 } },
        { id: "d", text: "Adoro — me adapto rápido", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
  ],
};
