import type { Quiz } from "@/lib/types";

export const qualVilaoDeSerie: Quiz = {
  id: "qual-vilao-de-serie",
  slug: "qual-vilao-de-serie-voce-seria",
  title: "Qual Vilao de Serie Voce Seria?",
  description: "Walter White, Cersei, Thanos ou Coringa? Descubra seu lado sombrio!",
  type: "personality",
  category: "series-filmes",
  emoji: "😈",
  color: "#7C3AED",
  plays: 6200,
  tags: ["vilao", "series", "personalidade", "netflix", "divertido"],
  createdAt: "2026-06-11",
  featured: false,
  profiles: [
    {
      id: "walter",
      title: "Walter White (Breaking Bad)",
      emoji: "🧪",
      description:
        "Voce e o genio que virou vilao por necessidade! Comecou com boas intencoes mas o poder te consumiu. Inteligente, meticuloso e com ego escondido atras de humildade falsa. Voce diz que faz por outros, mas no fundo... e pelo poder.",
    },
    {
      id: "cersei",
      title: "Cersei Lannister (Game of Thrones)",
      emoji: "🦁",
      description:
        "Voce e ambicao pura e protecao feroz! Faria qualquer coisa pela sua familia (e pelo seu poder). Implacavel, vingativa e com uma frase de impacto sempre pronta. Voce bebe vinho enquanto seus inimigos caem!",
    },
    {
      id: "joker",
      title: "Coringa (Joker)",
      emoji: "🃏",
      description:
        "Voce e o caos encarnado! Questiona tudo, nao segue regras e acha a sociedade uma piada. Seu humor negro e desconcertante e voce enxerga a hipocrisia que todo mundo ignora. Agente do caos com alma de artista!",
    },
    {
      id: "kilgrave",
      title: "Kilgrave (Jessica Jones)",
      emoji: "🎭",
      description:
        "Voce e charmoso e manipulador! Sabe exatamente o que dizer pra conseguir o que quer. Persuasivo, narcisista e com um senso de entitlement enorme. As pessoas fazem o que voce quer — e voce acha que e pro bem delas!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Por que voce se tornaria vilao?",
      options: [
        { id: "a", text: "Pra provar que sou o melhor no que faco", profilePoints: { walter: 3 } },
        { id: "b", text: "Pra proteger minha familia e meu legado", profilePoints: { cersei: 3 } },
        { id: "c", text: "Pra mostrar a hipocrisia do mundo", profilePoints: { joker: 3 } },
        { id: "d", text: "Porque o mundo me deve algo", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Como voce eliminaria um rival?",
      options: [
        { id: "a", text: "Com um plano quimico perfeito", profilePoints: { walter: 3 } },
        { id: "b", text: "Explodindo tudo com wildfire", profilePoints: { cersei: 3 } },
        { id: "c", text: "Fazendo ele se destruir sozinho", profilePoints: { joker: 3 } },
        { id: "d", text: "Convencendo ele a se entregar por vontade propria", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "Eu sou aquele que bate na porta", profilePoints: { walter: 3 } },
        { id: "b", text: "Quando voce joga o jogo dos tronos, voce vence ou morre", profilePoints: { cersei: 3 } },
        { id: "c", text: "Por que tao serio?", profilePoints: { joker: 3 } },
        { id: "d", text: "Sorria", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Seu maior medo e:",
      options: [
        { id: "a", text: "Ser esquecido e insignificante", profilePoints: { walter: 3 } },
        { id: "b", text: "Perder quem eu amo", profilePoints: { cersei: 3 } },
        { id: "c", text: "Nada — medo e uma ilusao", profilePoints: { joker: 3 } },
        { id: "d", text: "Ser rejeitado", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual e o seu estilo de lideranca?",
      options: [
        { id: "a", text: "Pela inteligencia — todos dependem de mim", profilePoints: { walter: 3 } },
        { id: "b", text: "Pelo medo e respeito", profilePoints: { cersei: 3 } },
        { id: "c", text: "Nao lidero — destruo estruturas", profilePoints: { joker: 3 } },
        { id: "d", text: "Pelo carisma — as pessoas querem me agradar", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Numa negociacao, voce:",
      options: [
        { id: "a", text: "Uso logica e fatos pra pressionar", profilePoints: { walter: 3 } },
        { id: "b", text: "Ameaco com consequencias terriveis", profilePoints: { cersei: 3 } },
        { id: "c", text: "Mudo as regras do jogo no meio", profilePoints: { joker: 3 } },
        { id: "d", text: "Charme e manipulacao emocional", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual e sua relacao com a lei?",
      options: [
        { id: "a", text: "Respeito a lei — ate que ela me atrapalhe", profilePoints: { walter: 3 } },
        { id: "b", text: "Eu faco as leis", profilePoints: { cersei: 3 } },
        { id: "c", text: "Leis sao uma piada — como tudo", profilePoints: { joker: 3 } },
        { id: "d", text: "As pessoas me obedecem — nao preciso de leis", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Voce se arrepende das coisas ruins que faz?",
      options: [
        { id: "a", text: "As vezes — mas faria tudo de novo", profilePoints: { walter: 3 } },
        { id: "b", text: "Nao — tudo que fiz foi necessario", profilePoints: { cersei: 3 } },
        { id: "c", text: "Arrependimento e coisa de gente normal", profilePoints: { joker: 3 } },
        { id: "d", text: "Nao entendo por que as pessoas se incomodam", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Se tivesse que escolher uma arma:",
      options: [
        { id: "a", text: "Veneno — limpo e eficiente", profilePoints: { walter: 3 } },
        { id: "b", text: "Exercito — poder bruto", profilePoints: { cersei: 3 } },
        { id: "c", text: "Bombas e caos — quanto mais espetacular melhor", profilePoints: { joker: 3 } },
        { id: "d", text: "Minha voz — a arma mais poderosa", profilePoints: { kilgrave: 3 } },
      ],
    },
    {
      id: "q10",
      text: "No final, voce quer:",
      options: [
        { id: "a", text: "Reconhecimento do meu genio", profilePoints: { walter: 3 } },
        { id: "b", text: "Meu trono e minha vinganca", profilePoints: { cersei: 3 } },
        { id: "c", text: "Ver o mundo queimar (com estilo)", profilePoints: { joker: 3 } },
        { id: "d", text: "Que todos me amem — de verdade", profilePoints: { kilgrave: 3 } },
      ],
    },
  ],
};
