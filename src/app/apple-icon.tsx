import { ImageResponse } from "next/og";
import { PuzzleOgIcon } from "@/lib/og-icons";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Design System v2 (Editorial Game Premium) — ver docs/REDESIGN-SPEC-editorial-game-premium.md
const BRAND_DARK = "#15803D";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: BRAND_DARK,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PuzzleOgIcon size={104} color="#ffffff" strokeWidth={1.6} />
      </div>
    ),
    { ...size }
  );
}
