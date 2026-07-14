import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o MegaQuiz — envie sugestões, dúvidas ou ideias de quizzes",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContatoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-6xl block mb-4">📩</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3">
          Contato
        </h1>
        <p className="text-text-light text-lg">
          Tem alguma sugestão, dúvida ou quer enviar um quiz? Fale com a gente!
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="font-bold text-text mb-4 text-center">📝 Formulário de contato</h2>
          <form
            action="mailto:contato@megaquiz.app.br"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-text mb-1">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Seu nome"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-text mb-1">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
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
              <label htmlFor="mensagem" className="block text-sm font-medium text-text mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-card rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl block mb-3">📧</span>
            <h2 className="font-bold text-text mb-1">Email</h2>
            <a
              href="mailto:contato@megaquiz.app.br"
              className="text-primary hover:underline text-sm"
            >
              contato@megaquiz.app.br
            </a>
          </div>

          <div className="bg-bg-card rounded-2xl border border-border p-6 text-center">
            <span className="text-3xl block mb-3">📱</span>
            <h2 className="font-bold text-text mb-1">Instagram</h2>
            <a
              href="https://instagram.com/megaquiz.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              @megaquiz.br
            </a>
          </div>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="font-bold text-text mb-3 text-center">Reportar um erro</h2>
          <p className="text-sm text-text-light text-center">
            Encontrou um erro factual, uma informação desatualizada ou um problema
            técnico? Use o formulário acima com o assunto{" "}
            <strong>&quot;Erro no site&quot;</strong> ou{" "}
            <strong>&quot;Erro factual em quiz ou artigo&quot;</strong> e descreva
            o problema com detalhes. Analisamos todos os relatos conforme a
            gravidade e corrigimos erros confirmados o mais rápido possível.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="font-bold text-text mb-3 text-center">Sugestões de quiz</h2>
          <p className="text-sm text-text-light text-center">
            Tem uma ideia de quiz que todo mundo ia amar? Use o formulário acima
            com o assunto <strong>&quot;Sugestão de Quiz&quot;</strong> ou mande
            direto por email!
          </p>
        </div>
      </div>
    </div>
  );
}
