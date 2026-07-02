import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o MegaQuiz",
  description: "Conheça o MegaQuiz - a plataforma de quizzes mais divertida do Brasil",
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
          <h2 className="text-lg font-bold text-text mb-3">👤 Quem está por trás</h2>
          <p>
            O MegaQuiz é um projeto criado e mantido por <strong>Patrick Bastos</strong>,
            desenvolvedor de software baseado em <strong>Recife, PE — Brasil</strong>.
            Com experiência em desenvolvimento web e sistemas digitais, Patrick criou
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
            O MegaQuiz nasceu com um objetivo simples: criar os melhores quizzes
            da internet em português. Queremos que você se divirta, aprenda coisas
            novas e desafie seus amigos — tudo de graça!
          </p>
          <p className="mt-3">
            MegaQuiz é um projeto brasileiro criado para oferecer entretenimento educativo e diversão para todos.
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
              <span className="text-2xl font-extrabold text-primary block">150+</span>
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
