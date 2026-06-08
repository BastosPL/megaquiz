import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MegaQuiz - Os Melhores Quizzes da Internet",
    template: "%s | MegaQuiz",
  },
  description:
    "Descubra, desafie e compartilhe! Quizzes de personalidade, trivia, Copa do Mundo, series, filmes e muito mais.",
  keywords: [
    "quiz",
    "quiz online",
    "teste de personalidade",
    "trivia",
    "copa do mundo 2026",
    "quiz brasil",
    "megaquiz",
    "perguntas e respostas",
    "quiz divertido",
    "desafio",
  ],
  metadataBase: new URL("https://megaquiz.app.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MegaQuiz",
    title: "MegaQuiz - Os Melhores Quizzes da Internet",
    description: "Descubra, desafie e compartilhe! Quizzes de personalidade, trivia e muito mais.",
    url: "https://megaquiz.app.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "MegaQuiz - Os Melhores Quizzes da Internet",
    description: "Descubra, desafie e compartilhe! Quizzes de personalidade, trivia e muito mais.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Google Search Console - adicionar depois
    // google: "SEU_CODIGO_AQUI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CK9LKG3HT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2CK9LKG3HT');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
