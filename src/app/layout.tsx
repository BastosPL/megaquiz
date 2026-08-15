import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ConditionalScripts from "@/components/ConditionalScripts";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "MegaQuiz - Quizzes de Trivia e Personalidade em Português",
    template: "%s | MegaQuiz",
  },
  description:
    "Quizzes gratuitos de trivia e personalidade em português. Copa do Mundo 2026, séries, filmes, conhecimentos gerais, esportes e carreira — com explicações e fontes verificadas.",
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
    title: "MegaQuiz - Quizzes de Trivia e Personalidade em Português",
    description: "Quizzes gratuitos em português — trivia com explicações e personalidade com perfis detalhados.",
    url: "https://megaquiz.app.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "MegaQuiz - Quizzes de Trivia e Personalidade em Português",
    description: "Quizzes gratuitos em português — trivia com explicações e personalidade com perfis detalhados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-7284698282537450",
    "theme-color": "#15803D",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MegaQuiz",
  url: "https://megaquiz.app.br",
  description:
    "Quizzes gratuitos de trivia e personalidade em português, com perguntas originais e fontes verificadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ConditionalScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
