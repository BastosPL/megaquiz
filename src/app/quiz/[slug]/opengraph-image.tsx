import { ImageResponse } from "next/og";
import { getQuizBySlug } from "@/lib/quizzes";
import { PuzzleOgIcon, CategoryOgIcon } from "@/lib/og-icons";

export const alt = "MegaQuiz - Quiz Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Design System v2 (Editorial Game Premium) — ver docs/REDESIGN-SPEC-editorial-game-premium.md
const BRAND_DARK = "#15803D";
const BRAND_SOFT = "#DCFCE7";
const BG = "#F8FAF7";
const INK = "#18181B";
const TEXT_SECONDARY = "#5F6872";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: BG,
            color: INK,
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          MegaQuiz
        </div>
      ),
      { ...size }
    );
  }

  const typeLabel = quiz.type === "trivia" ? "TRIVIA" : "PERSONALIDADE";
  const questionCount =
    quiz.type === "trivia"
      ? `${quiz.questions.length} perguntas`
      : `${quiz.questions.length} perguntas • ${(quiz.profiles || []).length} perfis`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          padding: "48px 64px 36px",
          position: "relative",
        }}
      >
        {/* Faixa de destaque no topo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: BRAND_DARK,
            display: "flex",
          }}
        />

        {/* Marca + tipo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: BRAND_DARK,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PuzzleOgIcon size={24} color="#ffffff" strokeWidth={1.75} />
            </div>
            <span style={{ fontSize: 26, color: INK, fontWeight: 700, display: "flex" }}>
              <span>Mega</span>
              <span style={{ color: BRAND_DARK }}>Quiz</span>
            </span>
          </div>
          <div
            style={{
              background: quiz.color || BRAND_DARK,
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 10,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1,
              display: "flex",
            }}
          >
            {typeLabel}
          </div>
        </div>

        {/* Conteúdo principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: BRAND_SOFT,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CategoryOgIcon
              category={quiz.category}
              size={38}
              color={BRAND_DARK}
              strokeWidth={1.6}
            />
          </div>
          <div
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.18,
              maxWidth: 920,
              display: "flex",
            }}
          >
            {quiz.title}
          </div>
          <div
            style={{
              fontSize: 23,
              color: TEXT_SECONDARY,
              maxWidth: 820,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            {quiz.description}
          </div>
        </div>

        {/* Rodapé */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 19, color: TEXT_SECONDARY, display: "flex" }}>
            {questionCount}
          </div>
          <div
            style={{
              background: BRAND_DARK,
              color: "#fff",
              padding: "12px 30px",
              borderRadius: 10,
              fontSize: 20,
              fontWeight: 700,
              display: "flex",
            }}
          >
            JOGAR AGORA
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            fontSize: 15,
            color: TEXT_SECONDARY,
            marginTop: 14,
          }}
        >
          megaquiz.app.br
        </div>
      </div>
    ),
    { ...size }
  );
}
