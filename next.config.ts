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
      {
        source: "/quiz/quiz-futebol-mundial",
        destination: "/quiz/quanto-voce-sabe-sobre-a-copa-2026",
        permanent: true,
      },
      {
        source: "/quiz/qual-profissao-ideal-pra-voce",
        destination: "/quiz/descubra-seu-perfil-profissional",
        permanent: true,
      },
      {
        source: "/quiz/qual-jogador-voce-seria-na-copa-2026",
        destination: "/quiz/qual-artilheiro-historico-voce-e",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
