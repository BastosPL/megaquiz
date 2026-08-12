import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o MegaQuiz",
  description: "Conheça o MegaQuiz - quizzes de trivia e personalidade em português, com perguntas originais e fontes verificadas",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-6xl block mb-4">🧩</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3">
          Sobre o MegaQuiz
        </h1>
        <p className="text-text-light text-lg">
          Quizzes de trivia e personalidade em português, com perguntas originais e fontes verificadas.
        </p>
      </div>

      <div className="space-y-6 text-text-light leading-relaxed">
        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">👤 Quem está por trás</h2>
          <p>
            O MegaQuiz é um projeto criado e mantido pelo <strong>Grupo Bastos</strong>,
            baseado em <strong>Recife, PE — Brasil</strong>.
            Com experiência em desenvolvimento web e sistemas digitais, o Grupo Bastos criou
            o MegaQuiz para unir tecnologia e entretenimento, oferecendo quizzes de
            qualidade em português para o público brasileiro.
          </p>
          <p className="mt-3">
            Todos os quizzes são pesquisados, escritos e revisados com cuidado para
            garantir informações corretas e uma experiência divertida.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">🎯 Nossa missão</h2>
          <p>
            O MegaQuiz nasceu para oferecer quizzes em português com conteúdo bem
            pesquisado. Cada quiz é criado com perguntas originais, explicações que
            ensinam algo novo e fontes verificáveis — tudo gratuito e sem cadastro.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">🇧🇷 Feito para brasileiros</h2>
          <p>
            Todos os nossos quizzes são criados pensando no público brasileiro.
            De perguntas sobre a Copa do Mundo até testes de personalidade com
            cidades brasileiras — aqui você encontra conteúdo que faz sentido pra você.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">📊 Nossos números</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">30+</span>
              <span className="text-xs text-text-light">Quizzes Disponíveis</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">6</span>
              <span className="text-xs text-text-light">Categorias</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">400+</span>
              <span className="text-xs text-text-light">Perguntas</span>
            </div>
          </div>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">💡 Como funciona</h2>
          <ul className="space-y-2">
            <li>✅ <strong>Trivia:</strong> Responda perguntas, você tem 3 vidas — erre 3 e começa de novo!</li>
            <li>✅ <strong>Personalidade:</strong> Descubra qual perfil combina com você</li>
            <li>✅ <strong>Compartilhe:</strong> Mande seu resultado pros amigos e desafie eles</li>
          </ul>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Transparência e qualidade</h2>
          <p className="mb-3">Conheça como trabalhamos:</p>
          <ul className="space-y-2">
            <li>
              <Link href="/politica-editorial" className="text-primary hover:underline font-medium">
                Política Editorial
              </Link>
              {" "}— como pesquisamos, verificamos e corrigimos nosso conteúdo
            </li>
            <li>
              <Link href="/metodologia" className="text-primary hover:underline font-medium">
                Metodologia dos Quizzes
              </Link>
              {" "}— como funcionam nossos quizzes, pontuação e limitações
            </li>
            <li>
              <Link href="/contato" className="text-primary hover:underline font-medium">
                Contato
              </Link>
              {" "}— reporte erros ou envie sugestões
            </li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Jogar agora
          </Link>
        </div>
      </div>
    </div>
  );
}
