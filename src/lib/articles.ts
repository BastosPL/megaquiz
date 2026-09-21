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
    title: "História das Copas do Mundo: O Que os Bastidores Revelam",
    excerpt:
      "De boicotes diplomáticos a estádios construídos às pressas: como dinheiro, política e rivalidades moldaram 96 anos de Copas.",
    category: "Esportes",
    date: "2026-06-15",
    readTime: 7,
    relatedQuizSlug: "quanto-voce-sabe-sobre-a-copa-2026",
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
    sources: [
      { label: "FIFA.com — History of the FIFA World Cup", url: "https://www.fifa.com/en/tournaments/mens/worldcup", organization: "FIFA", accessedAt: "2026-09-20" },
      { label: "Goldblatt, D. (2008). The Ball is Round: A Global History of Football", organization: "Penguin Books", accessedAt: "2026-09-20" },
      { label: "Britannica — FIFA World Cup", url: "https://www.britannica.com/sports/World-Cup-football", organization: "Encyclopædia Britannica", accessedAt: "2026-09-20" },
      { label: "Bellos, A. (2002). Futebol: The Brazilian Way of Life", organization: "Bloomsbury Publishing", accessedAt: "2026-09-20" },
    ],
    lastReviewedAt: "2026-09-20",
    content: [
      { text: "A Copa do Mundo costuma ser contada como uma sequência de gols, títulos e heróis em campo. Mas a história real do torneio é inseparável do que aconteceu fora dele: os boicotes que esvaziaram edições inteiras, as decisões políticas que escolheram sedes, as crises financeiras que quase cancelaram competições e os bastidores que explicam por que a Copa é o que é hoje. Este artigo conta a história do torneio pelo ângulo que raramente aparece nos compilados de curiosidades — o que moldou a Copa antes de a bola rolar." },
      { heading: "1930: um torneio que quase não existiu", text: "A ideia de um campeonato mundial de futebol foi debatida por quase três décadas antes de se concretizar. Jules Rimet, presidente da FIFA desde 1921, enfrentou resistência sistemática das federações europeias, que preferiam as Olimpíadas como vitrine. Quando o Uruguai se ofereceu para sediar e bancar todas as despesas — inclusive passagens e hospedagem dos times visitantes —, Rimet finalmente teve seu torneio. O problema: apenas 4 das 56 federações europeias aceitaram participar. A viagem de navio até Montevidéu durava 15 dias, e clubes europeus se recusaram a liberar jogadores por dois meses. O rei Romeno Carol II selecionou pessoalmente os convocados de seu país e garantiu que seus empregadores manteriam os salários durante a ausência — sem isso, a Romênia não teria ido." },
      { heading: "1950: o trauma que redesenhou a identidade brasileira", text: "O Maracanazo — a derrota do Brasil para o Uruguai na final de 1950 — não foi apenas um resultado esportivo. O jornalista e historiador Alex Bellos, em 'Futebol: The Brazilian Way of Life', argumenta que o evento provocou uma crise de identidade nacional num país que havia apostado o Maracanã (o maior estádio do planeta, construído às pressas para a ocasião) como símbolo de modernidade. A derrota gerou reflexões sobre raça e culpa que mancharam carreiras: o goleiro Barbosa e o zagueiro Bigode, ambos negros, foram publicamente responsabilizados. Barbosa carregou o estigma até a morte, em 2000, dizendo que no Brasil 'a pena máxima são 30 anos de prisão, mas eu fui condenado à perpétua'. A camisa branca da seleção foi abandonada — o amarelo-canário foi adotado em 1954 justamente para apagar a memória." },
      { heading: "A taça que sumiu — duas vezes, por razões opostas", text: "A Taça Jules Rimet foi roubada em março de 1966, em Londres, poucos meses antes da Copa inglesa. A polícia fracassou na busca; quem encontrou o troféu foi Pickles, um cão vira-lata de South Norwood, farejando debaixo de um arbusto. O dono de Pickles recebeu £6.000 de recompensa (mais que o prêmio dos jogadores campeões), e o cachorro virou celebridade nacional. Em 1983, já em posse permanente do Brasil desde o tricampeonato de 1970, a taça foi roubada novamente — desta vez no Rio de Janeiro, de uma vitrine da CBF protegida por um vidro à prova de bala na frente e madeira compensada atrás. Nunca foi recuperada. A principal teoria é que foi derretida e vendida como ouro." },
      { heading: "1978 e 2022: quando a geopolítica escolhe a sede", text: "A Copa de 1978 na Argentina foi disputada durante uma ditadura militar que usou o torneio como ferramenta de propaganda — o estádio do River Plate ficava a menos de 2 km de um dos centros de detenção e tortura do regime. O historiador David Goldblatt, em 'The Ball is Round', documenta como a junta militar investiu US$ 700 milhões na infraestrutura do evento para projetar uma imagem de estabilidade e modernidade. Décadas depois, a Copa de 2022 no Qatar reacendeu o mesmo debate: um país de 2,8 milhões de habitantes, sem tradição futebolística, gastou estimados US$ 220 bilhões — o evento esportivo mais caro da história — e enfrentou denúncias documentadas sobre condições de trabalho dos operários migrantes que construíram os estádios." },
      { heading: "7 a 1: a partida que o futebol brasileiro tentou explicar", text: "Na semifinal da Copa de 2014, a Alemanha marcou 5 gols contra o Brasil em 18 minutos no Mineirão — um colapso tático e emocional sem precedente nesse nível de competição. O placar final de 7 a 1 não é apenas um resultado; é um ponto de inflexão. A seleção brasileira entrou em campo sem Neymar (machucado) e sem Thiago Silva (suspenso), mas o problema era mais profundo: a estrutura tática de Luiz Felipe Scolari dependia de contenção emocional que ruiu no primeiro gol. A CBF levou anos para reconstruir um projeto técnico sério. O 7 a 1 também inaugurou uma era de memes como linguagem de luto coletivo — o brasileiro processou a derrota com humor porque não havia outro instrumento à altura do absurdo." },
      { heading: "De 32 para 48: a Copa de 2026 como experimento", text: "A expansão para 48 seleções em 2026 é a maior mudança de formato desde 1998. Com 104 jogos distribuídos entre 16 cidades de três países (EUA, México e Canadá), o torneio será um teste logístico sem precedente. A decisão de expandir foi aprovada em 2017 sob a presidência de Gianni Infantino e divide opiniões: defensores argumentam que mais países terão chance de participar (Copas anteriores excluíam sistematicamente África e Ásia); críticos apontam que mais jogos diluem a qualidade e aumentam o desgaste físico dos atletas. A FIFA projeta receita recorde de US$ 11 bilhões, quase o dobro de 2022." },
      { heading: "O que a história ensina", text: "A Copa do Mundo nunca foi apenas sobre futebol. Cada edição carrega as marcas do momento político, econômico e cultural em que aconteceu — das viagens de navio de 1930 aos estádios climatizados do deserto em 2022. Entender os bastidores não diminui o encanto do torneio; amplia. Os gols fazem a emoção, mas são as decisões fora do campo que determinam onde, como e por quem a Copa é jogada." },
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
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
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
    title: "Copa 2026: Como os Dados Apontam os Favoritos ao Título",
    excerpt:
      "Estatísticas de clubes, evolução tática e histórico em Copas: o que os números dizem sobre quem chega mais forte ao torneio de 48 seleções.",
    category: "Esportes",
    date: "2026-06-18",
    readTime: 8,
    relatedQuizSlug: "qual-artilheiro-historico-voce-e",
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
    sources: [
      { label: "FIFA.com — FIFA World Cup 26", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026", organization: "FIFA", accessedAt: "2026-09-20" },
      { label: "CIES Football Observatory — Weekly Post", url: "https://football-observatory.com/", organization: "CIES / Université de Neuchâtel", accessedAt: "2026-09-20" },
      { label: "Wilson, J. (2018). Inverting the Pyramid: The History of Football Tactics", organization: "Orion Publishing", accessedAt: "2026-09-20" },
      { label: "FBref — Football Statistics and History", url: "https://fbref.com/", organization: "Sports Reference", accessedAt: "2026-09-20" },
    ],
    lastReviewedAt: "2026-09-20",
    disclaimer: "Estatísticas e situação de clubes refletem o momento da publicação. Convocações, lesões e transferências podem alterar a participação dos atletas.",
    content: [
      { text: "Listas de 'melhores jogadores' antes de uma Copa costumam ser exercícios de torcida disfarçados de análise. Este artigo tenta algo diferente: usar dados de desempenho em clubes, métricas táticas e padrões históricos de Copas para identificar quem — e quais seleções — chegam ao torneio de 2026 com mais fundamento estatístico. Nenhum dado prevê o futuro, mas alguns indicadores separam expectativa de evidência." },
      { heading: "O que os dados de clube realmente dizem", text: "O CIES Football Observatory, ligado à Universidade de Neuchâtel (Suíça), publica semanalmente métricas de desempenho que vão além de gols e assistências. Dois indicadores se destacam para prever rendimento em seleções: participação em ações decisivas (gols + assistências + passes-chave por 90 minutos) e minutos jogados em competições de alta pressão (Champions League, fases eliminatórias). Jogadores que acumulam alta carga em ambos os indicadores tendem a manter desempenho sob pressão de Copa — o ambiente mais próximo de uma final de Champions em intensidade e exposição midiática." },
      { heading: "Mbappé e o paradoxo da velocidade", text: "Kylian Mbappé, aos 27 anos, chega à Copa com um perfil estatístico curioso. Suas métricas de finalização no Real Madrid (expected goals vs. gols reais) mostram eficiência acima da média, mas sua participação em construção caiu em relação ao período no PSG. Na prática, Mbappé se tornou mais letal e menos versátil — o que funciona no Real Madrid, onde Bellingham e Vinícius Jr. compartilham a criação, pode ser um problema na seleção francesa, que depende mais dele para construir jogadas. O hat-trick na final de 2022 prova que ele pode decidir qualquer jogo; a questão é se a França construiu um sistema à altura." },
      { heading: "A tese tática da Argentina: por que o coletivo supera o indivíduo", text: "A Argentina de Scaloni não tem o melhor jogador do torneio, mas pode ter o melhor sistema. Jonathan Wilson, em 'Inverting the Pyramid', argumenta que Copas são vencidas por equipes com identidade tática consolidada — e a Argentina é, estatisticamente, a seleção com mais tempo de trabalho contínuo sob o mesmo treinador entre as favoritas. Scaloni assumiu em 2018 e nunca saiu. O resultado: jogadores como Enzo Fernández, Julián Álvarez e Lautaro Martínez não precisam de adaptação — eles cresceram dentro do sistema. Dados do FBref mostram que a Argentina tem a maior taxa de conversão de posse em chances claras de gol entre as 10 primeiras do ranking FIFA." },
      { heading: "Vinícius Jr. e o fator emocional brasileiro", text: "Vinícius Júnior carrega uma pressão que transcende estatísticas. O Brasil não vence uma Copa desde 2002 — a maior seca desde que o país começou a ganhar, em 1958. Vini Jr. chegou ao patamar de melhor jogador do mundo em termos de dribles completados e ações em terço final (dados FBref, temporada 2025-26), mas seu desempenho pela seleção historicamente fica abaixo do rendimento no Real Madrid. A diferença não é técnica — é contextual. No Real, ele opera com companheiros que jogam juntos o ano inteiro; na seleção, os mecanismos táticos são reconstruídos a cada convocação. Se Dorival Jr. conseguir criar automatismos em tão pouco tempo de preparação, o Brasil tem argumento técnico para ir longe." },
      { heading: "A Alemanha como azarão com fundamento", text: "Florian Wirtz e Jamal Musiala formam a dupla criativa mais produtiva da Europa em termos de expected assists + progressive carries por 90 minutos. Wirtz, agora no Liverpool, acumulou experiência em eliminatórias de altíssima pressão na Premier League. Musiala, no Bayern, é o jogador com mais dribles bem-sucedidos da Bundesliga em 2025-26. A Alemanha, que decepcionou em 2018 e 2022, chega sem a pressão de favorita — e historicamente, isso ajuda: 4 dos 5 títulos mundiais foram conquistados quando os alemães não eram cotados como primeiro ou segundo favorito." },
      { heading: "O fator goleiro: estatisticamente decisivo em mata-mata", text: "Dados históricos mostram que, em fases eliminatórias de Copa, goleiros explicam uma parcela desproporcional do resultado. Desde 2002, o goleiro titular do campeão teve taxa de defesas acima de 78% no torneio. Alisson Becker (Brasil), Courtois (Bélgica) e Donnarumma (Itália) estão entre os goleiros com melhor expected goals prevented (diferença entre gols esperados e gols sofridos) nas últimas três temporadas europeias. Em jogos decididos por um gol de diferença — que representam mais de 60% das eliminatórias de Copa — o goleiro é frequentemente o jogador mais valioso em campo." },
      { heading: "O que as estatísticas não capturam", text: "Nenhuma métrica mede o que acontece quando 80 mil pessoas cantam o hino e o árbitro apita. A Copa é o único torneio onde jogadores de classe mundial jogam com companheiros que veem poucas vezes por ano, sob pressão de um país inteiro, em cidades que nunca visitaram, com fusos horários que desregulam o sono. Os dados apontam tendências, mas a Copa premia quem se adapta ao caos. E é exatamente isso que torna o torneio imprevisível — e irresistível." },
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
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
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
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
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
    author: "Patrick Bastos",
    authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
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
