# MegaQuiz — SPEC: QA Final do Redesign V2

> Aditiva às duas SPECs anteriores (`REDESIGN-SPEC-editorial-game-premium.md` e `REDESIGN-SPEC-fase2-restante.md`), ambas aprovadas por Patrick.
> Esta rodada é **exclusivamente validação, correção de regressões reais e preparação pra produção**.
> Não criar recursos novos. Não redesenhar componentes aprovados. Não alterar direção visual.

---

## 1. Corrigir touch target do menu mobile
Botão hambúrguer abaixo do alvo de toque ideal. Corrigir pra ~44×44px de área interativa (padding/min-width/min-height), sem necessariamente aumentar o ícone visualmente. Testar em 360/375/390/430px.

## 2. Zerar os 4 erros de lint remanescentes
Em `ConditionalScripts.tsx` e `CookieConsent.tsx` (infra Consent Mode/GA4). Correção estritamente técnica (tipagem adequada, remoção de código morto real, ajuste de deps/hooks, causa real do lint) — **nunca** alterar comportamento de consent default/update/granted/denied/localStorage/aceite/recusa/revogação/carregamento GA4/AdSense/dispatcher do "Gerenciar cookies". Nunca desabilitar ESLint globalmente nem `eslint-disable` amplo; supressão pontual só se tecnicamente inevitável, com justificativa linha a linha. Meta: `npm run lint` → 0 erros.

## 3. Regressão completa do Consent Mode
Como os arquivos de consentimento podem ser tocados no item 2, repetir o teste de regressão inteiro: estado inicial de visitante novo (`ad_storage`/`analytics_storage`/`ad_user_data`/`ad_personalization` = denied antes de interação), aceitar (granted, scripts carregam, sem duplicar GA4/AdSense), revogar via "Gerenciar cookies" (denied, persistido), reload após recusa/revogação (denied continua válido). Testar em homepage, quiz e artigo. Não mudar a arquitetura.

## 4. Validar a correção do hydration mismatch
QA funcional específico do bug corrigido na Fase 2 (`Math.random()` no SSR causando árvores diferentes). Confirmar: zero mismatch/erro React no primeiro load; ordem de perguntas estável durante toda a tentativa (responder/feedback/avançar/atualizar estado/abrir-fechar componente auxiliar/chegar ao resultado não podem reordenar); se alternativas são embaralhadas, resposta correta continua associada certo e não troca depois da escolha; "Tentar novamente" só reordena se for comportamento deliberado, não efeito colateral; registrar se reload gera nova ordem (aceitável se for consistente, não bug). Testar amostra mínima de 5 trivia, incluindo algum que tinha o mismatch antes.

## 5. Smoke test das 31 rotas de quiz
Automatizado, não precisa jogar cada um manualmente. Por quiz: render correto, H1, intro, botão começar, primeira pergunta, alternativas, ausência de crash/hydration error, metadata básica, mobile sem overflow. Registrar falhas individualmente.

## 6. Teste funcional profundo (4 fluxos completos)
2 trivia + 2 personalidade, do início ao resultado: iniciar, progresso, alternativas, resposta, feedback, próxima pergunta, vidas (quando aplicável), finalização, cálculo do resultado, revisar respostas, tentar novamente, compartilhar, próximo desafio, relacionados. Retestar especificamente o fluxo do bug antigo: "Ver meu resultado" após oferta de vida extra.

## 7. Homepage — QA final
Header, Hero, CTA, Desafio do Dia, Em Alta, categorias, Escolhas da Equipe, artigos, continuar explorando, Footer. Confirmar que nenhuma informação dinâmica é fictícia (sem número de jogador inventado, ranking falso, percentual falso, tendência artificial).

## 8. Design visual — só QA, não reabrir
Verificar consistência: verde da marca, tipografia, Lucide, ausência de emoji estrutural, spacing, radius, sombras, cards, estados, headings. Só corrigir inconsistência objetiva, não reinventar.

## 9. Busca final de emojis
Grep no código inteiro. Classificar cada ocorrência: **permitida** (genuinamente conteúdo editorial/recreativo) vs **não permitida** (ícone/badge/heading/botão/categoria/metadata/navegação/decoração estrutural). Remover só as estruturais — não editar texto editorial só pra zerar contagem.

## 10. Links
Testar internos relevantes (Header, Footer, homepage, categorias, artigos, relacionados, voltar, explorar, institucionais, Gerenciar cookies). Identificar 404 involuntário, href vazio, link errado, rota antiga sem redirect.

## 11. SEO técnico — regressão (não otimização nova)
Confirmar que o redesign não quebrou: canonical, title, description, sitemap, robots, ads.txt, redirect 308, JSON-LD, meta AdSense, GA4. Amostra: homepage, categoria, quiz, artigo, institucional.

## 12. JSON-LD
Confirmar `Organization` e `BlogPosting` presentes/válidos onde aplicável. Não adicionar propriedade fictícia, não mudar autoria.

## 13. Acessibilidade final
Contraste, focus visible, teclado, buttons, links, touch targets, headings, aria-label, estados correto/incorreto além de cor, formulário/controles se existirem. Corrigir problemas objetivos.

## 14. Responsividade final
Mobile: 360×800, 375×812, 390×844, 430×932. Tablet/fronteira: 768×1024, 1024×768 (1024px é crítico, já revelou bug no Header). Desktop: 1280×720, 1440×900, 1920×1080. Checar overflow horizontal, wrap indevido, truncamento, grids, max-width, footer, modal/banner, Quiz Player, resultados.

## 15. Performance
Lighthouse (ou equivalente) mobile: homepage, quiz, artigo. Desktop: homepage. Registrar Performance/Accessibility/Best Practices/SEO/LCP/CLS/INP. Não perseguir 100 artificialmente — só investigar regressão real causada pelo redesign.

## 16. Console
Sem hydration error, React error, uncaught exception, failed chunk, erro de consentimento, erro repetitivo de runtime. Warnings: identificar e classificar.

## 17. Testes técnicos finais
`git status --short`, `git diff --check`, `npm run lint`, `npm run build`, type-check. Critério: `git diff --check` 0, lint 0, type-check 0, build sucesso. Warnings registrados à parte.

## 18. Git
Commits corretivos na branch `redesign/editorial-game-premium` (mesma, não criar outra). Push ao final. **Proibido:** merge em `main`, alterar `main`, deploy de produção, solicitar revisão AdSense.

## 19. Screenshots finais
390×844: Homepage, Categorias, Blog, Artigo, Quiz Intro, Quiz Player, Feedback, Resultado, Footer, Cookie Consent.
1440×900: Homepage, Blog, Quiz, Resultado.
1024×768: Header, Homepage.
Inspecionar visualmente cada um antes do relatório — não basta gerar o arquivo.

## 20. Não fazer
Sem streak, login, ranking, conta, multiplayer, quizzes/artigos novos, sistema de pontos, novas funcionalidades de escala. Sem alterar identidade aprovada, conteúdo editorial, autoria, slugs, arquitetura SEO, monetização.

## 21. Entregável final
Commit atual, diferença pra `main`, touch target corrigido, situação dos 4 erros de lint (individual), regressão de Consent Mode, hydration QA, smoke test dos 31 quizzes, os 4 fluxos completos testados, bugs encontrados, bugs corrigidos, mobile QA, tablet/1024 QA, desktop QA, acessibilidade, Lighthouse/performance, regressão SEO, console, lint, type-check, build, `git diff --check`, screenshots, problemas reais restantes.

### Classificação final obrigatória (literal, uma das duas)
`REDESIGN V2 — APROVADO PARA MERGE E PRODUÇÃO` (só se não houver bloqueador)
ou
`BLOQUEADORES ENCONTRADOS NO QA FINAL` + lista objetiva

**Sem merge. Sem deploy.** Patrick/GPT dão a autorização final depois desta entrega.
