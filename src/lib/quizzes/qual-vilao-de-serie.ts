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
  author: "Patrick Bastos",
  authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
  sources: [
    { label: "IMDb — Most Popular TV Shows", url: "https://www.imdb.com/chart/tvmeter/", organization: "IMDb", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Walter White começou pela família e terminou pelo ego. Cersei queimou um templo inteiro por vingança. O Coringa só queria que o mundo visse a piada. Todo vilão tem uma lógica — qual seria a sua?",
  profiles: [
    {
      id: "walter",
      title: "Walter White (Breaking Bad)",
      emoji: "🧪",
      description:
        "Você é o professor de química de Albuquerque que, ao receber um diagnóstico de câncer de pulmão, decidiu fabricar metanfetamina para 'deixar dinheiro para a família'. Mas como ele mesmo confessou a Skyler no episódio final: 'Eu fiz por mim. Eu gostava. E eu era bom nisso.' Walter White construiu um império sob o codinome Heisenberg, envenenou uma criança para manipular Jesse, e deixou um rastro de destruição que atingiu todos que amava. Seu vilão é o ego disfarçado de necessidade.",
    },
    {
      id: "cersei",
      title: "Cersei Lannister (Game of Thrones)",
      emoji: "🦁",
      description:
        "Você é a Rainha que explodiu o Grande Septo de Baelor com fogo selvagem, matando centenas de pessoas — incluindo os Tyrell e o próprio Alto Pardal — enquanto bebia vinho calmamente da janela da Fortaleza Vermelha. Cersei fez tudo em nome dos filhos, mas quando Tommen se jogou da janela, ela simplesmente sentou no Trono de Ferro. Sua motivação real sempre foi poder, e sua frase resume tudo: 'Quando se joga o jogo dos tronos, ou você vence ou você morre.'",
    },
    {
      id: "joker",
      title: "Coringa (Joker)",
      emoji: "🃏",
      description:
        "Você é Arthur Fleck, o comediante fracassado de Gotham que foi ignorado pelo sistema de saúde mental, humilhado em rede nacional no programa de Murray Franklin, e empurrado até o ponto de ruptura. O Coringa de Joaquin Phoenix (que rendeu o Oscar de 2020) não é um vilão com plano: é o reflexo de uma sociedade que descartou seus mais vulneráveis. Sua dança na escadaria do Bronx virou símbolo pop. Você enxerga as contradições que todo mundo finge não ver.",
    },
    {
      id: "kilgrave",
      title: "Kilgrave (Jessica Jones)",
      emoji: "🎭",
      description:
        "Você é Kevin Thompson, o homem com poder de controle mental que manteve Jessica Jones sob seu domínio por meses, forçando-a a fazer tudo que ele queria com um simples comando verbal. O mais perturbador de Kilgrave, interpretado por David Tennant, é que ele genuinamente não entende por que suas vítimas sofrem: 'Eu nunca soube se alguém fazia algo porque queria ou porque eu mandei.' Criado como cobaia de laboratório pelos próprios pais, ele é o vilão que te faz sentir desconforto porque seu charme funciona até em quem assiste.",
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
