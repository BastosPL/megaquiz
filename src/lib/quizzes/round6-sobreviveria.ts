import type { Quiz } from "@/lib/types";

export const round6Sobreviveria: Quiz = {
  id: "round6-sobreviveria",
  slug: "quiz-round-6-voce-sobreviveria",
  title: "Quiz Round 6 — Voce Sobreviveria?",
  description: "Teste seus conhecimentos sobre Squid Game e descubra se voce escaparia com vida!",
  type: "trivia",
  category: "series-filmes",
  emoji: "🦑",
  color: "#DC2626",
  tags: ["round 6", "squid game", "netflix", "series", "survival"],
  createdAt: "2026-06-11",
  featured: false,
  questions: [
    {
      id: "q1",
      text: "Qual e o primeiro jogo de Round 6?",
      options: [
        { id: "a", text: "Cabo de guerra", isCorrect: false },
        { id: "b", text: "Batatinha frita 1, 2, 3", isCorrect: true },
        { id: "c", text: "Jogo de bolinhas de gude", isCorrect: false },
        { id: "d", text: "Jogo da lula", isCorrect: false },
      ],
    },
    {
      id: "q2",
      text: "Qual e o premio total dos jogos?",
      options: [
        { id: "a", text: "10 bilhoes de wons", isCorrect: false },
        { id: "b", text: "45,6 bilhoes de wons", isCorrect: true },
        { id: "c", text: "100 bilhoes de wons", isCorrect: false },
        { id: "d", text: "25 bilhoes de wons", isCorrect: false },
      ],
      explanation: "45,6 bilhoes de wons equivalem a aproximadamente R$ 180 milhoes!",
    },
    {
      id: "q3",
      text: "Qual e o numero do protagonista Seong Gi-hun?",
      options: [
        { id: "a", text: "001", isCorrect: false },
        { id: "b", text: "067", isCorrect: false },
        { id: "c", text: "456", isCorrect: true },
        { id: "d", text: "218", isCorrect: false },
      ],
    },
    {
      id: "q4",
      text: "No jogo do biscoito (dalgona), qual forma e a mais dificil?",
      options: [
        { id: "a", text: "Circulo", isCorrect: false },
        { id: "b", text: "Triangulo", isCorrect: false },
        { id: "c", text: "Estrela", isCorrect: false },
        { id: "d", text: "Guarda-chuva (sombrinha)", isCorrect: true },
      ],
      explanation: "O guarda-chuva tem muitos detalhes finos e e quase impossivel de recortar sem quebrar!",
    },
    {
      id: "q5",
      text: "Quem e o jogador 001?",
      options: [
        { id: "a", text: "Um apostador falido", isCorrect: false },
        { id: "b", text: "Um velho com tumor cerebral (e criador dos jogos)", isCorrect: true },
        { id: "c", text: "Um ex-policial infiltrado", isCorrect: false },
        { id: "d", text: "Um empresario disfarçado", isCorrect: false },
      ],
    },
    {
      id: "q6",
      text: "Quantos jogadores iniciam os jogos na temporada 1?",
      options: [
        { id: "a", text: "200", isCorrect: false },
        { id: "b", text: "356", isCorrect: false },
        { id: "c", text: "456", isCorrect: true },
        { id: "d", text: "500", isCorrect: false },
      ],
    },
    {
      id: "q7",
      text: "No jogo da ponte de vidro, quantas etapas os jogadores precisam pular?",
      options: [
        { id: "a", text: "10 pares", isCorrect: false },
        { id: "b", text: "16 pares", isCorrect: false },
        { id: "c", text: "18 pares", isCorrect: true },
        { id: "d", text: "20 pares", isCorrect: false },
      ],
    },
    {
      id: "q8",
      text: "Qual e a cor dos uniformes dos guardas?",
      options: [
        { id: "a", text: "Preto", isCorrect: false },
        { id: "b", text: "Rosa/Vermelho", isCorrect: true },
        { id: "c", text: "Branco", isCorrect: false },
        { id: "d", text: "Azul", isCorrect: false },
      ],
    },
    {
      id: "q9",
      text: "O que os simbolos nas mascaras dos guardas representam?",
      options: [
        { id: "a", text: "Forca, velocidade e inteligencia", isCorrect: false },
        { id: "b", text: "Circulo (trabalhador), Triangulo (soldado), Quadrado (gerente)", isCorrect: true },
        { id: "c", text: "Terra, agua e fogo", isCorrect: false },
        { id: "d", text: "Sao apenas decoracao", isCorrect: false },
      ],
    },
    {
      id: "q10",
      text: "Na segunda temporada, o que Gi-hun tenta fazer?",
      options: [
        { id: "a", text: "Fugir do pais", isCorrect: false },
        { id: "b", text: "Voltar aos jogos para derruba-los por dentro", isCorrect: true },
        { id: "c", text: "Criar seus proprios jogos", isCorrect: false },
        { id: "d", text: "Esquecer tudo e seguir em frente", isCorrect: false },
      ],
    },
    {
      id: "q11",
      text: "Qual jogo envolve formar duplas e apostar tudo?",
      options: [
        { id: "a", text: "Cabo de guerra", isCorrect: false },
        { id: "b", text: "Bolinhas de gude", isCorrect: true },
        { id: "c", text: "Jogo da lula", isCorrect: false },
        { id: "d", text: "Luz vermelha, luz verde", isCorrect: false },
      ],
      explanation: "O jogo de bolinhas de gude e o mais emocionalmente devastador — voce joga contra seu parceiro!",
    },
    {
      id: "q12",
      text: "Qual e a profissao do jogador 218 (Cho Sang-woo)?",
      options: [
        { id: "a", text: "Medico", isCorrect: false },
        { id: "b", text: "Formado em negocios (ex-analista financeiro)", isCorrect: true },
        { id: "c", text: "Professor", isCorrect: false },
        { id: "d", text: "Policial", isCorrect: false },
      ],
    },
    {
      id: "q13",
      text: "O que acontece se a maioria dos jogadores votar para sair?",
      options: [
        { id: "a", text: "Todos morrem", isCorrect: false },
        { id: "b", text: "Os jogos continuam de qualquer forma", isCorrect: false },
        { id: "c", text: "Todos sao libertados sem o premio", isCorrect: true },
        { id: "d", text: "So metade sai", isCorrect: false },
      ],
    },
    {
      id: "q14",
      text: "Qual pais produziu Round 6?",
      options: [
        { id: "a", text: "Japao", isCorrect: false },
        { id: "b", text: "Coreia do Sul", isCorrect: true },
        { id: "c", text: "China", isCorrect: false },
        { id: "d", text: "Tailandia", isCorrect: false },
      ],
    },
    {
      id: "q15",
      text: "Quantas temporadas Round 6 tem (ate 2026)?",
      options: [
        { id: "a", text: "1", isCorrect: false },
        { id: "b", text: "2", isCorrect: true },
        { id: "c", text: "3", isCorrect: false },
        { id: "d", text: "4", isCorrect: false },
      ],
    },
  ],
};
