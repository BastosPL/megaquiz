import type { Metadata } from "next";
import { ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do MegaQuiz",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermosPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-8">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <ScrollText className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Termos de Uso</h1>
      </div>

      <div className="space-y-4 leading-relaxed text-text-secondary">
        <p>
          <strong className="text-ink">Última atualização:</strong> 08 de junho de 2026
        </p>

        <p>
          Ao acessar e utilizar o site <strong className="text-ink">MegaQuiz</strong> (megaquiz.app.br),
          você concorda com os termos e condições descritos abaixo. Se você não
          concordar com algum destes termos, por favor, não utilize o site.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">1. Descrição do serviço</h2>
        <p>
          O MegaQuiz é uma plataforma gratuita de quizzes e testes online em português.
          Oferecemos quizzes de trivia, personalidade, conhecimentos gerais e outros
          temas para fins de entretenimento e educação.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">2. Uso permitido</h2>
        <p>Ao utilizar o MegaQuiz, você concorda em:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Utilizar o site apenas para fins pessoais e não comerciais</li>
          <li>Não tentar acessar áreas restritas do site ou seus sistemas</li>
          <li>Não reproduzir, duplicar ou copiar o conteúdo sem autorização</li>
          <li>Não utilizar o site para qualquer finalidade ilegal</li>
        </ul>

        <h2 className="mt-8 text-h3 font-semibold text-ink">3. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo do MegaQuiz, incluindo textos, gráficos, logotipos, ícones,
          imagens, quizzes e software, é de propriedade exclusiva do MegaQuiz ou de
          seus criadores e é protegido pelas leis brasileiras de direitos autorais.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">4. Resultados dos quizzes</h2>
        <p>
          Os resultados dos quizzes são gerados para fins de entretenimento e não
          devem ser interpretados como aconselhamento profissional, médico, psicológico
          ou de qualquer outra natureza. Os quizzes de personalidade e carreira são
          baseados em modelos simplificados e não substituem avaliações profissionais.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">5. Publicidade</h2>
        <p>
          O MegaQuiz exibe anúncios fornecidos por terceiros, incluindo o Google AdSense.
          Esses anúncios podem utilizar cookies para exibir conteúdo personalizado.
          O MegaQuiz não se responsabiliza pelo conteúdo dos anúncios exibidos.
          Para mais informações, consulte nossa{" "}
          <a href="/privacidade" className="text-brand-dark hover:underline">
            Política de Privacidade
          </a>.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">6. Compartilhamento de resultados</h2>
        <p>
          Ao compartilhar seus resultados em redes sociais (WhatsApp, X/Twitter, etc.),
          você o faz por sua própria vontade. O MegaQuiz não se responsabiliza pelo uso
          que terceiros possam fazer das informações compartilhadas por você.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">7. Disponibilidade do serviço</h2>
        <p>
          O MegaQuiz se reserva o direito de modificar, suspender ou descontinuar
          qualquer parte do site a qualquer momento, sem aviso prévio. Não garantimos
          que o site estará disponível de forma ininterrupta ou livre de erros.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">8. Limitação de responsabilidade</h2>
        <p>
          O MegaQuiz é fornecido &quot;como está&quot;, sem garantias de qualquer tipo.
          Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos,
          incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso do site.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">9. Alterações nos termos</h2>
        <p>
          Reservamo-nos o direito de atualizar estes termos a qualquer momento.
          Alterações serão publicadas nesta página com a data de atualização revisada.
          O uso continuado do site após alterações constitui aceitação dos novos termos.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">10. Legislação aplicável</h2>
        <p>
          Estes termos são regidos pelas leis da República Federativa do Brasil.
          Qualquer disputa será resolvida nos tribunais competentes do Brasil.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">11. Contato</h2>
        <p>
          Para dúvidas sobre estes termos, entre em contato:{" "}
          <a href="mailto:contato@megaquiz.app.br" className="text-brand-dark hover:underline">
            contato@megaquiz.app.br
          </a>
        </p>
      </div>
    </div>
  );
}
