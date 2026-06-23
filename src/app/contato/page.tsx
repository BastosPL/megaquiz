import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o MegaQuiz",
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

      <div className="space-y-4 max-w-md mx-auto">
        <div className="bg-bg-card rounded-2xl border border-border p-6 text-center">
          <span className="text-3xl block mb-3">📧</span>
          <h2 className="font-bold text-text mb-1">Email</h2>
          <a
            href="mailto:contato@megaquiz.app.br"
            className="text-primary hover:underline"
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
            className="text-primary hover:underline"
          >
            @megaquiz.br
          </a>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="font-bold text-text mb-3 text-center">💡 Sugestões de quiz</h2>
          <p className="text-sm text-text-light text-center">
            Tem uma ideia de quiz que todo mundo ia amar? Manda pra gente por email
            com o assunto <strong>&quot;Sugestão de Quiz&quot;</strong> e podemos criar!
          </p>
        </div>
      </div>
    </div>
  );
}
