import type { CSSProperties } from "react";
import {
  Trophy,
  Brain,
  Clapperboard,
  BookOpen,
  Dumbbell,
  Briefcase,
  Target,
  HeartPulse,
  Landmark,
  Sparkles,
} from "lucide-react";
import type { Category, QuizType } from "@/lib/types";

interface IconProps {
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
  "aria-hidden"?: boolean | "true" | "false";
}

/**
 * Icone de categoria como componente (nao como referencia dinamica) —
 * evita o lint react-hooks/static-components (regra do React Compiler que
 * proíbe atribuir um componente resolvido em runtime a uma variável e
 * usá-la como tag JSX dentro do corpo de um componente).
 * Substitui o uso de emoji como elemento de interface (SPEC secao 3).
 */
export function CategoryIcon({ category, ...props }: IconProps & { category: Category }) {
  switch (category) {
    case "copa-do-mundo":
      return <Trophy {...props} />;
    case "personalidade":
      return <Brain {...props} />;
    case "series-filmes":
      return <Clapperboard {...props} />;
    case "conhecimentos-gerais":
      return <BookOpen {...props} />;
    case "esportes":
      return <Dumbbell {...props} />;
    case "carreira":
      return <Briefcase {...props} />;
    default:
      return <BookOpen {...props} />;
  }
}

/** Icone por tipo de quiz (trivia vs. personalidade). */
export function QuizTypeIcon({ type, ...props }: IconProps & { type: QuizType }) {
  if (type === "personality") return <Brain {...props} />;
  return <Target {...props} />;
}

export function getQuizTypeLabel(type: QuizType): string {
  return type === "trivia" ? "Trivia" : "Personalidade";
}

/**
 * Icone de tema de artigo (não é a mesma taxonomia de Category dos quizzes —
 * os artigos usam um rótulo de texto livre, ex: "Esportes", "Psicologia").
 * Usado no ArticleCard e no cabeçalho do artigo para diferenciar
 * visualmente do bloco de ícone colorido dos QuizCards (SPEC Fase 2, secao 2).
 */
export function ArticleTopicIcon({ topic, ...props }: IconProps & { topic: string }) {
  switch (topic) {
    case "Esportes":
      return <Dumbbell {...props} />;
    case "Psicologia":
      return <Brain {...props} />;
    case "Cultura":
      return <Landmark {...props} />;
    case "Saúde":
      return <HeartPulse {...props} />;
    case "Curiosidades":
      return <Sparkles {...props} />;
    default:
      return <BookOpen {...props} />;
  }
}
