import type { Quiz } from "@/lib/types";

export const qualCidadeBrasileira: Quiz = {
  id: "qual-cidade-brasileira",
  slug: "qual-cidade-brasileira-combina-com-voce",
  title: "Qual cidade brasileira combina com você?",
  description:
    "Responda 10 perguntas e descubra qual cidade do Brasil tem a sua cara!",
  type: "personality",
  category: "personalidade",
  emoji: "🇧🇷",
  color: "#8B5CF6",
  tags: ["personalidade", "brasil", "cidades", "teste"],
  createdAt: "2026-06-08",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "IBGE Cidades — Informações municipais", url: "https://cidades.ibge.gov.br/", organization: "IBGE", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Responda 10 perguntas sobre seus gostos e descubra qual cidade do Brasil tem mais a ver com você.",
  profiles: [
    {
      id: "rio",
      title: "Rio de Janeiro",
      emoji: "🏖️",
      description:
        "Você é pura energia e carisma! Ama praia, funk, pagode e uma boa roda de amigos. Sua vibe é descontraída e você sabe curtir a vida como ninguém. Carioca de coração!",
    },
    {
      id: "sp",
      title: "São Paulo",
      emoji: "🏙️",
      description:
        "Você é movido por ambição e diversidade! Ama gastronomia, balada, rap e oportunidades. Sua energia é urbana e você está sempre correndo atrás do próximo desafio. A cidade nunca para — igual você!",
    },
    {
      id: "goiania",
      title: "Goiânia",
      emoji: "🤠",
      description:
        "Você é raiz e moderno ao mesmo tempo! Ama sertanejo, churrasco e uma boa festa. Sua personalidade é acolhedora e você valoriza família e tradição sem perder a diversão.",
    },
    {
      id: "salvador",
      title: "Salvador",
      emoji: "🥁",
      description:
        "Você é pura cultura e alegria! Ama axé, pagode baiano, carnaval e comida boa. Sua personalidade vibrante contagia todo mundo ao redor. É dendê no sangue!",
    },
    {
      id: "curitiba",
      title: "Curitiba",
      emoji: "🌿",
      description:
        "Você é organizado e valoriza qualidade de vida! Ama parques, café colonial e um clima mais frio. Sua personalidade é prática e eficiente, com fé e planejamento.",
    },
    {
      id: "portoalegre",
      title: "Porto Alegre",
      emoji: "🧉",
      description:
        "Você é raiz gaúcha com orgulho! Ama chimarrão, churrasco e música gaúcha. Leal, passional e com opinião forte — quando você torce, torce de verdade!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Seu estilo musical é mais...",
      options: [
        { id: "a", text: "Funk e pagode", profilePoints: { rio: 3, salvador: 1 } },
        { id: "b", text: "Sertanejo e gospel", profilePoints: { goiania: 3, curitiba: 1 } },
        { id: "c", text: "Rap, trap e eletrônica", profilePoints: { sp: 3, rio: 1 } },
        { id: "d", text: "Axé e forró", profilePoints: { salvador: 3, rio: 1 } },
        { id: "e", text: "Outro estilo (rock, MPB, clássica...)", profilePoints: { sp: 1, curitiba: 1, portoalegre: 1 } },
      ],
    },
    {
      id: "q2",
      text: "No domingo você prefere...",
      options: [
        { id: "a", text: "Praia e futebol com os amigos", profilePoints: { rio: 3, salvador: 1 } },
        { id: "b", text: "Churrasco em família com sertanejo", profilePoints: { goiania: 3, portoalegre: 2 } },
        { id: "c", text: "Igreja de manhã e descanso em casa", profilePoints: { curitiba: 3, goiania: 1 } },
        { id: "d", text: "Rolê na cidade, shopping ou balada", profilePoints: { sp: 3, rio: 1 } },
        { id: "e", text: "Nenhuma dessas, cada domingo é diferente", profilePoints: { sp: 1, rio: 1, salvador: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Qual comida você escolhe?",
      options: [
        { id: "a", text: "Acarajé e moqueca", profilePoints: { salvador: 3 } },
        { id: "b", text: "Churrasco com chimarrão", profilePoints: { portoalegre: 3, goiania: 1 } },
        { id: "c", text: "Sushi, hambúrguer gourmet ou comida árabe", profilePoints: { sp: 3 } },
        { id: "d", text: "Feijoada completa ou pastel na feira", profilePoints: { rio: 3, sp: 1 } },
        { id: "e", text: "Outra coisa (comida fitness, vegana...)", profilePoints: { curitiba: 2, sp: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Você prefere qual clima?",
      options: [
        { id: "a", text: "Calor o ano todo, quanto mais sol melhor", profilePoints: { rio: 2, salvador: 3 } },
        { id: "b", text: "Frio com cobertor e chocolate quente", profilePoints: { curitiba: 3, portoalegre: 2 } },
        { id: "c", text: "Calor de dia, friozinho à noite", profilePoints: { goiania: 3 } },
        { id: "d", text: "Tanto faz, me adapto a qualquer um", profilePoints: { sp: 2, rio: 1, curitiba: 1 } },
      ],
    },
    {
      id: "q5",
      text: "O que mais importa na sua vida?",
      options: [
        { id: "a", text: "Família e fé", profilePoints: { goiania: 3, curitiba: 2 } },
        { id: "b", text: "Carreira e dinheiro", profilePoints: { sp: 3 } },
        { id: "c", text: "Diversão e experiências", profilePoints: { rio: 3, salvador: 2 } },
        { id: "d", text: "Tradição e raízes", profilePoints: { portoalegre: 3, salvador: 1 } },
        { id: "e", text: "Outro (saúde, liberdade, conhecimento...)", profilePoints: { curitiba: 1, sp: 1, rio: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Numa festa você é quem...",
      options: [
        { id: "a", text: "Está no meio da pista dançando", profilePoints: { rio: 2, salvador: 3 } },
        { id: "b", text: "Cantando sertanejo com os amigos", profilePoints: { goiania: 3 } },
        { id: "c", text: "No canto batendo papo com cerveja", profilePoints: { curitiba: 2, portoalegre: 2 } },
        { id: "d", text: "Organizou a festa e conhece todo mundo", profilePoints: { sp: 3, rio: 1 } },
      ],
    },
    {
      id: "q7",
      text: "Seu time do coração é mais provavelmente...",
      options: [
        { id: "a", text: "Flamengo, Vasco, Flu ou Botafogo", profilePoints: { rio: 3 } },
        { id: "b", text: "Corinthians, Palmeiras ou São Paulo", profilePoints: { sp: 3 } },
        { id: "c", text: "Grêmio ou Internacional", profilePoints: { portoalegre: 3 } },
        { id: "d", text: "Bahia, Vitória ou time nordestino", profilePoints: { salvador: 3 } },
        { id: "e", text: "Outro time ou não curto futebol", profilePoints: { goiania: 1, curitiba: 1, sp: 1 } },
      ],
    },
    {
      id: "q8",
      text: "Seu transporte do dia a dia é...",
      options: [
        { id: "a", text: "Moto ou carro com som alto", profilePoints: { goiania: 2, salvador: 2 } },
        { id: "b", text: "Metrô, Uber ou ônibus", profilePoints: { sp: 3, rio: 1 } },
        { id: "c", text: "Carro próprio sempre", profilePoints: { curitiba: 2, portoalegre: 2 } },
        { id: "d", text: "A pé ou bicicleta quando dá", profilePoints: { rio: 2, curitiba: 1 } },
      ],
    },
    {
      id: "q9",
      text: "Férias dos sonhos?",
      options: [
        { id: "a", text: "Praia no Nordeste com muito sol", profilePoints: { salvador: 3, rio: 2 } },
        { id: "b", text: "Gramado, Serra Gaúcha, vinhos e fondue", profilePoints: { portoalegre: 3, curitiba: 2 } },
        { id: "c", text: "Viagem internacional, conhecer o mundo", profilePoints: { sp: 3 } },
        { id: "d", text: "Fazenda, cachoeira e natureza", profilePoints: { goiania: 3, curitiba: 1 } },
        { id: "e", text: "Outro destino (montanha, cruzeiro...)", profilePoints: { sp: 1, rio: 1, curitiba: 1 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com você?",
      options: [
        { id: "a", text: "A vida é curta, bora curtir!", profilePoints: { rio: 3, salvador: 2 } },
        { id: "b", text: "Trabalho duro, resultado certo", profilePoints: { sp: 3, curitiba: 1 } },
        { id: "c", text: "Família é tudo nessa vida", profilePoints: { goiania: 3, portoalegre: 1 } },
        { id: "d", text: "Orgulho de onde eu vim", profilePoints: { portoalegre: 3, salvador: 2 } },
        { id: "e", text: "Nenhuma me define, sou único(a)", profilePoints: { sp: 1, rio: 1, curitiba: 1 } },
      ],
    },
  ],
};
