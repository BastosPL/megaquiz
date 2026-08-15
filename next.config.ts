import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Explicit root avoids ambiguous workspace-root inference when multiple
  // lockfiles are present (e.g. sibling git worktrees), which otherwise
  // makes Turbopack resolve node_modules from the wrong directory.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/quiz/so-quem-tem-qi-acima-de-120-acerta-8",
        destination: "/quiz/desafio-conhecimentos-gerais-8-perguntas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
