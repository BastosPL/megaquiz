import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MegaQuiz - Os Melhores Quizzes da Internet",
    short_name: "MegaQuiz",
    description:
      "Quizzes de personalidade, trivia, Copa do Mundo e muito mais!",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0d9488",
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
