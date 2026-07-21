import type { Quiz } from "@/lib/types";

export const qualVilaoDeSerie: Quiz = {
  id: "qual-vilao-de-serie",
  slug: "qual-vilao-de-serie-voce-seria",
  title: "Qual Vilão de Série Você Seria?",
  description: "Walter White, Cersei, Thanos ou Coringa? Descubra seu lado sombrio!",
  type: "personality",
  category: "series-filmes",
  emoji: "😈",
  color: "#7C3AED",
  tags: ["vilao", "series", "personalidade", "netflix", "divertido"],
  createdAt: "2026-06-11",
  featured: false,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "IMDb — Most Popular TV Shows", url: "https://www.imdb.com/chart/tvmeter/", organization: "IMDb", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Todo mundo tem um lado sombrio. Descubra qual vilão de série mais combina com você.",
  profiles: [
    {
      id: "walter",
      title: "Walter White (Breaking Bad)",
      emoji: "🧪",
      description:
        "Você é o gênio que virou vilão por necessidade! Começou com boas intenções mas o poder te consumiu. Inteligente, meticuloso e com ego escondido atrás de humildade falsa. Você diz que faz por outros, mas no fundo... é pelo poder.",
    },
    {
      id: "cersei",
      title: "Cersei Lannister (Game of Thrones)",
      emoji: "🦁",
      description:
        "Você é ambição pura e proteção feroz! Faria qualquer coisa pela sua família (e pelo seu poder). Implacável, vingativa e com uma frase de impacto sempre pronta. Você bebe vinho enquanto seus inimigos caem!",
    },
    {
      id: "joker",
      title: "Coringa (Joker)",
      emoji: "🃏",
      description:
        "Você é o caos encarnado! Questiona tudo, não segue regras e acha a sociedade uma piada. Seu humor negro é desconcertante e você enxerga a hipocrisia que todo mundo ignora. Agente do caos com alma de artista!",
    },
    {
      id: "kilgrave",
      title: "Kilgrave (Jessica Jones)",
      emoji: "🎭",
      description:
        "Você é charmoso e manipulador! Sabe exatamente o que dizer pra conseguir o que quer. Persuasivo, narcisista e com um senso de entitlement enorme. As pessoas fazem o que você quer — e você acha que é pro bem delas!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Por que você se tornaria vilão?",
      options: [
        { id: "a", text: "Pra provar que sou o melhor no que faço", profilePoints: { walter: 3 } },
        { id: "b", text: "Pra proteger minha família e meu legado", profilePoints: { cersei: 3 } },
        { id: "c", text: "Pra mostrar a hipocrisia do mundo", profilePoints: { joker: 3 } },
        { id: "d", text: "Porque o mundo me deve algo", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Como você eliminaria um rival?",
      options: [
        { id: "a", text: "Com um plano químico perfeito", profilePoints: { walter: 3 } },
        { id: "b", text: "Explodindo tudo com wildfire", profilePoints: { cersei: 3 } },
        { id: "c", text: "Fazendo ele se destruir sozinho", profilePoints: { joker: 3 } },
        { id: "d", text: "Convencendo ele a se entregar por vontade própria", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual frase mais combina com você?",
      options: [
        { id: "a", text: "Eu sou aquele que bate na porta", profilePoints: { walter: 3 } },
        { id: "b", text: "Quando você joga o jogo dos tronos, você vence ou morre", profilePoints: { cersei: 3 } },
        { id: "c", text: "Por que tão sério?", profilePoints: { joker: 3 } },
        { id: "d", text: "Sorria", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Seu maior medo é:",
      options: [
        { id: "a", text: "Ser esquecido e insignificante", profilePoints: { walter: 3 } },
        { id: "b", text: "Perder quem eu amo", profilePoints: { cersei: 3 } },
        { id: "c", text: "Nada — medo é uma ilusão", profilePoints: { joker: 3 } },
        { id: "d", text: "Ser rejeitado", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual é o seu estilo de liderança?",
      options: [
        { id: "a", text: "Pela inteligência — todos dependem de mim", profilePoints: { walter: 3 } },
        { id: "b", text: "Pelo medo e respeito", profilePoints: { cersei: 3 } },
        { id: "c", text: "Não lidero — destruo estruturas", profilePoints: { joker: 3 } },
        { id: "d", text: "Pelo carisma — as pessoas querem me agradar", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Numa negociação, você:",
      options: [
        { id: "a", text: "Uso lógica e fatos pra pressionar", profilePoints: { walter: 3 } },
        { id: "b", text: "Ameaço com consequências terríveis", profilePoints: { cersei: 3 } },
        { id: "c", text: "Mudo as regras do jogo no meio", profilePoints: { joker: 3 } },
        { id: "d", text: "Charme e manipulação emocional", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual é sua relação com a lei?",
      options: [
        { id: "a", text: "Respeito a lei — até que ela me atrapalhe", profilePoints: { walter: 3 } },
        { id: "b", text: "Eu faço as leis", profilePoints: { cersei: 3 } },
        { id: "c", text: "Leis são uma piada — como tudo", profilePoints: { joker: 3 } },
        { id: "d", text: "As pessoas me obedecem — não preciso de leis", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Você se arrepende das coisas ruins que faz?",
      options: [
        { id: "a", text: "Às vezes — mas faria tudo de novo", profilePoints: { walter: 3 } },
        { id: "b", text: "Não — tudo que fiz foi necessário", profilePoints: { cersei: 3 } },
        { id: "c", text: "Arrependimento é coisa de gente normal", profilePoints: { joker: 3 } },
        { id: "d", text: "Não entendo por que as pessoas se incomodam", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Se tivesse que escolher uma arma:",
      options: [
        { id: "a", text: "Veneno — limpo e eficiente", profilePoints: { walter: 3 } },
        { id: "b", text: "Exército — poder bruto", profilePoints: { cersei: 3 } },
        { id: "c", text: "Bombas e caos — quanto mais espetacular melhor", profilePoints: { joker: 3 } },
        { id: "d", text: "Minha voz — a arma mais poderosa", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q10",
      text: "No final, você quer:",
      options: [
        { id: "a", text: "Reconhecimento do meu gênio", profilePoints: { walter: 3 } },
        { id: "b", text: "Meu trono e minha vingança", profilePoints: { cersei: 3 } },
        { id: "c", text: "Ver o mundo queimar (com estilo)", profilePoints: { joker: 3 } },
        { id: "d", text: "Que todos me amem — de verdade", profilePoints: { kilgrave: 3 } },
      ],
    },
  ],
};
