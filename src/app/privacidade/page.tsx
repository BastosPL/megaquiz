import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description: "Politica de privacidade do MegaQuiz",
};

export default function PrivacidadePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-6">
        Politica de Privacidade
      </h1>

      <div className="prose prose-sm text-text-light space-y-4">
        <p>
          <strong>Ultima atualizacao:</strong> 08 de junho de 2026
        </p>

        <h2 className="text-lg font-bold text-text mt-6">1. Informacoes que coletamos</h2>
        <p>
          O MegaQuiz (<strong>megaquiz.app.br</strong>) nao coleta dados pessoais identificaveis
          diretamente. Nos utilizamos servicos de terceiros que podem coletar dados anonimos
          para fins de analise e publicidade:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Google Analytics:</strong> coleta dados anonimos de navegacao (paginas visitadas, tempo no site, dispositivo utilizado) para melhorar a experiencia do usuario.</li>
          <li><strong>Google AdSense:</strong> exibe anuncios personalizados com base nos interesses do usuario, utilizando cookies.</li>
        </ul>

        <h2 className="text-lg font-bold text-text mt-6">2. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar sua experiencia e exibir anuncios relevantes.
          Voce pode desabilitar cookies nas configuracoes do seu navegador, mas isso pode
          afetar algumas funcionalidades do site.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">3. Google AdSense</h2>
        <p>
          Terceiros, incluindo o Google, usam cookies para veicular anuncios com base em
          visitas anteriores do usuario ao nosso site ou a outros sites. O uso de cookies
          para publicidade permite que o Google e seus parceiros veiculem anuncios baseados
          na visita dos usuarios. Voce pode desativar a publicidade personalizada acessando{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Configuracoes de Anuncios do Google
          </a>.
        </p>

        <h2 className="text-lg font-bold text-text mt-6">4. Uso dos dados</h2>
        <p>Os dados coletados sao utilizados exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Melhorar o conteudo e a experiencia do site</li>
          <li>Analisar o desempenho e uso da plataforma</li>
          <li>Exibir anuncios relevantes</li>
        </ul>

        <h2 className="text-lg font-bold text-text mt-6">5. Compartilhamento de dados</h2>
        <p>
          Nao vendemos, alugamos ou compartilhamos suas informacoes pessoais com terceiros,
          exceto conforme descrito nesta politica (servicos de analise e publicidade).
        </p>

        <h2 className="text-lg font-bold text-text mt-6">6. Direitos do usuario</h2>
        <p>
          Em conformidade com a LGPD (Lei Geral de Protecao de Dados), voce tem direito a:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Solicitar acesso aos dados coletados</li>
          <li>Solicitar a exclusao de dados</li>
          <li>Revogar consentimento para coleta de dados</li>
        </ul>
        <p>
          Para exercer esses direitos, entre em contato pelo email:{" "}
          <strong>contato@megaquiz.app.br</strong>
        </p>

        <h2 className="text-lg font-bold text-text mt-6">7. Alteracoes</h2>
        <p>
          Esta politica pode ser atualizada periodicamente. Recomendamos que voce revise
          esta pagina regularmente.
        </p>
      </div>
    </div>
  );
}
