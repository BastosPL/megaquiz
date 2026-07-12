import type { Quiz } from "@/lib/types";

export const qualPersonagemVoceSeria: Quiz = {
  id: "qual-personagem-voce-seria",
  slug: "qual-personagem-de-serie-voce-seria",
  title: "Qual Personagem de Serie Voce Seria?",
  description: "Descubra se voce seria o Professor, a Eleven, o Tommy Shelby ou a Wednesday!",
  type: "personality",
  category: "series-filmes",
  emoji: "🎭",
  color: "#8B5CF6",
  tags: ["personalidade", "series", "personagens", "divertido"],
  createdAt: "2026-06-09",
  featured: true,
  profiles: [
    {
      id: "professor",
      title: "O Professor (La Casa de Papel)",
      emoji: "🧠",
      description:
        "Voce e o estrategista! Calmo, calculista e sempre 10 passos a frente. Voce planeja tudo nos minimos detalhes e odeia improvisar. Sua mente brilhante compensa sua timidez social. As pessoas confiam em voce porque voce sempre tem um plano B, C e D.",
    },
    {
      id: "eleven",
      title: "Eleven (Stranger Things)",
      emoji: "🔮",
      description:
        "Voce e forte, corajoso(a) e leal ate o fim! Pode parecer quieto(a) por fora, mas tem um poder interior incrivel. Voce faria qualquer coisa para proteger quem ama. Waffles sao a sua comfort food e voce detesta injusticas.",
    },
    {
      id: "tommy",
      title: "Tommy Shelby (Peaky Blinders)",
      emoji: "🎩",
      description:
        "Voce e o lider nato! Ambicioso, determinado e com uma presenca que impoe respeito. Voce nao tem medo de tomar decisoes dificeis e sempre coloca o sucesso em primeiro lugar. Pode ser duro por fora, mas tem um coracao leal.",
    },
    {
      id: "wednesday",
      title: "Wednesday Addams",
      emoji: "🖤",
      description:
        "Voce e unico(a), sarcastico(a) e absolutamente original! Nao se importa com o que os outros pensam e tem um senso de humor negro afiado. Voce e mais inteligente que a maioria e prefere a companhia de poucos mas bons amigos.",
    },
    {
      id: "sheldon",
      title: "Sheldon Cooper (The Big Bang Theory)",
      emoji: "🔬",
      description:
        "Voce e o genio excentrico! Logico, metodico e com conhecimento enciclopedico sobre quase tudo. Voce tem suas manias e rotinas sagradas. Humor? So se for sarcastico. Bazinga!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "E sabado a noite. O que voce prefere fazer?",
      options: [
        { id: "a", text: "Planejar algo elaborado com antecedencia", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Ficar em casa vendo serie com alguem especial", profilePoints: { eleven: 3, wednesday: 1 } },
        { id: "c", text: "Sair pra um lugar chique e fazer networking", profilePoints: { tommy: 3 } },
        { id: "d", text: "Ler um livro ou explorar algo sozinho(a)", profilePoints: { wednesday: 3, sheldon: 1 } },
        { id: "e", text: "Outro programa", profilePoints: { professor: 1, eleven: 1, tommy: 1, wednesday: 1, sheldon: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Como voce reage quando alguem te trai?",
      options: [
        { id: "a", text: "Planejo uma vinganca perfeita e silenciosa", profilePoints: { professor: 3, wednesday: 1 } },
        { id: "b", text: "Fico destruido(a) por dentro mas sigo em frente", profilePoints: { eleven: 3 } },
        { id: "c", text: "Elimino a pessoa da minha vida sem do", profilePoints: { tommy: 3 } },
        { id: "d", text: "Apenas anoto mentalmente e nunca mais confio", profilePoints: { wednesday: 2, sheldon: 2 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua maior qualidade?",
      options: [
        { id: "a", text: "Inteligencia e planejamento", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Lealdade e coragem", profilePoints: { eleven: 3 } },
        { id: "c", text: "Lideranca e ambicao", profilePoints: { tommy: 3 } },
        { id: "d", text: "Originalidade e independencia", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Logica e conhecimento", profilePoints: { sheldon: 3, professor: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Na escola/trabalho, voce era/e:",
      options: [
        { id: "a", text: "O nerd que tirava as melhores notas", profilePoints: { professor: 2, sheldon: 2 } },
        { id: "b", text: "O quieto que surpreendia todo mundo", profilePoints: { eleven: 3 } },
        { id: "c", text: "O popular que liderava os grupos", profilePoints: { tommy: 3 } },
        { id: "d", text: "O diferentao que nao seguia a manada", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Seu estilo de roupa favorito?",
      options: [
        { id: "a", text: "Classico e discreto (camisa, oculos)", profilePoints: { professor: 3 } },
        { id: "b", text: "Casual e confortavel", profilePoints: { eleven: 3 } },
        { id: "c", text: "Elegante e imponente (terno, sobretudo)", profilePoints: { tommy: 3 } },
        { id: "d", text: "Alternativo, escuro, unico", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Outro estilo", profilePoints: { professor: 1, eleven: 1, tommy: 1, wednesday: 1, sheldon: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "Eu sempre tenho um plano", profilePoints: { professor: 3 } },
        { id: "b", text: "Amigos nao mentem", profilePoints: { eleven: 3 } },
        { id: "c", text: "Eu sou o perigo", profilePoints: { tommy: 3 } },
        { id: "d", text: "Eu prefiro ser torturada a ser entediada", profilePoints: { wednesday: 3 } },
        { id: "e", text: "Bazinga!", profilePoints: { sheldon: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que te deixa mais irritado(a)?",
      options: [
        { id: "a", text: "Pessoas que nao pensam antes de agir", profilePoints: { professor: 3, sheldon: 1 } },
        { id: "b", text: "Injustica contra pessoas inocentes", profilePoints: { eleven: 3 } },
        { id: "c", text: "Quem duvida da minha capacidade", profilePoints: { tommy: 3 } },
        { id: "d", text: "Gente falsa e superficial", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Se voce ganhasse um superpoder, qual escolheria?",
      options: [
        { id: "a", text: "Super inteligencia", profilePoints: { professor: 2, sheldon: 2 } },
        { id: "b", text: "Telecinese (mover coisas com a mente)", profilePoints: { eleven: 3 } },
        { id: "c", text: "Controlar o tempo", profilePoints: { tommy: 3 } },
        { id: "d", text: "Invisibilidade", profilePoints: { wednesday: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Como voce lida com problemas?",
      options: [
        { id: "a", text: "Analiso todos os cenarios antes de agir", profilePoints: { professor: 3 } },
        { id: "b", text: "Enfrento de frente com coragem", profilePoints: { eleven: 2, tommy: 2 } },
        { id: "c", text: "Uso minha influencia para resolver", profilePoints: { tommy: 3 } },
        { id: "d", text: "Resolvo sozinho(a), do meu jeito", profilePoints: { wednesday: 2, sheldon: 2 } },
      ],
    },
    {
      id: "q10",
      text: "Qual genero de serie voce mais gosta?",
      options: [
        { id: "a", text: "Thriller / Suspense", profilePoints: { professor: 3 } },
        { id: "b", text: "Sci-Fi / Fantasia", profilePoints: { eleven: 2, sheldon: 2 } },
        { id: "c", text: "Crime / Drama", profilePoints: { tommy: 3 } },
        { id: "d", text: "Terror / Misterio", profilePoints: { wednesday: 3 } },
      ],
    },
  ],
};
