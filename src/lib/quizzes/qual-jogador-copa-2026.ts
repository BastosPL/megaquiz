import type { Quiz } from "@/lib/types";

export const qualJogadorCopa2026: Quiz = {
  id: "qual-jogador-copa-2026",
  slug: "qual-jogador-voce-seria-na-copa-2026",
  title: "Qual Jogador Você Seria na Copa 2026?",
  description:
    "Vini Jr, Neymar, Messi, CR7, Mbappé... Descubra qual craque combina com você!",
  type: "personality",
  category: "copa-do-mundo",
  emoji: "⚽",
  color: "#059669",
  tags: ["copa", "futebol", "2026", "jogadores", "personalidade", "selecoes"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "FIFA.com — FIFA World Cup 26 Players", organization: "FIFA", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Vini Jr. decide no drible, Messi pensa três passes à frente, Mbappé resolve na velocidade e CR7 aparece quando o jogo pesa. Se a Copa 2026 precisasse de você, em qual posição você entraria?",
  profiles: [
    {
      id: "vini",
      title: "Vini Jr (Brasil)",
      emoji: "🇧🇷",
      description:
        "Você é pura velocidade e ousadia! Dribla qualquer obstáculo na vida e no campo. Tem sangue nos olhos, não desiste nunca e adora provar que os críticos estão errados. Eleito melhor jogador da Champions League 2023/24!",
    },
    {
      id: "neymar",
      title: "Neymar Jr (Brasil)",
      emoji: "🇧🇷",
      description:
        "Você é pura magia com a bola nos pés! Criativo, carismático e cheio de ginga. Dentro e fora de campo, você é o centro das atenções. Quando tá inspirado, ninguém segura!",
    },
    {
      id: "endrick",
      title: "Endrick (Brasil)",
      emoji: "🇧🇷",
      description:
        "Você é a nova geração! Jovem, determinado e com fome de vencer. Não tem medo de desafio grande e já joga como veterano. O futuro é brilhante e começou agora!",
    },
    {
      id: "messi",
      title: "Lionel Messi (Argentina)",
      emoji: "🇦🇷",
      description:
        "Você é o gênio silencioso! Não precisa gritar pra ser notado — sua qualidade fala por si. Calmo, humilde e com uma visão de jogo (e de vida) que poucos conseguem acompanhar. GOAT.",
    },
    {
      id: "mbappe",
      title: "Kylian Mbappé (França)",
      emoji: "🇫🇷",
      description:
        "Você é ambição pura! Jovem, rápido e já no topo. Não tem medo de palco grande e quer quebrar todos os recordes. Autoconfiante e determinado — o mundo é pequeno pra você.",
    },
    {
      id: "cr7",
      title: "Cristiano Ronaldo (Portugal)",
      emoji: "🇵🇹",
      description:
        "Você é disciplina e perfeição! Ninguém trabalha mais duro que você. Competitivo até jogando baralho, fisicamente impecável e com mentalidade de campeão. SIUUUU!",
    },
    {
      id: "haaland",
      title: "Erling Haaland (Noruega)",
      emoji: "🇳🇴",
      description:
        "Você é uma máquina! Focado, objetivo e devastador quando vê uma oportunidade. Não perde tempo com firula — vai direto ao gol. Fisicamente forte e mentalmente inabalável.",
    },
    {
      id: "bellingham",
      title: "Jude Bellingham (Inglaterra)",
      emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      description:
        "Você é o jogador completo! Versátil, maduro e líder mesmo sendo jovem. Chega em todos os setores do campo e resolve qualquer situação. Raça, técnica e inteligência num pacote só.",
    },
    {
      id: "modric",
      title: "Luka Modrić (Croácia)",
      emoji: "🇭🇷",
      description:
        "Você é elegância e inteligência em campo! Pode não ser o mais forte ou rápido, mas ninguém lê o jogo melhor que você. Experiência, classe e liderança silenciosa te definem.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como você reage quando alguém duvida de você?",
      options: [
        { id: "a", text: "Provo com gol — ação é a melhor resposta", profilePoints: { vini: 3, endrick: 1 } },
        { id: "b", text: "Ignoro e deixo meu talento falar por mim", profilePoints: { messi: 3 } },
        { id: "c", text: "Uso como combustível — vou treinar o dobro", profilePoints: { cr7: 3 } },
        { id: "d", text: "Nem ligo, foco total no meu objetivo", profilePoints: { haaland: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Qual sua principal qualidade?",
      options: [
        { id: "a", text: "Criatividade e ginga", profilePoints: { neymar: 3, vini: 1 } },
        { id: "b", text: "Visão de jogo e inteligência", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Disciplina e força de vontade", profilePoints: { cr7: 3, haaland: 1 } },
        { id: "d", text: "Versatilidade — faço de tudo um pouco", profilePoints: { bellingham: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Num jogo decisivo de Copa, você prefere:",
      options: [
        { id: "a", text: "Driblar o marcador e fazer o gol da vitória", profilePoints: { vini: 2, neymar: 2 } },
        { id: "b", text: "Dar a assistência perfeita pro companheiro", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Marcar um hat-trick e ser o herói", profilePoints: { mbappe: 2, cr7: 2 } },
        { id: "d", text: "Cabecear o gol nos acréscimos", profilePoints: { haaland: 2, bellingham: 2 } },
      ],
    },
    {
      id: "q4",
      text: "Qual é seu estilo de comemorar um gol?",
      options: [
        { id: "a", text: "Dancinha ousada — sou showman!", profilePoints: { vini: 2, neymar: 2 } },
        { id: "b", text: "SIUUUU com o pulo clássico", profilePoints: { cr7: 3 } },
        { id: "c", text: "Braço cruzado com cara de 'eu avisei'", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Abraço no time — vitória é coletiva", profilePoints: { messi: 2, bellingham: 1, endrick: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Fora do campo, você seria mais:",
      options: [
        { id: "a", text: "Festeiro e nas redes sociais", profilePoints: { neymar: 3 } },
        { id: "b", text: "Família e vida tranquila", profilePoints: { messi: 3, modric: 1 } },
        { id: "c", text: "Marcas de luxo, negócios e YouTube", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "d", text: "Academia e dieta rigorosa 24/7", profilePoints: { haaland: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual posição combina mais com você?",
      options: [
        { id: "a", text: "Ponta — dribles e velocidade", profilePoints: { vini: 2, neymar: 2 } },
        { id: "b", text: "Meia atacante — criatividade e passes geniais", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Centroavante — goleador nato", profilePoints: { haaland: 2, cr7: 2 } },
        { id: "d", text: "Meia completo — ataco e defendo", profilePoints: { bellingham: 3, endrick: 1 } },
      ],
    },
    {
      id: "q7",
      text: "O que te motiva na vida?",
      options: [
        { id: "a", text: "Superar preconceitos e provar meu valor", profilePoints: { vini: 3, endrick: 1 } },
        { id: "b", text: "Ser o melhor de todos os tempos", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "c", text: "Fazer minha família orgulhosa", profilePoints: { endrick: 2, messi: 2 } },
        { id: "d", text: "Colecionar títulos e recordes", profilePoints: { mbappe: 2, bellingham: 1, modric: 1 } },
      ],
    },
    {
      id: "q8",
      text: "Seu time tá perdendo por 1x0 na final. O que você faz?",
      options: [
        { id: "a", text: "Pego a bola e parto driblando geral", profilePoints: { neymar: 2, vini: 2 } },
        { id: "b", text: "Organizo a jogada com calma e visão", profilePoints: { modric: 3, messi: 1 } },
        { id: "c", text: "Chuto de fora da área com toda força", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "d", text: "Me posiciono na área e espero o cruzamento", profilePoints: { haaland: 3, endrick: 1 } },
      ],
    },
    {
      id: "q9",
      text: "Qual frase mais combina com você?",
      options: [
        { id: "a", text: "Talento sem trabalho não é nada", profilePoints: { cr7: 3, bellingham: 1 } },
        { id: "b", text: "Futebol é alegria e diversão", profilePoints: { neymar: 3, vini: 1 } },
        { id: "c", text: "Eu não vim aqui pra ser coadjuvante", profilePoints: { mbappe: 3 } },
        { id: "d", text: "A experiência vale mais que a força", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Com que idade você quer atingir o auge da carreira?",
      options: [
        { id: "a", text: "Já estou no meu auge — comecei cedo!", profilePoints: { mbappe: 2, endrick: 2 } },
        { id: "b", text: "Entre 25 e 28 — no prime", profilePoints: { vini: 2, bellingham: 2 } },
        { id: "c", text: "Meu auge nunca acaba — me reinvento", profilePoints: { cr7: 2, messi: 2 } },
        { id: "d", text: "Depois dos 30, como vinho bom", profilePoints: { modric: 3, neymar: 1 } },
      ],
    },
    {
      id: "q11",
      text: "Qual seleção você mais admira (além da sua)?",
      options: [
        { id: "a", text: "Brasil — ginga e alegria", profilePoints: { neymar: 2, vini: 1, endrick: 1 } },
        { id: "b", text: "Argentina — raça e coração", profilePoints: { messi: 3 } },
        { id: "c", text: "França/Portugal — poder e estrelas", profilePoints: { mbappe: 2, cr7: 2 } },
        { id: "d", text: "Inglaterra/Croácia — tática e força", profilePoints: { bellingham: 2, modric: 2 } },
      ],
    },
    {
      id: "q12",
      text: "Se não fosse jogador, você seria:",
      options: [
        { id: "a", text: "Influencer ou artista", profilePoints: { neymar: 2, vini: 2 } },
        { id: "b", text: "Empresário ou CEO bilionário", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "c", text: "Treinador ou comentarista", profilePoints: { messi: 2, modric: 2 } },
        { id: "d", text: "Atleta de outro esporte", profilePoints: { haaland: 2, bellingham: 1, endrick: 1 } },
      ],
    },
  ],
};
