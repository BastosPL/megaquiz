import { ImageResponse } from "next/og";
import { PuzzleOgIcon } from "@/lib/og-icons";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "linear-gradient(135deg, #10b981, #0d9488)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PuzzleOgIcon size={110} color="#ffffff" strokeWidth={1.5} />
      </div>
    ),
    { ...size }
  );
}
