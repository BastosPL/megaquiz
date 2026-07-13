import type { ContentSource, ArticleSection } from "@/lib/types";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: ArticleSection[];
  date: string;
  category: string;
  readTime: number;
  relatedQuizSlug: string;
  author?: string;
  authorBio?: string;
  sources?: ContentSource[];
  lastReviewedAt?: string;
  disclaimer?: string;
}

export const allArticles: Article[] = [
  {
    slug: "historia-das-copas-do-mundo-curiosidades",
    title: "História das Copas do Mundo: Curiosidades que Você Não Sabia",
    excerpt:
      "Descubra fatos surpreendentes sobre a história das Copas do Mundo, desde a primeira edição em 1930 até os dias de hoje.",
    category: "Esportes",
    date: "2026-06-15",
    readTime: 5,
    relatedQuizSlug: "quanto-voce-sabe-sobre-a-copa-2026",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "FIFA.com — History of the FIFA World Cup", url: "https://www.fifa.com/en/tournaments/mens/worldcup", organization: "FIFA", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    content: [
      { text: "A Copa do Mundo é o maior evento esportivo do planeta, reunindo bilhões de espectadores a cada quatro anos. Mas por trás dos gols e das comemorações, existem histórias fascinantes que poucos conhecem. Vamos explorar algumas das curiosidades mais surpreendentes da história dos Mundiais." },
      { heading: "A primeira Copa: Uruguai 1930", text: "A primeira Copa do Mundo foi realizada em 1930, no Uruguai, e contou com apenas 13 seleções participantes. Muitos países europeus recusaram o convite por causa da longa viagem de navio até a América do Sul — a travessia levava cerca de duas semanas. A França, a Bélgica, a Romênia e a Iugoslávia foram as únicas europeias que aceitaram o desafio. O Uruguai acabou campeão, vencendo a Argentina por 4 a 2 na final." },
      { heading: "O Maracanazo de 1950", text: "Em 1950, o Brasil sediou a Copa e construiu o lendário Maracanã, que na época era o maior estádio do mundo, com capacidade para quase 200 mil pessoas. A final entre Brasil e Uruguai, conhecida como 'Maracanazo', é considerada uma das maiores tragédias do futebol brasileiro. O Brasil precisava apenas de um empate para ser campeão, mas perdeu por 2 a 1, causando uma comoção nacional que marcou gerações inteiras." },
      { heading: "A taça roubada — duas vezes", text: "Você sabia que a taça original da Copa do Mundo foi roubada — duas vezes? A Taça Jules Rimet foi furtada em 1966, na Inglaterra, antes do torneio começar, e encontrada por um cachorro chamado Pickles debaixo de um arbusto. Em 1983, já em posse permanente do Brasil (que a conquistou definitivamente em 1970), a taça foi roubada novamente no Rio de Janeiro e nunca mais foi recuperada. Acredita-se que tenha sido derretida por ladrões." },
      { heading: "Curiosidades sobre seleções e recordes", text: "A Itália é o único país que venceu uma Copa do Mundo usando camisas azuis, e não as cores de sua bandeira. O azul vem do 'Azzurro Savoia', a cor da Casa Real de Savoia, que unificou a Itália no século XIX. Curiosamente, a Holanda nunca venceu uma Copa, apesar de ter jogado três finais. Já a Alemanha detém o recorde de mais finais disputadas, com oito participações no jogo decisivo." },
      { heading: "Brasil 2014 e o 7 a 1", text: "Na Copa de 2014, no Brasil, foram marcados 171 gols em 64 jogos, uma média de 2,67 por partida. Essa edição também registrou o resultado mais humilhante de uma semifinal: o histórico 7 a 1 da Alemanha sobre o Brasil, em Belo Horizonte, que ficou marcado na memória de todos os torcedores brasileiros. Os alemães marcaram cinco gols em apenas 18 minutos no primeiro tempo." },
      { heading: "Azarões e desistências históricas", text: "Outro fato pouco conhecido: a Índia se classificou para a Copa de 1950, mas desistiu de participar. A versão mais popular diz que os jogadores queriam jogar descalços e a FIFA não permitiu, embora a razão oficial tenha sido falta de recursos financeiros para enviar a delegação ao Brasil. Já a Coreia do Norte surpreendeu o mundo em 1966, eliminando a Itália na fase de grupos, um dos maiores azarões da história." },
      { heading: "Mais do que futebol", text: "A Copa do Mundo não é apenas sobre futebol — é sobre cultura, história e identidade nacional. Cada edição carrega consigo momentos que transcendem o esporte e se tornam parte da memória coletiva da humanidade. Da mão de Deus de Maradona em 1986 ao cabeçaço de Zidane em 2006, esses momentos continuam gerando debates, emoções e, claro, muitos quizzes!" },
    ],
  },
  {
    slug: "como-funcionam-os-testes-de-personalidade",
    title: "Como Funcionam os Testes de Personalidade",
    excerpt:
      "Entenda a psicologia por trás dos quizzes de personalidade e por que eles revelam tanto sobre quem somos.",
    category: "Psicologia",
    date: "2026-06-12",
    readTime: 6,
    relatedQuizSlug: "qual-cidade-brasileira-combina-com-voce",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "Briggs Myers, I. & Myers, P. (1995). Gifts Differing", organization: "Davies-Black Publishing", accessedAt: "2026-07-12" },
      { label: "Marston, W. M. (1928). Emotions of Normal People", organization: "Kegan Paul", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    content: [
      { text: "Quem nunca fez um teste de personalidade na internet e ficou impressionado com a precisão do resultado? Seja para descobrir qual cidade combina com você ou qual personagem de série você seria, esses quizzes atraem milhões de pessoas todos os dias. Mas o que está por trás dessa fascinação? A resposta envolve psicologia, neurociência e um pouco de autoconhecimento." },
      { heading: "Origens na psicologia: de Jung ao MBTI", text: "Os testes de personalidade têm raízes na psicologia do início do século XX. Carl Jung, um dos fundadores da psicologia analítica, propôs que as pessoas possuem diferentes funções psicológicas dominantes — como pensamento, sentimento, intuição e sensação. Essa teoria inspirou o famoso teste MBTI (Myers-Briggs Type Indicator), criado na década de 1940 por Katharine Briggs e sua filha Isabel Myers, que classifica as pessoas em 16 tipos de personalidade." },
      { heading: "O modelo Big Five (OCEAN)", text: "Na psicologia moderna, o modelo mais aceito cientificamente é o dos Cinco Grandes Fatores, também chamado de Big Five ou OCEAN. Esse modelo avalia cinco dimensões fundamentais da personalidade: Abertura à experiência (curiosidade e criatividade), Conscienciosidade (organização e disciplina), Extroversão (sociabilidade e energia), Amabilidade (cooperação e empatia) e Neuroticismo (tendência à ansiedade e instabilidade emocional)." },
      { heading: "Como funcionam os quizzes online", text: "Mas e os quizzes de personalidade da internet — aqueles mais divertidos e informais? Eles funcionam com um mecanismo chamado mapeamento de perfis. Cada resposta que você dá acumula pontos para diferentes perfis predefinidos. Ao final, o perfil com mais pontos é o seu resultado. Embora não tenham o rigor de um teste clínico, eles usam princípios psicológicos reais para criar categorias que fazem sentido." },
      { heading: "O Efeito Barnum e a identificação com resultados", text: "Um fenômeno psicológico importante que explica por que nos identificamos tanto com os resultados é o Efeito Barnum, também chamado de Efeito Forer. Esse efeito descreve a tendência humana de aceitar descrições vagas e genéricas como extremamente precisas quando acreditamos que foram feitas especificamente para nós. É o mesmo princípio por trás dos horóscopos — as descrições são amplas o suficiente para que a maioria das pessoas se identifique." },
      { heading: "Testes como ferramenta de reflexão", text: "No entanto, isso não significa que os testes são inúteis. Bons testes de personalidade — mesmo os informais — podem servir como ferramentas de reflexão. Eles nos fazem pensar sobre nossas preferências, valores e comportamentos de uma forma lúdica. Um estudo publicado no Journal of Research in Personality mostrou que pessoas que refletem sobre seus traços de personalidade tendem a ter maior autoconsciência e inteligência emocional." },
      { heading: "Testes DISC e vocacionais", text: "Os testes DISC, muito usados em ambientes corporativos, classificam as pessoas em quatro perfis: Dominância, Influência, Estabilidade e Conformidade. Eles ajudam equipes a entender como cada membro se comunica e toma decisões. Já os testes vocacionais utilizam uma abordagem semelhante para sugerir carreiras compatíveis com os interesses e habilidades do indivíduo." },
      { heading: "Personalidade é mais do que um resultado", text: "A verdade é que nossa personalidade é complexa demais para ser resumida em um único resultado. Somos uma combinação fluida de traços que se manifestam de formas diferentes dependendo do contexto. Ainda assim, os testes de personalidade continuam sendo uma das formas mais populares e divertidas de explorar quem somos — ou pelo menos quem gostaríamos de ser." },
    ],
  },
  {
    slug: "melhores-jogadores-copa-2026",
    title: "Os Melhores Jogadores da Copa 2026: Quem São os Favoritos",
    excerpt:
      "Conheça os craques que prometem brilhar na Copa do Mundo de 2026 e as seleções favoritas ao título.",
    category: "Esportes",
    date: "2026-06-18",
    readTime: 5,
    relatedQuizSlug: "qual-jogador-voce-seria-na-copa-2026",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "FIFA.com — FIFA World Cup 26", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026", organization: "FIFA", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    disclaimer: "As informações sobre jogadores refletem o momento da publicação. Convocações, lesões e transferências podem alterar a participação dos atletas no torneio.",
    content: [
      { text: "A Copa do Mundo de 2026, sediada nos Estados Unidos, Canadá e México, promete ser a maior da história, com 48 seleções e 104 jogos. Com tantos times em campo, o nível técnico será altíssimo, e vários jogadores chegam ao torneio no auge de suas carreiras. Vamos conhecer os principais craques que podem decidir o campeonato." },
      { heading: "Kylian Mbappé (França)", text: "Kylian Mbappé, da França, é considerado por muitos o melhor jogador do mundo atualmente. Aos 27 anos, o atacante do Real Madrid chega à Copa em sua melhor fase física e técnica. Velocidade explosiva, finalização certeira e capacidade de decidir nos momentos cruciais fazem dele o grande favorito à Bola de Ouro do torneio. Mbappé já foi campeão mundial em 2018 e vice em 2022, marcando um hat-trick na final contra a Argentina." },
      { heading: "Jude Bellingham (Inglaterra)", text: "Jude Bellingham, da Inglaterra, é outro nome que promete protagonismo. Com apenas 23 anos, o meio-campista do Real Madrid já se consolidou como um dos jogadores mais completos do mundo. Sua capacidade de chegar ao gol, aliada à inteligência tática e à liderança em campo, fazem da Inglaterra uma das grandes candidatas ao título. Bellingham é o tipo de jogador que eleva o nível de toda a equipe ao seu redor." },
      { heading: "Vinícius Júnior (Brasil)", text: "Do lado da América do Sul, Vinícius Júnior carrega as esperanças do Brasil. Eleito melhor jogador da Champions League 2023/24, o atacante do Real Madrid combina velocidade, dribles desconcertantes e uma capacidade cada vez maior de fazer gols decisivos. A seleção brasileira, que não conquista a Copa desde 2002, aposta em Vini Jr. como o homem que pode encerrar essa longa espera de mais de duas décadas." },
      { heading: "Argentina: força coletiva", text: "A Argentina, atual tricampeã, conta com um elenco jovem e talentoso que vai além de qualquer individualidade. Jogadores como Julián Álvarez, Enzo Fernández e Lautaro Martínez formam uma geração que cresceu vencendo e chega à Copa com a mentalidade de quem sabe conquistar títulos. A equipe de Lionel Scaloni é reconhecida pela solidez tática e pelo espírito coletivo acima de tudo." },
      { heading: "Florian Wirtz e Jamal Musiala (Alemanha)", text: "A Alemanha, tradicional potência do futebol, apresenta Florian Wirtz como sua grande estrela. O meia do Liverpool, aos 23 anos, é comparado aos maiores talentos da história do futebol alemão. Sua visão de jogo, passes decisivos e capacidade de criar chances do nada fazem dele um dos jogadores mais perigosos do torneio. Jamal Musiala, do Bayern de Munique, é outro alemão que promete encantar." },
      { heading: "Goleiros decisivos", text: "Não podemos esquecer dos goleiros. Alisson Becker, do Brasil, e Thibaut Courtois, da Bélgica, são considerados dois dos melhores do mundo e podem ser decisivos em fases eliminatórias, onde um penalti defendido ou uma defesa milagrosa separam a glória da eliminação. Na Copa, a solidez defensiva costuma ser tão importante quanto o poder de ataque." },
      { heading: "Uma Copa histórica", text: "A Copa de 2026 será histórica não apenas pelo formato expandido, mas pela qualidade dos jogadores em campo. Uma nova geração de craques está pronta para escrever seus nomes na história do futebol mundial. Quem será o grande herói desta vez? Só o tempo dirá — mas enquanto isso, que tal descobrir qual desses jogadores mais combina com você?" },
    ],
  },
  {
    slug: "curiosidades-mitologia-grega",
    title: "Curiosidades Sobre Mitologia Grega que Vão Te Surpreender",
    excerpt:
      "Explore fatos fascinantes sobre os deuses, heróis e monstros da mitologia grega que influenciam nossa cultura até hoje.",
    category: "Cultura",
    date: "2026-06-10",
    readTime: 6,
    relatedQuizSlug: "quiz-mitologia-grega",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "Theoi Greek Mythology — Encyclopaedia", url: "https://www.theoi.com/", organization: "Theoi Project", accessedAt: "2026-07-12" },
      { label: "Britannica — Greek Mythology", organization: "Encyclopædia Britannica", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    content: [
      { text: "A mitologia grega é uma das tradições culturais mais ricas e influentes da história da humanidade. Seus deuses, heróis e monstros continuam presentes em filmes, livros, jogos e até no nosso vocabulário cotidiano. Mas existem muitos fatos sobre essas histórias antigas que são surpreendentes mesmo para quem acha que já conhece o tema." },
      { heading: "Zeus e suas transformações", text: "Zeus, o rei dos deuses do Olimpo, não era exatamente um exemplo de fidelidade. Segundo os mitos, ele teve dezenas de filhos com diversas deusas, ninfas e mortais. Héracles (Hércules, para os romanos), Perseu, Helena de Troia e Dionísio são apenas alguns de seus descendentes. Para se aproximar de seus interesses amorosos, Zeus se transformava em diversas formas: um cisne, um touro, uma chuva de ouro e até uma formiga. Hera, sua esposa e irmã, era famosa por sua fúria contra as amantes e os filhos ilegítimos do marido." },
      { heading: "O Cavalo de Troia não está na Ilíada", text: "O Cavalo de Troia, uma das histórias mais famosas da mitologia, não aparece na Ilíada de Homero. A narrativa do cavalo gigante de madeira usado como armadilha para invadir a cidade de Troia é contada em obras posteriores, como a Eneida de Virgílio e em fragmentos do Ciclo Épico. A Ilíada, na verdade, cobre apenas algumas semanas do décimo ano da Guerra de Troia, focando na ira de Aquiles contra Agamenon." },
      { heading: "O nascimento incomum de Atena", text: "Atena, a deusa da sabedoria e da estratégia, nasceu de uma forma bastante incomum: ela surgiu diretamente da cabeça de Zeus, já adulta e usando armadura completa. Segundo o mito, Zeus engoliu a titã Métis (a mãe de Atena) porque recebeu uma profecia de que um filho de Métis seria mais poderoso que ele. Quando sentiu uma terrível dor de cabeça, pediu a Hefesto que abrisse seu crânio com um machado, e Atena saltou para fora." },
      { heading: "A origem trágica do Minotauro", text: "O Minotauro, a criatura meio homem, meio touro que vivia no Labirinto de Creta, tem uma origem trágica. Poseidon enviou um touro branco magnifico ao rei Minos para que fosse sacrificado em sua honra. Quando Minos se recusou a sacrificar o animal por considerá-lo belo demais, Poseidon fez com que a rainha Pasífae se apaixonasse pelo touro. O Minotauro foi o resultado dessa união, e Minos mandou construir o Labirinto para esconder a criatura." },
      { heading: "Palavras que vieram da mitologia", text: "Muitas palavras que usamos hoje vêm diretamente da mitologia grega. 'Narcisismo' vem de Narciso, o jovem que se apaixonou pelo próprio reflexo. 'Pânico' deriva de Pã, o deus dos bosques que causava medo repentino nos viajantes. 'Eco' era o nome de uma ninfa condenada a repetir apenas as últimas palavras que ouvia. 'Atlas' era o titã condenado a sustentar o céu. E 'cronômetro' vem de Cronos, o titã do tempo." },
      { heading: "Deuses imperfeitos e castigos eternos", text: "Os gregos antigos não viam seus deuses como seres perfeitos e moralmente superiores — muito pelo contrário. Os deuses do Olimpo eram ciumentos, vingadores, vaidosos e frequentemente cruéis. Prometeu foi acorrentado a uma rocha e tinha seu fígado devorado por uma águia todos os dias (ele se regenerava à noite) como punição por ter dado o fogo aos humanos. Sísifo foi condenado a empurrar uma pedra montanha acima eternamente, e Tântalo ficou para sempre com fome e sede, cercado por água e frutos que se afastavam quando ele tentava alcançá-los." },
      { heading: "Por que a mitologia ainda importa", text: "A mitologia grega não é apenas uma coleção de histórias antigas — é um espelho da natureza humana. Os mitos exploram temas universais como amor, inveja, coragem, hubris e destino que continuam relevantes milhares de anos depois. Se você ficou curioso para testar o quanto sabe sobre esse universo fascinante, temos um quiz perfeito para você!" },
    ],
  },
  {
    slug: "verdade-ou-mito-maiores-mitos-sobre-saude",
    title: "Verdade ou Mito: Os Maiores Mitos Sobre Saúde",
    excerpt:
      "Descubra quais crenças populares sobre saúde são reais e quais não passam de mitos sem base científica.",
    category: "Saúde",
    date: "2026-06-08",
    readTime: 6,
    relatedQuizSlug: "verdade-ou-mito-edicao-saude",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "PubMed — National Library of Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/", organization: "NIH/NLM", accessedAt: "2026-07-12" },
      { label: "Zhang, B. et al. (2020). Hyperactivation of sympathetic nerves drives depletion of melanocyte stem cells. Nature, 577, 676–681", organization: "Harvard University / Nature", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    disclaimer: "Este artigo tem finalidade informativa e educativa. As informações não substituem orientação médica profissional.",
    content: [
      { heading: "Crenças populares sob o microscópio", text: "Todos nós crescemos ouvindo conselhos de saúde passados de geração em geração: 'não saia com o cabelo molhado que você vai ficar gripado', 'comer manga com leite faz mal', 'estalar os dedos causa artrite'. Mas quantas dessas crenças são realmente verdadeiras? A ciência moderna já desmentiu muitas delas, e algumas respostas podem te surpreender." },
      { heading: "Cabelo molhado causa gripe?", text: "Mito: sair com o cabelo molhado causa gripe. Essa é uma das crenças mais populares do Brasil, mas a verdade é que gripes e resfriados são causados exclusivamente por vírus, não pelo frio ou pela umidade do cabelo. O que acontece é que, durante o inverno, as pessoas tendem a ficar mais tempo em ambientes fechados e com pouca ventilação, o que facilita a transmissão dos vírus. O cabelo molhado pode causar desconforto térmico, mas não tem relação direta com infecções respiratórias." },
      { heading: "Estalar os dedos causa artrite?", text: "Mito: estalar os dedos causa artrite. Esse mito é tão difundido que um médico chamado Donald Unger decidiu testar na própria pele. Durante mais de 60 anos, ele estalou os dedos de apenas uma das mãos todos os dias e comparou com a outra. O resultado? Nenhuma diferença. Ele publicou o estudo e até ganhou o prêmio Ig Nobel de Medicina em 2009. O som do estalo vem do colapso de bolhas de gás no líquido sinovial das articulações, e não causa danos permanentes." },
      { heading: "Ler no escuro prejudica a visão?", text: "Verdade: ler com pouca luz prejudica a visão — parcialmente. Ler em ambientes escuros não causa danos permanentes à visão, mas pode provocar fadiga ocular temporária, dores de cabeça e desconforto. Seus olhos precisam trabalhar mais para focar o texto, o que cansa a musculatura ocular. No entanto, estudos recentes mostram que a exposição prolongada à luz de telas em ambientes escuros pode contribuir para o desenvolvimento de miopia, especialmente em crianças." },
      { heading: "Manga com leite faz mal?", text: "Mito: comer manga com leite faz mal. Essa é uma lenda urbana tipicamente brasileira. Uma teoria popular atribui a origem ao período colonial, quando a combinação teria sido desencorajada para proteger o estoque de leite. Independentemente da origem, a afirmação não tem base científica: a mistura de manga com leite é perfeitamente segura e até nutritiva — pense em vitaminas e smoothies de manga." },
      { heading: "Estresse causa cabelos brancos?", text: "Verdade: o estresse pode causar cabelos brancos. Por muito tempo, essa crença foi considerada um mito, mas pesquisadores da Universidade de Harvard demonstraram em 2020 que o estresse ativa o sistema nervoso simpático e destrói as células-tronco responsáveis pela pigmentação dos fios de cabelo em camundongos. O estudo (Zhang et al., Nature, 2020) indicou que, uma vez que essas células são perdidas, o dano é permanente. Embora a pesquisa tenha sido conduzida em modelos animais, os mecanismos biológicos sugerem que o mesmo processo pode ocorrer em humanos." },
      { heading: "Café atrofia o crescimento?", text: "Mito: tomar café atrofia o crescimento. Essa crença se popularizou principalmente entre pais preocupados com seus filhos. Não existe nenhuma evidência científica de que a cafeína afete o crescimento. A altura é determinada principalmente pela genética e pela nutrição adequada durante a infância e adolescência. O café pode causar insônia e irritabilidade em crianças devido à sensibilidade à cafeína, mas não interfere no crescimento ósseo." },
      { heading: "Busque sempre evidências científicas", text: "A lição mais importante é sempre buscar informações baseadas em evidências científicas, em vez de aceitar crenças populares sem questionamento. A ciência evolui constantemente, e o que achávamos verdade ontem pode ser desmentido amanhã. Se você gostou de separar fatos de ficção, temos um quiz completo sobre mitos de saúde que vai testar todo o seu conhecimento!" },
    ],
  },
  {
    slug: "por-que-adoramos-quizzes-ciencia-da-diversao",
    title: "Por Que Adoramos Quizzes: A Ciência Por Trás da Diversão",
    excerpt:
      "Entenda por que quizzes são tão viciantes e o que a neurociência diz sobre o prazer de responder perguntas.",
    category: "Curiosidades",
    date: "2026-06-05",
    readTime: 5,
    relatedQuizSlug: "desafio-conhecimentos-gerais-8-perguntas",
    author: "Equipe Editorial MegaQuiz",
    authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
    sources: [
      { label: "Loewenstein, G. (1994). The psychology of curiosity. Psychological Bulletin, 116(1), 75–98", organization: "Carnegie Mellon University", accessedAt: "2026-07-12" },
      { label: "Tamir, D. & Mitchell, J. (2012). Disclosing information about the self is intrinsically rewarding. PNAS, 109(21), 8038–8043", organization: "Harvard University", accessedAt: "2026-07-12" },
    ],
    lastReviewedAt: "2026-07-12",
    content: [
      { heading: "O magnetismo das perguntas", text: "Você já percebeu como é difícil parar de fazer um quiz depois que começou? Seja um teste de personalidade nas redes sociais ou uma trivia sobre futebol, existe algo magnético nessas perguntas que nos prende até o final. A explicação está na forma como nosso cérebro funciona — e a ciência tem respostas fascinantes sobre por que adoramos quizzes." },
      { heading: "Dopamina: o prazer de acertar", text: "Quando respondemos uma pergunta corretamente em um quiz, nosso cérebro libera dopamina, o neurotransmissor associado à sensação de prazer e recompensa. É o mesmo mecanismo que nos faz sentir bem ao comer algo gostoso, receber um elogio ou completar uma tarefa. Cada acerto funciona como uma pequena vitória, e nosso cérebro quer mais. É por isso que quizzes de trivia são tão viciantes — cada pergunta é uma nova chance de sentir essa descarga de prazer." },
      { heading: "A teoria da lacuna de curiosidade", text: "O psicólogo George Loewenstein, da Universidade Carnegie Mellon, desenvolveu a teoria da lacuna de curiosidade para explicar por que sentimos uma necessidade quase irresistível de saber as respostas. Segundo essa teoria, quando identificamos uma lacuna entre o que sabemos e o que queremos saber, sentimos um desconforto que só é aliviado ao obter a informação. Um quiz explora isso perfeitamente: ao ler uma pergunta, nosso cérebro precisa da resposta, e não conseguimos simplesmente ignorar." },
      { heading: "Autoconhecimento e busca de identidade", text: "Os quizzes de personalidade ativam outro mecanismo poderoso: a necessidade de autoconhecimento. Psicólogos chamam isso de busca de identidade, um processo que, segundo Erik Erikson, dura a vida inteira. Quando um teste diz que você 'seria um elfo' ou que 'sua cidade ideal é Lisboa', isso satisfaz nossa curiosidade sobre nós mesmos. Mesmo que saibamos que o resultado é simplificado, gostamos de nos ver refletidos em categorias — é uma forma de validar quem somos ou descobrir facetas que não havíamos considerado." },
      { heading: "O efeito das redes sociais", text: "As redes sociais amplificaram exponencialmente o apelo dos quizzes. Compartilhar um resultado é uma forma de expressão social: ao postar 'Eu sou 87% nerd', você está comunicando algo sobre sua identidade para seus amigos. Isso ativa circuitos de conexão social no cérebro, pois gera comentários, comparações e conversas. Pesquisas da Universidade de Harvard mostraram que conteúdos que envolvem autorrevelação ativam as mesmas áreas cerebrais associadas à comida e ao dinheiro (Tamir & Mitchell, PNAS, 2012)." },
      { heading: "Competição e instinto social", text: "Existe também o fator competição. Quizzes de trivia frequentemente mostram sua pontuação ou comparam você com outros jogadores, ativando nosso instinto competitivo natural. Estudos em psicologia evolucionária sugerem que a competição por conhecimento era uma forma de ganhar status social em grupos humanos primitivos. Quem sabia mais sobre o ambiente, os animais e as plantas tinha mais chances de sobreviver e ser respeitado pelo grupo." },
      { heading: "Gamificação: aprender jogando", text: "A gamificação — o uso de elementos de jogos em contextos não lúdicos — explica por que quizzes são mais envolventes que simplesmente ler um texto informativo. Elementos como pontuação, vidas limitadas, timer e ranking transformam o aprendizado passivo em uma experiência ativa e emocional. Quando você tem apenas 3 vidas e erra uma pergunta, a tensão aumenta, o coração acelera e a atenção se aguça. É entretenimento e aprendizado ao mesmo tempo." },
      { heading: "Por que quizzes funcionam tão bem", text: "No fim das contas, os quizzes funcionam porque combinam vários dos maiores motivadores humanos: curiosidade, autoconhecimento, competição, conexão social e a busca por prazer. Não é à toa que bilhões de quizzes são feitos todos os anos ao redor do mundo. E agora que você entende a ciência, que tal colocar seu cérebro para trabalhar e testar seus conhecimentos?" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}
