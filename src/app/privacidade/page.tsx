import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do MegaQuiz",
};

export default function PrivacidadePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-6">
        Política de Privacidade
      </h1>

      <div className="prose prose-sm text-text-light space-y-4">
        <p>
          <strong>Última atualização:</strong> 08 de junho de 2026
        </p>

        <h2 className="text-lg font-bold text-text mt-6">1. Informações que coletamos</h2>
        <p>
          O MegaQuiz (<strong>megaquiz.app.br</strong>) não coleta dados pessoais identificáveis
          diretamente. Nós utilizamos serviços de terceiros que podem coletar dados anônimos
          para fins de análise e publicidade:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Google Analytics:</strong> coleta dados anônimos de navegação (páginas visitadas, tempo no site, dispositivo utilizado) para melhorar a experiência do usuário.</li>
          <li><strong>Google AdSense:</strong> exibe anúncios personalizados com base nos interesses do usuário, utilizando cookies.</li>
        </ul>

        <h2 className="text-lg font-bold text-text mt-6">2. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar sua experiência e exibir anúncios relevantes.
          Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode
          afetar algumas funcionalidades do site.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">3. Google AdSense</h2>
        <p>
          Terceiros, incluindo o Google, usam cookies para veicular anúncios com base em
          visitas anteriores do usuário ao nosso site ou a outros sites. O uso de cookies
          para publicidade permite que o Google e seus parceiros veiculem anúncios baseados
          na visita dos usuários. Você pode desativar a publicidade personalizada acessando{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Configurações de Anúncios do Google
          </a>.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">4. Uso dos dados</h2>
        <p>Os dados coletados são utilizados exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Melhorar o conteúdo e a experiência do site</li>
          <li>Analisar o desempenho e uso da plataforma</li>
          <li>Exibir anúncios relevantes</li>
        </ul>

        <h2 className="text-lg font-bold text-text mt-6">5. Compartilhamento de dados</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
          exceto conforme descrito nesta política (serviços de análise e publicidade).
        </p>

        <h2 className="text-lg font-bold text-text mt-6">6. Direitos do usuário</h2>
        <p>
          Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Solicitar acesso aos dados coletados</li>
          <li>Solicitar a exclusão de dados</li>
          <li>Revogar consentimento para coleta de dados</li>
        </ul>
        <p>
          Para exercer esses direitos, entre em contato pelo email:{" "}
          <strong>contato@megaquiz.app.br</strong>
        </p>

        <h2 className="text-lg font-bold text-text mt-6">7. Alterações</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos que você revise
          esta página regularmente.
        </p>
      </div>
    </div>
  );
}
