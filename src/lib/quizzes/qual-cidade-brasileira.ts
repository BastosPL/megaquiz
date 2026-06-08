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
  plays: 3891,
  tags: ["personalidade", "brasil", "cidades", "teste"],
  createdAt: "2026-06-08",
  featured: true,
  profiles: [
    {
      id: "rio",
      title: "Rio de Janeiro",
      emoji: "🏖️",
      description:
        "Voce e pura energia! Ama praia, musica e uma boa roda de amigos. Sua vibe e descontraida e voce sabe curtir a vida como ninguem.",
    },
    {
      id: "sp",
      title: "Sao Paulo",
      emoji: "🏙️",
      description:
        "Voce e movido por ambicao e cultura! Ama gastronomia, eventos e oportunidades. Sua energia e urbana e voce esta sempre em busca do proximo desafio.",
    },
    {
      id: "floripa",
      title: "Florianopolis",
      emoji: "🌊",
      description:
        "Voce busca equilibrio entre natureza e qualidade de vida! Ama esportes ao ar livre, tranquilidade e viver perto do mar sem abrir mao do conforto.",
    },
    {
      id: "salvador",
      title: "Salvador",
      emoji: "🥁",
      description:
        "Voce e pura cultura e alegria! Ama festa, historia e comida boa. Sua personalidade vibrante contagia todo mundo ao redor.",
    },
    {
      id: "curitiba",
      title: "Curitiba",
      emoji: "🌿",
      description:
        "Voce e organizado e valoriza sustentabilidade! Ama parques, cafe e um clima mais frio. Sua personalidade e pratica e eficiente.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Seu fim de semana perfeito e...",
      options: [
        { id: "a", text: "Praia com amigos e musica", profilePoints: { rio: 3, salvador: 2 } },
        { id: "b", text: "Restaurante novo e exposicao de arte", profilePoints: { sp: 3, curitiba: 1 } },
        { id: "c", text: "Trilha na natureza e surf", profilePoints: { floripa: 3, rio: 1 } },
        { id: "d", text: "Festa ate amanhecer com muita musica", profilePoints: { salvador: 3, rio: 2 } },
      ],
    },
    {
      id: "q2",
      text: "Qual comida voce escolhe?",
      options: [
        { id: "a", text: "Feijoada completa", profilePoints: { rio: 3, sp: 1 } },
        { id: "b", text: "Sushi ou comida internacional", profilePoints: { sp: 3, floripa: 1 } },
        { id: "c", text: "Frutos do mar frescos", profilePoints: { floripa: 3, salvador: 2 } },
        { id: "d", text: "Acaraje e moqueca", profilePoints: { salvador: 3, rio: 1 } },
      ],
    },
    {
      id: "q3",
      text: "Voce prefere...",
      options: [
        { id: "a", text: "Calor o ano todo", profilePoints: { rio: 2, salvador: 3 } },
        { id: "b", text: "Frio com um bom cafe", profilePoints: { curitiba: 3, sp: 2 } },
        { id: "c", text: "Clima ameno e agradavel", profilePoints: { floripa: 3, curitiba: 1 } },
        { id: "d", text: "Tanto faz, me adapto", profilePoints: { sp: 2, floripa: 1, rio: 1 } },
      ],
    },
    {
      id: "q4",
      text: "O que mais importa na sua vida?",
      options: [
        { id: "a", text: "Diversao e experiencias", profilePoints: { rio: 3, salvador: 2 } },
        { id: "b", text: "Carreira e crescimento", profilePoints: { sp: 3, curitiba: 1 } },
        { id: "c", text: "Qualidade de vida e saude", profilePoints: { floripa: 3, curitiba: 2 } },
        { id: "d", text: "Cultura e tradicoes", profilePoints: { salvador: 3, rio: 1 } },
      ],
    },
    {
      id: "q5",
      text: "Seu estilo musical e...",
      options: [
        { id: "a", text: "Samba e pagode", profilePoints: { rio: 3, salvador: 1 } },
        { id: "b", text: "Rock, indie ou eletronica", profilePoints: { sp: 3, curitiba: 2 } },
        { id: "c", text: "MPB e reggae", profilePoints: { floripa: 3, rio: 1 } },
        { id: "d", text: "Axe e forro", profilePoints: { salvador: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Seu transporte ideal e...",
      options: [
        { id: "a", text: "A pe ou de bicicleta", profilePoints: { floripa: 3, curitiba: 2 } },
        { id: "b", text: "Metro ou Uber", profilePoints: { sp: 3, rio: 1 } },
        { id: "c", text: "Carro com som alto", profilePoints: { salvador: 2, rio: 2 } },
        { id: "d", text: "Onibus eficiente", profilePoints: { curitiba: 3, sp: 1 } },
      ],
    },
    {
      id: "q7",
      text: "Numa festa voce e quem...",
      options: [
        { id: "a", text: "Esta no meio da pista dancando", profilePoints: { salvador: 3, rio: 2 } },
        { id: "b", text: "Organiza tudo nos minimos detalhes", profilePoints: { curitiba: 3, sp: 1 } },
        { id: "c", text: "Chega atrasado mas anima todo mundo", profilePoints: { rio: 3, salvador: 1 } },
        { id: "d", text: "Prefere conversas em grupo pequeno", profilePoints: { floripa: 3, sp: 2 } },
      ],
    },
    {
      id: "q8",
      text: "Seu lugar de ferias dos sonhos e...",
      options: [
        { id: "a", text: "Praia paradisiaca no nordeste", profilePoints: { salvador: 3, rio: 1 } },
        { id: "b", text: "Uma capital europeia cheia de cultura", profilePoints: { sp: 3, curitiba: 2 } },
        { id: "c", text: "Ilha com natureza preservada", profilePoints: { floripa: 3 } },
        { id: "d", text: "Resort all-inclusive com tudo incluso", profilePoints: { rio: 2, sp: 1, curitiba: 1 } },
      ],
    },
    {
      id: "q9",
      text: "No trabalho voce e mais...",
      options: [
        { id: "a", text: "Criativo e espontaneo", profilePoints: { rio: 3, salvador: 2 } },
        { id: "b", text: "Focado e competitivo", profilePoints: { sp: 3 } },
        { id: "c", text: "Colaborativo e tranquilo", profilePoints: { floripa: 3, curitiba: 1 } },
        { id: "d", text: "Metódico e organizado", profilePoints: { curitiba: 3, sp: 1 } },
      ],
    },
    {
      id: "q10",
      text: "O que voce faz num dia de chuva?",
      options: [
        { id: "a", text: "Maratona de series no sofa", profilePoints: { sp: 2, curitiba: 2 } },
        { id: "b", text: "Vai pra um bar ou restaurante", profilePoints: { rio: 3, salvador: 1 } },
        { id: "c", text: "Le um livro com um cha", profilePoints: { floripa: 3, curitiba: 2 } },
        { id: "d", text: "Chuva? Saio igual!", profilePoints: { salvador: 3, rio: 2 } },
      ],
    },
  ],
};
