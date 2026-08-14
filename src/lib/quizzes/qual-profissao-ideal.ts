import type { Quiz } from "@/lib/types";

export const qualProfissaoIdeal: Quiz = {
  id: "qual-profissao-ideal",
  slug: "qual-profissao-ideal-pra-voce",
  title: "Qual Profissão é Ideal pra Você?",
  description: "Descubra se você deveria ser médico, advogado, programador, artista ou empreendedor!",
  type: "personality",
  category: "carreira",
  emoji: "💼",
  color: "#F59E0B",
  tags: ["carreira", "profissao", "trabalho", "vocacao", "teste"],
  createdAt: "2026-06-09",
  featured: false,
  author: "Patrick Bastos",
  authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
  sources: [
    { label: "Guia Salarial Robert Half 2026 — Diversas áreas", organization: "Robert Half", accessedAt: "2026-07-12" },
  ],
  lastReviewedAt: "2026-07-12",
  introText: "Tem gente que nasceu pra cuidar de pessoas, gente que pensa em código e gente que só funciona criando. Dez perguntas sobre rotina, motivação e habilidades para explorar caminhos profissionais.",
  disclaimer: "Este quiz é para entretenimento e exploração de interesses. Não substitui orientação vocacional profissional. Faixas salariais nos resultados são estimativas aproximadas do mercado brasileiro e variam conforme região, experiência e momento econômico.",
  disclaimerResult: "Resultado recreativo. Faixas salariais são estimativas e não constituem orientação profissional.",
  profiles: [
    {
      id: "saude",
      title: "Área da Saúde (Medicina, Enfermagem, Psicologia)",
      emoji: "🩺",
      description:
        "Você tem vocação para cuidar das pessoas! Empatia, paciência e vontade de ajudar são suas maiores qualidades. Profissões como medicina, enfermagem, fisioterapia e psicologia combinam perfeitamente com você. Salários: R$ 4.000 a R$ 25.000+.",
    },
    {
      id: "direito",
      title: "Direito e Ciências Humanas",
      emoji: "⚖️",
      description:
        "Você é articulado, persuasivo e apaixonado por justiça! Direito, ciências políticas, relações internacionais e jornalismo são áreas que combinam com sua habilidade de argumentação e pensamento crítico. Salários: R$ 4.500 a R$ 30.000+.",
    },
    {
      id: "tech",
      title: "Tecnologia e Engenharia",
      emoji: "💻",
      description:
        "Você é lógico, curioso e adora resolver problemas complexos! Programação, engenharia, ciência de dados e robótica são perfeitos pra você. O mercado de tech está em alta e valoriza seu perfil analítico. Salários: R$ 5.000 a R$ 35.000+.",
    },
    {
      id: "criativo",
      title: "Artes e Comunicação",
      emoji: "🎨",
      description:
        "Você é criativo, expressivo e pensa fora da caixa! Design, publicidade, cinema, música e marketing digital são áreas onde você brilha. Sua originalidade é seu maior diferencial. Salários: R$ 3.000 a R$ 20.000+.",
    },
    {
      id: "negocios",
      title: "Negócios e Empreendedorismo",
      emoji: "📈",
      description:
        "Você é ambicioso, estratégico e nasceu pra liderar! Administração, economia, marketing e empreendedorismo são sua cara. Você enxerga oportunidades onde outros veem problemas. Salários: R$ 4.000 a ilimitado (empreendedor)!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "O que te dá mais satisfação?",
      options: [
        { id: "a", text: "Ajudar alguém que está sofrendo", profilePoints: { saude: 3 } },
        { id: "b", text: "Vencer uma discussão com bons argumentos", profilePoints: { direito: 3 } },
        { id: "c", text: "Resolver um problema técnico difícil", profilePoints: { tech: 3 } },
        { id: "d", text: "Criar algo bonito e original", profilePoints: { criativo: 3 } },
        { id: "e", text: "Fechar um negócio lucrativo", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Qual matéria você mais gostava na escola?",
      options: [
        { id: "a", text: "Biologia / Química", profilePoints: { saude: 3 } },
        { id: "b", text: "História / Filosofia / Sociologia", profilePoints: { direito: 3 } },
        { id: "c", text: "Matemática / Física", profilePoints: { tech: 3 } },
        { id: "d", text: "Artes / Redação / Literatura", profilePoints: { criativo: 3 } },
        { id: "e", text: "Nenhuma — eu queria empreender logo", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como você prefere trabalhar?",
      options: [
        { id: "a", text: "Atendendo pessoas presencialmente", profilePoints: { saude: 3, direito: 1 } },
        { id: "b", text: "Pesquisando e escrevendo documentos", profilePoints: { direito: 3 } },
        { id: "c", text: "Na frente do computador, resolvendo problemas", profilePoints: { tech: 3 } },
        { id: "d", text: "Em projetos criativos, com liberdade", profilePoints: { criativo: 3 } },
        { id: "e", text: "Liderando uma equipe", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q4",
      text: "O que seus amigos dizem sobre você?",
      options: [
        { id: "a", text: "Que eu sou o mais cuidadoso do grupo", profilePoints: { saude: 3 } },
        { id: "b", text: "Que eu adoro debater e discutir ideias", profilePoints: { direito: 3 } },
        { id: "c", text: "Que eu sou o nerd que resolve tudo", profilePoints: { tech: 3 } },
        { id: "d", text: "Que eu sou o mais criativo e diferente", profilePoints: { criativo: 3 } },
        { id: "e", text: "Que eu sempre tenho ideias de negócios", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual desses livros/conteúdos te atrai mais?",
      options: [
        { id: "a", text: "Anatomia ou psicologia humana", profilePoints: { saude: 3 } },
        { id: "b", text: "Casos criminais ou política", profilePoints: { direito: 3 } },
        { id: "c", text: "Inteligência artificial e inovação", profilePoints: { tech: 3 } },
        { id: "d", text: "Cinema, música e design", profilePoints: { criativo: 3 } },
        { id: "e", text: "Biografias de bilionários", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual cenário de trabalho te motiva mais?",
      options: [
        { id: "a", text: "Hospital, clínica ou consultório", profilePoints: { saude: 3 } },
        { id: "b", text: "Escritório de advocacia ou tribunal", profilePoints: { direito: 3 } },
        { id: "c", text: "Startup de tecnologia ou laboratório", profilePoints: { tech: 3 } },
        { id: "d", text: "Estúdio de criação ou agência", profilePoints: { criativo: 3 } },
        { id: "e", text: "Minha própria empresa", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual é seu maior medo profissional?",
      options: [
        { id: "a", text: "Não conseguir salvar alguém", profilePoints: { saude: 3 } },
        { id: "b", text: "Cometer uma injustiça", profilePoints: { direito: 3 } },
        { id: "c", text: "Ficar desatualizado com a tecnologia", profilePoints: { tech: 3 } },
        { id: "d", text: "Perder minha criatividade", profilePoints: { criativo: 3 } },
        { id: "e", text: "Falir", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Se você ganhasse R$ 1 milhão, o que faria?",
      options: [
        { id: "a", text: "Abriria uma clínica ou ONG de saúde", profilePoints: { saude: 3 } },
        { id: "b", text: "Faria um curso no exterior", profilePoints: { direito: 2, tech: 2 } },
        { id: "c", text: "Investiria em tecnologia e ações", profilePoints: { tech: 2, negocios: 2 } },
        { id: "d", text: "Produziria um filme ou álbum musical", profilePoints: { criativo: 3 } },
        { id: "e", text: "Abriria um negócio imediatamente", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual rede social você mais usa?",
      options: [
        { id: "a", text: "Não uso muito — prefiro ler artigos", profilePoints: { saude: 2, direito: 2 } },
        { id: "b", text: "Twitter/X — pra acompanhar debates", profilePoints: { direito: 3 } },
        { id: "c", text: "GitHub / Reddit / Discord", profilePoints: { tech: 3 } },
        { id: "d", text: "Instagram / TikTok / Pinterest", profilePoints: { criativo: 3 } },
        { id: "e", text: "LinkedIn — networking e negócios", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com você?",
      options: [
        { id: "a", text: "Quero fazer a diferença na vida das pessoas", profilePoints: { saude: 3 } },
        { id: "b", text: "Justiça é o pilar da sociedade", profilePoints: { direito: 3 } },
        { id: "c", text: "Tecnologia muda o mundo", profilePoints: { tech: 3 } },
        { id: "d", text: "A arte é a expressão da alma", profilePoints: { criativo: 3 } },
        { id: "e", text: "O dinheiro compra liberdade", profilePoints: { negocios: 3 } },
      ],
    },
  ],
};
