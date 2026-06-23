export type QuizType = "trivia" | "personality";

export type Category =
  | "copa-do-mundo"
  | "personalidade"
  | "series-filmes"
  | "conhecimentos-gerais"
  | "esportes"
  | "carreira";

export interface QuizOption {
  id: string;
  text: string;
  image?: string;
  /** Para trivia: se é a resposta correta */
  isCorrect?: boolean;
  /** Para personalidade: pontos por perfil */
  profilePoints?: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  image?: string;
  options: QuizOption[];
  /** Tempo em segundos (0 = sem timer) */
  timeLimit?: number;
  explanation?: string;
}

export interface QuizProfile {
  id: string;
  title: string;
  description: string;
  emoji: string;
  image?: string;
}

export interface QuizResult {
  /** Para trivia */
  score?: number;
  totalQuestions?: number;
  percentage?: number;
  /** Para personalidade */
  profile?: QuizProfile;
  /** Ranking comparativo */
  percentile?: number;
  shareText: string;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: QuizType;
  category: Category;
  emoji: string;
  image?: string;
  color: string;
  questions: QuizQuestion[];
  /** Perfis (apenas para personalidade) */
  profiles?: QuizProfile[];
  /** Total de plays */
  plays: number;
  /** Tags para SEO */
  tags: string[];
  createdAt: string;
  featured?: boolean;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  emoji: string;
  description: string;
  longDescription: string;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "copa-do-mundo",
    name: "Copa do Mundo",
    emoji: "⚽",
    description: "Quizzes sobre a Copa do Mundo 2026",
    longDescription:
      "A Copa do Mundo 2026 será realizada nos Estados Unidos, México e Canadá. Teste seus conhecimentos sobre seleções, jogadores, bandeiras e gols históricos. Descubra qual craque você seria e prove que é um verdadeiro especialista em futebol mundial.",
    color: "#16A34A",
  },
  {
    id: "personalidade",
    name: "Personalidade",
    emoji: "🧠",
    description: "Descubra mais sobre você",
    longDescription:
      "Quizzes de personalidade revelam aspectos surpreendentes sobre quem você é. Descubra qual rede social combina com você, qual geração define sua alma, qual signo deveria ser o seu e muito mais. Responda com sinceridade e compartilhe o resultado com seus amigos!",
    color: "#8B5CF6",
  },
  {
    id: "series-filmes",
    name: "Séries e Filmes",
    emoji: "🎬",
    description: "Teste seus conhecimentos de cinema e TV",
    longDescription:
      "De La Casa de Papel a Round 6, de filmes clássicos a séries que marcaram época. Teste o quanto você sabe sobre o mundo do entretenimento, descubra qual personagem você seria e prove que é um verdadeiro cinéfilo. Quizzes para fãs de Netflix, cinema e TV.",
    color: "#EF4444",
  },
  {
    id: "conhecimentos-gerais",
    name: "Conhecimentos Gerais",
    emoji: "📚",
    description: "Desafie seu conhecimento geral",
    longDescription:
      "Quanto você realmente sabe sobre o mundo? De história do Brasil a mitologia grega, de ciência a mitos sobre saúde — nossos quizzes de conhecimentos gerais cobrem uma variedade enorme de temas. Perfeito para quem adora aprender enquanto se diverte.",
    color: "#3B82F6",
  },
  {
    id: "esportes",
    name: "Esportes",
    emoji: "🏆",
    description: "Quizzes sobre esportes e competições",
    longDescription:
      "Futebol brasileiro, futebol mundial, grandes competições e momentos históricos do esporte. Se você é apaixonado por esportes, estes quizzes são para você. Teste seus conhecimentos sobre times, jogadores, campeonatos e curiosidades esportivas.",
    color: "#F59E0B",
  },
  {
    id: "carreira",
    name: "Carreira",
    emoji: "💼",
    description: "Descubra sobre sua vida profissional",
    longDescription:
      "Qual profissão combina com seu perfil? Qual área de TI é ideal para você? Nossos quizzes de carreira ajudam você a explorar suas aptidões e descobrir caminhos profissionais que combinam com sua personalidade e habilidades.",
    color: "#10B981",
  },
];
