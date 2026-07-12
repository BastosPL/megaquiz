# MegaQuiz — Auditoria AdSense Consolidada (Revisao 2)

> Diagnostico para resolver a 3a rejeicao do Google AdSense por "conteudo de baixo valor"
> Data: 11/07/2026 | Revisao consolidada: 11/07/2026
> Nenhuma alteracao foi executada.

---

## 1. Subagentes Utilizados

Foram lancados **7 subagentes** com funcoes distintas:

| # | Funcao | Escopo |
|---|--------|--------|
| 1 | Explorer de estrutura | Mapeou todos os arquivos, paginas, rotas e componentes do projeto |
| 2 | Fact-checker de quizzes | Verificou respostas de todos os 31 quizzes contra fontes primarias |
| 3 | Auditor editorial | Analisou os 6 artigos do blog quanto a autoria, fontes, qualidade e E-E-A-T |
| 4 | Auditor tecnico | Verificou robots.txt, sitemap, SSR, meta tags, ads.txt, JSON-LD |
| 5 | Auditor de links de afiliado | Analisou marcacao, transparencia e conformidade dos links Shopee |
| 6 | Auditor de prova social | Verificou play counts e percentile contra o codigo-fonte |
| 7 | Auditor SEO | Analisou canonical, indexacao, hreflang, OpenGraph, structured data |

**Divergencias entre agentes (resolvidas):**

| Divergencia | Agente que errou | Conclusao verificada |
|-------------|-----------------|---------------------|
| robots.txt "nao existe" | #4 (tecnico) | EXISTE — falso negativo do agente |
| sitemap.ts "nao existe" | #4 (tecnico) | EXISTE — falso negativo do agente |
| /privacidade "retorna 404" | #4 (tecnico) | EXISTE — editada nesta sessao |
| "8 artigos no blog" | #1 (explorer) | 6 artigos — confirmado por leitura do array allArticles em articles.ts |

---

## 2. Classificacao dos Achados

Cada achado esta categorizado conforme as 4 categorias exigidas:

| Categoria | Definicao |
|-----------|-----------|
| **A — Problema confirmado no site** | Verificado por leitura direta do codigo-fonte. O problema existe objetivamente. |
| **B — Risco de politica documentado** | O Google documenta a politica e o site a viola ou fica em zona cinzenta. |
| **C — Possivel contribuicao para "conteudo de baixo valor"** | Correlacao conhecida com rejeicoes, mas sem requisito documentado pelo Google. |
| **D — Causa diretamente confirmada pelo Google** | **Nenhum achado nesta categoria.** O Google nao especifica qual aspecto motivou a rejeicao. Todas as causas sao inferidas. |

---

## 3. Achados por Categoria

### Categoria A — Problemas confirmados no site

| ID | Achado | Arquivo(s) | Detalhes |
|----|--------|-----------|----------|
| A1 | 7 erros factuais P0 em quizzes e artigos | Ver MEGAQUIZ_FACT_CHECK.md | Informacao factualmente falsa publicada |
| A2 | 5 erros factuais P1 em quizzes | Ver MEGAQUIZ_FACT_CHECK.md | Informacao incorreta ou contraditoria |
| A3 | 5 imprecisoes P2 em quizzes e artigos | Ver MEGAQUIZ_FACT_CHECK.md | Informacao imprecisa ou desatualizada |
| A4 | 31 play counts hardcoded | 31 arquivos .ts + QuizCard.tsx:70 | Numeros fictícios exibidos como reais |
| A5 | Percentile simulado | QuizEngine.tsx:67-68, QuizResult.tsx:92-101 | Formula fixa apresentada como comparacao real |
| A6 | Titulo pseudocientifico | qi-teste.ts:5-8 | Trivia nao mede QI — alegacao falsa |
| A7 | Links de afiliado sem rel="sponsored" | QuizResult.tsx:115 | 7 links Shopee sem marcacao adequada |
| A8 | 0/6 artigos com autor | articles.ts (todos os 6 artigos) | Campo author inexistente na interface |
| A9 | 0/6 artigos com fontes | articles.ts (todos os 6 artigos) | Nenhuma referencia citada |

### Categoria B — Risco de politica documentado

| ID | Achado | Politica Google | Situacao do site |
|----|--------|----------------|-----------------|
| B1 | Links pagos sem rel="sponsored" | Google exige rel="sponsored" para links pagos | QuizResult.tsx usa apenas rel="noopener noreferrer" |
| B2 | Links de afiliado sem label de publicidade | CDC brasileiro + politica Google de transparencia | Nenhum indicativo visual de publicidade |
| B3 | Titulo pseudocientifico (QI) | Politica contra conteudo enganoso/clickbait | Trivia apresentada como teste de QI |
| B4 | Conteudo YMYL sem disclaimer | Google avalia conteudo saude/carreira com rigor extra | Quiz saude e artigo saude sem avisos |

### Categoria C — Possivel contribuicao para "conteudo de baixo valor"

| ID | Achado | Correlacao conhecida | Por que nao e confirmado |
|----|--------|---------------------|------------------------|
| C1 | Volume editorial baixo (6 artigos de ~800 palavras) | Sites de quiz frequentemente rejeitados por falta de conteudo editorial | Google nao especifica numero minimo |
| C2 | Sem politica editorial publica | E-E-A-T valoriza transparencia editorial | Nao ha requisito obrigatorio |
| C3 | Script AdSense invisivel ao crawler | Crawler nao ve adsbygoogle.js nem slots | Rejeicao diz "conteudo de baixo valor", nao "site nao configurado" |
| C4 | Sem canonical URLs explicitas | Boa pratica SEO | Nao ha duplicacao em massa identificada |
| C5 | JSON-LD educationalAlignment mal formatado | Warning potencial no Search Console | Erro de formato, nao de conteudo falso |

### Categoria D — Causa diretamente confirmada pelo Google

**Nenhuma.** O email de rejeicao diz apenas "conteudo de baixo valor" sem especificar quais elementos.

---

## 4. Avaliacao do Script AdSense (detalhada)

### 4.1 Verificacao da propriedade
- Meta tag `<meta name="google-adsense-account" content="ca-pub-7284698282537450">` presente no HTML server-rendered (layout.tsx)
- Metodo oficial de verificacao conforme documentacao Google
- **STATUS: OK — funcionando**

### 4.2 ads.txt
- `public/ads.txt` com conteudo: `google.com, pub-7284698282537450, DIRECT, f08c47fec0942fa0`
- Formato correto, publisher ID correto
- **STATUS: OK — funcionando**

### 4.3 Acesso do crawler ao conteudo editorial
- Todas as paginas usam SSR/SSG — conteudo de quiz e artigos visivel no HTML server-rendered
- robots.txt permite todos os crawlers
- sitemap.ts gera URLs para todos os quizzes, artigos e paginas institucionais
- **STATUS: OK — conteudo editorial acessivel**

### 4.4 CMP e consentimento (cookie consent)
- ConditionalScripts.tsx bloqueia TODOS os scripts (GA4 + AdSense) ate localStorage "cookie-consent" === "accepted"
- O crawler do Google nao interage com banners de cookie
- Resultado: o script adsbygoogle.js nunca carrega para o crawler
- **STATUS: Script bloqueado para crawler — requer avaliacao de solucao**

### 4.5 Carregamento dos anuncios
- O script adsbygoogle.js so e injetado via DOM apos consentimento (ConditionalScripts.tsx:28-31)
- Nao existem blocos `<ins class="adsbygoogle">` no HTML estatico
- Resultado: nao ha slots de anuncio visiveis para o crawler
- **STATUS: Nenhum slot visivel para crawler**

### 4.6 Avaliacao consolidada
A verificacao da conta funciona (meta tag + ads.txt = metodos oficiais). O script de anuncios e os slots estao bloqueados pelo CMP. A rejeicao diz "conteudo de baixo valor", nao "site nao configurado para anuncios". **Classificacao: C3** — possivel contribuicao, nao causa confirmada. Qualquer proposta de alteracao do CMP sera apresentada com implementacao detalhada antes de execucao, sem liberar requisicoes publicitarias sem aprovacao.

---

## 5. Canonical e JSON-LD

### 5.1 Canonical URLs
- Nenhuma pagina possui `<link rel="canonical">` explicito
- **Nao foi identificada duplicacao em massa.** O site usa SSG com slugs unicos.
- **Classificacao: melhoria tecnica (C4).** Nao e causa principal da rejeicao.

### 5.2 JSON-LD
- Quizzes usam schema.org/Quiz com educationalAlignment como string simples em vez de AlignmentObject
- **Nao configura marcacao falsa** — e um erro de formato, nao de conteudo enganoso
- **Classificacao: melhoria tecnica (C5).** Nao e causa principal da rejeicao.

---

## 6. Itens Tecnicos Verificados como OK

- ads.txt correto e acessivel
- robots.txt permitindo crawlers
- sitemap.ts com todas as URLs (quizzes + artigos + institucional)
- SSR/SSG funcionando em todas as paginas
- Meta tag google-adsense-account no HTML server-rendered
- Meta descriptions por pagina
- OG tags completas
- Nenhum noindex indevido
- HTTPS ativo
- Dominio proprio configurado
- Pagina de privacidade com controlador LGPD
- Termos de uso
- Cookie consent banner funcional
