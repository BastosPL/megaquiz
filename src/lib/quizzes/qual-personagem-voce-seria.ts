import type { Quiz } from "@/lib/types";

export const qualPersonagemVoceSeria: Quiz = {
  id: "qual-personagem-voce-seria",
  slug: "qual-personagem-de-serie-voce-seria",
  title: "Qual Personagem de Série Você Seria?",
  description: "Descubra se você seria o Professor, a Eleven, o Tommy Shelby ou a Wednesday!",
  type: "personality",
  category: "series-filmes",
  emoji: "🎭",
  color: "#8B5CF6",
  tags: ["personalidade", "series", "personagens", "divertido"],
  createdAt: "2026-06-09",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "IMDb — Most Popular TV Shows", url: "https://www.imdb.com/chart/tvmeter/", organization: "IMDb", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "O Professor resolve com lógica, Eleven enfrenta monstros de frente, Tommy Shelby joga sujo quando precisa e Wednesday prefere resolver tudo sozinha. Quem faria o que você faria?",
  profiles: [
    {
      id: "professor",
      title: "O Professor (La Casa de Papel)",
      emoji: "🧠",
      description:
        "Você é Sergio Marquina, o homem que passou meses numa casa isolada ensinando criminosos a resistir psicologicamente enquanto planejava cada minuto do assalto à Casa da Moeda da Espanha. Seu trunfo não é a força: é fazer origami sob pressão e ter previsto cada jogada da polícia antes dela acontecer. A relação improvável com a inspetora Raquel Murillo provou que até o planejador mais meticuloso pode ser pego de surpresa pelo coração.",
    },
    {
      id: "eleven",
      title: "Eleven (Stranger Things)",
      emoji: "🔮",
      description:
        "Você é Jane 'Eleven' Ives, a garota criada em laboratório pelo Dr. Brenner no Hawkins National Laboratory, que escapou com a cabeça raspada, poderes telecinéticos e zero conhecimento do mundo real. Eleven aprendeu sobre amizade com Mike, Lucas e Dustin, descobriu que Eggos congelados são o melhor alimento do planeta, e enfrentou o Demogorgon, o Mind Flayer e Vecna para proteger quem ama. Seu poder vem do trauma, mas sua força vem da lealdade.",
    },
    {
      id: "tommy",
      title: "Tommy Shelby (Peaky Blinders)",
      emoji: "🎩",
      description:
        "Você é Thomas Shelby, o líder dos Peaky Blinders de Birmingham que voltou das trincheiras da Primeira Guerra Mundial com estresse pós-traumático e uma ambição que o levou de apostador de rua a membro do Parlamento britânico. Tommy fuma sem parar, fala em frases curtas e toma decisões que destroem quem está ao redor — incluindo ele mesmo. Sua boina com lâmina escondida virou símbolo de uma geração inteira de fãs. Por trás do olhar gelado, carrega os fantasmas de cada pessoa que sacrificou pelo império Shelby.",
    },
    {
      id: "wednesday",
      title: "Wednesday Addams",
      emoji: "🖤",
      description:
        "Você é Wednesday Addams na versão de Jenna Ortega: a adolescente gótica que foi mandada para a Nevermore Academy depois de soltar piranhas na piscina da escola para vingar o irmão Pugsley. Ela resolve crimes com lógica fria, toca violoncelo para relaxar, e sua dança viral no baile Rave'N (coreografada pela própria Ortega) acumulou bilhões de visualizações no TikTok. Amizade pra ela é um conceito que exige provas de lealdade extrema, e sarcasmo é sua primeira língua.",
    },
    {
      id: "sheldon",
      title: "Sheldon Cooper (The Big Bang Theory)",
      emoji: "🔬",
      description:
        "Você é Dr. Sheldon Lee Cooper, PhD, o físico teórico do Caltech com QI de 187 que tem lugar marcado no sofá (o ponto exato que ele calculou para temperatura, corrente de ar e ângulo de visão ideais), bate três vezes na porta antes de falar o nome da pessoa, e considera o Acordo de Colegas de Quarto um documento juridicamente vinculante. Sheldon levou 12 temporadas para ganhar o Nobel de Física, aprender a abraçar e aceitar que Amy Farrah Fowler é sua igual intelectual. Suas manias não são frescura: são a estrutura que mantém seu gênio funcionando.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "É sábado à noite. O que você prefere fazer?",
      options: [
        { id: "a", text: "Planejar algo elaborado com antecedência", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Ficar em casa vendo série com alguém especial", profilePoints: { eleven: 3, wednesday: 1 } },
        { id: "c", text: "Sair pra um lugar chique e fazer networking", profilePoints: { tommy: 3 } },
        { id: "d", text: "Ler um livro ou explorar algo sozinho(a)", profilePoints: { wednesday: 3, sheldon: 1 } },
        { id: "e", text: "Outro programa", profilePoints: { professor: 1, eleven: 1, tommy: 1, wednesday: 1, sheldon: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Como você reage quando alguém te trai?",
      options: [
        { id: "a", text: "Planejo uma vingança perfeita e silenciosa", profilePoints: { professor: 3, wednesday: 1 } },
        { id: "b", text: "Fico destruído(a) por dentro mas sigo em frente", profilePoints: { eleven: 3 } },
        { id: "c", text: "Elimino a pessoa da minha vida sem dó", profilePoints: { tommy: 3 } },
        { id: "d", text: "Apenas anoto mentalmente e nunca mais confio", profilePoints: { wednesday: 2, sheldon: 2 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua maior qualidade?",
      options: [
        { id: "a", text: "Inteligência e planejamento", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Lealdade e coragem", profilePoints: { eleven: 3 } },
        { id: "c", text: "Liderança e ambição", profilePoints: { tommy: 3 } },
        { id: "d", text: "Originalidade e independência", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Lógica e conhecimento", profilePoints: { sheldon: 3, professor: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Na escola/trabalho, você era/é:",
      options: [
        { id: "a", text: "O nerd que tirava as melhores notas", profilePoints: { professor: 2, sheldon: 2 } },
        { id: "b", text: "O quieto que surpreendia todo mundo", profilePoints: { eleven: 3 } },
        { id: "c", text: "O popular que liderava os grupos", profilePoints: { tommy: 3 } },
        { id: "d", text: "O diferentão que não seguia a manada", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Seu estilo de roupa favorito?",
      options: [
        { id: "a", text: "Clássico e discreto (camisa, óculos)", profilePoints: { professor: 3 } },
        { id: "b", text: "Casual e confortável", profilePoints: { eleven: 3 } },
        { id: "c", text: "Elegante e imponente (terno, sobretudo)", profilePoints: { tommy: 3 } },
        { id: "d", text: "Alternativo, escuro, único", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Outro estilo", profilePoints: { professor: 1, eleven: 1, tommy: 1, wednesday: 1, sheldon: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Qual frase mais combina com você?",
      options: [
        { id: "a", text: "Eu sempre tenho um plano", profilePoints: { professor: 3 } },
        { id: "b", text: "Amigos não mentem", profilePoints: { eleven: 3 } },
        { id: "c", text: "Eu sou o perigo", profilePoints: { tommy: 3 } },
        { id: "d", text: "Eu prefiro ser torturada a ser entediada", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Bazinga!", profilePoints: { sheldon: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que te deixa mais irritado(a)?",
      options: [
        { id: "a", text: "Pessoas que não pensam antes de agir", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Injustiça contra pessoas inocentes", profilePoints: { eleven: 3 } },
        { id: "c", text: "Quem duvida da minha capacidade", profilePoints: { tommy: 3 } },
        { id: "d", text: "Gente falsa e superficial", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Se você ganhasse um superpoder, qual escolheria?",
      options: [
        { id: "a", text: "Super inteligência", profilePoints: { professor: 2, sheldon: 2 } },
        { id: "b", text: "Telecinese (mover coisas com a mente)", profilePoints: { eleven: 3 } },
        { id: "c", text: "Controlar o tempo", profilePoints: { tommy: 3 } },
        { id: "d", text: "Invisibilidade", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Como você lida com problemas?",
      options: [
        { id: "a", text: "Analiso todos os cenários antes de agir", profilePoints: { professor: 3 } },
        { id: "b", text: "Enfrento de frente com coragem", profilePoints: { eleven: 2, tommy: 2 } },
        { id: "c", text: "Uso minha influência para resolver", profilePoints: { tommy: 3 } },
        { id: "d", text: "Resolvo sozinho(a), do meu jeito", profilePoints: { wednesday: 2, sheldon: 2 } },
      ],
    },
    {
      id: "q10",
      text: "Qual gênero de série você mais gosta?",
      options: [
        { id: "a", text: "Thriller / Suspense", profilePoints: { professor: 3 } },
        { id: "b", text: "Sci-Fi / Fantasia", profilePoints: { eleven: 2, sheldon: 2 } },
        { id: "c", text: "Crime / Drama", profilePoints: { tommy: 3 } },
        { id: "d", text: "Terror / Mistério", profilePoints: { wednesday: 3 } },
      ],
    },
  ],
};
