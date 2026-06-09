import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do MegaQuiz",
};

export default function TermosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-6">
        Termos de Uso
      </h1>

      <div className="prose prose-sm text-text-light space-y-4">
        <p>
          <strong>Ultima atualizacao:</strong> 08 de junho de 2026
        </p>

        <p>
          Ao acessar e utilizar o site <strong>MegaQuiz</strong> (megaquiz.app.br),
          voce concorda com os termos e condicoes descritos abaixo. Se voce nao
          concordar com algum destes termos, por favor, nao utilize o site.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">1. Descricao do servico</h2>
        <p>
          O MegaQuiz e uma plataforma gratuita de quizzes e testes online em portugues.
          Oferecemos quizzes de trivia, personalidade, conhecimentos gerais e outros
          temas para fins de entretenimento e educacao.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">2. Uso permitido</h2>
        <p>Ao utilizar o MegaQuiz, voce concorda em:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Utilizar o site apenas para fins pessoais e nao comerciais</li>
          <li>Nao tentar acessar areas restritas do site ou seus sistemas</li>
          <li>Nao reproduzir, duplicar ou copiar o conteudo sem autorizacao</li>
          <li>Nao utilizar o site para qualquer finalidade ilegal</li>
        </ul>

        <h2 className="text-lg font-bold text-text mt-6">3. Propriedade intelectual</h2>
        <p>
          Todo o conteudo do MegaQuiz, incluindo textos, graficos, logotipos, icones,
          imagens, quizzes e software, e de propriedade exclusiva do MegaQuiz ou de
          seus criadores e e protegido pelas leis brasileiras de direitos autorais.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">4. Resultados dos quizzes</h2>
        <p>
          Os resultados dos quizzes sao gerados para fins de entretenimento e nao
          devem ser interpretados como aconselhamento profissional, medico, psicologico
          ou de qualquer outra natureza. Os quizzes de personalidade e carreira sao
          baseados em modelos simplificados e nao substituem avaliacoes profissionais.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">5. Publicidade</h2>
        <p>
          O MegaQuiz exibe anuncios fornecidos por terceiros, incluindo o Google AdSense.
          Esses anuncios podem utilizar cookies para exibir conteudo personalizado.
          O MegaQuiz nao se responsabiliza pelo conteudo dos anuncios exibidos.
          Para mais informacoes, consulte nossa{" "}
          <a href="/privacidade" className="text-primary hover:underline">
            Politica de Privacidade
          </a>.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">6. Compartilhamento de resultados</h2>
        <p>
          Ao compartilhar seus resultados em redes sociais (WhatsApp, X/Twitter, etc.),
          voce o faz por sua propria vontade. O MegaQuiz nao se responsabiliza pelo uso
          que terceiros possam fazer das informacoes compartilhadas por voce.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">7. Disponibilidade do servico</h2>
        <p>
          O MegaQuiz se reserva o direito de modificar, suspender ou descontinuar
          qualquer parte do site a qualquer momento, sem aviso previo. Nao garantimos
          que o site estara disponivel de forma ininterrupta ou livre de erros.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">8. Limitacao de responsabilidade</h2>
        <p>
          O MegaQuiz e fornecido &quot;como esta&quot;, sem garantias de qualquer tipo.
          Em nenhuma circunstancia seremos responsaveis por danos diretos, indiretos,
          incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso do site.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">9. Alteracoes nos termos</h2>
        <p>
          Reservamo-nos o direito de atualizar estes termos a qualquer momento.
          Alteracoes serao publicadas nesta pagina com a data de atualizacao revisada.
          O uso continuado do site apos alteracoes constitui aceitacao dos novos termos.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">10. Legislacao aplicavel</h2>
        <p>
          Estes termos sao regidos pelas leis da Republica Federativa do Brasil.
          Qualquer disputa sera resolvida nos tribunais competentes do Brasil.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">11. Contato</h2>
        <p>
          Para duvidas sobre estes termos, entre em contato:{" "}
          <a href="mailto:contato@megaquiz.app.br" className="text-primary hover:underline">
            contato@megaquiz.app.br
          </a>
        </p>
      </div>
    </div>
  );
}
