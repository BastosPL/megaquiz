import type { Metadata } from "next";
import { AtSign, Camera, Mail, MessageSquareWarning, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o MegaQuiz — envie sugestões, dúvidas ou ideias de quizzes",
  alternates: {
    canonical: "/contato",
  },
};

const inputClass =
  "w-full rounded-xl border border-black/10 bg-bg-v2 px-4 py-2.5 text-ink placeholder:text-text-secondary/50 transition-colors focus:border-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-bright/40";

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <Mail className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Contato</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Tem alguma sugestão, dúvida ou quer enviar um quiz? Fale com a gente!
        </p>
      </div>

      <div className="mx-auto max-w-lg space-y-5">
        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-4 text-center text-h3 font-semibold text-ink">
            Formulário de contato
          </h2>
          <form
            action="mailto:contato@megaquiz.app.br"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="nome" className="mb-1 block text-small font-medium text-ink">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Seu nome"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-small font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="assunto" className="mb-1 block text-small font-medium text-ink">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                required
                className={inputClass}
              >
                <option value="">Selecione um assunto</option>
                <option value="Sugestão de Quiz">Sugestão de Quiz</option>
                <option value="Dúvida">Dúvida</option>
                <option value="Erro no site">Erro no site</option>
                <option value="Erro factual">Erro factual em quiz ou artigo</option>
                <option value="Parceria">Parceria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="mb-1 block text-small font-medium text-ink">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-dark py-3 font-semibold text-white transition-[filter] hover:brightness-90"
            >
              Enviar mensagem
            </button>
          </form>
        </section>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-v2 p-6 text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft">
              <AtSign className="h-5 w-5 text-brand-dark" aria-hidden="true" />
            </span>
            <h2 className="mb-1 font-semibold text-ink">Email</h2>
            <a
              href="mailto:contato@megaquiz.app.br"
              className="text-small text-brand-dark hover:underline"
            >
              contato@megaquiz.app.br
            </a>
          </div>

          <div className="rounded-2xl border border-black/5 bg-surface-v2 p-6 text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft">
              <Camera className="h-5 w-5 text-brand-dark" aria-hidden="true" />
            </span>
            <h2 className="mb-1 font-semibold text-ink">Instagram</h2>
            <a
              href="https://instagram.com/megaquiz.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-brand-dark hover:underline"
            >
              @megaquiz.br
            </a>
          </div>
        </div>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 flex items-center justify-center gap-2 text-center font-semibold text-ink">
            <MessageSquareWarning className="h-4 w-4 text-brand-dark" aria-hidden="true" />
            Reportar um erro
          </h2>
          <p className="text-center text-small text-text-secondary">
            Encontrou um erro factual, uma informação desatualizada ou um problema
            técnico? Use o formulário acima com o assunto{" "}
            <strong className="text-ink">&quot;Erro no site&quot;</strong> ou{" "}
            <strong className="text-ink">&quot;Erro factual em quiz ou artigo&quot;</strong> e descreva
            o problema com detalhes. Analisamos todos os relatos conforme a
            gravidade e corrigimos erros confirmados o mais rápido possível.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 flex items-center justify-center gap-2 text-center font-semibold text-ink">
            <Sparkles className="h-4 w-4 text-brand-dark" aria-hidden="true" />
            Sugestões de quiz
          </h2>
          <p className="text-center text-small text-text-secondary">
            Tem uma ideia de quiz que todo mundo ia amar? Use o formulário acima
            com o assunto <strong className="text-ink">&quot;Sugestão de Quiz&quot;</strong> ou mande
            direto por email!
          </p>
        </section>
      </div>
    </div>
  );
}
