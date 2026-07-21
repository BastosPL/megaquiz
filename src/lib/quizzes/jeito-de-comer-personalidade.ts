import type { Quiz } from "@/lib/types";

export const jeitoDeComerPersonalidade: Quiz = {
  id: "jeito-de-comer-personalidade",
  slug: "seu-jeito-de-comer-revela-sua-personalidade",
  title: "Seu Jeito de Comer Revela Sua Personalidade",
  description: "Pizza, sushi, churrasco ou açaí? O que você come diz muito sobre quem você é!",
  type: "personality",
  category: "personalidade",
  emoji: "🍕",
  color: "#F59E0B",
  tags: ["comida", "personalidade", "viral", "divertido", "gastronomia"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [],
  lastReviewedAt: "2026-07-12",
  introText: "Descubra o que seus hábitos alimentares revelam sobre sua personalidade — um quiz recreativo e divertido.",
  profiles: [
    {
      id: "aventureiro",
      title: "Aventureiro Gastronômico",
      emoji: "🌍",
      description:
        "Você come de tudo e adora experimentar! Comida japonesa, indiana, tailandesa — quanto mais exótica melhor. Você é curioso, aberto a novas experiências e acha que comer bem é a melhor forma de conhecer o mundo!",
    },
    {
      id: "comfort",
      title: "Rei/Rainha do Comfort Food",
      emoji: "🍝",
      description:
        "Você é emocional e nostálgico com comida! Macarrão da avó, bolo de chocolate, feijão tropeiro — você come com o coração. Comida pra você é afeto, memória e abraço. Provavelmente cozinha bem!",
    },
    {
      id: "fitness",
      title: "Fitness Disciplinado",
      emoji: "🥗",
      description:
        "Você é focado e disciplinado! Sabe os macros de cada alimento e tem marmita pronta pra semana toda. Frango, batata doce e brócolis são seus melhores amigos. Mas no cheat day... aí vale tudo!",
    },
    {
      id: "social",
      title: "Comilão Social",
      emoji: "🍻",
      description:
        "Pra você, comer é sobre a companhia! Churrasco com amigos, pizza no rodízio, happy hour no bar — o sabor é bom mas a risada é melhor. Você é a pessoa que organiza os encontros e pede 'mais uma porção'!",
    },
    {
      id: "rapido",
      title: "Fast Food & Praticidade",
      emoji: "🍔",
      description:
        "Você é prático e não perde tempo na cozinha! Delivery, fast food, miojo gourmet — o que importa é ser rápido e gostoso. Você é eficiente em tudo na vida e acha que comida é combustível, não cerimônia!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Sexta à noite. O que você pede pra jantar?",
      options: [
        { id: "a", text: "Algo novo que nunca experimentei", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "O prato que me dá conforto", profilePoints: { comfort: 3 } },
        { id: "c", text: "Algo saudável — não estrago a dieta", profilePoints: { fitness: 3 } },
        { id: "d", text: "Vou num restaurante com os amigos", profilePoints: { social: 3 } },
        { id: "e", text: "Delivery rápido e fácil", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Como você come pizza?",
      options: [
        { id: "a", text: "Sabores exóticos — brie com mel, thai", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Margherita ou calabresa clássica", profilePoints: { comfort: 3 } },
        { id: "c", text: "Sem borda ou low carb", profilePoints: { fitness: 3 } },
        { id: "d", text: "Rodízio com a galera!", profilePoints: { social: 3 } },
        { id: "e", text: "Peço no app e como na frente da TV", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua relação com cozinhar?",
      options: [
        { id: "a", text: "Adoro tentar receitas de outros países", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Cozinho as receitas de família com amor", profilePoints: { comfort: 3 } },
        { id: "c", text: "Meal prep dominical religioso", profilePoints: { fitness: 3 } },
        { id: "d", text: "Cozinho pra impressionar visitas", profilePoints: { social: 3 } },
        { id: "e", text: "Quanto menos cozinhar, melhor", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Você tá viajando. O que faz primeiro?",
      options: [
        { id: "a", text: "Procuro a comida típica local", profilePoints: { aventureiro: 3, social: 1 } },
        { id: "b", text: "Procuro algo familiar pra me sentir em casa", profilePoints: { comfort: 3 } },
        { id: "c", text: "Busco um restaurante saudável", profilePoints: { fitness: 3 } },
        { id: "d", text: "Pergunto pros locais onde eles comem", profilePoints: { social: 3 } },
        { id: "e", text: "Entro no primeiro lugar que vejo", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual sobremesa você escolhe?",
      options: [
        { id: "a", text: "Algo exótico — mochi, baklava, churros", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Pudim ou bolo da avó", profilePoints: { comfort: 3 } },
        { id: "c", text: "Fruta ou iogurte com granola", profilePoints: { fitness: 3 } },
        { id: "d", text: "Sorvete pra dividir com todo mundo", profilePoints: { social: 3 } },
        { id: "e", text: "Chocolate ou doce industrial rápido", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Num churrasco, você é:",
      options: [
        { id: "a", text: "O que traz ingredientes diferentes pra grelhar", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "O que faz a farofa e o vinagrete", profilePoints: { comfort: 3 } },
        { id: "c", text: "O que come só a carne magra e salada", profilePoints: { fitness: 3 } },
        { id: "d", text: "O que organiza tudo e convida geral", profilePoints: { social: 3 } },
        { id: "e", text: "O que só aparece pra comer", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Você viu uma comida estranha na internet. O que faz?",
      options: [
        { id: "a", text: "Quero provar agora mesmo!", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Prefiro ficar com o que eu conheço", profilePoints: { comfort: 3 } },
        { id: "c", text: "Pesquiso os ingredientes e calorias", profilePoints: { fitness: 3 } },
        { id: "d", text: "Mando pro grupo pra gente ir experimentar junto", profilePoints: { social: 3 } },
        { id: "e", text: "Se não tiver no iFood, não me interessa", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Sua bebida favorita no almoço é:",
      options: [
        { id: "a", text: "Suco exótico — acerola, cupuaçu, caju", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Suco de laranja natural da mãe", profilePoints: { comfort: 3 } },
        { id: "c", text: "Água ou chá gelado sem açúcar", profilePoints: { fitness: 3 } },
        { id: "d", text: "Cerveja se tiver companhia!", profilePoints: { social: 3 } },
        { id: "e", text: "Refrigerante ou o que tiver", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual desses restaurantes você escolhe?",
      options: [
        { id: "a", text: "Japonês fusion ou restaurante peruano", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Comida caseira mineira ou nordestina", profilePoints: { comfort: 3 } },
        { id: "c", text: "Poke bowl ou salad bar", profilePoints: { fitness: 3 } },
        { id: "d", text: "Bar com petiscos e música ao vivo", profilePoints: { social: 3 } },
        { id: "e", text: "Drive-thru do burger", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Comida pra você é:",
      options: [
        { id: "a", text: "Aventura e descoberta", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Afeto e memória", profilePoints: { comfort: 3 } },
        { id: "c", text: "Combustível e saúde", profilePoints: { fitness: 3 } },
        { id: "d", text: "Motivo pra reunir pessoas", profilePoints: { social: 3 } },
        { id: "e", text: "Praticidade — como pra viver", profilePoints: { rapido: 3 } },
      ],
    },
  ],
};
