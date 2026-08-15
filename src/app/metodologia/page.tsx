import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Metodologia dos Quizzes",
  description:
    "Como funcionam os quizzes do MegaQuiz: tipos, pontuação, fontes e limitações.",
  alternates: {
    canonical: "/metodologia",
  },
};

export default function MetodologiaPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <FlaskConical className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Metodologia dos Quizzes</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Como funcionam os quizzes do MegaQuiz: tipos, pontuação, fontes e
          limitações.
        </p>
      </div>

      <div className="space-y-5">
        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Finalidade</h2>
          <p className="text-text-secondary leading-relaxed">
            Os quizzes do MegaQuiz têm finalidade recreativa e educativa. Não
            são instrumentos de avaliação profissional, diagnóstico médico ou
            medição de inteligência.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Tipos de quiz</h2>
          <ul className="space-y-3 text-text-secondary">
            <li>
              <strong className="text-ink">Trivia:</strong> Cada pergunta tem
              uma resposta correta. O jogador começa com 3 vidas e perde uma a
              cada erro. As perguntas são embaralhadas a cada partida.
            </li>
            <li>
              <strong className="text-ink">Personalidade:</strong> Não há
              resposta certa ou errada. Cada opção acumula pontos para um perfil.
              O perfil com maior pontuação ao final é o resultado.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Critérios para respostas
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Em quizzes de trivia, as respostas corretas são definidas por fontes
            primárias verificáveis. Quando há controvérsia sobre uma resposta, a
            pergunta é reformulada ou acompanhada de explicação contextual.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Fontes</h2>
          <p className="text-text-secondary leading-relaxed">
            As fontes primárias são indicadas nas páginas revisadas. A
            prioridade é: sites oficiais de organizações, publicações acadêmicas
            revisadas por pares, dados governamentais e referências reconhecidas
            na área.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Pontuação</h2>
          <p className="text-text-secondary leading-relaxed">
            A pontuação é individual e não é comparada com outros jogadores. Não
            há percentis simulados ou rankings fictícios. Em quizzes de
            personalidade, o resultado é o perfil com maior pontuação acumulada.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Limitações</h2>
          <ul className="space-y-2 text-text-secondary">
            <li>
              Quizzes de personalidade são recreativos e não substituem
              avaliação profissional.
            </li>
            <li>
              Quizzes sobre saúde não constituem orientação médica.
            </li>
            <li>
              Quizzes sobre carreira não determinam aptidão real — faixas
              salariais são estimativas aproximadas do mercado brasileiro e
              variam conforme região, experiência e momento econômico.
            </li>
            <li>
              Nenhum quiz do MegaQuiz mede inteligência ou capacidade
              cognitiva.
            </li>
            <li>
              Os resultados são para diversão e reflexão.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Atualização</h2>
          <p className="text-text-secondary leading-relaxed">
            Conteúdos sobre eventos em andamento são revisados conforme novas
            informações se tornam disponíveis. A data de revisão é exibida nos
            conteúdos verificados.
          </p>
        </section>

        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
          >
            Voltar ao início
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
