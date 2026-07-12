import type { Quiz } from "@/lib/types";

export const perfilProfissionalDisc: Quiz = {
  id: "perfil-profissional-disc",
  slug: "descubra-seu-perfil-profissional",
  title: "Descubra seu Perfil Profissional",
  description:
    "Baseado no metodo DISC usado por grandes empresas. Descubra seu estilo de lideranca, comunicacao e trabalho em equipe!",
  type: "personality",
  category: "carreira",
  emoji: "💼",
  color: "#0EA5E9",
  tags: ["carreira", "profissional", "DISC", "lideranca", "personalidade", "trabalho"],
  createdAt: "2026-06-08",
  featured: true,
  profiles: [
    {
      id: "dominante",
      title: "Dominante (D) — O Lider Nato",
      emoji: "🦁",
      description:
        "Voce e movido por resultados e desafios! Seu perfil e de lideranca natural — voce toma decisoes rapidas, nao tem medo de riscos e sabe colocar ordem no caos. Profissoes ideais: CEO, empreendedor, gerente de projetos, diretor comercial. Empresas como Amazon, Tesla e XP valorizam muito esse perfil. Seu lema: 'Me da o problema que eu resolvo.'",
    },
    {
      id: "influente",
      title: "Influente (I) — O Comunicador",
      emoji: "🌟",
      description:
        "Voce e pura energia social! Seu carisma e poder de persuasao sao suas maiores armas. Voce motiva equipes, cria conexoes e vende qualquer ideia. Profissoes ideais: marketing, vendas, RH, palestrante, influencer, relacoes publicas. Empresas como Google, Nubank e Magazine Luiza adoram esse perfil. Seu lema: 'Pessoas primeiro, resultados sempre.'",
    },
    {
      id: "estavel",
      title: "Estavel (S) — O Estrategista Confiavel",
      emoji: "🛡️",
      description:
        "Voce e a rocha da equipe! Leal, paciente e consistente — voce e quem mantem tudo funcionando quando o caos aparece. Excelente ouvinte e mediador de conflitos. Profissoes ideais: analista, suporte, gestao de processos, professor, enfermeiro, contador. Empresas como Itau, Boticario e hospitais valorizam demais esse perfil. Seu lema: 'Passo firme, resultado solido.'",
    },
    {
      id: "analitico",
      title: "Analitico (C) — O Perfeccionista Estrategico",
      emoji: "🔬",
      description:
        "Voce e movido por dados e precisao! Detalhista, logico e criterioso — nada passa despercebido por voce. Voce e quem encontra o erro que ninguem viu e cria sistemas perfeitos. Profissoes ideais: engenheiro, programador, cientista de dados, auditor, pesquisador, medico. Empresas como Apple, Embraer e institutos de pesquisa precisam de voce. Seu lema: 'Se nao tem dados, e achismo.'",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Seu chefe pede pra voce liderar um projeto urgente que ninguem quer. Voce...",
      options: [
        { id: "a", text: "Aceito na hora — adoro desafios dificeis", profilePoints: { dominante: 3 } },
        { id: "b", text: "Reuno a equipe pra motivar todo mundo", profilePoints: { influente: 3 } },
        { id: "c", text: "Analiso os riscos antes de aceitar", profilePoints: { analitico: 3 } },
        { id: "d", text: "Aceito e crio um plano passo-a-passo", profilePoints: { estavel: 3 } },
        { id: "e", text: "Depende do projeto, nao tenho padrao fixo", profilePoints: { influente: 1, estavel: 1, analitico: 1 } },
      ],
    },
    {
      id: "q2",
      text: "Num conflito no trabalho entre dois colegas, voce...",
      options: [
        { id: "a", text: "Resolvo direto — falo o que precisa ser dito", profilePoints: { dominante: 3 } },
        { id: "b", text: "Converso com os dois e busco harmonizar", profilePoints: { influente: 3, estavel: 1 } },
        { id: "c", text: "Analiso quem esta certo com base nos fatos", profilePoints: { analitico: 3 } },
        { id: "d", text: "Fico neutro e apoio quem precisar", profilePoints: { estavel: 3 } },
      ],
    },
    {
      id: "q3",
      text: "O que mais te motiva no trabalho?",
      options: [
        { id: "a", text: "Poder, autonomia e resultados visiveis", profilePoints: { dominante: 3 } },
        { id: "b", text: "Reconhecimento e trabalhar com pessoas", profilePoints: { influente: 3 } },
        { id: "c", text: "Estabilidade e um bom ambiente de trabalho", profilePoints: { estavel: 3 } },
        { id: "d", text: "Desafios intelectuais e aprendizado", profilePoints: { analitico: 3 } },
        { id: "e", text: "Dinheiro, sinceramente", profilePoints: { dominante: 2, influente: 1 } },
      ],
    },
    {
      id: "q4",
      text: "Como voce toma decisoes importantes?",
      options: [
        { id: "a", text: "Rapido e com confianca — odeio enrolacao", profilePoints: { dominante: 3 } },
        { id: "b", text: "Converso com pessoas de confianca", profilePoints: { influente: 2, estavel: 2 } },
        { id: "c", text: "Pesquiso tudo, analiso dados e depois decido", profilePoints: { analitico: 3 } },
        { id: "d", text: "Com calma, peso pros e contras", profilePoints: { estavel: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Numa reuniao de trabalho, voce normalmente e quem...",
      options: [
        { id: "a", text: "Conduz a reuniao e cobra prazos", profilePoints: { dominante: 3 } },
        { id: "b", text: "Anima o grupo e traz ideias criativas", profilePoints: { influente: 3 } },
        { id: "c", text: "Escuta atentamente e toma notas", profilePoints: { estavel: 2, analitico: 2 } },
        { id: "d", text: "Questiona os dados e propoe melhorias", profilePoints: { analitico: 3 } },
        { id: "e", text: "Fica quieto esperando acabar logo", profilePoints: { estavel: 2, analitico: 1 } },
      ],
    },
    {
      id: "q6",
      text: "Seu maior defeito no trabalho e...",
      options: [
        { id: "a", text: "Sou impaciente e as vezes autoritario", profilePoints: { dominante: 3 } },
        { id: "b", text: "Falo demais e perco o foco", profilePoints: { influente: 3 } },
        { id: "c", text: "Demoro pra me adaptar a mudancas", profilePoints: { estavel: 3 } },
        { id: "d", text: "Sou perfeccionista demais e critico", profilePoints: { analitico: 3 } },
        { id: "e", text: "Nenhum desses me define", profilePoints: { dominante: 1, influente: 1, estavel: 1 } },
      ],
    },
    {
      id: "q7",
      text: "Se voce pudesse escolher, trabalharia...",
      options: [
        { id: "a", text: "Como meu proprio chefe, abrindo um negocio", profilePoints: { dominante: 3 } },
        { id: "b", text: "Em equipe grande, ambiente divertido", profilePoints: { influente: 3 } },
        { id: "c", text: "CLT numa empresa solida e estavel", profilePoints: { estavel: 3 } },
        { id: "d", text: "Remoto, focado em tarefas tecnicas", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Como voce lida com prazos apertados?",
      options: [
        { id: "a", text: "Meto a cara e faco acontecer — pressao me motiva", profilePoints: { dominante: 3 } },
        { id: "b", text: "Delego tarefas e motivo a equipe", profilePoints: { influente: 3 } },
        { id: "c", text: "Sigo meu plano e nao entro em panico", profilePoints: { estavel: 3 } },
        { id: "d", text: "Priorizo o essencial e corto o desnecessario", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q9",
      text: "O que as pessoas mais falam sobre voce?",
      options: [
        { id: "a", text: "Que eu resolvo qualquer problema", profilePoints: { dominante: 3 } },
        { id: "b", text: "Que eu sou carismatico e facil de conversar", profilePoints: { influente: 3 } },
        { id: "c", text: "Que eu sou confiavel e leal", profilePoints: { estavel: 3 } },
        { id: "d", text: "Que eu sou inteligente e detalhista", profilePoints: { analitico: 3 } },
        { id: "e", text: "Mistura de varios desses", profilePoints: { dominante: 1, influente: 1, estavel: 1, analitico: 1 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com voce no trabalho?",
      options: [
        { id: "a", text: "Nao me diga como fazer, me diga o resultado que quer", profilePoints: { dominante: 3 } },
        { id: "b", text: "Juntos somos mais fortes!", profilePoints: { influente: 3 } },
        { id: "c", text: "Devagar e sempre chega primeiro", profilePoints: { estavel: 3 } },
        { id: "d", text: "O diabo mora nos detalhes", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q11",
      text: "Voce recebe um feedback negativo. Sua reacao e...",
      options: [
        { id: "a", text: "Discordo e defendo meu ponto", profilePoints: { dominante: 3 } },
        { id: "b", text: "Fico chateado mas sigo em frente", profilePoints: { influente: 2, estavel: 1 } },
        { id: "c", text: "Reflito com calma e vejo o que posso melhorar", profilePoints: { estavel: 3 } },
        { id: "d", text: "Analiso se o feedback tem base concreta", profilePoints: { analitico: 3 } },
      ],
    },
    {
      id: "q12",
      text: "Se voce ganhasse R$1 milhao amanha, faria o que?",
      options: [
        { id: "a", text: "Abriria meu proprio negocio imediatamente", profilePoints: { dominante: 3 } },
        { id: "b", text: "Viajaria o mundo e investiria em experiencias", profilePoints: { influente: 3 } },
        { id: "c", text: "Investiria com seguranca pra ter renda passiva", profilePoints: { estavel: 3 } },
        { id: "d", text: "Estudaria o melhor investimento por meses antes de decidir", profilePoints: { analitico: 3 } },
      ],
    },
  ],
};
