import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metodologia dos Quizzes",
  description:
    "Como funcionam os quizzes do MegaQuiz: tipos, pontuação, fontes e limitações.",
};

export default function MetodologiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-6xl block mb-4">🔬</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3">
          Metodologia dos Quizzes
        </h1>
        <p className="text-text-light text-lg">
          Como funcionam os quizzes do MegaQuiz: tipos, pontuação, fontes e
          limitações.
        </p>
      </div>

      <div className="space-y-6 text-text-light leading-relaxed">
        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Finalidade</h2>
          <p>
            Os quizzes do MegaQuiz têm finalidade recreativa e educativa. Não
            são instrumentos de avaliação profissional, diagnóstico médico ou
            medição de inteligência.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Tipos de quiz</h2>
          <ul className="space-y-3">
            <li>
              <strong className="text-text">Trivia:</strong> Cada pergunta tem
              uma resposta correta. O jogador começa com 3 vidas e perde uma a
              cada erro. As perguntas são embaralhadas a cada partida.
            </li>
            <li>
              <strong className="text-text">Personalidade:</strong> Não há
              resposta certa ou errada. Cada opção acumula pontos para um perfil.
              O perfil com maior pontuação ao final é o resultado.
            </li>
          </ul>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Critérios para respostas
          </h2>
          <p>
            Em quizzes de trivia, as respostas corretas são definidas por fontes
            primárias verificáveis. Quando há controvérsia sobre uma resposta, a
            pergunta é reformulada ou acompanhada de explicação contextual.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Fontes</h2>
          <p>
            As fontes primárias são indicadas nas páginas revisadas. A
            prioridade é: sites oficiais de organizações, publicações acadêmicas
            revisadas por pares, dados governamentais e referências reconhecidas
            na área.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Pontuação</h2>
          <p>
            A pontuação é individual e não é comparada com outros jogadores. Não
            há percentis simulados ou rankings fictícios. Em quizzes de
            personalidade, o resultado é o perfil com maior pontuação acumulada.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Limitações</h2>
          <ul className="space-y-2">
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
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Atualização</h2>
          <p>
            Conteúdos sobre eventos em andamento são revisados conforme novas
            informações se tornam disponíveis. A data de revisão é exibida nos
            conteúdos verificados.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
