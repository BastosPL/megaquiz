import type { Quiz } from "@/lib/types";

export const casaDePapelPersonagem: Quiz = {
  id: "casa-de-papel-personagem",
  slug: "qual-personagem-da-casa-de-papel-voce-e",
  title: "Qual Personagem da Casa de Papel Você É?",
  description: "Professor, Tokyo, Berlin ou Nairobi? Descubra quem você seria no assalto!",
  type: "personality",
  category: "series-filmes",
  emoji: "🔴",
  color: "#DC2626",
  tags: ["la casa de papel", "series", "netflix", "personalidade", "viral"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "IMDb — La Casa de Papel", url: "https://www.imdb.com/title/tt6468322/", organization: "IMDb", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Descubra se você seria o Professor, Tokyo, Berlin ou Nairobi no maior assalto da história da TV.",
  profiles: [
    {
      id: "professor",
      title: "O Professor (Sergio Marquina)",
      emoji: "🧠",
      description:
        "Você é o cérebro da operação! Calmo sob pressão, estrategista brilhante e sempre 10 passos à frente. Sua timidez esconde uma mente genial. Você planeja tudo e odeia improvisar — mas quando precisa, também resolve!",
    },
    {
      id: "tokyo",
      title: "Tokyo (Silene Oliveira)",
      emoji: "💥",
      description:
        "Você é explosiva e impulsiva! Age com o coração, é passional e não tem medo de nada. Pode ser instável, mas sua coragem é inabalável. Você vive intensamente e não se arrepende!",
    },
    {
      id: "berlin",
      title: "Berlin (Andrés de Fonollosa)",
      emoji: "🎩",
      description:
        "Você é elegante, cínico e brilhante! Tem um senso estético refinado e adora o poder. Pode parecer frio, mas é extremamente leal a quem importa. Narcisista? Talvez. Mas com estilo!",
    },
    {
      id: "nairobi",
      title: "Nairobi (Ágata Jiménez)",
      emoji: "💪",
      description:
        "Você é líder, mãe e guerreira! Organizada, justa e com autoridade natural. Você cuida de todo mundo ao redor e não aceita injustiça. Quando você diz 'vamos trabalhar', todo mundo obedece!",
    },
    {
      id: "denver",
      title: "Denver (Daniel Ramos)",
      emoji: "😄",
      description:
        "Você é o coração do grupo! Leal, engraçado e com uma risada contagiante. Pode não ser o mais esperto, mas sua bondade e autenticidade conquistam todo mundo. Você é o amigo que todos querem ter!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Num assalto, qual seria seu papel?",
      options: [
        { id: "a", text: "Planejamento — penso em tudo antes", profilePoints: { professor: 3 } },
        { id: "b", text: "Ação — sou o primeiro a entrar", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Liderança dentro — comando a operação", profilePoints: { berlin: 3, nairobi: 1 } },
        { id: "d", text: "Organização — cuido da equipe e logística", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Apoio — protejo meus companheiros", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q2",
      text: "O que você mais valoriza?",
      options: [
        { id: "a", text: "Inteligência e controle", profilePoints: { professor: 3 } },
        { id: "b", text: "Liberdade e paixão", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Poder e elegância", profilePoints: { berlin: 3 } },
        { id: "d", text: "Justiça e respeito", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Lealdade e família", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como você age sob pressão extrema?",
      options: [
        { id: "a", text: "Fico calmo e penso logicamente", profilePoints: { professor: 3 } },
        { id: "b", text: "Explodo e ajo por impulso", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Tomo o controle com autoridade fria", profilePoints: { berlin: 3 } },
        { id: "d", text: "Organizo todo mundo e dou ordens claras", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Protejo quem está do meu lado", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual música tocaria na sua cena épica?",
      options: [
        { id: "a", text: "Bella Ciao — com significado profundo", profilePoints: { professor: 3, nairobi: 1 } },
        { id: "b", text: "Rock pesado — adrenalina pura", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Música clássica — ópera ou piano", profilePoints: { berlin: 3 } },
        { id: "d", text: "Qualquer uma — desde que o time esteja junto", profilePoints: { denver: 3, nairobi: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Qual seu maior defeito?",
      options: [
        { id: "a", text: "Sou controlador demais", profilePoints: { professor: 3 } },
        { id: "b", text: "Sou impulsivo e não penso nas consequências", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Sou arrogante e narcisista", profilePoints: { berlin: 3 } },
        { id: "d", text: "Exijo demais dos outros", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Sou ingênuo demais", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Se pudesse usar uma máscara de Dalí por um dia, você:",
      options: [
        { id: "a", text: "Planejaria o assalto perfeito", profilePoints: { professor: 3 } },
        { id: "b", text: "Entraria correndo sem plano", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Usaria como acessório de moda", profilePoints: { berlin: 3 } },
        { id: "d", text: "Distribuiria dinheiro pro povo", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Faria uma selfie e mandaria pros amigos", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Num relacionamento, você é:",
      options: [
        { id: "a", text: "Dedicado mas com dificuldade de se abrir", profilePoints: { professor: 3 } },
        { id: "b", text: "Intenso e passional — tudo ou nada", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Romântico clássico mas com ego grande", profilePoints: { berlin: 3 } },
        { id: "d", text: "Parceiro(a) forte que cuida e protege", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Apaixonado e leal até o fim", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual nome de cidade você escolheria como codinome?",
      options: [
        { id: "a", text: "Lisboa — discreta e estratégica", profilePoints: { professor: 3 } },
        { id: "b", text: "Rio — quente e intensa", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Paris — elegante e sofisticada", profilePoints: { berlin: 3 } },
        { id: "d", text: "Roma — histórica e poderosa", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Bogotá — divertida e animada", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Você quebraria uma regra do Professor?",
      options: [
        { id: "a", text: "Nunca — regras existem por uma razão", profilePoints: { professor: 3 } },
        { id: "b", text: "Sempre — regras são feitas pra serem quebradas", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Só se fosse uma regra melhor que a dele", profilePoints: { berlin: 3 } },
        { id: "d", text: "Se alguém da equipe precisasse", profilePoints: { nairobi: 2, denver: 2 } },
      ],
    },
    {
      id: "q10",
      text: "Como você quer ser lembrado?",
      options: [
        { id: "a", text: "Como o gênio que planejou tudo", profilePoints: { professor: 3 } },
        { id: "b", text: "Como alguém que viveu intensamente", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Como alguém com estilo e classe", profilePoints: { berlin: 3 } },
        { id: "d", text: "Como alguém justo e forte", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Como alguém bom e leal", profilePoints: { denver: 3 } },
      ],
    },
  ],
};
