import type { Quiz } from "@/lib/types";

export const qualArtilheiroHistorico: Quiz = {
  id: "qual-artilheiro-historico",
  slug: "qual-artilheiro-historico-voce-e",
  title: "Qual Artilheiro Historico Voce E?",
  description: "Pele, Romario, Ronaldo ou Marta? Descubra qual lenda do gol combina com voce!",
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
      title: "Pele — O Rei do Futebol",
      emoji: "👑",
      description:
        "Voce e completo e carismatico! Assim como Pele, voce une talento, simpatia e lideranca. Voce e versatil, se adapta a qualquer situacao e tem um brilho natural que inspira todos ao redor. O Rei!",
    },
    {
      id: "romario",
      title: "Romario — O Baixinho Genial",
      emoji: "🎯",
      description:
        "Voce e oportunista e decisivo! Como Romario, voce nao precisa de muito espaco — basta uma chance e voce resolve. Esperto, malandro (no bom sentido) e com faro de gol inigualavel. Dentro da area, ninguem te para!",
    },
    {
      id: "ronaldo",
      title: "Ronaldo — O Fenomeno",
      emoji: "⚡",
      description:
        "Voce e explosivo e imparavel! Velocidade, forca e tecnica — voce tem tudo. Como o Fenomeno, voce supera qualquer adversidade (inclusive lesoes da vida) e volta ainda mais forte. Quando voce liga o turbo, ninguem segura!",
    },
    {
      id: "marta",
      title: "Marta — A Rainha do Futebol",
      emoji: "🌟",
      description:
        "Voce e guerreira e pioneira! Assim como Marta, voce abre caminhos e prova que talento nao tem genero. Persistente, habilidosa e com coracao enorme. Voce inspira geracoes e nunca desiste, mesmo quando as condicoes sao desfavoraveis.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como voce define sucesso?",
      options: [
        { id: "a", text: "Ser reconhecido mundialmente como o melhor", profilePoints: { pele: 3 } },
        { id: "b", text: "Resolver quando mais importa", profilePoints: { romario: 3 } },
        { id: "c", text: "Superar limites que ninguem achava possivel", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Abrir portas para quem vem depois", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Na hora da pressao, voce:",
      options: [
        { id: "a", text: "Mantenho a calma e lidero pelo exemplo", profilePoints: { pele: 3 } },
        { id: "b", text: "Fico frio e espero o momento certo", profilePoints: { romario: 3 } },
        { id: "c", text: "Parto pra cima com tudo", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Dou o meu maximo com garra e emocao", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua maior qualidade?",
      options: [
        { id: "a", text: "Carisma e versatilidade", profilePoints: { pele: 3 } },
        { id: "b", text: "Malandragem e inteligencia", profilePoints: { romario: 3 } },
        { id: "c", text: "Explosao e poder fisico", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Persistencia e habilidade", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Voce prefere ser lembrado como:",
      options: [
        { id: "a", text: "O maior de todos os tempos", profilePoints: { pele: 3 } },
        { id: "b", text: "O cara que decidia os jogos importantes", profilePoints: { romario: 3 } },
        { id: "c", text: "O mais espetacular de assistir", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Quem mudou a historia do esporte", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual estilo de gol mais combina com voce?",
      options: [
        { id: "a", text: "Gol bonito de letra ou bicicleta", profilePoints: { pele: 3, ronaldo: 1 } },
        { id: "b", text: "Gol de oportunismo — a bola sobrou e eu empurrei", profilePoints: { romario: 3 } },
        { id: "c", text: "Arrancada de 50 metros driblando geral", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Drible desconcertante e finalizacao precisa", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Fora do futebol, voce seria mais ligado a:",
      options: [
        { id: "a", text: "Politica, negocios e ser embaixador global", profilePoints: { pele: 3 } },
        { id: "b", text: "Curtir a vida, praia e bom humor", profilePoints: { romario: 3 } },
        { id: "c", text: "Marca pessoal, moda e estilo de vida", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Causas sociais e empoderamento", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual adversidade voce mais se identifica?",
      options: [
        { id: "a", text: "Carregar o peso de ser o melhor sempre", profilePoints: { pele: 3 } },
        { id: "b", text: "Provaram que duvidaram do meu talento", profilePoints: { romario: 3 } },
        { id: "c", text: "Superei problemas fisicos que quase acabaram minha carreira", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Lutei contra um sistema que nao me valorizava", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Como e seu humor?",
      options: [
        { id: "a", text: "Diplomatico e elegante", profilePoints: { pele: 3 } },
        { id: "b", text: "Ironico e debochado (no bom sentido)", profilePoints: { romario: 3 } },
        { id: "c", text: "Alegre e extrovertido", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Emotivo e inspirador", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual numero de camisa voce usaria?",
      options: [
        { id: "a", text: "10 — o classico craque", profilePoints: { pele: 3, marta: 1 } },
        { id: "b", text: "11 — o matador da area", profilePoints: { romario: 3 } },
        { id: "c", text: "9 — o centroavante destruidor", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Qualquer numero — o que importa e jogar", profilePoints: { marta: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais te representa?",
      options: [
        { id: "a", text: "Nasci pra jogar futebol", profilePoints: { pele: 3 } },
        { id: "b", text: "Sou o melhor — nao discuto", profilePoints: { romario: 3 } },
        { id: "c", text: "O impossivel nao existe", profilePoints: { ronaldo: 3 } },
        { id: "d", text: "Chore no inicio pra sorrir no final", profilePoints: { marta: 3 } },
      ],
    },
  ],
};
