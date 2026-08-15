import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do MegaQuiz",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-8">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <ShieldCheck className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Política de Privacidade</h1>
      </div>

      <div className="space-y-4 leading-relaxed text-text-secondary">
        <p>
          <strong className="text-ink">Última atualização:</strong> 02 de julho de 2026
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">1. Informações que coletamos</h2>
        <p>
          O MegaQuiz (<strong className="text-ink">megaquiz.app.br</strong>) não coleta dados pessoais identificáveis
          diretamente. Nós utilizamos serviços de terceiros que podem coletar dados anônimos
          para fins de análise e publicidade:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong className="text-ink">Google Analytics:</strong> coleta dados anônimos de navegação (páginas visitadas, tempo no site, dispositivo utilizado) para melhorar a experiência do usuário.</li>
          <li><strong className="text-ink">Google AdSense:</strong> exibe anúncios personalizados com base nos interesses do usuário, utilizando cookies.</li>
        </ul>

        <h2 className="mt-8 text-h3 font-semibold text-ink">2. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar sua experiência e exibir anúncios relevantes.
          Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode
          afetar algumas funcionalidades do site.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">3. Google AdSense</h2>
        <p>
          Terceiros, incluindo o Google, usam cookies para veicular anúncios com base em
          visitas anteriores do usuário ao nosso site ou a outros sites. O uso de cookies
          para publicidade permite que o Google e seus parceiros veiculem anúncios baseados
          na visita dos usuários. Você pode desativar a publicidade personalizada acessando{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-dark underline underline-offset-2 hover:no-underline">
            Configurações de Anúncios do Google
          </a>.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">4. Uso dos dados</h2>
        <p>Os dados coletados são utilizados exclusivamente para:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Melhorar o conteúdo e a experiência do site</li>
          <li>Analisar o desempenho e uso da plataforma</li>
          <li>Exibir anúncios relevantes</li>
        </ul>

        <h2 className="mt-8 text-h3 font-semibold text-ink">5. Compartilhamento de dados</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
          exceto conforme descrito nesta política (serviços de análise e publicidade).
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">6. Direitos do usuário</h2>
        <p>
          Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Solicitar acesso aos dados coletados</li>
          <li>Solicitar a exclusão de dados</li>
          <li>Revogar consentimento para coleta de dados</li>
        </ul>
        <p>
          Para exercer esses direitos, entre em contato pelo email:{" "}
          <strong className="text-ink">contato@megaquiz.app.br</strong>
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">7. Controlador de Dados</h2>
        <p>
          Nos termos da LGPD (Lei nº 13.709/2018), o controlador dos dados pessoais
          coletados por este site é:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li><strong className="text-ink">Responsável:</strong> Grupo Bastos</li>
          <li><strong className="text-ink">Localização:</strong> Recife, PE — Brasil</li>
          <li><strong className="text-ink">Email de contato:</strong> contato@megaquiz.app.br</li>
        </ul>
        <p>
          Para qualquer solicitação relacionada aos seus dados pessoais, entre em
          contato pelo email acima.
        </p>

        <h2 className="mt-8 text-h3 font-semibold text-ink">8. Alterações</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos que você revise
          esta página regularmente.
        </p>
      </div>
    </div>
  );
}
