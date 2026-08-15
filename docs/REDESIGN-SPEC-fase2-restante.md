# MegaQuiz — SPEC Fase 2: Restante do Redesign (Editorial Game Premium)

> Aditiva a `docs/REDESIGN-SPEC-editorial-game-premium.md` (checkpoint já aprovado por Patrick em 14/08/2026).
> Direção visual NÃO é reaberta nesta fase: verde estrutural, roxo só contextual (ex: categoria Personalidade),
> Plus Jakarta Sans Variable, Lucide Icons, zero emoji estrutural, zero gradiente genérico/glow/glassmorphism.
> Não testar novas paletas, fontes ou bibliotecas de ícones.

---

## 1. Correção imediata: Header
"Copa do Mundo" não pode quebrar em 2 linhas no nav desktop. Preservar responsividade, espaçamento, hierarquia, comportamento mobile. Não aumentar excessivamente o Header só pra acomodar.

## 2. Escopo desta fase (páginas/componentes)

- `/categorias` — redesenhar, sair de "grade simples de links", criar hierarquia (tipografia/espaço/ícone quando útil/cor contextual moderada). Sem emoji, sem multicor sem disciplina, sem borda+sombra em tudo.
- `/categoria/[id]` — tema + contexto breve + quizzes disponíveis + relacionados + continuar explorando. Evitar "título + grid uniforme". Cor contextual própria por categoria, mas dentro do mesmo design system.
- `/blog` — parecer área editorial real. Criar `ArticleCard` (visualmente distinto de QuizCard — usuário distingue quiz de artigo imediatamente). Destaque + grid secundário + categoria/tema + data + tempo de leitura real. Nunca inventar popularidade/leitores/datas.
- `/blog/[slug]` — preservar 100% do conteúdo editorial. Foco em leitura: largura confortável, H1 claro, subtítulo, metadata, autoria atual (não redecidir autor), headings H2/H3 consistentes, parágrafos espaçados, listas, fontes, links, relacionados, quiz relacionado só quando fizer sentido editorial de verdade. Evitar artigo-dentro-de-card-gigante, sidebar desnecessária, largura de texto exagerada.
- **Bloco de autoria**: só tratamento visual (autor/bio/data/revisão/fontes) — não criar credenciais, não alterar nomes, não inventar informação.
- **Fontes/referências**: melhorar visual (transparência/organização/confiabilidade), pode ser componente expansível no mobile, nunca esconder de forma que dificulte acesso, não alterar URLs/referências.
- Institucionais (`/sobre`, `/metodologia`, `/politica-editorial`, `/contato`, `/privacidade`, `/termos`) — aplicar o design system, sem alterar conteúdo editorial. Mais sóbrias que páginas de quiz mas claramente MegaQuiz. Não virar "cada parágrafo um card".
- **Footer definitivo** — estrutura: MegaQuiz (Sobre/Metodologia/Política Editorial) · Explorar (Categorias/Blog/quizzes relevantes) · Legal (Privacidade/Termos) · Privacidade (Gerenciar cookies). Preservar 100% a lógica/dispatcher do "Gerenciar cookies" existente. Discreto, editorial, não-gigante.
- **Cookie Consent** — só visual (espaçamento/tipografia/botões/bordas/radius). NÃO alterar: lógica de consentimento, localStorage, Consent Mode, estados granted/denied, revogação, carregamento condicionado de scripts. Fazer teste de regressão depois de mexer.
- **404** — mensagem clara, linguagem da marca, CTA pra home, caminho pra explorar quizzes. Sem humor excessivo, sem emoji estrutural, sem ilustração pesada.

## 3. Estados auxiliares
Harmonizar: loading, empty, error, hover, focus, active, selected, disabled, correct, incorrect. Nunca só cor — sempre + ícone/texto/outline/forma consistente.

## 4. QA responsivo obrigatório

**Mobile:** 360×800, 375×812, 390×844, 430×932 — revisar Header, Hero, os 3 cards, categorias, blog, artigo, quiz intro/player/feedback/result, footer, cookie consent, 404. Checar overflow, corte, texto comprimido, touch targets, scroll horizontal, espaçamento, menu.

**Desktop:** 1280×720, 1440×900, 1920×1080 — checar max-width, leitura, grid, proporção, espaço negativo (não preencher tudo só porque tem espaço). Header, Hero, cards, artigo, resultado, footer.

## 5. Acessibilidade
Contraste, focus visible, navegação por teclado, aria-labels, semântica, heading hierarchy, touch target, correto/incorreto, seleção, reduced motion. Corrigir o que estiver no escopo tocado. Nunca sacrificar legibilidade por uma cor exata.

## 6. Performance
Peso de fontes, quantidade de SVG, uso de `next/image`, imagens responsivas, bundle, componentes client, dependências novas, JS desnecessário. Não instalar lib pesada só pra animação simples — preferir CSS/transform/opacity/SVG nativo.

## 7. Lint — meta zero, com prestação de contas individual
O checkpoint anterior reportou 5 erros "pré-existentes" sem detalhar. Nesta fase, para CADA erro de lint (novo ou antigo) informar: arquivo, regra, causa, se é realmente pré-existente (confirmar com `git log`/`git blame`, não só alegar), e a correção aplicada. Meta antes de qualquer merge futuro: type-check zero, build zero, lint zero, `git diff --check` zero. Não classificar algo como "pré-existente" pra evitar corrigir — se for tecnicamente inevitável, explicar objetivamente por quê.

## 8. Fora de escopo nesta fase (não implementar)
Streak real, ranking, login/conta, Desafio do Dia dinâmico (server-side/randômico além do determinístico já implementado), multiplayer, quizzes novos, artigos novos, coleções complexas, sistema de pontos, gamificação persistente. Pode deixar espaço arquitetural, não construir agora.

## 9. Preservar (repetido, é crítico)
URLs, slugs, 31 quizzes, 6 artigos, conteúdo editorial, canonical, redirects, JSON-LD, sources, autoria atual, GA4, AdSense, Consent Mode, ads.txt, robots, sitemap, metadata, lógica funcional dos quizzes. Só mexer em lógica existente se achar bug funcional comprovado — aí: documentar → corrigir → testar → reportar.

## 10. Governança
Branch única: `redesign/editorial-game-premium` (já existe, não criar outra). Commits lógicos por grupo (categories/blog, articles/institutional, footer/consent/404, responsive/a11y, QA fixes). Pode dar push. **Proibido nesta fase:** merge em `main`, alterar produção, deploy da branch como produção, solicitar revisão do AdSense.

## 11. Critérios de avaliação do checkpoint final
Identidade própria, consistência entre componentes, energia de entretenimento sem infantilizar, credibilidade editorial (artigos/fontes/institucionais), mobile desenhado mobile-first (não desktop empilhado), foco real na pergunta durante o quiz, motivação clara pra continuar explorando no resultado, descoberta fácil de outro conteúdo, ausência do padrão "gradiente + emoji + card", sem peso de performance desnecessário.

## 12. Entregável final
Branch, commits, componentes novos, componentes alterados, páginas redesenhadas, confirmação da correção do Header, categorias, blog, artigos, institucionais, footer, cookie consent, 404, QA mobile, QA desktop, acessibilidade, performance, lint (detalhado por erro), type-check, build, `git diff --check`, screenshots (lista completa abaixo), bugs encontrados e corrigidos, problemas reais ainda existentes, comparação final contra a SPEC.

### Screenshots obrigatórios
**Mobile 390×844:** Homepage, Categorias, página de categoria, Blog, Artigo, Quiz Intro, Quiz Player, feedback após resposta, Quiz Result, institucional (1 exemplo), Cookie Consent, Footer, 404.
**Desktop 1440×900:** Homepage, Categorias, Blog, Artigo, Quiz, Resultado, institucional.

Verificar visualmente cada screenshot (abrir e olhar, não só confirmar que o arquivo foi gerado) antes de escrever o relatório.

### Classificação final obrigatória (uma das duas, literal)
`REDESIGN V2 — SITE COMPLETO PRONTO PARA QA FINAL`
ou
`BLOQUEADOR DE REDESIGN REMANESCENTE` (só com problemas reais e concretos, se houver)

**Sem merge em `main`. Sem deploy de produção.** Depois desta entrega, Patrick e GPT fazem o QA final antes de autorizar publicação.
