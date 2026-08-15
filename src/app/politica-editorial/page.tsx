import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

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
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="mb-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <ClipboardCheck className="h-6 w-6 text-brand-dark" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="text-h1 font-bold text-ink">Política Editorial</h1>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-text-secondary">
          Como o MegaQuiz pesquisa, verifica e mantém a qualidade do seu
          conteúdo.
        </p>
      </div>

      <div className="space-y-5">
        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Compromisso editorial
          </h2>
          <p className="text-text-secondary leading-relaxed">
            O MegaQuiz é um portal de entretenimento e educação por meio de
            quizzes e artigos informativos. Nosso compromisso é oferecer
            conteúdo confiável, preciso e transparente.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Como escolhemos os temas
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Os temas dos quizzes e artigos são selecionados com base em
            popularidade, relevância cultural e capacidade de verificação. Damos
            preferência a assuntos que despertem curiosidade e permitam
            aprendizado, sempre garantindo que as informações possam ser
            confirmadas por fontes confiáveis.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Como pesquisamos
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Utilizamos fontes primárias sempre que possível: sites oficiais de
            organizações (como FIFA, IUCN, governos), publicações acadêmicas
            revisadas por pares e referências reconhecidas em cada área.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Quizzes de personalidade utilizam mapeamento recreativo de
            preferências — não são instrumentos psicométricos e não pretendem
            substituir avaliações profissionais.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Como verificamos
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Perguntas de trivia passam por verificação factual antes da
            publicação. Fontes utilizadas são indicadas nas publicações revisadas
            que apresentam afirmações factuais, científicas ou dependentes de
            atualização. Quando um erro é identificado, corrigimos com
            transparência e registramos a data da última revisão.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Como atualizamos
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Conteúdos sobre eventos em andamento são revisados conforme novas
            informações se tornam disponíveis. A data de revisão é exibida nos
            conteúdos verificados para que o leitor saiba quando a informação
            foi conferida pela última vez.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Correções</h2>
          <p className="text-text-secondary leading-relaxed">
            Relatos de erros são analisados conforme a gravidade e a
            disponibilidade das fontes. Erros confirmados são corrigidos assim
            que a verificação editorial é concluída. O processo inclui:
            recebimento do relato, verificação contra fontes primárias, correção
            do conteúdo, atualização da data de revisão e registro da alteração
            quando relevante.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Para reportar um erro, envie um email para{" "}
            <a
              href="mailto:contato@megaquiz.app.br"
              className="text-brand-dark hover:underline"
            >
              contato@megaquiz.app.br
            </a>{" "}
            ou use o formulário na página de{" "}
            <Link href="/contato" className="text-brand-dark hover:underline">
              Contato
            </Link>
            .
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Publicidade e afiliados
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Links de afiliados são claramente identificados com o rótulo
            &quot;Publicidade&quot; e utilizam os atributos{" "}
            <code className="rounded bg-bg-v2 px-1 py-0.5 text-caption">
              rel=&quot;sponsored nofollow&quot;
            </code>
            . A presença de links comerciais não influencia o conteúdo editorial.
            Nenhum resultado de quiz é direcionado por interesses comerciais.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">
            Uso de inteligência artificial
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Ferramentas de inteligência artificial podem auxiliar na organização
            de conteúdo, pesquisa preliminar, revisão gramatical e sugestões de
            estrutura. A IA não é tratada como autora. Conteúdos novos e
            revisados passam por verificação factual, conferência de fontes e
            revisão editorial antes da publicação. A responsabilidade editorial é
            da equipe do MegaQuiz, não de ferramentas automatizadas.
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-surface-v2 p-6">
          <h2 className="mb-3 text-h3 font-semibold text-ink">Responsável</h2>
          <p className="text-text-secondary leading-relaxed">
            O MegaQuiz é mantido pela Equipe Editorial MegaQuiz, vinculada ao
            Grupo Bastos, com sede em Recife, PE — Brasil.
          </p>
        </section>

        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-small font-semibold text-white transition-[filter] hover:brightness-90"
          >
            Voltar ao início
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
