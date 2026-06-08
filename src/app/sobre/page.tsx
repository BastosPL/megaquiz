import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o MegaQuiz",
  description: "Conheca o MegaQuiz - a plataforma de quizzes mais divertida do Brasil",
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
          A plataforma de quizzes mais divertida do Brasil!
        </p>
      </div>

      <div className="space-y-6 text-text-light leading-relaxed">
        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">🎯 Nossa missao</h2>
          <p>
            O MegaQuiz nasceu com um objetivo simples: criar os melhores quizzes
            da internet em portugues. Queremos que voce se divirta, aprenda coisas
            novas e desafie seus amigos — tudo de graca!
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">🇧🇷 Feito para brasileiros</h2>
          <p>
            Todos os nossos quizzes sao criados pensando no publico brasileiro.
            De perguntas sobre a Copa do Mundo ate testes de personalidade com
            cidades brasileiras — aqui voce encontra conteudo que faz sentido pra voce.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">📊 Nossos numeros</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">9+</span>
              <span className="text-xs text-text-light">Quizzes</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">6</span>
              <span className="text-xs text-text-light">Categorias</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-extrabold text-primary block">150+</span>
              <span className="text-xs text-text-light">Perguntas</span>
            </div>
          </div>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">💡 Como funciona</h2>
          <ul className="space-y-2">
            <li>✅ <strong>Trivia:</strong> Responda perguntas, voce tem 3 vidas — erre 3 e comeca de novo!</li>
            <li>✅ <strong>Personalidade:</strong> Descubra qual perfil combina com voce</li>
            <li>✅ <strong>Compartilhe:</strong> Mande seu resultado pros amigos e desafie eles</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            🧩 Jogar agora
          </Link>
        </div>
      </div>
    </div>
  );
}
