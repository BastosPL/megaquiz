# MegaQuiz — SPEC: Fechamento Final (pré-merge)

> Aditiva às 3 SPECs anteriores (checkpoint, fase 2, QA final — todas aprovadas).
> Escopo estritamente limitado aos 2 pontos abaixo + reteste. Não abrir nova fase de redesign,
> não alterar arquitetura, conteúdo editorial ou funcionalidades já aprovadas.

---

## 1. Atualizar identidade dos assets sociais

`opengraph-image.tsx` e `apple-icon.tsx` ainda usam a paleta antiga (navy/amber). Atualizar pro Design System aprovado (verde da marca, grafite, superfícies claras, tipografia atual, sem emoji estrutural — já existe `src/lib/og-icons.tsx` com ícones no estilo Lucide criados na Fase 2, reaproveitar). Não criar arte nova fora do sistema. Preservar dimensões corretas, legibilidade, metadata, funcionamento das rotas, performance. Validar visualmente o resultado (screenshot ou render direto do endpoint).

## 2. Auditoria das 6 vulnerabilidades HIGH do npm

**NÃO rodar `npm audit fix --force` automaticamente.** Primeiro `npm audit --json` (+ `npm audit` legível). Para cada vulnerabilidade HIGH, reportar: pacote, versão instalada, advisory/CVE, direta ou transitiva, cadeia de dependências, `dependencies` ou `devDependencies`, se entra no bundle/runtime de produção, condição de exploração, versão que corrige, tipo de update (patch/minor/major), risco de regressão.

Classificar cada uma:
- **A — Bloqueador de produção**: explorável no runtime/contexto atual, risco real.
- **B — Corrigível agora sem breaking change**: existe update seguro compatível.
- **C — Não bloqueante no contexto atual**: ex. ferramenta só de dev, vetor não atingível no uso atual, transitiva sem vetor aplicável ao runtime. Não minimizar só por ser transitiva — justificar objetivamente.

### Remediação
Classe B → aplicar update seguro sem `--force`, rerodar `npm audit` depois. Classe A → **não seguir pro merge**, reportar como bloqueador. Se todas forem B resolvidas ou C justificadas → segue pra próxima etapa. Não fazer upgrade major só pra zerar contador sem avaliar impacto real.

## 3. BlogPosting.author — não mexer

`BlogPosting.author.@type = "Organization"` é válido enquanto a autoria exibida for organizacional. **Não trocar para `Person`** sem decisão editorial explícita do Patrick — preservar como está nesta etapa.

## 4. Reteste obrigatório após as 2 correções

```
git diff --check
npm run lint
npx tsc --noEmit
npm run build
```
Critério: diff check limpo, lint 0 erros, type-check 0 erros, build sucesso.

Smoke test rápido: homepage, um trivia, um personalidade, blog, artigo, categorias, Cookie Consent.

## 5. Escopo desta rodada — o que NÃO fazer

Não mergear em `main`. Não fazer deploy. Não abrir nova fase de redesign. Não alterar arquitetura/conteúdo/funcionalidades aprovadas. O merge para `main` e a validação em produção serão feitos pela Equipe Alfa separadamente, após verificação independente deste trabalho — não é responsabilidade desta rodada.

## 6. Entregável

1. Resultado dos assets sociais (com validação visual)
2. Classificação individual das 6 vulnerabilidades (tabela completa conforme seção 2)
3. Vulnerabilidades corrigidas (quais, como)
4. Vulnerabilidades remanescentes com justificativa (se houver)
5. Commit(s) feito(s), push da branch
6. Resultado do reteste (lint/type-check/build/diff-check)
7. Smoke test

Branch: `redesign/editorial-game-premium` (mesma, não criar outra). Push ao final.
