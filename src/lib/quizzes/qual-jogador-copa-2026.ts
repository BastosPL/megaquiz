import type { Quiz } from "@/lib/types";

export const qualJogadorCopa2026: Quiz = {
  id: "qual-jogador-copa-2026",
  slug: "qual-jogador-voce-seria-na-copa-2026",
  title: "Qual Jogador Voce Seria na Copa 2026?",
  description: "Descubra se voce jogaria como Vini Jr, Messi, Mbappe ou Haaland!",
  type: "personality",
  category: "copa-do-mundo",
  emoji: "⚽",
  color: "#059669",
  plays: 5430,
  tags: ["copa", "futebol", "2026", "jogadores", "personalidade"],
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
        "Voce e ambicao pura! Jovem, rapido e ja no topo. Nao tem medo de palco grande e quer quebrar todos os recordes. Autoconfiante e determinado — o futuro e seu.",
    },
    {
      id: "haaland",
      title: "Erling Haaland (Noruega)",
      emoji: "🇳🇴",
      description:
        "Voce e uma maquina! Focado, objetivo e devastador quando ve uma oportunidade. Nao perde tempo com firula — vai direto ao gol. Fisicamente forte e mentalmente inabalavel.",
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
        { id: "a", text: "Provo com acoes — gol e a melhor resposta", profilePoints: { vini: 3 } },
        { id: "b", text: "Ignoro e deixo meu trabalho falar", profilePoints: { messi: 3 } },
        { id: "c", text: "Uso como combustivel pra ser ainda melhor", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Nem ligo — foco total no meu objetivo", profilePoints: { haaland: 3 } },
        { id: "e", text: "Mostro com experiencia e maturidade", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Qual sua principal qualidade?",
      options: [
        { id: "a", text: "Ousadia e velocidade", profilePoints: { vini: 3, mbappe: 1 } },
        { id: "b", text: "Visao e criatividade", profilePoints: { messi: 3 } },
        { id: "c", text: "Ambicao e confianca", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Forca e objetividade", profilePoints: { haaland: 3 } },
        { id: "e", text: "Inteligencia e lideranca", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Num jogo decisivo de Copa, voce prefere:",
      options: [
        { id: "a", text: "Driblar o marcador e fazer o gol da vitoria", profilePoints: { vini: 3 } },
        { id: "b", text: "Dar a assistencia perfeita pro companheiro", profilePoints: { messi: 3, modric: 1 } },
        { id: "c", text: "Marcar um hat-trick e ser o heroi", profilePoints: { mbappe: 2, haaland: 2 } },
        { id: "d", text: "Liderar o time nos penaltis", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual e seu estilo de comemorar um gol?",
      options: [
        { id: "a", text: "Dancinha ousada — sou showman!", profilePoints: { vini: 3 } },
        { id: "b", text: "Abraco no time — vitoria e coletiva", profilePoints: { messi: 3 } },
        { id: "c", text: "Braco cruzado com cara de \"eu avisei\"", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Grito de guerra e soco no ar", profilePoints: { haaland: 3 } },
        { id: "e", text: "Comemoro com classe e respeito", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Fora do campo, voce seria mais:",
      options: [
        { id: "a", text: "Estiloso e nas redes sociais", profilePoints: { vini: 3, mbappe: 1 } },
        { id: "b", text: "Familia e vida tranquila", profilePoints: { messi: 3 } },
        { id: "c", text: "Marcas de luxo e negocios", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Academia e dieta rigorosa", profilePoints: { haaland: 3 } },
        { id: "e", text: "Discreto e focado no proximo jogo", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual posicao combina mais com voce?",
      options: [
        { id: "a", text: "Ponta esquerda — dribles e velocidade", profilePoints: { vini: 3 } },
        { id: "b", text: "Meia atacante — criatividade pura", profilePoints: { messi: 3 } },
        { id: "c", text: "Atacante versatil — jogo em qualquer posicao", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Centroavante — goleador nato", profilePoints: { haaland: 3 } },
        { id: "e", text: "Meio-campista — controlo o ritmo do jogo", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que te motiva na vida?",
      options: [
        { id: "a", text: "Superar preconceitos e provar meu valor", profilePoints: { vini: 3 } },
        { id: "b", text: "Fazer historia e ser lembrado", profilePoints: { messi: 3 } },
        { id: "c", text: "Ser o melhor da minha geracao", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Numeros e resultados concretos", profilePoints: { haaland: 3 } },
        { id: "e", text: "Longevidade e consistencia", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Seu time ta perdendo por 1x0 na final. O que voce faz?",
      options: [
        { id: "a", text: "Pego a bola e parto pra cima driblando geral", profilePoints: { vini: 3 } },
        { id: "b", text: "Organizo a jogada coletiva com calma", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Arrisco de fora da area — chute forte", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Me posiciono na area e espero o cruzamento", profilePoints: { haaland: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "Deus me deu esse dom e eu vou usar", profilePoints: { vini: 3 } },
        { id: "b", text: "O trabalho duro supera o talento", profilePoints: { messi: 3 } },
        { id: "c", text: "Eu nao vim aqui pra ser coadjuvante", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Menos papo, mais gol", profilePoints: { haaland: 3 } },
        { id: "e", text: "A experiencia vale mais que a forca", profilePoints: { modric: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se nao fosse jogador, voce seria:",
      options: [
        { id: "a", text: "Influencer ou artista", profilePoints: { vini: 3 } },
        { id: "b", text: "Treinador ou mentor", profilePoints: { messi: 2, modric: 2 } },
        { id: "c", text: "Empresario ou CEO", profilePoints: { mbappe: 3 } },
        { id: "d", text: "Atleta de outro esporte radical", profilePoints: { haaland: 3 } },
      ],
    },
  ],
};
