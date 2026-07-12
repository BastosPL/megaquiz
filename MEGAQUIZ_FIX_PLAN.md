# MegaQuiz — Plano de Execucao por Fases (Revisao 2)

> Nenhuma acao sera executada sem o OK expresso de Patrick, fase por fase.
> Data: 11/07/2026 | Revisao: 11/07/2026

---

## FASE 1 — P0 Incontestaveis

Correcoes factuais, remocao de dados artificiais, correcao de alegacoes enganosas. Nenhuma decisao editorial subjetiva — apenas remocao/correcao de informacao objetivamente incorreta ou artificial.

### F1-1: Remocao dos play counts ficticios

| Campo | Valor |
|-------|-------|
| **Acao** | Remover campo `plays` de todos os 31 quizzes. Remover funcao `formatPlays` e exibicao "X plays" do QuizCard. Substituir por "X perguntas" (dado real, extraido de questions.length). |
| **Arquivos** | 31 arquivos .ts em src/lib/quizzes/, src/components/QuizCard.tsx (linha 70), src/lib/types.ts (campo plays na interface) |
| **Risco** | Baixo — remocao de conteudo artificial |
| **Validacao** | grep por "plays" em todo o projeto para garantir que nenhuma referencia permanece |

### F1-2: Remocao do percentil simulado

| Campo | Valor |
|-------|-------|
| **Acao** | Remover calculo de percentile com formula fixa. Remover exibicao "Voce foi melhor que X% das pessoas!". Substituir por mensagem baseada apenas na pontuacao individual (ex: "Voce acertou X de Y!") sem implicar comparacao com outros usuarios. |
| **Arquivos** | src/components/QuizEngine.tsx (linhas 67-68), src/components/QuizResult.tsx (linhas 92-101) |
| **Risco** | Baixo — remocao de informacao artificial |
| **Validacao** | Verificar que nenhuma referencia a "percentile" permanece no codigo |

### F1-3: Correcao dos erros factuais em quizzes (F01-F04)

| Erro | Arquivo | Linhas | Acao |
|------|---------|--------|------|
| F01 (mascote inventado) | copa-2026-trivia.ts | 162-169 | Substituir pergunta/resposta/explanation pelos 3 mascotes reais (Maple, Zayu, Clutch) |
| F02 (bola errada) | copa-2026-trivia.ts | 247-254 | Trocar "adidas Oceaunz Flight" por "adidas Trionda" |
| F03 (Vini Jr Bola de Ouro) | qual-jogador-copa-2026.ts | 19-23 | Trocar "Bola de Ouro merecida!" por "Eleito melhor jogador da Champions League 2023/24!" |
| F04 (Tempos Modernos) | musica-brasileira.ts | 84-92 | Trocar "Tempos Modernos" por "Tente Outra Vez" na pergunta e atualizar explanation |

Textos exatos de substituicao: ver MEGAQUIZ_FACT_CHECK.md (cada erro tem campo "Texto exato da substituicao").

### F1-4: Correcao dos erros factuais no artigo (F05-F07)

| Erro | Arquivo | Linha | Acao |
|------|---------|-------|------|
| F05 (Vini Jr Bola de Ouro no artigo) | articles.ts | 66 | Trocar "Vencedor da Bola de Ouro em 2024" por "Eleito melhor jogador da Champions League 2023/24" |
| F06 (Argentina bicampea) | articles.ts | 67 | Trocar "bicampeã" por "tricampeã" |
| F07 (Wirtz Leverkusen) | articles.ts | 68 | Trocar "Bayer Leverkusen" por "Liverpool" |

### F1-5: Correcao do titulo pseudocientifico do quiz QI (F12)

| Campo | Valor |
|-------|-------|
| **Acao** | Alterar titulo, descricao e slug |
| **Arquivo** | src/lib/quizzes/qi-teste.ts (linhas 5-8) |
| **De (titulo)** | "So quem tem QI acima de 120 acerta 8/10" |
| **Para (titulo)** | "Voce consegue acertar 8 destas 10 perguntas?" |
| **De (descricao)** | "Sera que voce e mais inteligente que 92% da populacao? Faca este teste e descubra!" |
| **Para (descricao)** | "Um desafio de conhecimentos gerais que vai testar o que voce sabe!" |
| **Mudanca de slug** | Ver secao dedicada abaixo |

### F1-6: Correcao dos links de afiliado

| Campo | Valor |
|-------|-------|
| **Acao** | Trocar `rel="noopener noreferrer"` por `rel="noopener noreferrer sponsored nofollow"`. Adicionar label "Publicidade" ou "Link de afiliado" visivel proximo ao CTA. |
| **Arquivo** | src/components/QuizResult.tsx (linha 115) |
| **Risco** | Nenhum |
| **Validacao** | Inspecionar HTML renderizado para confirmar atributo rel e label visivel |

### F1-7: Correcao dos erros factuais P1 em quizzes (F08-F11)

| Erro | Arquivo | Linhas | Acao |
|------|---------|--------|------|
| F08 (gol mais rapido) | gols-historicos-copa.ts | 102-110 | Adicionar opcao Davies (Canada) como correta, marcar Al-Dawsari como false |
| F09 (Puskas) | gols-historicos-copa.ts | 112-121 | Remover "(premio Puskas)" do titulo, atualizar explanation |
| F10 (bandeira Japao) | bandeiras-copa-2026.ts | 69-76 | Trocar "vermelha com circulo branco" por "branca com circulo vermelho" |
| F11 (Netflix contradiz) | series-netflix.ts | 162-171 | Reformular pergunta para "Qual dessas series de prisao feminina e producao original Netflix?" |

---

## Plano de Mudanca de Slug — Quiz QI (F1-5)

| Campo | Valor |
|-------|-------|
| **Slug atual** | so-quem-tem-qi-acima-de-120-acerta-8 |
| **Novo slug** | desafio-conhecimentos-gerais-8-perguntas |
| **Redirect permanente HTTP 308** | Configurado via next.config.ts com `permanent: true` (Next.js retorna 308). Redireciona /quiz/so-quem-tem-qi-acima-de-120-acerta-8 para /quiz/desafio-conhecimentos-gerais-8-perguntas |
| **Canonical** | Nova pagina tera canonical apontando para si mesma |
| **Atualizacao do sitemap** | Automatica — sitemap.ts usa quiz.slug, que sera atualizado |
| **Links internos** | Atualizar relatedQuizSlug no artigo "por-que-adoramos-quizzes-ciencia-da-diversao" (articles.ts linha 121) que aponta para o slug antigo |

---

## FASE 2 — Reconstrucao Editorial

Adicao de sinais de qualidade editorial. Requer decisoes de Patrick sobre autoria e conteudo.

### F2-1: Autoria nos artigos

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar campo `author` (nome) e `authorBio` (mini-bio) na interface Article em articles.ts. Renderizar na pagina blog/[slug]/page.tsx. |
| **Dependencia** | Patrick precisa fornecer: nome real do autor e mini-bio (1-2 frases). NAO sera criado autor ficticio. |
| **Risco** | Baixo |

### F2-2: Fontes nos artigos

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar campo `sources` (array de strings) na interface Article. Renderizar secao "Fontes" ao final de cada artigo. |
| **Prioridade** | Artigos de saude e ciencia primeiro (verdade-ou-mito, ciencia-da-diversao) |
| **Regra** | Cada fonte sera verificada como real e acessivel. NAO serao inventadas fontes. |

### F2-3: Politica editorial na pagina Sobre

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar secao na pagina /sobre explicando: como os quizzes sao criados, como sao revisados, como erros sao reportados e corrigidos. |
| **Dependencia** | Patrick precisa aprovar o texto antes da publicacao |

### F2-4: Politica de correcoes

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar secao na pagina /sobre ou criar pagina dedicada com canal para reportar erros (email contato@megaquiz.app.br) |

### F2-5: Explicacoes educativas nos quizzes

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar texto introdutorio (contexto, dificuldade) e texto pos-quiz (resumo educativo) nas paginas de quiz. Conteudo original e relevante — NAO texto generico de preenchimento. |
| **Arquivos** | src/app/quiz/[slug]/page.tsx + dados nos arquivos de quiz |

### F2-6: Revisao do artigo "Jogadores Copa 2026"

| Campo | Valor |
|-------|-------|
| **Acao** | Alem das correcoes factuais (Fase 1), revisar o artigo completo para atualizar informacoes que podem estar desatualizadas dado que a Copa ja esta em andamento. |
| **Dependencia** | Verificar resultados atuais da Copa 2026 |

### F2-7: Disclaimers

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar avisos nos seguintes quizzes: |

| Quiz | Disclaimer proposto |
|------|-------------------|
| verdade-ou-mito-saude | "Este quiz e recreativo e nao substitui orientacao medica profissional." |
| qual-profissao-ideal | "Resultado recreativo para entretenimento. Nao constitui orientacao profissional." |
| perfil-profissional-disc | "Resultado recreativo para entretenimento. Nao constitui avaliacao profissional." |
| area-ti-ideal | "Resultado recreativo para entretenimento. Nao constitui orientacao de carreira." |
| qi-teste (apos renomear) | "Quiz de conhecimentos gerais para entretenimento. Nao mede QI nem capacidade intelectual." |

### F2-8: Correcao das imprecisoes P2 (F13-F17)

| Erro | Acao resumida |
|------|--------------|
| F13 | Substituir Paquistao por selecao classificada |
| F14 | Trocar "criticamente ameacado" por "ameacado de extincao" |
| F15 | Adicionar "Segundo uma teoria popular," |
| F16 | Trocar "Nova York" por "Harvard" |
| F17 | Adicionar "em estudo com camundongos" |

---

## FASE 3 — SEO e AdSense

Melhorias tecnicas e preparacao para resubmissao.

### F3-1: Canonical URLs

| Campo | Valor |
|-------|-------|
| **Acao** | Adicionar `alternates: { canonical: url }` no generateMetadata de cada rota |
| **Arquivos** | src/app/quiz/[slug]/page.tsx, src/app/blog/[slug]/page.tsx, src/app/categoria/[id]/page.tsx, paginas institucionais |
| **Classificacao** | Melhoria tecnica (C4) — nao e causa principal da rejeicao |

### F3-2: JSON-LD

| Campo | Valor |
|-------|-------|
| **Acao** | Corrigir educationalAlignment para usar formato AlignmentObject ou remover o campo |
| **Arquivo** | src/app/quiz/[slug]/page.tsx |
| **Classificacao** | Melhoria tecnica (C5) — nao e causa principal da rejeicao |

### F3-3: Sitemap

| Campo | Valor |
|-------|-------|
| **Acao** | Ja esta OK. Apos correcoes, verificar que novos slugs (ex: quiz QI) estao refletidos. |

### F3-4: CMP e AdSense

| Campo | Valor |
|-------|-------|
| **Acao** | Pesquisar e propor implementacao de Google Consent Mode v2 que permita ao crawler detectar a presenca do AdSense sem disparar cookies de tracking antes do consentimento. |
| **Arquivo** | src/components/ConditionalScripts.tsx |
| **REGRA** | A proposta de implementacao sera apresentada com codigo completo para aprovacao ANTES de qualquer alteracao. Nao sera liberada nenhuma requisicao publicitaria sem consentimento do usuario. |

### F3-5: Validacao do HTML

| Campo | Valor |
|-------|-------|
| **Acao** | Executar build completo e verificar warnings/erros |

### F3-6: Search Console

| Campo | Valor |
|-------|-------|
| **Acao** | Apos deploy das correcoes, solicitar rastreamento das paginas corrigidas no Search Console. Aguardar 2-3 semanas antes de solicitar nova revisao do AdSense. |
| **REGRA** | Patrick executara a solicitacao no Search Console |

### F3-7: Auditoria final

| Campo | Valor |
|-------|-------|
| **Acao** | Re-executar fact-check em todas as paginas corrigidas. Verificar que nenhum erro novo foi introduzido. Enviar para Equipe Alfa para revisao independente. |

---

## Informacoes Necessarias de Patrick (antes de cada fase)

### Para Fase 1:
- Aprovacao do novo titulo do quiz QI: "Voce consegue acertar 8 destas 10 perguntas?"
- Aprovacao do novo slug: desafio-conhecimentos-gerais-8-perguntas
- Confirmacao de que o redirect 301 do slug antigo e desejado

### Para Fase 2:
- Nome e mini-bio do autor real para os artigos do blog
- Aprovacao do texto da politica editorial
- Politica sobre uso de IA na criacao de conteudo (se aplica, como comunicar)
- Aprovacao dos textos dos disclaimers

### Para Fase 3:
- Aprovacao da proposta de Consent Mode v2
- Confirmacao para solicitar rastreamento no Search Console

---

**Nenhuma alteracao sera executada sem OK expresso de Patrick, fase por fase.**
**NAO serao criados autores ficticios, fontes inventadas, numeros simulados ou qualificacoes falsas.**
