import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MegaQuiz - Quizzes de Trivia e Personalidade em Português",
    short_name: "MegaQuiz",
    description:
      "Quizzes de personalidade, trivia, Copa do Mundo e muito mais!",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAF7",
    theme_color: "#15803D",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
