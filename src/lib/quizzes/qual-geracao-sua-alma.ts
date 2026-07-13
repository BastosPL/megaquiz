import type { Quiz } from "@/lib/types";

export const qualGeracaoSuaAlma: Quiz = {
  id: "qual-geracao-sua-alma",
  slug: "qual-geracao-voce-tem-a-alma",
  title: "Qual Geracao Voce Tem a Alma?",
  description: "Boomer, Gen X, Millennial, Gen Z ou Alpha? Descubra de qual epoca voce realmente e!",
  type: "personality",
  category: "personalidade",
  emoji: "⏳",
  color: "#8B5CF6",
  tags: ["geracao", "personalidade", "viral", "divertido", "millennial"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [],
  lastReviewedAt: "2026-07-12",
  introText: "Boomer, Gen X, Millennial, Gen Z ou Alpha? Descubra de qual geração você realmente tem a alma.",
  profiles: [
    {
      id: "boomer",
      title: "Baby Boomer (1946-1964)",
      emoji: "📻",
      description:
        "Sua alma e classica e tradicionalista! Voce valoriza trabalho duro, estabilidade e respeito. Acha que as coisas eram melhores antes e tem opiniao forte sobre tudo. Provavelmente manda audio de 5 minutos no WhatsApp!",
    },
    {
      id: "genx",
      title: "Geracao X (1965-1980)",
      emoji: "📼",
      description:
        "Voce e o equilibrio perfeito entre analogico e digital! Independente, pratico e com um humor sarcastico incrivel. Cresceu com MTV, locadora de video e aprendeu a se virar sozinho. A geracao mais subestimada!",
    },
    {
      id: "millennial",
      title: "Millennial (1981-1996)",
      emoji: "📱",
      description:
        "Voce e nostalgico e adaptavel! Lembra do Orkut, MSN e sabe o valor de um plano de dados. Idealista, gosta de experiencias mais que coisas e provavelmente tem burnout. Mas ainda acredita que vai mudar o mundo!",
    },
    {
      id: "genz",
      title: "Gen Z (1997-2012)",
      emoji: "🤳",
      description:
        "Voce e nativo digital e socialmente consciente! Humor afiado, domina memes e nao tem paciencia pra enrolacao. Defende causas, questiona tudo e se comunica mais por video do que por texto. Slay!",
    },
    {
      id: "alpha",
      title: "Geracao Alpha (2013+)",
      emoji: "🤖",
      description:
        "Voce e do futuro! Pensa em tecnologia como extensao do corpo, nao tem medo de IA e acha tudo que veio antes 'vintage'. Multitarefa desde que nasceu e ja sabe mais de internet que seus pais!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como voce assiste TV/video?",
      options: [
        { id: "a", text: "TV aberta no horario certinho", profilePoints: { boomer: 3 } },
        { id: "b", text: "TV a cabo ou DVD", profilePoints: { genx: 3 } },
        { id: "c", text: "Netflix/streaming no notebook", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok e YouTube no celular", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Qual dessas frases voce mais usa?",
      options: [
        { id: "a", text: "No meu tempo era diferente", profilePoints: { boomer: 3 } },
        { id: "b", text: "Tanto faz, me deixa em paz", profilePoints: { genx: 3 } },
        { id: "c", text: "To cansado(a) e sem dinheiro", profilePoints: { millennial: 3 } },
        { id: "d", text: "Slay / e isso / cringe", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Como voce se comunica com amigos?",
      options: [
        { id: "a", text: "Ligacao telefonica", profilePoints: { boomer: 3 } },
        { id: "b", text: "Email ou mensagem de texto", profilePoints: { genx: 3 } },
        { id: "c", text: "WhatsApp e Instagram", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok, Discord ou BeReal", profilePoints: { genz: 3 } },
        { id: "e", text: "Metaverso ou IA", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual sua relacao com tecnologia?",
      options: [
        { id: "a", text: "Uso o basico — celular e WhatsApp", profilePoints: { boomer: 3 } },
        { id: "b", text: "Me adapto mas prefiro simplicidade", profilePoints: { genx: 3 } },
        { id: "c", text: "Adoro mas sinto que perdi o controle", profilePoints: { millennial: 3 } },
        { id: "d", text: "E parte de mim — nao vivo sem", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q5",
      text: "O que voce faz quando esta entediado?",
      options: [
        { id: "a", text: "Leio jornal, assisto telejornal ou converso", profilePoints: { boomer: 3 } },
        { id: "b", text: "Coloco um disco/CD ou assisto filme classico", profilePoints: { genx: 3 } },
        { id: "c", text: "Abro Netflix ou podcast", profilePoints: { millennial: 3 } },
        { id: "d", text: "Scroll infinito nas redes sociais", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Qual musica mais combina com voce?",
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
      text: "Como voce lida com conflitos?",
      options: [
        { id: "a", text: "Conversa seria e olho no olho", profilePoints: { boomer: 3 } },
        { id: "b", text: "Sarcasmo e ignorar ate passar", profilePoints: { genx: 3 } },
        { id: "c", text: "Texto longo e emocional no WhatsApp", profilePoints: { millennial: 3 } },
        { id: "d", text: "Meme e print no grupo", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
    {
      id: "q8",
      text: "O que voce pensa sobre trabalho?",
      options: [
        { id: "a", text: "Trabalho e dignidade — nao reclame", profilePoints: { boomer: 3 } },
        { id: "b", text: "Trabalho pra viver, nao vivo pra trabalhar", profilePoints: { genx: 3 } },
        { id: "c", text: "Quero proposito, nao so salario", profilePoints: { millennial: 3 } },
        { id: "d", text: "Work-life balance ou nada feito", profilePoints: { genz: 3 } },
        { id: "e", text: "Trabalho remoto com IA fazendo o pesado", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual rede social voce mais usaria?",
      options: [
        { id: "a", text: "Facebook", profilePoints: { boomer: 3, genx: 1 } },
        { id: "b", text: "Email e foruns", profilePoints: { genx: 3 } },
        { id: "c", text: "Instagram e Twitter", profilePoints: { millennial: 3 } },
        { id: "d", text: "TikTok e BeReal", profilePoints: { genz: 3 } },
        { id: "e", text: "Algo que ainda nao existe", profilePoints: { alpha: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Como voce reage a mudancas?",
      options: [
        { id: "a", text: "Resisto — o que funciona nao muda", profilePoints: { boomer: 3 } },
        { id: "b", text: "Aceito se fizer sentido", profilePoints: { genx: 3 } },
        { id: "c", text: "Aberto mas ansioso com tanta mudanca", profilePoints: { millennial: 3 } },
        { id: "d", text: "Adoro — me adapto rapido", profilePoints: { genz: 3, alpha: 1 } },
      ],
    },
  ],
};
