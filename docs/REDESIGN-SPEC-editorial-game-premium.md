# MegaQuiz — SPEC: Editorial Game Premium (Fresh Green)

> Especificação fechada antes de qualquer implementação, conforme workflow aprovado por Patrick em 14/08/2026.
> Modo: Redesign - Overhaul visual, preservando conteúdo/IA/tracking.

---

## 1. Direção de cor

```
--brand-dark:    #15803D   /* CTA principal, texto branco sobre ele, estados fortes */
--brand-bright:  #22C55E   /* progresso, seleção, detalhes, highlights, gráficos */
--brand-soft:    #DCFCE7   /* surfaces leves, backgrounds selecionados, chips discretos */
--bg:            #F8FAF7
--surface:       #FFFFFF
--ink:           #18181B
--text-secondary:#5F6872
--accent-entertainment: #FBBF24   /* SÓ para badges pequenas, Desafio do Dia, conquistas, detalhes de resultado */
```

Regras de uso obrigatórias:
- Nunca texto branco pequeno sobre `--brand-bright` sem checar contraste (WCAG AA mínimo).
- Amarelo é tempero, não base — nunca interface verde-amarela dominante, nunca estética esportiva/brasileira.
- Roxo deixa de ser cor principal. Pode sobrar como cor pontual de UMA categoria específica (ex: badge de "Personalidade"), nunca como gradiente estrutural.
- Esses valores são ponto de partida — pequenos ajustes de contraste são aceitáveis, a direção cromática não.

Implementação técnica: adicionar como novos tokens em `@theme inline` no `globals.css` (Tailwind v4), SEM remover os tokens antigos (`--color-primary` etc.) ainda — outras páginas fora do slice de checkpoint continuam usando os antigos até a migração completa (fases 5-16). Os componentes do checkpoint usam exclusivamente os tokens novos.

## 2. Tipografia

Família única: **Plus Jakarta Sans Variable** (via `next/font/google`, `Plus_Jakarta_Sans`), pesos 400/500/600/700, 800 só em displays.

Escala a definir como classes utilitárias/tokens: Display, H1, H2, H3, Body Large, Body, Small, Caption, Label.

Proibido: uppercase em blocos longos de texto, múltiplas famílias sem necessidade.

## 3. Emojis → Iconografia

Emoji **removido** de: ícones, categorias, headings, metadata, badges, navegação, botões, indicadores.
Emoji pode sobrar **só** dentro de conteúdo recreativo/editorial (ex: dentro do texto de uma explicação de quiz), nunca como elemento de interface.

Biblioteca: **Lucide Icons** (`lucide-react`). Se ausente do projeto, instalar (`npm install lucide-react`).

Tamanhos padronizados: 16px metadata, 20px controles, 24px ações, maior só em contexto excepcional. Stroke/peso consistente. Não misturar emoji + SVG customizado + filled + outline sem motivo.

## 4. Anatomia de cards (3 famílias, não uma por categoria)

- **FeaturedQuizCard** — Desafio do Dia, Escolha da Equipe. Maior presença visual.
- **StandardQuizCard** — exploração padrão (substitui o `QuizCard.tsx` atual).
- **CompactQuizCard** — relacionados, "continue explorando", listas secundárias.

Categoria muda label/cor de detalhe/imagem/ícone — a anatomia das 3 famílias permanece coerente entre categorias. Não criar layout diferente por categoria.

## 5. Homepage — nova estrutura (substitui grid uniforme)

1. Header
2. Hero (muito espaço negativo, sem vários cards na primeira dobra, CTA dominante único)
3. Desafio do Dia
4. Em Alta
5. Explore por Assunto
6. Escolhas da Equipe
7. Artigos
8. Continue Explorando
9. Footer

Não encher a homepage só porque tem espaço disponível.

## 6. Quiz Player (QuizEngine.tsx)

Referências conceituais (não copiar): foco do Typeform, clareza editorial do 16Personalities, energia de produto do GeoGuessr, feedback pontual do Kahoot.

Uma pergunta domina a experiência. Mobile-first. Estrutura: voltar → "Pergunta X de Y" → progresso fino → pergunta → opções grandes → estado escolhido → feedback → explicação editorial → próxima pergunta. Eliminar distrações durante o quiz.

## 7. Resultado (QuizResult.tsx) — um dos 4 componentes prioritários

Nunca terminar em "8/10 — Parabéns". Estrutura: score dominante, interpretação, resumo, revisar respostas, tentar novamente, compartilhar, próximo desafio, conteúdos relacionados.

Proibido: percentis falsos, quantidade fictícia de jogadores, estatísticas inventadas (isso já tinha sido removido na Fase 1 do plano anterior — não reintroduzir).

## 8. Anti-padrões proibidos (checklist de exclusão)

Gradiente roxo genérico, gradientes neon, glassmorphism, glow, emoji como ícone, card dentro de card, borda em tudo, sombra forte, radius excessivo, uppercase generalizado, botão em todo card, rainbow UI, excesso de pills, estética SaaS/IA, estética infantil, estética de cassino.

## 9. Acessibilidade

Informação nunca depende só de cor. Correto/incorreto, selecionado, erro, sucesso, foco → sempre acompanhados de ícone + texto + outline + estado visual. Contraste WCAG AA mínimo em todos os pares.

## 10. Preservar (não tocar nesta etapa)

URLs/slugs, os 31 quizzes (conteúdo), artigos, canonical, redirects, Consent Mode, GA4, AdSense, ads.txt, sitemap, robots, tracking, autoria atual (Patrick Bastos — não é decisão editorial definitiva, só não mexer agora). Confirmado: 0 referências a "checkout" no código — nada a remover nesse ponto.

## 11. Escopo do CHECKPOINT (esta rodada — não implementar o site inteiro)

Branch própria, sem merge em `main`, sem deploy de produção.

Implementar apenas:
- Design tokens (novos, aditivos) + fonte
- Iconografia (lucide-react instalado, tamanhos padronizados)
- Header (`src/components/Header.tsx`) — reescrever com novo sistema
- Homepage (`src/app/page.tsx`) — nova estrutura de 9 seções
- `FeaturedQuizCard`, `StandardQuizCard`, `CompactQuizCard` (novos componentes; não apagar `QuizCard.tsx` ainda)
- Entrada de UM quiz (usar o quiz `quanto-voce-sabe-sobre-a-copa-2026` como exemplo)
- `QuizEngine.tsx` redesenhado (compartilhado por todos os quizzes, então o redesign já vale pra todos automaticamente — isso é esperado e correto, é um componente central, não "refazer tudo")
- `QuizResult.tsx` redesenhado (idem, componente central)

NÃO fazer nesta rodada: reescrever os 31 arquivos de dados de quiz, páginas de categoria, artigos, institucionais, footer completo — isso é fase posterior, só depois de validar este slice.

## 12. Entregável do checkpoint

1. Paleta final utilizada
2. Tipografia
3. Tokens
4. Iconografia
5. Screenshots/previews em mobile 390×844 e desktop 1440×900
6. Componentes implementados (lista de arquivos)
7. Arquivos alterados (git diff --stat)
8. Performance preliminar (build limpo, sem erros de tipo)
9. Acessibilidade preliminar (contraste checado nos pares principais)
10. Justificativa das principais decisões

Finalizar com a frase literal: **"REDESIGN V2 — CHECKPOINT VISUAL PRONTO PARA AVALIAÇÃO"**
