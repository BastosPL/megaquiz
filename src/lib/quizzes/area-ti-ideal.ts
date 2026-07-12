import type { Quiz } from "@/lib/types";

export const areaTiIdeal: Quiz = {
  id: "area-ti-ideal",
  slug: "qual-area-de-ti-combina-com-voce",
  title: "Qual area de TI combina com voce?",
  description:
    "Front-end, back-end, dados, cyber ou IA? Descubra onde voce brilharia no mundo tech!",
  type: "personality",
  category: "carreira",
  emoji: "💻",
  color: "#7C3AED",
  tags: ["carreira", "tecnologia", "programacao", "TI", "personalidade"],
  createdAt: "2026-06-08",
  featured: true,
  profiles: [
    {
      id: "frontend",
      title: "Front-End & Design",
      emoji: "🎨",
      description:
        "Voce e visual e criativo! Sua area ideal e Front-End Development ou UI/UX Design. Voce transforma ideias em interfaces bonitas e funcionais. Ferramentas pra voce: React, Figma, Tailwind CSS. Salario medio: R$6-15k. Dica: monte um portfolio no Behance e GitHub!",
    },
    {
      id: "backend",
      title: "Back-End & Infraestrutura",
      emoji: "⚙️",
      description:
        "Voce e logico e adora resolver problemas complexos! Sua area e Back-End, APIs e Cloud. Voce constroi os sistemas que fazem tudo funcionar por tras. Ferramentas pra voce: Node.js, Python, AWS, Docker. Salario medio: R$8-20k. Dica: contribua em projetos open source!",
    },
    {
      id: "dados",
      title: "Dados & Inteligencia Artificial",
      emoji: "📊",
      description:
        "Voce e curioso e ama numeros! Sua area ideal e Ciencia de Dados, Machine Learning ou BI. Voce transforma dados em decisoes inteligentes. Ferramentas pra voce: Python, SQL, Power BI, TensorFlow. Salario medio: R$10-25k. Dica: faca projetos no Kaggle!",
    },
    {
      id: "cyber",
      title: "Cyberseguranca",
      emoji: "🔒",
      description:
        "Voce e desconfiado (no bom sentido) e adora investigar! Sua area e Seguranca da Informacao. Voce protege sistemas e encontra vulnerabilidades antes dos hackers. Ferramentas pra voce: Kali Linux, Burp Suite, OWASP. Salario medio: R$10-30k. Dica: tire certificacoes como CEH ou CompTIA!",
    },
    {
      id: "produto",
      title: "Gestao de Produto & Inovacao",
      emoji: "🚀",
      description:
        "Voce e lider, comunicador e estrategico! Sua area e Product Management ou Inovacao. Voce conecta tecnologia com negocios e toma decisoes que movem empresas. Ferramentas pra voce: Jira, Notion, Analytics. Salario medio: R$12-30k. Dica: aprenda sobre metodologias ageis!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "O que te atrai mais num trabalho?",
      options: [
        { id: "a", text: "Criar coisas bonitas que as pessoas usam", profilePoints: { frontend: 3 } },
        { id: "b", text: "Resolver problemas logicos complexos", profilePoints: { backend: 3 } },
        { id: "c", text: "Analisar numeros e encontrar padroes", profilePoints: { dados: 3 } },
        { id: "d", text: "Investigar e proteger contra ameacas", profilePoints: { cyber: 3 } },
        { id: "e", text: "Liderar equipes e definir estrategias", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Seu hobbie favorito seria...",
      options: [
        { id: "a", text: "Desenhar, fotografar ou editar videos", profilePoints: { frontend: 3 } },
        { id: "b", text: "Montar e desmontar coisas pra ver como funciona", profilePoints: { backend: 3 } },
        { id: "c", text: "Jogos de estrategia ou quebra-cabeca", profilePoints: { dados: 2, cyber: 1 } },
        { id: "d", text: "Documentarios sobre crimes ou espionagem", profilePoints: { cyber: 3 } },
        { id: "e", text: "Organizar eventos ou liderar grupos", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Na escola/faculdade voce era mais...",
      options: [
        { id: "a", text: "Artes e criatividade", profilePoints: { frontend: 3 } },
        { id: "b", text: "Matematica e logica", profilePoints: { backend: 2, dados: 2 } },
        { id: "c", text: "Ciencias e pesquisa", profilePoints: { dados: 3 } },
        { id: "d", text: "O que questionava tudo", profilePoints: { cyber: 3 } },
        { id: "e", text: "O lider dos trabalhos em grupo", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Seu celular tem mais apps de...",
      options: [
        { id: "a", text: "Instagram, Pinterest, Canva", profilePoints: { frontend: 3 } },
        { id: "b", text: "GitHub, Termux, ferramentas tech", profilePoints: { backend: 3, cyber: 1 } },
        { id: "c", text: "Planilhas, graficos, noticias de economia", profilePoints: { dados: 3 } },
        { id: "d", text: "VPN, autenticador, gerenciador de senhas", profilePoints: { cyber: 3 } },
        { id: "e", text: "Notion, Trello, Slack", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual desses problemas voce resolveria com mais prazer?",
      options: [
        { id: "a", text: "Um site feio que ninguem consegue usar", profilePoints: { frontend: 3 } },
        { id: "b", text: "Um sistema lento que trava toda hora", profilePoints: { backend: 3 } },
        { id: "c", text: "Uma empresa que nao sabe por que esta perdendo clientes", profilePoints: { dados: 3 } },
        { id: "d", text: "Uma empresa que foi hackeada e perdeu dados", profilePoints: { cyber: 3 } },
        { id: "e", text: "Um produto que ninguem sabe pra onde vai", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Se voce fosse um super-heroi, seu poder seria...",
      options: [
        { id: "a", text: "Criar ilusoes visuais incriveis", profilePoints: { frontend: 3 } },
        { id: "b", text: "Controlar maquinas e sistemas", profilePoints: { backend: 3 } },
        { id: "c", text: "Prever o futuro com base em probabilidades", profilePoints: { dados: 3 } },
        { id: "d", text: "Ser invisivel e detectar mentiras", profilePoints: { cyber: 3 } },
        { id: "e", text: "Convencer qualquer pessoa de qualquer coisa", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que mais te irrita no trabalho?",
      options: [
        { id: "a", text: "Coisas feias e mal organizadas visualmente", profilePoints: { frontend: 3 } },
        { id: "b", text: "Gambiarra que funciona mas ninguem entende", profilePoints: { backend: 3 } },
        { id: "c", text: "Decisoes baseadas em 'achismo'", profilePoints: { dados: 3, analitico: 1 } },
        { id: "d", text: "Pessoas que usam '123456' como senha", profilePoints: { cyber: 3 } },
        { id: "e", text: "Falta de direcao e prioridades claras", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual salario e estilo de vida te atrai mais?",
      options: [
        { id: "a", text: "Freelancer, trabalhar de cafe, portfolio criativo", profilePoints: { frontend: 3 } },
        { id: "b", text: "Remoto, bom salario, desafios tecnicos", profilePoints: { backend: 3 } },
        { id: "c", text: "Salario alto, multinacional, bonificacao por performance", profilePoints: { dados: 3, produto: 1 } },
        { id: "d", text: "Trabalho sigiloso, premium, consultoria especializada", profilePoints: { cyber: 3 } },
        { id: "e", text: "Startup, equity, crescer com a empresa", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Se tivesse que aprender algo novo AGORA, seria...",
      options: [
        { id: "a", text: "Animacao, motion design ou 3D", profilePoints: { frontend: 3 } },
        { id: "b", text: "Rust, Go ou arquitetura de sistemas", profilePoints: { backend: 3 } },
        { id: "c", text: "Python pra IA ou estatistica avancada", profilePoints: { dados: 3 } },
        { id: "d", text: "Hacking etico ou pentest", profilePoints: { cyber: 3 } },
        { id: "e", text: "MBA, gestao ou negociacao", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual desses te descreve melhor?",
      options: [
        { id: "a", text: "Criativo, visual, sensivel a estetica", profilePoints: { frontend: 3 } },
        { id: "b", text: "Logico, focado, gosto de eficiencia", profilePoints: { backend: 3 } },
        { id: "c", text: "Curioso, analitico, amo aprender", profilePoints: { dados: 3 } },
        { id: "d", text: "Paranoico (no bom sentido), investigativo", profilePoints: { cyber: 3 } },
        { id: "e", text: "Comunicativo, estrategico, visionario", profilePoints: { produto: 3 } },
      ],
    },
  ],
};
