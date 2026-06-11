import type { Quiz } from "@/lib/types";

export const casaDePapelPersonagem: Quiz = {
  id: "casa-de-papel-personagem",
  slug: "qual-personagem-da-casa-de-papel-voce-e",
  title: "Qual Personagem da Casa de Papel Voce E?",
  description: "Professor, Tokyo, Berlin ou Nairobi? Descubra quem voce seria no assalto!",
  type: "personality",
  category: "series-filmes",
  emoji: "🔴",
  color: "#DC2626",
  plays: 8900,
  tags: ["la casa de papel", "series", "netflix", "personalidade", "viral"],
  createdAt: "2026-06-11",
  featured: true,
  profiles: [
    {
      id: "professor",
      title: "O Professor (Sergio Marquina)",
      emoji: "🧠",
      description:
        "Voce e o cerebro da operacao! Calmo sob pressao, estrategista brilhante e sempre 10 passos a frente. Sua timidez esconde uma mente genial. Voce planeja tudo e odeia improvisar — mas quando precisa, tambem resolve!",
    },
    {
      id: "tokyo",
      title: "Tokyo (Silene Oliveira)",
      emoji: "💥",
      description:
        "Voce e explosiva e impulsiva! Age com o coracao, e passional e nao tem medo de nada. Pode ser instavel, mas sua coragem e inabalavel. Voce vive intensamente e nao se arrepende!",
    },
    {
      id: "berlin",
      title: "Berlin (Andres de Fonollosa)",
      emoji: "🎩",
      description:
        "Voce e elegante, cinico e brilhante! Tem um senso estetico refinado e adora o poder. Pode parecer frio, mas e extremamente leal a quem importa. Narcisista? Talvez. Mas com estilo!",
    },
    {
      id: "nairobi",
      title: "Nairobi (Agata Jimenez)",
      emoji: "💪",
      description:
        "Voce e lider, mae e guerreira! Organizada, justa e com autoridade natural. Voce cuida de todo mundo ao redor e nao aceita injustica. Quando voce diz 'vamos trabalhar', todo mundo obedece!",
    },
    {
      id: "denver",
      title: "Denver (Daniel Ramos)",
      emoji: "😄",
      description:
        "Voce e o coracao do grupo! Leal, engracado e com uma risada contagiante. Pode nao ser o mais esperto, mas sua bondade e autenticidade conquistam todo mundo. Voce e o amigo que todos querem ter!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Num assalto, qual seria seu papel?",
      options: [
        { id: "a", text: "Planejamento — penso em tudo antes", profilePoints: { professor: 3 } },
        { id: "b", text: "Acao — sou o primeiro a entrar", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Lideranca dentro — comando a operacao", profilePoints: { berlin: 3, nairobi: 1 } },
        { id: "d", text: "Organizacao — cuido da equipe e logistica", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Apoio — protejo meus companheiros", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q2",
      text: "O que voce mais valoriza?",
      options: [
        { id: "a", text: "Inteligencia e controle", profilePoints: { professor: 3 } },
        { id: "b", text: "Liberdade e paixao", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Poder e elegancia", profilePoints: { berlin: 3 } },
        { id: "d", text: "Justica e respeito", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Lealdade e familia", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como voce age sob pressao extrema?",
      options: [
        { id: "a", text: "Fico calmo e penso logicamente", profilePoints: { professor: 3 } },
        { id: "b", text: "Explodo e ajo por impulso", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Tomo o controle com autoridade fria", profilePoints: { berlin: 3 } },
        { id: "d", text: "Organizo todo mundo e dou ordens claras", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Protejo quem esta do meu lado", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual musica tocaria na sua cena epica?",
      options: [
        { id: "a", text: "Bella Ciao — com significado profundo", profilePoints: { professor: 3, nairobi: 1 } },
        { id: "b", text: "Rock pesado — adrenalina pura", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Musica classica — opera ou piano", profilePoints: { berlin: 3 } },
        { id: "d", text: "Qualquer uma — desde que o time esteja junto", profilePoints: { denver: 3, nairobi: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Qual seu maior defeito?",
      options: [
        { id: "a", text: "Sou controlador demais", profilePoints: { professor: 3 } },
        { id: "b", text: "Sou impulsivo e nao penso nas consequencias", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Sou arrogante e narcisista", profilePoints: { berlin: 3 } },
        { id: "d", text: "Exijo demais dos outros", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Sou ingenuo demais", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Se pudesse usar uma mascara de Dali por um dia, voce:",
      options: [
        { id: "a", text: "Planejaria o assalto perfeito", profilePoints: { professor: 3 } },
        { id: "b", text: "Entraria correndo sem plano", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Usaria como acessorio de moda", profilePoints: { berlin: 3 } },
        { id: "d", text: "Distribuiria dinheiro pro povo", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Faria uma selfie e mandaria pros amigos", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Num relacionamento, voce e:",
      options: [
        { id: "a", text: "Dedicado mas com dificuldade de se abrir", profilePoints: { professor: 3 } },
        { id: "b", text: "Intenso e passional — tudo ou nada", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Romantico classico mas com ego grande", profilePoints: { berlin: 3 } },
        { id: "d", text: "Parceiro(a) forte que cuida e protege", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Apaixonado e leal ate o fim", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual nome de cidade voce escolheria como codinome?",
      options: [
        { id: "a", text: "Lisboa — discreta e estrategica", profilePoints: { professor: 3 } },
        { id: "b", text: "Rio — quente e intensa", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Paris — elegante e sofisticada", profilePoints: { berlin: 3 } },
        { id: "d", text: "Roma — historica e poderosa", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Bogota — divertida e animada", profilePoints: { denver: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Voce quebraria uma regra do Professor?",
      options: [
        { id: "a", text: "Nunca — regras existem por uma razao", profilePoints: { professor: 3 } },
        { id: "b", text: "Sempre — regras sao feitas pra serem quebradas", profilePoints: { tokyo: 3 } },
        { id: "c", text: "So se fosse uma regra melhor que a dele", profilePoints: { berlin: 3 } },
        { id: "d", text: "Se alguem da equipe precisasse", profilePoints: { nairobi: 2, denver: 2 } },
      ],
    },
    {
      id: "q10",
      text: "Como voce quer ser lembrado?",
      options: [
        { id: "a", text: "Como o genio que planejou tudo", profilePoints: { professor: 3 } },
        { id: "b", text: "Como alguem que viveu intensamente", profilePoints: { tokyo: 3 } },
        { id: "c", text: "Como alguem com estilo e classe", profilePoints: { berlin: 3 } },
        { id: "d", text: "Como alguem justo e forte", profilePoints: { nairobi: 3 } },
        { id: "e", text: "Como alguem bom e leal", profilePoints: { denver: 3 } },
      ],
    },
  ],
};
