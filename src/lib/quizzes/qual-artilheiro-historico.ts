import type { Quiz } from "@/lib/types";

export const qualArtilheiroHistorico: Quiz = {
  id: "qual-artilheiro-historico",
  slug: "qual-artilheiro-historico-voce-e",
  title: "Qual Artilheiro Histórico Você É?",
  description: "Pelé, Romário, Ronaldo ou Marta? Descubra qual lenda do gol combina com você!",
  type: "personality",
  category: "copa-do-mundo",
  emoji: "🏆",
  color: "#059669",
  tags: ["copa", "futebol", "artilheiro", "personalidade", "lendas"],
  createdAt: "2026-06-11",
  featured: false,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "FIFA.com — All-time World Cup Top Scorers", organization: "FIFA", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Pelé encantava, Romário resolvia na pequena área, Ronaldo arrancava do meio de campo e Marta abriu portas num esporte que insistia em fechá-las. Qual desses estilos de gol é o seu?",
  profiles: [
    {
      id: "pele",
      title: "Pelé — O Rei do Futebol",
      emoji: "👑",
      description:
        "Você é o Rei. Edson Arantes do Nascimento marcou mais de 1.200 gols na carreira (incluindo jogos não oficiais e amistosos), conquistou 3 Copas do Mundo (1958, 1962, 1970) e é o único jogador a conseguir esse feito. Estreou na Seleção aos 16 anos e marcou dois gols na final da Copa de 58 contra a Suécia, tornando-se o mais jovem a marcar numa decisão de Mundial. Pelo Santos, fez o milésimo gol de pênalti contra o Vasco em 1969, parando o Maracanã. Versatilidade, carisma e grandeza em campo e fora dele.",
    },
    {
      id: "romario",
      title: "Romário — O Baixinho Genial",
      emoji: "🎯",
      description:
        "Você é o Baixinho que decidiu a Copa de 94 nos EUA praticamente sozinho, com 5 gols no torneio e o título de melhor jogador. Romário alcançou a marca de mil gols segundo contagem própria (incluindo amistosos e jogos não documentados oficialmente) e era especialista em resolver tudo dentro da pequena área: sem arrancadas épicas, sem dribles longos, apenas posicionamento perfeito e finalização letal. Sua frase 'o melhor sou eu' não era arrogância — era estatística.",
    },
    {
      id: "ronaldo",
      title: "Ronaldo — O Fenômeno",
      emoji: "⚡",
      description:
        "Você é o Fenômeno. Ronaldo Nazário ganhou o prêmio de melhor do mundo pela FIFA 3 vezes (1996, 1997, 2002) e marcou 15 gols em Copas do Mundo, incluindo os dois na final de 2002 contra a Alemanha que exorcizaram o fantasma da convulsão de 1998. Sofreu duas lesões gravíssimas no joelho que quase encerraram sua carreira, mas voltou cada vez mais forte. O gol contra o Compostela pelo Barcelona em 1996, driblando quase o time inteiro numa arrancada de meio de campo, é considerado um dos maiores da história. Explosão, superação e talento sobrenatural.",
    },
    {
      id: "marta",
      title: "Marta — A Rainha do Futebol",
      emoji: "🌟",
      description:
        "Você é Marta Vieira da Silva, eleita 6 vezes a melhor jogadora do mundo pela FIFA e maior artilheira da história das Copas do Mundo femininas com 17 gols. Saiu de Dois Riachos, Alagoas, um dos municípios mais pobres do Brasil, e precisou jogar com os meninos porque não havia time feminino na cidade. Seu gol de placa contra os EUA na Copa de 2007, driblando 4 defensoras, é um dos mais bonitos já marcados. Pioneira que abriu portas num esporte que por décadas fechou as portas pra mulheres.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como você define sucesso?",
      options: [
        { id: "a", text: "Ser reconhecido mundialmente como o melhor", profilePoints: { pele: 3 } },
        { id: "b", text: "Resolver quando mais importa", profilePoints: { romario: 3 } },
        { id: "c", text: "Superar limites que ninguém achava possível", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Abrir portas para quem vem depois", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Na hora da pressão, você:",
      options: [
        { id: "a", text: "Mantenho a calma e lidero pelo exemplo", profilePoints: { pele: 3 } },
        { id: "b", text: "Fico frio e espero o momento certo", profilePoints: { romario: 3 } },
        { id: "c", text: "Parto pra cima com tudo", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Dou o meu máximo com garra e emoção", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua maior qualidade?",
      options: [
        { id: "a", text: "Carisma e versatilidade", profilePoints: { pele: 3 } },
        { id: "b", text: "Malandragem e inteligência", profilePoints: { romario: 3 } },
        { id: "c", text: "Explosão e poder físico", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Persistência e habilidade", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Você prefere ser lembrado como:",
      options: [
        { id: "a", text: "O maior de todos os tempos", profilePoints: { pele: 3 } },
        { id: "b", text: "O cara que decidia os jogos importantes", profilePoints: { romario: 3 } },
        { id: "c", text: "O mais espetacular de assistir", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Quem mudou a história do esporte", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual estilo de gol mais combina com você?",
      options: [
        { id: "a", text: "Gol bonito de letra ou bicicleta", profilePoints: { pele: 3, ronaldo: 1 } },
        { id: "b", text: "Gol de oportunismo — a bola sobrou e eu empurrei", profilePoints: { romario: 3 } },
        { id: "c", text: "Arrancada de 50 metros driblando geral", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Drible desconcertante e finalização precisa", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Fora do futebol, você seria mais ligado a:",
      options: [
        { id: "a", text: "Política, negócios e ser embaixador global", profilePoints: { pele: 3 } },
        { id: "b", text: "Curtir a vida, praia e bom humor", profilePoints: { romario: 3 } },
        { id: "c", text: "Marca pessoal, moda e estilo de vida", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Causas sociais e empoderamento", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual adversidade você mais se identifica?",
      options: [
        { id: "a", text: "Carregar o peso de ser o melhor sempre", profilePoints: { pele: 3 } },
        { id: "b", text: "Provaram que duvidaram do meu talento", profilePoints: { romario: 3 } },
        { id: "c", text: "Superei problemas físicos que quase acabaram minha carreira", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Lutei contra um sistema que não me valorizava", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Como é seu humor?",
      options: [
        { id: "a", text: "Diplomático e elegante", profilePoints: { pele: 3 } },
        { id: "b", text: "Irônico e debochado (no bom sentido)", profilePoints: { romario: 3 } },
        { id: "c", text: "Alegre e extrovertido", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Emotivo e inspirador", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual número de camisa você usaria?",
      options: [
        { id: "a", text: "10 — o clássico craque", profilePoints: { pele: 3, marta: 1 } },
        { id: "b", text: "11 — o matador da área", profilePoints: { romario: 3 } },
        { id: "c", text: "9 — o centroavante destruidor", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Qualquer número — o que importa é jogar", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais te representa?",
      options: [
        { id: "a", text: "Nasci pra jogar futebol", profilePoints: { pele: 3 } },
        { id: "b", text: "Sou o melhor — não discuto", profilePoints: { romario: 3 } },
        { id: "c", text: "O impossível não existe", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Chore no início pra sorrir no final", profilePoints: { marta: 3 } },
      ],
    },
  ],
};
