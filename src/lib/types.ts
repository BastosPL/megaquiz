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
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "copa-do-mundo",
    name: "Copa do Mundo",
    emoji: "⚽",
    description: "Quizzes sobre a Copa do Mundo 2026",
    color: "#16A34A",
  },
  {
    id: "personalidade",
    name: "Personalidade",
    emoji: "🧠",
    description: "Descubra mais sobre voce",
    color: "#8B5CF6",
  },
  {
    id: "series-filmes",
    name: "Series e Filmes",
    emoji: "🎬",
    description: "Teste seus conhecimentos de cinema e TV",
    color: "#EF4444",
  },
  {
    id: "conhecimentos-gerais",
    name: "Conhecimentos Gerais",
    emoji: "📚",
    description: "Desafie seu conhecimento geral",
    color: "#3B82F6",
  },
  {
    id: "esportes",
    name: "Esportes",
    emoji: "🏆",
    description: "Quizzes sobre esportes e competicoes",
    color: "#F59E0B",
  },
  {
    id: "carreira",
    name: "Carreira",
    emoji: "💼",
    description: "Descubra sobre sua vida profissional",
    color: "#10B981",
  },
];
