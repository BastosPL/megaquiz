import type { Quiz } from "@/lib/types";

export const qualCidadeBrasileira: Quiz = {
  id: "qual-cidade-brasileira",
  slug: "qual-cidade-brasileira-combina-com-voce",
  title: "Qual cidade brasileira combina com voce?",
  description:
    "Responda 10 perguntas e descubra qual cidade do Brasil tem a sua cara!",
  type: "personality",
  category: "personalidade",
  emoji: "🇧🇷",
  color: "#8B5CF6",
  tags: ["personalidade", "brasil", "cidades", "teste"],
  createdAt: "2026-06-08",
  featured: true,
  profiles: [
    {
      id: "rio",
      title: "Rio de Janeiro",
      emoji: "🏖️",
      description:
        "Voce e pura energia e carisma! Ama praia, funk, pagode e uma boa roda de amigos. Sua vibe e descontraida e voce sabe curtir a vida como ninguem. Carioca de coracao!",
    },
    {
      id: "sp",
      title: "Sao Paulo",
      emoji: "🏙️",
      description:
        "Voce e movido por ambicao e diversidade! Ama gastronomia, balada, rap e oportunidades. Sua energia e urbana e voce esta sempre correndo atras do proximo desafio. A cidade nunca para — igual voce!",
    },
    {
      id: "goiania",
      title: "Goiania",
      emoji: "🤠",
      description:
        "Voce e raiz e moderno ao mesmo tempo! Ama sertanejo, churrasco e uma boa festa. Sua personalidade e acolhedora e voce valoriza familia e tradicao sem perder a diversao.",
    },
    {
      id: "salvador",
      title: "Salvador",
      emoji: "🥁",
      description:
        "Voce e pura cultura e alegria! Ama axe, pagode baiano, carnaval e comida boa. Sua personalidade vibrante contagia todo mundo ao redor. E dende no sangue!",
    },
    {
      id: "curitiba",
      title: "Curitiba",
      emoji: "🌿",
      description:
        "Voce e organizado e valoriza qualidade de vida! Ama parques, cafe colonial e um clima mais frio. Sua personalidade e pratica e eficiente, com fe e planejamento.",
    },
    {
      id: "portoalegre",
      title: "Porto Alegre",
      emoji: "🧉",
      description:
        "Voce e raiz gaucha com orgulho! Ama chimarrao, churrasco e musica gaucha. Leal, passional e com opiniao forte — quando voce torce, torce de verdade!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Seu estilo musical e mais...",
      options: [
        { id: "a", text: "Funk e pagode", profilePoints: { rio: 3, salvador: 1 } },
        { id: "b", text: "Sertanejo e gospel", profilePoints: { goiania: 3, curitiba: 1 } },
        { id: "c", text: "Rap, trap e eletronica", profilePoints: { sp: 3, rio: 1 } },
        { id: "d", text: "Axe e forro", profilePoints: { salvador: 3, rio: 1 } },
        { id: "e", text: "Outro estilo (rock, MPB, classica...)", profilePoints: { sp: 1, curitiba: 1, portoalegre: 1 } },
      ],
    },
    {
      id: "q2",
      text: "No domingo voce prefere...",
      options: [
        { id: "a", text: "Praia e futebol com os amigos", profilePoints: { rio: 3, salvador: 1 } },
        { id: "b", text: "Churrasco em familia com sertanejo", profilePoints: { goiania: 3, portoalegre: 2 } },
        { id: "c", text: "Igreja de manha e descanso em casa", profilePoints: { curitiba: 3, goiania: 1 } },
        { id: "d", text: "Role na cidade, shopping ou balada", profilePoints: { sp: 3, rio: 1 } },
        { id: "e", text: "Nenhuma dessas, cada domingo e diferente", profilePoints: { sp: 1, rio: 1, salvador: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Qual comida voce escolhe?",
      options: [
        { id: "a", text: "Acaraje e moqueca", profilePoints: { salvador: 3 } },
        { id: "b", text: "Churrasco com chimarrao", profilePoints: { portoalegre: 3, goiania: 1 } },
        { id: "c", text: "Sushi, hamburguer gourmet ou comida arabe", profilePoints: { sp: 3 } },
        { id: "d", text: "Feijoada completa ou pastel na feira", profilePoints: { rio: 3, sp: 1 } },
        { id: "e", text: "Outra coisa (comida fitness, vegana...)", profilePoints: { curitiba: 2, sp: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Voce prefere qual clima?",
      options: [
        { id: "a", text: "Calor o ano todo, quanto mais sol melhor", profilePoints: { rio: 2, salvador: 3 } },
        { id: "b", text: "Frio com cobertor e chocolate quente", profilePoints: { curitiba: 3, portoalegre: 2 } },
        { id: "c", text: "Calor de dia, friozinho a noite", profilePoints: { goiania: 3 } },
        { id: "d", text: "Tanto faz, me adapto a qualquer um", profilePoints: { sp: 2, rio: 1, curitiba: 1 } },
      ],
    },
    {
      id: "q5",
      text: "O que mais importa na sua vida?",
      options: [
        { id: "a", text: "Familia e fe", profilePoints: { goiania: 3, curitiba: 2 } },
        { id: "b", text: "Carreira e dinheiro", profilePoints: { sp: 3 } },
        { id: "c", text: "Diversao e experiencias", profilePoints: { rio: 3, salvador: 2 } },
        { id: "d", text: "Tradicao e raizes", profilePoints: { portoalegre: 3, salvador: 1 } },
        { id: "e", text: "Outro (saude, liberdade, conhecimento...)", profilePoints: { curitiba: 1, sp: 1, rio: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Numa festa voce e quem...",
      options: [
        { id: "a", text: "Esta no meio da pista dancando", profilePoints: { rio: 2, salvador: 3 } },
        { id: "b", text: "Cantando sertanejo com os amigos", profilePoints: { goiania: 3 } },
        { id: "c", text: "No canto batendo papo com cerveja", profilePoints: { curitiba: 2, portoalegre: 2 } },
        { id: "d", text: "Organizou a festa e conhece todo mundo", profilePoints: { sp: 3, rio: 1 } },
      ],
    },
    {
      id: "q7",
      text: "Seu time do coracao e mais provavelmente...",
      options: [
        { id: "a", text: "Flamengo, Vasco, Flu ou Botafogo", profilePoints: { rio: 3 } },
        { id: "b", text: "Corinthians, Palmeiras ou Sao Paulo", profilePoints: { sp: 3 } },
        { id: "c", text: "Gremio ou Internacional", profilePoints: { portoalegre: 3 } },
        { id: "d", text: "Bahia, Vitoria ou time nordestino", profilePoints: { salvador: 3 } },
        { id: "e", text: "Outro time ou nao curto futebol", profilePoints: { goiania: 1, curitiba: 1, sp: 1 } },
      ],
    },
    {
      id: "q8",
      text: "Seu transporte do dia a dia e...",
      options: [
        { id: "a", text: "Moto ou carro com som alto", profilePoints: { goiania: 2, salvador: 2 } },
        { id: "b", text: "Metro, Uber ou onibus", profilePoints: { sp: 3, rio: 1 } },
        { id: "c", text: "Carro proprio sempre", profilePoints: { curitiba: 2, portoalegre: 2 } },
        { id: "d", text: "A pe ou bicicleta quando da", profilePoints: { rio: 2, curitiba: 1 } },
      ],
    },
    {
      id: "q9",
      text: "Ferias dos sonhos?",
      options: [
        { id: "a", text: "Praia no Nordeste com muito sol", profilePoints: { salvador: 3, rio: 2 } },
        { id: "b", text: "Gramado, Serra Gaucha, vinhos e fondue", profilePoints: { portoalegre: 3, curitiba: 2 } },
        { id: "c", text: "Viagem internacional, conhecer o mundo", profilePoints: { sp: 3 } },
        { id: "d", text: "Fazenda, cachoeira e natureza", profilePoints: { goiania: 3, curitiba: 1 } },
        { id: "e", text: "Outro destino (montanha, cruzeiro...)", profilePoints: { sp: 1, rio: 1, curitiba: 1 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "A vida e curta, bora curtir!", profilePoints: { rio: 3, salvador: 2 } },
        { id: "b", text: "Trabalho duro, resultado certo", profilePoints: { sp: 3, curitiba: 1 } },
        { id: "c", text: "Familia e tudo nessa vida", profilePoints: { goiania: 3, portoalegre: 1 } },
        { id: "d", text: "Orgulho de onde eu vim", profilePoints: { portoalegre: 3, salvador: 2 } },
        { id: "e", text: "Nenhuma me define, sou unico(a)", profilePoints: { sp: 1, rio: 1, curitiba: 1 } },
      ],
    },
  ],
};
