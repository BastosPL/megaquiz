import type { Quiz } from "@/lib/types";

export const areaTiIdeal: Quiz = {
  id: "area-ti-ideal",
  slug: "qual-area-de-ti-combina-com-voce",
  title: "Qual área de TI combina com você?",
  description:
    "Front-end, back-end, dados, cyber ou IA? Descubra onde você brilharia no mundo tech!",
  type: "personality",
  category: "carreira",
  emoji: "💻",
  color: "#7C3AED",
  tags: ["carreira", "tecnologia", "programacao", "TI", "personalidade"],
  createdAt: "2026-06-08",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "Guia Salarial Robert Half 2026 — Tecnologia", organization: "Robert Half", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "A área de TI certa depende do que te motiva: resolver problemas lógicos, criar interfaces, proteger sistemas ou analisar dados. Veja qual caminho faz mais sentido para você.",
  disclaimer: "Este quiz é para entretenimento e exploração de interesses na área de tecnologia. Não substitui orientação profissional. Faixas salariais são estimativas aproximadas do mercado brasileiro e podem variar significativamente.",
  disclaimerResult: "Resultado recreativo. Faixas salariais são estimativas e não constituem orientação de carreira.",
  profiles: [
    {
      id: "frontend",
      title: "Front-End & Design",
      emoji: "🎨",
      description:
        "Você é visual e criativo! Sua área ideal é Front-End Development ou UI/UX Design. Você transforma ideias em interfaces bonitas e funcionais. Ferramentas pra você: React, Figma, Tailwind CSS. Salário médio: R$6-15k. Dica: monte um portfólio no Behance e GitHub!",
    },
    {
      id: "backend",
      title: "Back-End & Infraestrutura",
      emoji: "⚙️",
      description:
        "Você é lógico e adora resolver problemas complexos! Sua área é Back-End, APIs e Cloud. Você constrói os sistemas que fazem tudo funcionar por trás. Ferramentas pra você: Node.js, Python, AWS, Docker. Salário médio: R$8-20k. Dica: contribua em projetos open source!",
    },
    {
      id: "dados",
      title: "Dados & Inteligência Artificial",
      emoji: "📊",
      description:
        "Você é curioso e ama números! Sua área ideal é Ciência de Dados, Machine Learning ou BI. Você transforma dados em decisões inteligentes. Ferramentas pra você: Python, SQL, Power BI, TensorFlow. Salário médio: R$10-25k. Dica: faça projetos no Kaggle!",
    },
    {
      id: "cyber",
      title: "Cibersegurança",
      emoji: "🔒",
      description:
        "Você é desconfiado (no bom sentido) e adora investigar! Sua área é Segurança da Informação. Você protege sistemas e encontra vulnerabilidades antes dos hackers. Ferramentas pra você: Kali Linux, Burp Suite, OWASP. Salário médio: R$10-30k. Dica: tire certificações como CEH ou CompTIA!",
    },
    {
      id: "produto",
      title: "Gestão de Produto & Inovação",
      emoji: "🚀",
      description:
        "Você é líder, comunicador e estratégico! Sua área é Product Management ou Inovação. Você conecta tecnologia com negócios e toma decisões que movem empresas. Ferramentas pra você: Jira, Notion, Analytics. Salário médio: R$12-30k. Dica: aprenda sobre metodologias ágeis!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "O que te atrai mais num trabalho?",
      options: [
        { id: "a", text: "Criar coisas bonitas que as pessoas usam", profilePoints: { frontend: 3 } },
        { id: "b", text: "Resolver problemas lógicos complexos", profilePoints: { backend: 3 } },
        { id: "c", text: "Analisar números e encontrar padrões", profilePoints: { dados: 3 } },
        { id: "d", text: "Investigar e proteger contra ameaças", profilePoints: { cyber: 3 } },
        { id: "e", text: "Liderar equipes e definir estratégias", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Seu hobby favorito seria...",
      options: [
        { id: "a", text: "Desenhar, fotografar ou editar vídeos", profilePoints: { frontend: 3 } },
        { id: "b", text: "Montar e desmontar coisas pra ver como funciona", profilePoints: { backend: 3 } },
        { id: "c", text: "Jogos de estratégia ou quebra-cabeça", profilePoints: { dados: 2, cyber: 1 } },
        { id: "d", text: "Documentários sobre crimes ou espionagem", profilePoints: { cyber: 3 } },
        { id: "e", text: "Organizar eventos ou liderar grupos", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Na escola/faculdade você era mais...",
      options: [
        { id: "a", text: "Artes e criatividade", profilePoints: { frontend: 3 } },
        { id: "b", text: "Matemática e lógica", profilePoints: { backend: 2, dados: 2 } },
        { id: "c", text: "Ciências e pesquisa", profilePoints: { dados: 3 } },
        { id: "d", text: "O que questionava tudo", profilePoints: { cyber: 3 } },
        { id: "e", text: "O líder dos trabalhos em grupo", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Seu celular tem mais apps de...",
      options: [
        { id: "a", text: "Instagram, Pinterest, Canva", profilePoints: { frontend: 3 } },
        { id: "b", text: "GitHub, Termux, ferramentas tech", profilePoints: { backend: 3, cyber: 1 } },
        { id: "c", text: "Planilhas, gráficos, notícias de economia", profilePoints: { dados: 3 } },
        { id: "d", text: "VPN, autenticador, gerenciador de senhas", profilePoints: { cyber: 3 } },
        { id: "e", text: "Notion, Trello, Slack", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual desses problemas você resolveria com mais prazer?",
      options: [
        { id: "a", text: "Um site feio que ninguém consegue usar", profilePoints: { frontend: 3 } },
        { id: "b", text: "Um sistema lento que trava toda hora", profilePoints: { backend: 3 } },
        { id: "c", text: "Uma empresa que não sabe por que está perdendo clientes", profilePoints: { dados: 3 } },
        { id: "d", text: "Uma empresa que foi hackeada e perdeu dados", profilePoints: { cyber: 3 } },
        { id: "e", text: "Um produto que ninguém sabe pra onde vai", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Se você fosse um super-herói, seu poder seria...",
      options: [
        { id: "a", text: "Criar ilusões visuais incríveis", profilePoints: { frontend: 3 } },
        { id: "b", text: "Controlar máquinas e sistemas", profilePoints: { backend: 3 } },
        { id: "c", text: "Prever o futuro com base em probabilidades", profilePoints: { dados: 3 } },
        { id: "d", text: "Ser invisível e detectar mentiras", profilePoints: { cyber: 3 } },
        { id: "e", text: "Convencer qualquer pessoa de qualquer coisa", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que mais te irrita no trabalho?",
      options: [
        { id: "a", text: "Coisas feias e mal organizadas visualmente", profilePoints: { frontend: 3 } },
        { id: "b", text: "Gambiarra que funciona mas ninguém entende", profilePoints: { backend: 3 } },
        { id: "c", text: "Decisões baseadas em 'achismo'", profilePoints: { dados: 3, analitico: 1 } },
        { id: "d", text: "Pessoas que usam '123456' como senha", profilePoints: { cyber: 3 } },
        { id: "e", text: "Falta de direção e prioridades claras", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual salário e estilo de vida te atrai mais?",
      options: [
        { id: "a", text: "Freelancer, trabalhar de café, portfólio criativo", profilePoints: { frontend: 3 } },
        { id: "b", text: "Remoto, bom salário, desafios técnicos", profilePoints: { backend: 3 } },
        { id: "c", text: "Salário alto, multinacional, bonificação por performance", profilePoints: { dados: 3, produto: 1 } },
        { id: "d", text: "Trabalho sigiloso, premium, consultoria especializada", profilePoints: { cyber: 3 } },
        { id: "e", text: "Startup, equity, crescer com a empresa", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Se tivesse que aprender algo novo AGORA, seria...",
      options: [
        { id: "a", text: "Animação, motion design ou 3D", profilePoints: { frontend: 3 } },
        { id: "b", text: "Rust, Go ou arquitetura de sistemas", profilePoints: { backend: 3 } },
        { id: "c", text: "Python pra IA ou estatística avançada", profilePoints: { dados: 3 } },
        { id: "d", text: "Hacking ético ou pentest", profilePoints: { cyber: 3 } },
        { id: "e", text: "MBA, gestão ou negociação", profilePoints: { produto: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual desses te descreve melhor?",
      options: [
        { id: "a", text: "Criativo, visual, sensível à estética", profilePoints: { frontend: 3 } },
        { id: "b", text: "Lógico, focado, gosto de eficiência", profilePoints: { backend: 3 } },
        { id: "c", text: "Curioso, analítico, amo aprender", profilePoints: { dados: 3 } },
        { id: "d", text: "Paranoico (no bom sentido), investigativo", profilePoints: { cyber: 3 } },
        { id: "e", text: "Comunicativo, estratégico, visionário", profilePoints: { produto: 3 } },
      ],
    },
  ],
};
