import { ImageResponse } from "next/og";

export const alt = "MegaQuiz - Os Melhores Quizzes do Brasil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: 60,
          gap: 24,
        }}
      >
        <div style={{ fontSize: 100, display: "flex" }}>🧩</div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          <span style={{ color: "#ffffff" }}>Mega</span>
          <span style={{ color: "#f59e0b" }}>Quiz</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Os melhores quizzes e testes online do Brasil!
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div
            style={{
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#f59e0b",
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            🏆 Trivia
          </div>
          <div
            style={{
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#f59e0b",
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            🧠 Personalidade
          </div>
          <div
            style={{
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#f59e0b",
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            💼 Carreira
          </div>
          <div
            style={{
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#f59e0b",
              padding: "8px 20px",
              borderRadius: 20,
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            ⚽ Esportes
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 18,
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
