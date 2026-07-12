import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
