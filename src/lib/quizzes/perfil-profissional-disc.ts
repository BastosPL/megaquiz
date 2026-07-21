import type { Quiz } from "@/lib/types";

export const perfilProfissionalDisc: Quiz = {
  id: "perfil-profissional-disc",
  slug: "descubra-seu-perfil-profissional",
  title: "Descubra seu Perfil Profissional",
  description:
    "Baseado no método DISC usado por grandes empresas. Descubra seu estilo de liderança, comunicação e trabalho em equipe!",
  type: "personality",
  category: "carreira",
  emoji: "💼",
  color: "#0EA5E9",
  tags: ["carreira", "profissional", "DISC", "lideranca", "personalidade", "trabalho"],
  createdAt: "2026-06-08",
  featured: true,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [
    { label: "Marston, W. M. (1928). Emotions of Normal People", organization: "Kegan Paul", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Inspirado no modelo DISC, este quiz recreativo explora seu estilo de comunicação e trabalho em equipe.",
  disclaimer: "Este quiz é uma versão simplificada e recreativa inspirada no modelo DISC. Não substitui uma avaliação DISC profissional certificada. Empresas mencionadas nos resultados são exemplos ilustrativos, sem qualquer endosso real. Resultado para entretenimento e autoconhecimento.",
  disclaimerResult: "Resultado recreativo inspirado no modelo DISC. Não constitui avaliação profissional certificada.",
  methodologyNote: "Entenda seu resultado\n\nO modelo DISC identifica quatro dimensões comportamentais:\n• D (Dominância): Foco em resultados e decisões rápidas\n• I (Influência): Foco em comunicação e motivação de pessoas\n• S (Estabilidade): Foco em consistência e apoio à equipe\n• C (Conformidade): Foco em precisão, dados e qualidade\n\nSeu perfil predominante indica uma tendência comportamental, não uma limitação. Pessoas combinam traços de múltiplas dimensões em diferentes contextos.\n\nEste resultado é recreativo e não substitui uma avaliação DISC profissional.",
  profiles: [
    {
      id: "dominante",
      title: "Dominante (D) — O Líder Nato",
      emoji: "🦁",
      description:
        "Você é movido por resultados e desafios! Seu perfil é de liderança natural — você toma decisões rápidas, não tem medo de riscos e sabe colocar ordem no caos. Profissões ideais: CEO, empreendedor, gerente de projetos, diretor comercial. Comum entre líderes focados em resultados e ambientes competitivos. Seu lema: 'Me dá o problema que eu resolvo.'",
    },
    {
      id: "influente",
      title: "Influente (I) — O Comunicador",
      emoji: "🌟",
      description:
        "Você é pura energia social! Seu carisma e poder de persuasão são suas maiores armas. Você motiva equipes, cria conexões e vende qualquer ideia. Profissões ideais: marketing, vendas, RH, palestrante, influencer, relações públicas. Frequente em ambientes colaborativos e criativos. Seu lema: 'Pessoas primeiro, resultados sempre.'",
    },
    {
      id: "estavel",
      title: "Estável (S) — O Estrategista Confiável",
      emoji: "🛡️",
      description:
        "Você é a rocha da equipe! Leal, paciente e consistente — você é quem mantém tudo funcionando quando o caos aparece. Excelente ouvinte e mediador de conflitos. Profissões ideais: analista, suporte, gestão de processos, professor, enfermeiro, contador. Valorizado em ambientes que exigem consistência e trabalho em equipe. Seu lema: 'Passo firme, resultado sólido.'",
    },
    {
      id: "analitico",
      title: "Analítico (C) — O Perfeccionista Estratégico",
      emoji: "🔬",
      description:
        "Você é movido por dados e precisão! Detalhista, lógico e criterioso — nada passa despercebido por você. Você é quem encontra o erro que ninguém viu e cria sistemas perfeitos. Profissões ideais: engenheiro, programador, cientista de dados, auditor, pesquisador, médico. Essencial em áreas que exigem precisão, qualidade e pensamento crítico. Seu lema: 'Se não tem dados, é achismo.'",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Seu chefe pede pra você liderar um projeto urgente que ninguém quer. Você...",
      options: [
        { id: "a", text: "Aceito na hora — adoro desafios difíceis", profilePoints: { dominante: 3 } },
        { id: "b", text: "Reúno a equipe pra motivar todo mundo", profilePoints: { influente: 3 } },
        { id: "c", text: "Analiso os riscos antes de aceitar", profilePoints: { analitico: 3 } },
        { id: "d", text: "Aceito e crio um plano passo a passo", profilePoints: { estavel: 3 } },
        { id: "e", text: "Depende do projeto, não tenho padrão fixo", profilePoints: { influente: 1, estavel: 1, analitico: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Num conflito no trabalho entre dois colegas, você...",
      options: [
        { id: "a", text: "Resolvo direto — falo o que precisa ser dito", profilePoints: { dominante: 3 } },
        { id: "b", text: "Converso com os dois e busco harmonizar", profilePoints: { influente: 3, estavel: 1 } },
        { id: "c", text: "Analiso quem está certo com base nos fatos", profilePoints: { analitico: 3 } },
        { id: "d", text: "Fico neutro e apoio quem precisar", profilePoints: { estavel: 3 } },
      ],
    },
    {
      id: "q3",
      text: "O que mais te motiva no trabalho?",
      options: [
        { id: "a", text: "Poder, autonomia e resultados visíveis", profilePoints: { dominante: 3 } },
        { id: "b", text: "Reconhecimento e trabalhar com pessoas", profilePoints: { influente: 3 } },
        { id: "c", text: "Estabilidade e um bom ambiente de trabalho", profilePoints: { estavel: 3 } },
        { id: "d", text: "Desafios intelectuais e aprendizado", profilePoints: { analitico: 3 } },
        { id: "e", text: "Dinheiro, sinceramente", profilePoints: { dominante: 2, influente: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Como você toma decisões importantes?",
      options: [
        { id: "a", text: "Rápido e com confiança — odeio enrolação", profilePoints: { dominante: 3 } },
        { id: "b", text: "Converso com pessoas de confiança", profilePoints: { influente: 2, estavel: 2 } },
        { id: "c", text: "Pesquiso tudo, analiso dados e depois decido", profilePoints: { analitico: 3 } },
        { id: "d", text: "Com calma, peso prós e contras", profilePoints: { estavel: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Numa reunião de trabalho, você normalmente é quem...",
      options: [
        { id: "a", text: "Conduz a reunião e cobra prazos", profilePoints: { dominante: 3 } },
        { id: "b", text: "Anima o grupo e traz ideias criativas", profilePoints: { influente: 3 } },
        { id: "c", text: "Escuta atentamente e toma notas", profilePoints: { estavel: 2, analitico: 2 } },
        { id: "d", text: "Questiona os dados e propõe melhorias", profilePoints: { analitico: 3 } },
        { id: "e", text: "Fica quieto esperando acabar logo", profilePoints: { estavel: 2, analitico: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Seu maior defeito no trabalho é...",
      options: [
        { id: "a", text: "Sou impaciente e às vezes autoritário", profilePoints: { dominante: 3 } },
        { id: "b", text: "Falo demais e perco o foco", profilePoints: { influente: 3 } },
        { id: "c", text: "Demoro pra me adaptar a mudanças", profilePoints: { estavel: 3 } },
        { id: "d", text: "Sou perfeccionista demais e crítico", profilePoints: { analitico: 3 } },
        { id: "e", text: "Nenhum desses me define", profilePoints: { dominante: 1, influente: 1, estavel: 1 } },
      ],
    },
    {
      id: "q7",
      text: "Se você pudesse escolher, trabalharia...",
      options: [
        { id: "a", text: "Como meu próprio chefe, abrindo um negócio", profilePoints: { dominante: 3 } },
        { id: "b", text: "Em equipe grande, ambiente divertido", profilePoints: { influente: 3 } },
        { id: "c", text: "CLT numa empresa sólida e estável", profilePoints: { estavel: 3 } },
        { id: "d", text: "Remoto, focado em tarefas técnicas", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Como você lida com prazos apertados?",
      options: [
        { id: "a", text: "Meto a cara e faço acontecer — pressão me motiva", profilePoints: { dominante: 3 } },
        { id: "b", text: "Delego tarefas e motivo a equipe", profilePoints: { influente: 3 } },
        { id: "c", text: "Sigo meu plano e não entro em pânico", profilePoints: { estavel: 3 } },
        { id: "d", text: "Priorizo o essencial e corto o desnecessário", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q9",
      text: "O que as pessoas mais falam sobre você?",
      options: [
        { id: "a", text: "Que eu resolvo qualquer problema", profilePoints: { dominante: 3 } },
        { id: "b", text: "Que eu sou carismático e fácil de conversar", profilePoints: { influente: 3 } },
        { id: "c", text: "Que eu sou confiável e leal", profilePoints: { estavel: 3 } },
        { id: "d", text: "Que eu sou inteligente e detalhista", profilePoints: { analitico: 3 } },
        { id: "e", text: "Mistura de vários desses", profilePoints: { dominante: 1, influente: 1, estavel: 1, analitico: 1 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com você no trabalho?",
      options: [
        { id: "a", text: "Não me diga como fazer, me diga o resultado que quer", profilePoints: { dominante: 3 } },
        { id: "b", text: "Juntos somos mais fortes!", profilePoints: { influente: 3 } },
        { id: "c", text: "Devagar e sempre chega primeiro", profilePoints: { estavel: 3 } },
        { id: "d", text: "O diabo mora nos detalhes", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q11",
      text: "Você recebe um feedback negativo. Sua reação é...",
      options: [
        { id: "a", text: "Discordo e defendo meu ponto", profilePoints: { dominante: 3 } },
        { id: "b", text: "Fico chateado mas sigo em frente", profilePoints: { influente: 2, estavel: 1 } },
        { id: "c", text: "Reflito com calma e vejo o que posso melhorar", profilePoints: { estavel: 3 } },
        { id: "d", text: "Analiso se o feedback tem base concreta", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q12",
      text: "Se você ganhasse R$1 milhão amanhã, faria o quê?",
      options: [
        { id: "a", text: "Abriria meu próprio negócio imediatamente", profilePoints: { dominante: 3 } },
        { id: "b", text: "Viajaria o mundo e investiria em experiências", profilePoints: { influente: 3 } },
        { id: "c", text: "Investiria com segurança pra ter renda passiva", profilePoints: { estavel: 3 } },
        { id: "d", text: "Estudaria o melhor investimento por meses antes de decidir", profilePoints: { analitico: 3 } },
      ],
    },
  ],
};
