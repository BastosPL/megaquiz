import { ImageResponse } from "next/og";
import {
  PuzzleOgIcon,
  TrophyOgIcon,
  BrainOgIcon,
  BriefcaseOgIcon,
  DumbbellOgIcon,
} from "@/lib/og-icons";

export const alt = "MegaQuiz - Quizzes de Trivia e Personalidade em Português";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Design System v2 (Editorial Game Premium) — ver docs/REDESIGN-SPEC-editorial-game-premium.md
const BRAND_DARK = "#15803D";
const BRAND_SOFT = "#DCFCE7";
const BG = "#F8FAF7";
const INK = "#18181B";
const TEXT_SECONDARY = "#5F6872";

function Chip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      style={{
        background: BRAND_SOFT,
        color: BRAND_DARK,
        padding: "10px 22px",
        borderRadius: 999,
        fontSize: 20,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {icon} {label}
    </div>
  );
}

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          padding: "56px 72px 44px",
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

        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: BRAND_DARK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PuzzleOgIcon size={36} color="#ffffff" strokeWidth={1.75} />
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: INK }}>Mega</span>
            <span style={{ color: BRAND_DARK }}>Quiz</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 22,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.12,
            }}
          >
            Quizzes gratuitos em português
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              color: TEXT_SECONDARY,
              lineHeight: 1.5,
              maxWidth: 840,
            }}
          >
            Trivia com explicações e personalidade com perfis detalhados —
            perguntas originais e fontes verificadas.
          </div>
        </div>

        {/* Categorias */}
        <div style={{ display: "flex", gap: 14 }}>
          <Chip icon={<TrophyOgIcon size={20} color={BRAND_DARK} />} label="Trivia" />
          <Chip icon={<BrainOgIcon size={20} color={BRAND_DARK} />} label="Personalidade" />
          <Chip icon={<BriefcaseOgIcon size={20} color={BRAND_DARK} />} label="Carreira" />
          <Chip icon={<DumbbellOgIcon size={20} color={BRAND_DARK} />} label="Esportes" />
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: TEXT_SECONDARY,
            marginTop: 24,
          }}
        >
          megaquiz.app.br
        </div>
      </div>
    ),
    { ...size }
  );
}
