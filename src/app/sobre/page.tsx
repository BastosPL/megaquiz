import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre o MegaQuiz",
  description: "Conheça o MegaQuiz - quizzes de trivia e personalidade em português, com perguntas originais e fontes verificadas",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <Info className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Sobre o MegaQuiz</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Quizzes de trivia e personalidade em português, com perguntas
          originais e fontes verificadas.
        </p>
      </div>

      <div className="space-y-5">
        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Quem está por trás</h2>
          <p className="text-text-secondary leading-relaxed">
            O MegaQuiz é um projeto criado e mantido pelo <strong className="text-ink">Grupo Bastos</strong>,
            baseado em <strong className="text-ink">Recife, PE — Brasil</strong>.
            Com experiência em desenvolvimento web e sistemas digitais, o Grupo Bastos criou
            o MegaQuiz para unir tecnologia e entretenimento, oferecendo quizzes de
            qualidade em português para o público brasileiro.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Todos os quizzes são pesquisados, escritos e revisados com cuidado para
            garantir informações corretas e uma experiência divertida.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Nossa missão</h2>
          <p className="text-text-secondary leading-relaxed">
            O MegaQuiz nasceu para oferecer quizzes em português com conteúdo bem
            pesquisado. Cada quiz é criado com perguntas originais, explicações que
            ensinam algo novo e fontes verificáveis — tudo gratuito e sem cadastro.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Feito para brasileiros</h2>
          <p className="text-text-secondary leading-relaxed">
            Todos os nossos quizzes são criados pensando no público brasileiro.
            De perguntas sobre a Copa do Mundo até testes de personalidade com
            cidades brasileiras — aqui você encontra conteúdo que faz sentido pra você.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-4 text-h3 font-semibold text-ink">Nossos números</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <span className="block text-h2 font-bold text-brand-dark">30+</span>
              <span className="text-caption text-text-secondary">Quizzes Disponíveis</span>
            </div>
            <div className="text-center">
              <span className="block text-h2 font-bold text-brand-dark">6</span>
              <span className="text-caption text-text-secondary">Categorias</span>
            </div>
            <div className="text-center">
              <span className="block text-h2 font-bold text-brand-dark">400+</span>
              <span className="text-caption text-text-secondary">Perguntas</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Como funciona</h2>
          <ul className="space-y-2.5 text-text-secondary">
            <li>
              <strong className="text-ink">Trivia:</strong> Responda perguntas, você tem 3 vidas — erre 3 e começa de novo!
            </li>
            <li>
              <strong className="text-ink">Personalidade:</strong> Descubra qual perfil combina com você
            </li>
            <li>
              <strong className="text-ink">Compartilhe:</strong> Mande seu resultado pros amigos e desafie eles
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Transparência e qualidade</h2>
          <p className="mb-3 text-text-secondary">Conheça como trabalhamos:</p>
          <ul className="space-y-2 text-text-secondary">
            <li>
              <Link href="/politica-editorial" className="font-medium text-brand-dark hover:underline">
                Política Editorial
              </Link>
              {" "}— como pesquisamos, verificamos e corrigimos nosso conteúdo
            </li>
            <li>
              <Link href="/metodologia" className="font-medium text-brand-dark hover:underline">
                Metodologia dos Quizzes
              </Link>
              {" "}— como funcionam nossos quizzes, pontuação e limitações
            </li>
            <li>
              <Link href="/contato" className="font-medium text-brand-dark hover:underline">
                Contato
              </Link>
              {" "}— reporte erros ou envie sugestões
            </li>
          </ul>
        </section>

        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
          >
            Jogar agora
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
