import type { Quiz } from "@/lib/types";

export const qualJogadorCopa2026: Quiz = {
  id: "qual-jogador-copa-2026",
  slug: "qual-jogador-voce-seria-na-copa-2026",
  title: "Qual Jogador Voce Seria na Copa 2026?",
  description:
    "Vini Jr, Neymar, Messi, CR7, Mbappe... Descubra qual craque combina com voce!",
  type: "personality",
  category: "copa-do-mundo",
  emoji: "⚽",
  color: "#059669",
  plays: 8740,
  tags: ["copa", "futebol", "2026", "jogadores", "personalidade", "selecoes"],
  createdAt: "2026-06-11",
  featured: true,
  profiles: [
    {
      id: "vini",
      title: "Vini Jr (Brasil)",
      emoji: "🇧🇷",
      description:
        "Voce e pura velocidade e ousadia! Dribla qualquer obstaculo na vida e no campo. Tem sangue nos olhos, nao desiste nunca e adora provar que os criticos estao errados. Bola de Ouro merecida!",
    },
    {
      id: "neymar",
      title: "Neymar Jr (Brasil)",
      emoji: "🇧🇷",
      description:
        "Voce e pura magia com a bola nos pes! Criativo, carismatico e cheio de ginga. Dentro e fora de campo, voce e o centro das atencoes. Quando ta inspirado, ninguem segura!",
    },
    {
      id: "endrick",
      title: "Endrick (Brasil)",
      emoji: "🇧🇷",
      description:
        "Voce e a nova geracao! Jovem, determinado e com fome de vencer. Nao tem medo de desafio grande e ja joga como veterano. O futuro e brilhante e comecou agora!",
    },
    {
      id: "messi",
      title: "Lionel Messi (Argentina)",
      emoji: "🇦🇷",
      description:
        "Voce e o genio silencioso! Nao precisa gritar pra ser notado — sua qualidade fala por si. Calmo, humilde e com uma visao de jogo (e de vida) que poucos conseguem acompanhar. GOAT.",
    },
    {
      id: "mbappe",
      title: "Kylian Mbappe (Franca)",
      emoji: "🇫🇷",
      description:
        "Voce e ambicao pura! Jovem, rapido e ja no topo. Nao tem medo de palco grande e quer quebrar todos os recordes. Autoconfiante e determinado — o mundo e pequeno pra voce.",
    },
    {
      id: "cr7",
      title: "Cristiano Ronaldo (Portugal)",
      emoji: "🇵🇹",
      description:
        "Voce e disciplina e perfeccao! Ninguem trabalha mais duro que voce. Competitivo ate jogando baralho, fisicamente impecavel e com mentalidade de campeao. SIUUUU!",
    },
    {
      id: "haaland",
      title: "Erling Haaland (Noruega)",
      emoji: "🇳🇴",
      description:
        "Voce e uma maquina! Focado, objetivo e devastador quando ve uma oportunidade. Nao perde tempo com firula — vai direto ao gol. Fisicamente forte e mentalmente inabalavel.",
    },
    {
      id: "bellingham",
      title: "Jude Bellingham (Inglaterra)",
      emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      description:
        "Voce e o jogador completo! Versátil, maduro e lider mesmo sendo jovem. Chega em todos os setores do campo e resolve qualquer situacao. Raça, tecnica e inteligencia num pacote so.",
    },
    {
      id: "modric",
      title: "Luka Modric (Croacia)",
      emoji: "🇭🇷",
      description:
        "Voce e elegancia e inteligencia em campo! Pode nao ser o mais forte ou rapido, mas ninguem le o jogo melhor que voce. Experiencia, classe e lideranca silenciosa te definem.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Como voce reage quando alguem duvida de voce?",
      options: [
        { id: "a", text: "Provo com gol — acao e a melhor resposta", profilePoints: { vini: 3, endrick: 1 } },
        { id: "b", text: "Ignoro e deixo meu talento falar por mim", profilePoints: { messi: 3 } },
        { id: "c", text: "Uso como combustivel — vou treinar o dobro", profilePoints: { cr7: 3 } },
        { id: "d", text: "Nem ligo, foco total no meu objetivo", profilePoints: { haaland: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Qual sua principal qualidade?",
      options: [
        { id: "a", text: "Criatividade e ginga", profilePoints: { neymar: 3, vini: 1 } },
        { id: "b", text: "Visao de jogo e inteligencia", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Disciplina e forca de vontade", profilePoints: { cr7: 3, haaland: 1 } },
        { id: "d", text: "Versatilidade — faco de tudo um pouco", profilePoints: { bellingham: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Num jogo decisivo de Copa, voce prefere:",
      options: [
        { id: "a", text: "Driblar o marcador e fazer o gol da vitoria", profilePoints: { vini: 2, neymar: 2 } },
        { id: "b", text: "Dar a assistencia perfeita pro companheiro", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Marcar um hat-trick e ser o heroi", profilePoints: { mbappe: 2, cr7: 2 } },
        { id: "d", text: "Cabecear o gol nos acrescimos", profilePoints: { haaland: 2, bellingham: 2 } },
      ],
    },
    {
      id: "q4",
      text: "Qual e seu estilo de comemorar um gol?",
      options: [
        { id: "a", text: "Dancinha ousada — sou showman!", profilePoints: { vini: 2, neymar: 2 } },
        { id: "b", text: "SIUUUU com o pulo classico", profilePoints: { cr7: 3 } },
        { id: "c", text: "Braco cruzado com cara de 'eu avisei'", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Abraco no time — vitoria e coletiva", profilePoints: { messi: 2, bellingham: 1, endrick: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Fora do campo, voce seria mais:",
      options: [
        { id: "a", text: "Festeiro e nas redes sociais", profilePoints: { neymar: 3 } },
        { id: "b", text: "Familia e vida tranquila", profilePoints: { messi: 3, modric: 1 } },
        { id: "c", text: "Marcas de luxo, negocios e YouTube", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "d", text: "Academia e dieta rigorosa 24/7", profilePoints: { haaland: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual posicao combina mais com voce?",
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
        { id: "c", text: "Fazer minha familia orgulhosa", profilePoints: { endrick: 2, messi: 2 } },
        { id: "d", text: "Colecionar titulos e recordes", profilePoints: { mbappe: 2, bellingham: 1, modric: 1 } },
      ],
    },
    {
      id: "q8",
      text: "Seu time ta perdendo por 1x0 na final. O que voce faz?",
      options: [
        { id: "a", text: "Pego a bola e parto driblando geral", profilePoints: { neymar: 2, vini: 2 } },
        { id: "b", text: "Organizo a jogada com calma e visao", profilePoints: { modric: 3, messi: 1 } },
        { id: "c", text: "Chuto de fora da area com toda forca", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "d", text: "Me posiciono na area e espero o cruzamento", profilePoints: { haaland: 3, endrick: 1 } },
      ],
    },
    {
      id: "q9",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "Talento sem trabalho nao e nada", profilePoints: { cr7: 3, bellingham: 1 } },
        { id: "b", text: "Futebol e alegria e diversao", profilePoints: { neymar: 3, vini: 1 } },
        { id: "c", text: "Eu nao vim aqui pra ser coadjuvante", profilePoints: { mbappe: 3 } },
        { id: "d", text: "A experiencia vale mais que a forca", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Com que idade voce quer atingir o auge da carreira?",
      options: [
        { id: "a", text: "Ja estou no meu auge — comecei cedo!", profilePoints: { mbappe: 2, endrick: 2 } },
        { id: "b", text: "Entre 25 e 28 — no prime", profilePoints: { vini: 2, bellingham: 2 } },
        { id: "c", text: "Meu auge nunca acaba — me reinvento", profilePoints: { cr7: 2, messi: 2 } },
        { id: "d", text: "Depois dos 30, como vinho bom", profilePoints: { modric: 3, neymar: 1 } },
      ],
    },
    {
      id: "q11",
      text: "Qual selecao voce mais admira (alem da sua)?",
      options: [
        { id: "a", text: "Brasil — ginga e alegria", profilePoints: { neymar: 2, vini: 1, endrick: 1 } },
        { id: "b", text: "Argentina — raça e coracao", profilePoints: { messi: 3 } },
        { id: "c", text: "Franca/Portugal — poder e estrelas", profilePoints: { mbappe: 2, cr7: 2 } },
        { id: "d", text: "Inglaterra/Croacia — tatica e forca", profilePoints: { bellingham: 2, modric: 2 } },
      ],
    },
    {
      id: "q12",
      text: "Se nao fosse jogador, voce seria:",
      options: [
        { id: "a", text: "Influencer ou artista", profilePoints: { neymar: 2, vini: 2 } },
        { id: "b", text: "Empresario ou CEO bilionario", profilePoints: { cr7: 2, mbappe: 2 } },
        { id: "c", text: "Treinador ou comentarista", profilePoints: { messi: 2, modric: 2 } },
        { id: "d", text: "Atleta de outro esporte", profilePoints: { haaland: 2, bellingham: 1, endrick: 1 } },
      ],
    },
  ],
};
