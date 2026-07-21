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
  introText: "Descubra qual lenda da artilharia do futebol mundial mais combina com seu perfil.",
  profiles: [
    {
      id: "pele",
      title: "Pelé — O Rei do Futebol",
      emoji: "👑",
      description:
        "Você é completo e carismático! Assim como Pelé, você une talento, simpatia e liderança. Você é versátil, se adapta a qualquer situação e tem um brilho natural que inspira todos ao redor. O Rei!",
    },
    {
      id: "romario",
      title: "Romário — O Baixinho Genial",
      emoji: "🎯",
      description:
        "Você é oportunista e decisivo! Como Romário, você não precisa de muito espaço — basta uma chance e você resolve. Esperto, malandro (no bom sentido) e com faro de gol inigualável. Dentro da área, ninguém te para!",
    },
    {
      id: "ronaldo",
      title: "Ronaldo — O Fenômeno",
      emoji: "⚡",
      description:
        "Você é explosivo e imparável! Velocidade, força e técnica — você tem tudo. Como o Fenômeno, você supera qualquer adversidade (inclusive lesões da vida) e volta ainda mais forte. Quando você liga o turbo, ninguém segura!",
    },
    {
      id: "marta",
      title: "Marta — A Rainha do Futebol",
      emoji: "🌟",
      description:
        "Você é guerreira e pioneira! Assim como Marta, você abre caminhos e prova que talento não tem gênero. Persistente, habilidosa e com coração enorme. Você inspira gerações e nunca desiste, mesmo quando as condições são desfavoráveis.",
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
