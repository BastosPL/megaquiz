import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política Editorial",
  description:
    "Como o MegaQuiz pesquisa, verifica e mantém a qualidade do seu conteúdo.",
  alternates: {
    canonical: "/politica-editorial",
  },
};

export default function PoliticaEditorialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-6xl block mb-4">📋</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3">
          Política Editorial
        </h1>
        <p className="text-text-light text-lg">
          Como o MegaQuiz pesquisa, verifica e mantém a qualidade do seu
          conteúdo.
        </p>
      </div>

      <div className="space-y-6 text-text-light leading-relaxed">
        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Compromisso editorial
          </h2>
          <p>
            O MegaQuiz é um portal de entretenimento e educação por meio de
            quizzes e artigos informativos. Nosso compromisso é oferecer
            conteúdo confiável, preciso e transparente.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Como escolhemos os temas
          </h2>
          <p>
            Os temas dos quizzes e artigos são selecionados com base em
            popularidade, relevância cultural e capacidade de verificação. Damos
            preferência a assuntos que despertem curiosidade e permitam
            aprendizado, sempre garantindo que as informações possam ser
            confirmadas por fontes confiáveis.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Como pesquisamos
          </h2>
          <p>
            Utilizamos fontes primárias sempre que possível: sites oficiais de
            organizações (como FIFA, IUCN, governos), publicações acadêmicas
            revisadas por pares e referências reconhecidas em cada área.
          </p>
          <p className="mt-3">
            Quizzes de personalidade utilizam mapeamento recreativo de
            preferências — não são instrumentos psicométricos e não pretendem
            substituir avaliações profissionais.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Como verificamos
          </h2>
          <p>
            Perguntas de trivia passam por verificação factual antes da
            publicação. Fontes utilizadas são indicadas nas publicações revisadas
            que apresentam afirmações factuais, científicas ou dependentes de
            atualização. Quando um erro é identificado, corrigimos com
            transparência e registramos a data da última revisão.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Como atualizamos
          </h2>
          <p>
            Conteúdos sobre eventos em andamento são revisados conforme novas
            informações se tornam disponíveis. A data de revisão é exibida nos
            conteúdos verificados para que o leitor saiba quando a informação
            foi conferida pela última vez.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Correções</h2>
          <p>
            Relatos de erros são analisados conforme a gravidade e a
            disponibilidade das fontes. Erros confirmados são corrigidos assim
            que a verificação editorial é concluída. O processo inclui:
            recebimento do relato, verificação contra fontes primárias, correção
            do conteúdo, atualização da data de revisão e registro da alteração
            quando relevante.
          </p>
          <p className="mt-3">
            Para reportar um erro, envie um email para{" "}
            <a
              href="mailto:contato@megaquiz.app.br"
              className="text-primary hover:underline"
            >
              contato@megaquiz.app.br
            </a>{" "}
            ou use o formulário na página de{" "}
            <Link href="/contato" className="text-primary hover:underline">
              Contato
            </Link>
            .
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Publicidade e afiliados
          </h2>
          <p>
            Links de afiliados são claramente identificados com o rótulo
            &quot;Publicidade&quot; e utilizam os atributos{" "}
            <code className="text-xs bg-bg px-1 py-0.5 rounded">
              rel=&quot;sponsored nofollow&quot;
            </code>
            . A presença de links comerciais não influencia o conteúdo editorial.
            Nenhum resultado de quiz é direcionado por interesses comerciais.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">
            Uso de inteligência artificial
          </h2>
          <p>
            Ferramentas de inteligência artificial podem auxiliar na organização
            de conteúdo, pesquisa preliminar, revisão gramatical e sugestões de
            estrutura. A IA não é tratada como autora. Conteúdos novos e
            revisados passam por verificação factual, conferência de fontes e
            revisão editorial antes da publicação. A responsabilidade editorial é
            da equipe do MegaQuiz, não de ferramentas automatizadas.
          </p>
        </div>

        <div className="bg-bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-3">Responsável</h2>
          <p>
            O MegaQuiz é mantido pela Equipe Editorial MegaQuiz, vinculada ao
            Grupo Bastos, com sede em Recife, PE — Brasil.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
