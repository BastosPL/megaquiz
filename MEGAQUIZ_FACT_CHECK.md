# MegaQuiz — Fact-Check Consolidado (Revisao 2)

> Lista unica e definitiva de todos os erros factuais, sem duplicacoes.
> Data da verificacao: 11/07/2026
> Fontes primarias utilizadas. Nenhuma alteracao executada.

---

## Lista Definitiva de Erros Factuais

### ERRO F01 — Mascote da Copa 2026 INVENTADO

| Campo | Valor |
|-------|-------|
| **ID** | F01 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/copa-2026-trivia |
| **Arquivo** | src/lib/quizzes/copa-2026-trivia.ts |
| **Linhas** | 162-169 |
| **Pergunta atual** | "O mascote oficial da Copa 2026 se chama..." |
| **Resposta marcada como correta** | "Ike" (isCorrect: true) |
| **Explanation atual** | "Ike e um cachorro animado criado para a Copa 2026." |
| **Resposta correta** | Os mascotes oficiais sao TRES: Maple (alce, Canada), Zayu (onca-pintada, Mexico) e Clutch (aguia-careca, EUA). Nao existe mascote "Ike". |
| **Fonte primaria** | FIFA.com — informacao oficial fornecida por Patrick como dado publico confirmado |
| **Texto exato da substituicao** | Pergunta: "Quantos mascotes oficiais tem a Copa 2026?" / Opcoes: a) "1" (false), b) "2" (false), c) "3" (true — Maple, Zayu e Clutch), d) "4" (false) / Explanation: "A Copa 2026 e a primeira com 3 mascotes: Maple (alce, Canada), Zayu (onca-pintada, Mexico) e Clutch (aguia-careca, EUA)." |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F02 — Bola oficial da Copa 2026 ERRADA

| Campo | Valor |
|-------|-------|
| **ID** | F02 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/copa-2026-trivia |
| **Arquivo** | src/lib/quizzes/copa-2026-trivia.ts |
| **Linhas** | 247-254 |
| **Pergunta atual** | "Qual a bola oficial da Copa de 2026?" |
| **Resposta marcada como correta** | "adidas Oceaunz Flight" (isCorrect: true) |
| **Resposta correta** | adidas TRIONDA. A Oceaunz foi a bola da Copa do Mundo Feminina 2023. |
| **Fonte primaria** | FIFA.com / adidas.com — informacao oficial fornecida por Patrick como dado publico confirmado |
| **Texto exato da substituicao** | Opcao d: { id: "d", text: "adidas Trionda", isCorrect: true }. Manter as demais opcoes incorretas como estao. |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F03 — Vinicius Jr "Bola de Ouro merecida" no quiz — NUNCA GANHOU

| Campo | Valor |
|-------|-------|
| **ID** | F03 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/qual-jogador-copa-2026 |
| **Arquivo** | src/lib/quizzes/qual-jogador-copa-2026.ts |
| **Linhas** | 19-23 |
| **Conteudo atual** | Perfil "vini": description contendo "Bola de Ouro merecida!" |
| **Resposta correta** | Vinicius Jr NAO ganhou a Bola de Ouro 2024. O vencedor foi Rodri (Manchester City/Espanha). Vini ficou em 2o lugar. |
| **Fonte primaria** | France Football — ceremonia Ballon d'Or 2024, 28/10/2024 |
| **Texto exato da substituicao** | Remover "Bola de Ouro merecida!" e substituir por "Eleito melhor jogador da Champions League 2023/24!" |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F04 — "Tempos Modernos" atribuida a Raul Seixas — E DE LULU SANTOS

| Campo | Valor |
|-------|-------|
| **ID** | F04 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/musica-brasileira |
| **Arquivo** | src/lib/quizzes/musica-brasileira.ts |
| **Linhas** | 84-92 |
| **Pergunta atual** | "Quem cantou 'Tempos Modernos' e 'Maluco Beleza'?" |
| **Resposta marcada como correta** | "Raul Seixas" (isCorrect: true) |
| **Explanation atual** | "Raul Seixas, o 'Pai do Rock Brasileiro', gravou esses classicos eternos nos anos 70." |
| **Resposta correta** | "Tempos Modernos" (1982) e de Lulu Santos. "Maluco Beleza" (1977) e de Raul Seixas. A pergunta agrupa duas musicas de artistas diferentes. |
| **Fonte primaria** | Discografia oficial — Lulu Santos "Tempos Modernos" (album homônimo, 1982); Raul Seixas "Maluco Beleza" (single, 1977) |
| **Texto exato da substituicao** | Pergunta: "Quem cantou 'Tente Outra Vez' e 'Maluco Beleza'?" / Resposta correta: Raul Seixas (true) / Explanation: "Raul Seixas, o 'Pai do Rock Brasileiro', gravou esses classicos nos anos 70." |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F05 — Artigo: Vini Jr "Vencedor da Bola de Ouro em 2024" — FALSO

| Campo | Valor |
|-------|-------|
| **ID** | F05 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /blog/melhores-jogadores-copa-2026 |
| **Arquivo** | src/lib/articles.ts |
| **Linha** | 66 |
| **Conteudo atual** | "Vencedor da Bola de Ouro em 2024, o atacante do Real Madrid..." |
| **Resposta correta** | Rodri (Manchester City/Espanha) ganhou a Bola de Ouro 2024. Vini Jr ficou em 2o. |
| **Fonte primaria** | France Football — ceremonia Ballon d'Or 2024, 28/10/2024 |
| **Texto exato da substituicao** | "Eleito melhor jogador da Champions League 2023/24, o atacante do Real Madrid..." |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F06 — Artigo: Argentina "bicampea" — E TRICAMPEA

| Campo | Valor |
|-------|-------|
| **ID** | F06 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /blog/melhores-jogadores-copa-2026 |
| **Arquivo** | src/lib/articles.ts |
| **Linha** | 67 |
| **Conteudo atual** | "A Argentina, atual bicampeã, conta com um elenco jovem..." |
| **Resposta correta** | Argentina e TRIcampea mundial (1978, 1986, 2022) |
| **Fonte primaria** | FIFA.com — historico de campeoes da Copa do Mundo |
| **Texto exato da substituicao** | "A Argentina, atual tricampeã, conta com um elenco jovem..." |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F07 — Artigo: Florian Wirtz no Bayer Leverkusen — TRANSFERIDO

| Campo | Valor |
|-------|-------|
| **ID** | F07 |
| **Classificacao** | P0 — Categoria A (problema confirmado) |
| **URL afetada** | /blog/melhores-jogadores-copa-2026 |
| **Arquivo** | src/lib/articles.ts |
| **Linha** | 68 |
| **Conteudo atual** | "O meia do Bayer Leverkusen, aos 23 anos..." |
| **Resposta correta** | Wirtz foi transferido para o Liverpool FC em julho de 2025 (~116M libras) |
| **Fonte primaria** | Transfermarkt / Liverpool FC comunicado oficial, julho 2025 |
| **Texto exato da substituicao** | "O meia do Liverpool, aos 23 anos..." |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F08 — Gol mais rapido da Copa 2022 ERRADO

| Campo | Valor |
|-------|-------|
| **ID** | F08 |
| **Classificacao** | P1 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/gols-historicos-copa |
| **Arquivo** | src/lib/quizzes/gols-historicos-copa.ts |
| **Linhas** | 102-110 |
| **Pergunta atual** | "Na Copa de 2022, qual foi o gol mais rapido do torneio?" |
| **Resposta marcada como correta** | "Gol de Al-Dawsari (Arabia) contra Argentina" (isCorrect: true) |
| **Resposta correta** | Alphonso Davies (Canada) marcou aos 1'08" contra Croacia na fase de grupos |
| **Fonte primaria** | FIFA.com — estatisticas oficiais da Copa 2022 |
| **Texto exato da substituicao** | Adicionar opcao "Gol de Alphonso Davies (Canada) contra Croacia" como correta. Marcar Al-Dawsari como false. |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F09 — Richarlison e "Premio Puskas" — NAO GANHOU

| Campo | Valor |
|-------|-------|
| **ID** | F09 |
| **Classificacao** | P1 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/gols-historicos-copa |
| **Arquivo** | src/lib/quizzes/gols-historicos-copa.ts |
| **Linhas** | 112-121 |
| **Pergunta atual** | "Qual foi o gol mais bonito da Copa 2022 (premio Puskas)?" |
| **Resposta marcada como correta** | "Richarlison vs Serbia (bicicleta)" (isCorrect: true) |
| **Explanation atual** | "A bicicleta de Richarlison contra a Serbia foi eleita o gol mais bonito da Copa 2022!" |
| **Resposta correta** | Richarlison NAO ganhou o Puskas 2023 (vencedor: Guilherme Madruga). O gol de Richarlison foi eleito pela FIFA como melhor gol da Copa 2022 em premiacao separada. |
| **Fonte primaria** | FIFA.com — The Best FIFA Football Awards 2023 |
| **Texto exato da substituicao** | Pergunta: "Qual foi eleito o gol mais bonito da Copa 2022?" (remover "premio Puskas") / Explanation: "A bicicleta de Richarlison contra a Serbia foi eleita pela FIFA como o gol mais bonito da Copa 2022!" |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F10 — Bandeira do Japao descrita com cores INVERTIDAS

| Campo | Valor |
|-------|-------|
| **ID** | F10 |
| **Classificacao** | P1 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/bandeiras-copa-2026 |
| **Arquivo** | src/lib/quizzes/bandeiras-copa-2026.ts |
| **Linhas** | 69-76 |
| **Pergunta atual** | "Bandeira vermelha com circulo branco e sol nascente — qual pais?" |
| **Resposta marcada como correta** | "Japao" (isCorrect: true) |
| **Resposta correta** | A bandeira oficial do Japao (Nisshoki) e BRANCA com circulo VERMELHO no centro. A descricao da pergunta inverte as cores. |
| **Fonte primaria** | Governo do Japao — Lei da Bandeira Nacional (1999) |
| **Texto exato da substituicao** | Pergunta: "Bandeira branca com circulo vermelho no centro — qual pais?" |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F11 — Netflix: resposta contradiz explicacao

| Campo | Valor |
|-------|-------|
| **ID** | F11 |
| **Classificacao** | P1 — Categoria A (problema confirmado) |
| **URL afetada** | /quiz/series-netflix |
| **Arquivo** | src/lib/quizzes/series-netflix.ts |
| **Linhas** | 162-171 |
| **Pergunta atual** | "Qual serie se passa numa prisao feminina?" |
| **Resposta marcada como correta** | "Orange Is the New Black" (isCorrect: true) |
| **Opcao "Todas as anteriores"** | Marcada como false |
| **Explanation atual** | "Todas se passam em prisoes femininas, mas Orange Is the New Black e a mais famosa da Netflix!" |
| **Problema** | A explanation admite que TODAS as opcoes (Wentworth, Vis a Vis, OITNB) se passam em prisoes femininas, contradizendo a resposta unica |
| **Fonte primaria** | Sinopses oficiais das 3 series na Netflix/IMDB |
| **Texto exato da substituicao** | Opcao A: Trocar "Todas as anteriores" para isCorrect: true. OU reformular pergunta: "Qual dessas series de prisao feminina e producao original Netflix?" (resposta: OITNB) |
| **Data da verificacao** | 11/07/2026 |

---

### ERRO F12 — Titulo pseudocientifico: quiz QI

| Campo | Valor |
|-------|-------|
| **ID** | F12 |
| **Classificacao** | P0 (reclassificado — alegacao enganosa) — Categoria A + B |
| **URL afetada** | /quiz/so-quem-tem-qi-acima-de-120-acerta-8 |
| **Arquivo** | src/lib/quizzes/qi-teste.ts |
| **Linhas** | 5-8 |
| **Titulo atual** | "So quem tem QI acima de 120 acerta 8/10" |
| **Descricao atual** | "Sera que voce e mais inteligente que 92% da populacao? Faca este teste e descubra!" |
| **Slug atual** | so-quem-tem-qi-acima-de-120-acerta-8 |
| **Problema** | Quiz de conhecimentos gerais NAO mede QI. Ambas as alegacoes sao pseudocientificas. |
| **Fonte** | Definicao de QI: teste psicometrico padronizado (Wechsler/Stanford-Binet), nao trivia online |
| **Texto exato da substituicao** | Titulo: "Voce consegue acertar 8 destas 10 perguntas?" / Descricao: "Um desafio de conhecimentos gerais que vai testar o que voce sabe!" / Slug: ver secao de mudanca de slug |
| **Data da verificacao** | 11/07/2026 |

---

## Imprecisoes P2 (menores)

### F13 — Paquistao em quiz de Copa 2026
- **Arquivo:** bandeiras-copa-2026.ts, linhas 49-56
- **Problema:** Paquistao NAO esta classificado para a Copa 2026. Aparece como opcao correta em pergunta sobre bandeiras.
- **Correcao:** Substituir por selecao classificada com bandeira similar (ex: Arabia Saudita)
- **Fonte:** FIFA.com — lista de classificados Copa 2026
- **Data:** 11/07/2026

### F14 — Mico-leao-dourado "criticamente ameacado"
- **Arquivo:** mundo-animal.ts, linhas 128-136
- **Pergunta:** "Qual animal brasileiro esta criticamente ameacado de extincao?"
- **Problema:** Status IUCN atual do mico-leao-dourado e "Em Perigo" (EN), nao "Criticamente em Perigo" (CR). Foi reclassificado.
- **Correcao:** Trocar "criticamente ameacado" por "ameacado de extincao"
- **Fonte:** IUCN Red List — Leontopithecus rosalia
- **Data:** 11/07/2026

### F15 — Artigo saude: manga com leite como fato historico
- **Arquivo:** articles.ts, linha 107 (artigo verdade-ou-mito)
- **Trecho:** "Durante o período da escravidão no Brasil, os senhores de engenho inventaram essa história..."
- **Problema:** Apresentado como fato historico, mas e teoria folclorica sem comprovacao documental
- **Correcao:** Adicionar "Segundo uma teoria popular," antes da explicacao
- **Fonte:** Nao ha fonte primaria que confirme — e folclore
- **Data:** 11/07/2026

### F16 — Artigo ciencia: estudo atribuido a "Universidade de Nova York"
- **Arquivo:** articles.ts, linha 127 (artigo ciencia-da-diversao)
- **Trecho:** "Pesquisas da Universidade de Nova York mostraram que conteúdos que envolvem autorrevelação..."
- **Problema:** O estudo Tamir & Mitchell (2012) sobre autorrevelacao e de Harvard, nao NYU
- **Correcao:** Trocar "Universidade de Nova York" por "Universidade de Harvard"
- **Fonte:** Tamir, D. I., & Mitchell, J. P. (2012). PNAS, Harvard University
- **Data:** 11/07/2026

### F17 — Artigo saude: estudo Harvard sobre estresse/cabelo branco
- **Arquivo:** articles.ts, linha 108 (artigo verdade-ou-mito)
- **Trecho:** "pesquisadores da Universidade de Harvard demonstraram em 2020 que o estresse..."
- **Problema:** O estudo (Zhang et al., 2020, Nature) foi feito em camundongos. O artigo extrapola diretamente para humanos sem mencionar essa limitacao.
- **Correcao:** Adicionar "em estudo com camundongos" apos "demonstraram em 2020"
- **Fonte:** Zhang, B. et al. (2020). Nature, 577, 676-681
- **Data:** 11/07/2026

---

## Itens Verificados como CORRETOS

- Brasil pentacampeao (1958, 1962, 1970, 1994, 2002)
- Messi 8 Ballons d'Or
- Argentina maior campea Copa America (16 titulos)
- Klose artilheiro de Copas (16 gols)
- MetLife Stadium sede da final 2026
- 48 selecoes e 104 jogos na Copa 2026
- Mbappe hat-trick na final 2022
- Real Madrid 15 Champions League
- Palmeiras 12 Brasileiroes
- Todo conteudo de historia do Brasil — CORRETO
- Todo conteudo de mitologia grega — CORRETO
- Todo conteudo de geografia do Brasil — CORRETO
- Todo conteudo de curiosidades da ciencia — CORRETO
- Todo conteudo de capitais do mundo — CORRETO
- Quizzes de saude (verdade-ou-mito) — respostas corretas

---

## Resumo Quantitativo

| Classificacao | Quantidade | IDs |
|---------------|-----------|-----|
| P0 (bloqueadores) | 8 | F01, F02, F03, F04, F05, F06, F07, F12 |
| P1 (graves) | 4 | F08, F09, F10, F11 |
| P2 (menores) | 5 | F13, F14, F15, F16, F17 |
| **Total** | **17** | |

Nota: F12 (titulo QI) foi reclassificado de P1 para P0 por ser alegacao enganosa (Categoria A + B).
