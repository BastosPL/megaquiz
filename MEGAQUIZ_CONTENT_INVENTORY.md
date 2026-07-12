# MegaQuiz — Inventario de Conteudo Consolidado (Revisao 2)

> Todas as paginas, tipo, status, qualidade, recomendacao.
> Data: 11/07/2026 | Revisao: 11/07/2026

---

## Contagem de Artigos — Verificacao Detalhada

| Criterio | Quantidade | Detalhes |
|----------|-----------|---------|
| Artigos existentes no codigo (array allArticles em articles.ts) | **6** | Verificado por leitura direta do arquivo |
| Artigos publicados (acessiveis via /blog/[slug]) | **6** | Todas as rotas geradas via generateStaticParams |
| Artigos acessiveis pela listagem /blog | **6** | Componente renderiza allArticles completo |
| Artigos presentes no sitemap (sitemap.ts) | **6** | sitemap.ts itera allArticles.map() — todos incluidos |
| Artigos indexaveis (sem noindex) | **6** | Nenhum artigo tem noindex |
| Artigos efetivamente indexados no Google | **Nao verificado** | Requer acesso ao Search Console para confirmar |

**Slugs dos 6 artigos:**
1. historia-das-copas-do-mundo-curiosidades
2. como-funcionam-os-testes-de-personalidade
3. melhores-jogadores-copa-2026
4. curiosidades-mitologia-grega
5. verdade-ou-mito-maiores-mitos-sobre-saude
6. por-que-adoramos-quizzes-ciencia-da-diversao

**Origem da divergencia anterior:** O agente explorer (#1) contou 8 itens, possivelmente incluindo exports auxiliares (getArticleBySlug, allArticles) ou a interface Article na contagem. O agente editorial (#3) leu o array completo e contou 6 objetos. **Valor correto: 6.**

---

## Paginas Institucionais

| URL | Tipo | Qualidade | Recomendacao |
|-----|------|-----------|--------------|
| / | Home | 4/5 | MANTER — SSR, texto introdutorio, grid de quizzes |
| /sobre | Institucional | 3/5 | APRIMORAR — adicionar politica editorial, metodologia |
| /contato | Institucional | 4/5 | MANTER — formulario funcional |
| /privacidade | Institucional | 4/5 | MANTER — LGPD completa com controlador |
| /termos | Institucional | 4/5 | MANTER |
| /blog | Listagem | 3/5 | APRIMORAR — expandir quantidade de artigos |

## Artigos do Blog (6 total)

| Slug | Titulo | ~Palavras | Autor | Fontes | Erros Factuais | Qualidade | Recomendacao |
|------|--------|-----------|-------|--------|---------------|-----------|--------------|
| historia-das-copas-do-mundo-curiosidades | Historia das Copas: Curiosidades | ~750 | Nenhum | Nenhuma | 0 | 4/5 | MANTER |
| como-funcionam-os-testes-de-personalidade | Como Funcionam Testes de Personalidade | ~800 | Nenhum | Nenhuma | 0 | 4/5 | MANTER |
| melhores-jogadores-copa-2026 | Melhores Jogadores Copa 2026 | ~780 | Nenhum | Nenhuma | **3 P0** (F05, F06, F07) | 2/5 | **CORRIGIR** |
| curiosidades-mitologia-grega | Curiosidades Mitologia Grega | ~850 | Nenhum | Nenhuma | 0 | 5/5 | MANTER |
| verdade-ou-mito-maiores-mitos-sobre-saude | Mitos Sobre Saude | ~850 | Nenhum | Nenhuma | 2 P2 (F15, F17) | 4/5 | APRIMORAR |
| por-que-adoramos-quizzes-ciencia-da-diversao | Ciencia dos Quizzes | ~800 | Nenhum | Nenhuma | 1 P2 (F16) | 4/5 | APRIMORAR |

**Problemas estruturais em TODOS os artigos:**
- Sem campo `author` na interface Article (articles.ts)
- Sem fontes/referencias citadas em nenhum artigo
- Contagem de palavras abaixo do ideal (750-850 vs 1200+)

## Quizzes — Trivia (17 quizzes, com respostas certas/erradas)

| Slug | Titulo | Perguntas | Plays (fake) | Erros Factuais | Recomendacao |
|------|--------|-----------|-------------|----------------|--------------|
| copa-2026-trivia | Trivia Copa 2026 | 25 | 1.247 | **2 P0** (F01 mascote, F02 bola) | **CORRIGIR** |
| futebol-mundial | Futebol Mundial | 10 | 5.890 | 0 | MANTER |
| times-brasileiros | Times Brasileiros | 10 | 5.621 | 0 | MANTER |
| historia-do-brasil | Historia do Brasil | 10 | 6.340 | 0 | MANTER |
| geografia-do-brasil | Geografia do Brasil | 10 | 4.560 | 0 | MANTER |
| capitais-do-mundo | Capitais do Mundo | 10 | 1.876 | 0 | MANTER |
| curiosidades-ciencia | Curiosidades Ciencia | 10 | 3.780 | 0 | MANTER |
| mitologia-grega | Mitologia Grega | 10 | 3.400 | 0 | MANTER |
| filmes-classicos | Filmes Classicos | 10 | 3.920 | 0 | MANTER |
| series-netflix | Series Netflix | 10 | 4.780 | **1 P1** (F11) | CORRIGIR |
| musica-brasileira | Musica Brasileira | 10 | 3.210 | **1 P0** (F04) | **CORRIGIR** |
| mundo-animal | Mundo Animal | 10 | 2.104 | 1 P2 (F14) | APRIMORAR |
| vestibular-1990 | Vestibular Anos 90 | 10 | 4.500 | 0 | MANTER |
| qi-teste | "QI acima de 120" | 10 | 8.432 | **1 P0** (F12 titulo) | **CORRIGIR** |
| verdade-ou-mito-saude | Verdade ou Mito Saude | 15 | 5.200 | 0 | MANTER |
| bandeiras-copa-2026 | Bandeiras Copa 2026 | 15 | 3.210 | **1 P1** (F10) + 1 P2 (F13) | CORRIGIR |
| gols-historicos-copa | Gols Historicos Copa | 15 | 4.120 | **2 P1** (F08, F09) | CORRIGIR |

## Quizzes — Personalidade (14 quizzes, sem resposta certa/errada)

| Slug | Titulo | Perguntas | Perfis | Plays (fake) | Afiliado | Recomendacao |
|------|--------|-----------|--------|-------------|----------|--------------|
| qual-jogador-copa-2026 | Qual Jogador da Copa | 12 | 9 | 8.740 | Shopee (7 links) | **CORRIGIR** (F03) |
| qual-artilheiro-historico | Qual Artilheiro Historico | 10 | 4 | 3.870 | Shopee (4 links) | MANTER |
| qual-signo-deveria-ser | Qual Signo | 10 | 12 | 11.200 | Nao | MANTER |
| qual-rede-social | Qual Rede Social | 10 | 6 | 9.100 | Nao | MANTER |
| qual-cidade-brasileira | Qual Cidade BR | 10 | 6 | 3.891 | Nao | MANTER |
| qual-profissao-ideal | Qual Profissao | 10 | 6 | 7.100 | Nao | MANTER |
| qual-geracao-sua-alma | Qual Geracao | 10 | 5 | 7.650 | Nao | MANTER |
| qual-vilao-de-serie | Qual Vilao | 10 | 6 | 6.200 | Nao | MANTER |
| qual-personagem-voce-seria | Qual Personagem | 10 | 6 | 8.200 | Nao | MANTER |
| jeito-de-comer-personalidade | Jeito de Comer | 10 | 5 | 6.890 | Nao | MANTER |
| casa-de-papel-personagem | Casa de Papel | 10 | 6 | 8.900 | Nao | MANTER |
| round6-sobreviveria | Round 6 | 10 | 5 | 7.300 | Nao | MANTER |
| perfil-profissional-disc | Perfil DISC | 10 | 4 | 5.420 | Nao | MANTER |
| area-ti-ideal | Area de TI | 10 | 6 | 4.310 | Nao | MANTER |

## Resumo de Acoes

| Acao | Quantidade |
|------|-----------|
| MANTER | 23 |
| APRIMORAR | 5 |
| CORRIGIR (P0) | 5 (3 quizzes + 1 quiz personalidade + 1 artigo) |
| CORRIGIR (P1) | 3 |
| REMOVER | 0 |
