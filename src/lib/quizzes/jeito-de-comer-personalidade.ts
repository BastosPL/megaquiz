import type { Quiz } from "@/lib/types";

export const jeitoDeComerPersonalidade: Quiz = {
  id: "jeito-de-comer-personalidade",
  slug: "seu-jeito-de-comer-revela-sua-personalidade",
  title: "Seu Jeito de Comer Revela Sua Personalidade",
  description: "Pizza, sushi, churrasco ou acai? O que voce come diz muito sobre quem voce e!",
  type: "personality",
  category: "personalidade",
  emoji: "🍕",
  color: "#F59E0B",
  plays: 6890,
  tags: ["comida", "personalidade", "viral", "divertido", "gastronomia"],
  createdAt: "2026-06-11",
  featured: true,
  profiles: [
    {
      id: "aventureiro",
      title: "Aventureiro Gastronomico",
      emoji: "🌍",
      description:
        "Voce come de tudo e adora experimentar! Comida japonesa, indiana, tailandesa — quanto mais exotica melhor. Voce e curioso, aberto a novas experiencias e acha que comer bem e a melhor forma de conhecer o mundo!",
    },
    {
      id: "comfort",
      title: "Rei/Rainha do Comfort Food",
      emoji: "🍝",
      description:
        "Voce e emocional e nostalgico com comida! Macarrao da avo, bolo de chocolate, feijao tropeiro — voce come com o coracao. Comida pra voce e afeto, memoria e abraco. Provavelmente cozinha bem!",
    },
    {
      id: "fitness",
      title: "Fitness Disciplinado",
      emoji: "🥗",
      description:
        "Voce e focado e disciplinado! Sabe os macros de cada alimento e tem marmita pronta pra semana toda. Frango, batata doce e brocolos sao seus melhores amigos. Mas no cheat day... ai vale tudo!",
    },
    {
      id: "social",
      title: "Comilao Social",
      emoji: "🍻",
      description:
        "Pra voce, comer e sobre a companhia! Churrasco com amigos, pizza no rodizio, happy hour no bar — o sabor e bom mas a risada e melhor. Voce e a pessoa que organiza os encontros e pede 'mais uma porcao'!",
    },
    {
      id: "rapido",
      title: "Fast Food & Praticidade",
      emoji: "🍔",
      description:
        "Voce e pratico e nao perde tempo na cozinha! Delivery, fast food, miojo gourmet — o que importa e ser rapido e gostoso. Voce e eficiente em tudo na vida e acha que comida e combustivel, nao cerimonia!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Sexta a noite. O que voce pede pra jantar?",
      options: [
        { id: "a", text: "Algo novo que nunca experimentei", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "O prato que me da conforto", profilePoints: { comfort: 3 } },
        { id: "c", text: "Algo saudavel — nao estrago a dieta", profilePoints: { fitness: 3 } },
        { id: "d", text: "Vou num restaurante com os amigos", profilePoints: { social: 3 } },
        { id: "e", text: "Delivery rapido e facil", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Como voce come pizza?",
      options: [
        { id: "a", text: "Sabores exoticos — brie com mel, thai", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Margherita ou calabresa classica", profilePoints: { comfort: 3 } },
        { id: "c", text: "Sem borda ou low carb", profilePoints: { fitness: 3 } },
        { id: "d", text: "Rodizio com a galera!", profilePoints: { social: 3 } },
        { id: "e", text: "Peco no app e como na frente da TV", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Qual sua relacao com cozinhar?",
      options: [
        { id: "a", text: "Adoro tentar receitas de outros paises", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Cozinho as receitas de familia com amor", profilePoints: { comfort: 3 } },
        { id: "c", text: "Meal prep dominical religioso", profilePoints: { fitness: 3 } },
        { id: "d", text: "Cozinho pra impressionar visitas", profilePoints: { social: 3 } },
        { id: "e", text: "Quanto menos cozinhar, melhor", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Voce ta viajando. O que faz primeiro?",
      options: [
        { id: "a", text: "Procuro a comida tipica local", profilePoints: { aventureiro: 3, social: 1 } },
        { id: "b", text: "Procuro algo familiar pra me sentir em casa", profilePoints: { comfort: 3 } },
        { id: "c", text: "Busco um restaurante saudavel", profilePoints: { fitness: 3 } },
        { id: "d", text: "Pergunto pros locais onde eles comem", profilePoints: { social: 3 } },
        { id: "e", text: "Entro no primeiro lugar que vejo", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual sobremesa voce escolhe?",
      options: [
        { id: "a", text: "Algo exotico — mochi, baklava, churros", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Pudim ou bolo da avo", profilePoints: { comfort: 3 } },
        { id: "c", text: "Fruta ou iogurte com granola", profilePoints: { fitness: 3 } },
        { id: "d", text: "Sorvete pra dividir com todo mundo", profilePoints: { social: 3 } },
        { id: "e", text: "Chocolate ou doce industrial rapido", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Num churrasco, voce e:",
      options: [
        { id: "a", text: "O que traz ingredientes diferentes pra grelhar", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "O que faz a farofa e o vinagrete", profilePoints: { comfort: 3 } },
        { id: "c", text: "O que come so a carne magra e salada", profilePoints: { fitness: 3 } },
        { id: "d", text: "O que organiza tudo e convida geral", profilePoints: { social: 3 } },
        { id: "e", text: "O que so aparece pra comer", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Voce viu uma comida estranha na internet. O que faz?",
      options: [
        { id: "a", text: "Quero provar agora mesmo!", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Prefiro ficar com o que eu conheco", profilePoints: { comfort: 3 } },
        { id: "c", text: "Pesquiso os ingredientes e calorias", profilePoints: { fitness: 3 } },
        { id: "d", text: "Mando pro grupo pra gente ir experimentar junto", profilePoints: { social: 3 } },
        { id: "e", text: "Se nao tiver no iFood, nao me interessa", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Sua bebida favorita no almoco e:",
      options: [
        { id: "a", text: "Suco exotico — acerola, cupuacu, caju", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Suco de laranja natural da mae", profilePoints: { comfort: 3 } },
        { id: "c", text: "Agua ou cha gelado sem acucar", profilePoints: { fitness: 3 } },
        { id: "d", text: "Cerveja se tiver companhia!", profilePoints: { social: 3 } },
        { id: "e", text: "Refrigerante ou o que tiver", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual desses restaurantes voce escolhe?",
      options: [
        { id: "a", text: "Japones fusion ou restaurante peruano", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Comida caseira mineira ou nordestina", profilePoints: { comfort: 3 } },
        { id: "c", text: "Poke bowl ou salad bar", profilePoints: { fitness: 3 } },
        { id: "d", text: "Bar com petiscos e musica ao vivo", profilePoints: { social: 3 } },
        { id: "e", text: "Drive-thru do burger", profilePoints: { rapido: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Comida pra voce e:",
      options: [
        { id: "a", text: "Aventura e descoberta", profilePoints: { aventureiro: 3 } },
        { id: "b", text: "Afeto e memoria", profilePoints: { comfort: 3 } },
        { id: "c", text: "Combustivel e saude", profilePoints: { fitness: 3 } },
        { id: "d", text: "Motivo pra reunir pessoas", profilePoints: { social: 3 } },
        { id: "e", text: "Praticidade — como pra viver", profilePoints: { rapido: 3 } },
      ],
    },
  ],
};
