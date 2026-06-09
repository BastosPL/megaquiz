import { ImageResponse } from "next/og";
import { getQuizBySlug } from "@/lib/quizzes";

export const alt = "MegaQuiz - Quiz Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
            background: "#1a1a2e",
            color: "white",
            fontSize: 48,
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
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: 60,
          position: "relative",
        }}
      >
        {/* Top bar with logo and type */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 36 }}>🧩</span>
            <span style={{ fontSize: 28, color: "#fff", fontWeight: 700, display: "flex" }}>
              <span>Mega</span><span style={{ color: "#f59e0b" }}>Quiz</span>
            </span>
          </div>
          <div
            style={{
              background: quiz.color || "#f59e0b",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1,
              display: "flex",
            }}
          >
            {typeLabel}
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 80, display: "flex" }}>{quiz.emoji}</div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {quiz.title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              maxWidth: 800,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {quiz.description}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 20, color: "#64748b", display: "flex" }}>
            {questionCount}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                background: "#f59e0b",
                color: "#1a1a2e",
                padding: "10px 28px",
                borderRadius: 12,
                fontSize: 22,
                fontWeight: 700,
                display: "flex",
              }}
            >
              JOGAR AGORA
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 60,
            fontSize: 16,
            color: "#475569",
            display: "flex",
          }}
        >
          megaquiz.app.br
        </div>
      </div>
    ),
    { ...size }
  );
}
