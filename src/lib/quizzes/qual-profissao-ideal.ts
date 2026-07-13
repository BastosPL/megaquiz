import type { Quiz } from "@/lib/types";

export const qualProfissaoIdeal: Quiz = {
  id: "qual-profissao-ideal",
  slug: "qual-profissao-ideal-pra-voce",
  title: "Qual Profissao e Ideal pra Voce?",
  description: "Descubra se voce deveria ser medico, advogado, programador, artista ou empreendedor!",
  type: "personality",
  category: "carreira",
  emoji: "💼",
  color: "#F59E0B",
  tags: ["carreira", "profissao", "trabalho", "vocacao", "teste"],
  createdAt: "2026-06-09",
  featured: false,
  author: "Equipe Editorial MegaQuiz",
  authorBio: "Conteúdo produzido e revisado pela equipe responsável pelo MegaQuiz, com consulta às fontes indicadas em cada publicação.",
  sources: [],
  lastReviewedAt: "2026-07-12",
  introText: "Descubra qual área profissional combina com seus interesses e habilidades — um quiz recreativo para explorar possibilidades.",
  disclaimer: "Este quiz é para entretenimento e exploração de interesses. Não substitui orientação vocacional profissional. Faixas salariais nos resultados são estimativas aproximadas do mercado brasileiro e variam conforme região, experiência e momento econômico.",
  disclaimerResult: "Resultado recreativo. Faixas salariais são estimativas e não constituem orientação profissional.",
  profiles: [
    {
      id: "saude",
      title: "Area da Saude (Medicina, Enfermagem, Psicologia)",
      emoji: "🩺",
      description:
        "Voce tem vocacao para cuidar das pessoas! Empatia, paciencia e vontade de ajudar sao suas maiores qualidades. Profissoes como medicina, enfermagem, fisioterapia e psicologia combinam perfeitamente com voce. Salarios: R$ 4.000 a R$ 25.000+.",
    },
    {
      id: "direito",
      title: "Direito e Ciencias Humanas",
      emoji: "⚖️",
      description:
        "Voce e articulado, persuasivo e apaixonado por justica! Direito, ciencias politicas, relacoes internacionais e jornalismo sao areas que combinam com sua habilidade de argumentacao e pensamento critico. Salarios: R$ 4.500 a R$ 30.000+.",
    },
    {
      id: "tech",
      title: "Tecnologia e Engenharia",
      emoji: "💻",
      description:
        "Voce e logico, curioso e adora resolver problemas complexos! Programacao, engenharia, ciencia de dados e robotica sao perfeitos pra voce. O mercado de tech esta em alta e valoriza seu perfil analitico. Salarios: R$ 5.000 a R$ 35.000+.",
    },
    {
      id: "criativo",
      title: "Artes e Comunicacao",
      emoji: "🎨",
      description:
        "Voce e criativo, expressivo e pensa fora da caixa! Design, publicidade, cinema, musica e marketing digital sao areas onde voce brilha. Sua originalidade e seu maior diferencial. Salarios: R$ 3.000 a R$ 20.000+.",
    },
    {
      id: "negocios",
      title: "Negocios e Empreendedorismo",
      emoji: "📈",
      description:
        "Voce e ambicioso, estrategico e nasceu pra liderar! Administracao, economia, marketing e empreendedorismo sao sua cara. Voce enxerga oportunidades onde outros veem problemas. Salarios: R$ 4.000 a ilimitado (empreendedor)!",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "O que te da mais satisfacao?",
      options: [
        { id: "a", text: "Ajudar alguem que esta sofrendo", profilePoints: { saude: 3 } },
        { id: "b", text: "Vencer uma discussao com bons argumentos", profilePoints: { direito: 3 } },
        { id: "c", text: "Resolver um problema tecnico dificil", profilePoints: { tech: 3 } },
        { id: "d", text: "Criar algo bonito e original", profilePoints: { criativo: 3 } },
        { id: "e", text: "Fechar um negocio lucrativo", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q2",
      text: "Qual materia voce mais gostava na escola?",
      options: [
        { id: "a", text: "Biologia / Quimica", profilePoints: { saude: 3 } },
        { id: "b", text: "Historia / Filosofia / Sociologia", profilePoints: { direito: 3 } },
        { id: "c", text: "Matematica / Fisica", profilePoints: { tech: 3 } },
        { id: "d", text: "Artes / Redacao / Literatura", profilePoints: { criativo: 3 } },
        { id: "e", text: "Nenhuma — eu queria empreender logo", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como voce prefere trabalhar?",
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
      text: "O que seus amigos dizem sobre voce?",
      options: [
        { id: "a", text: "Que eu sou o mais cuidadoso do grupo", profilePoints: { saude: 3 } },
        { id: "b", text: "Que eu adoro debater e discutir ideias", profilePoints: { direito: 3 } },
        { id: "c", text: "Que eu sou o nerd que resolve tudo", profilePoints: { tech: 3 } },
        { id: "d", text: "Que eu sou o mais criativo e diferente", profilePoints: { criativo: 3 } },
        { id: "e", text: "Que eu sempre tenho ideias de negocios", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Qual desses livros/conteudos te atrai mais?",
      options: [
        { id: "a", text: "Anatomia ou psicologia humana", profilePoints: { saude: 3 } },
        { id: "b", text: "Casos criminais ou politica", profilePoints: { direito: 3 } },
        { id: "c", text: "Inteligencia artificial e inovacao", profilePoints: { tech: 3 } },
        { id: "d", text: "Cinema, musica e design", profilePoints: { criativo: 3 } },
        { id: "e", text: "Biografias de bilionarios", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual cenario de trabalho te motiva mais?",
      options: [
        { id: "a", text: "Hospital, clinica ou consultorio", profilePoints: { saude: 3 } },
        { id: "b", text: "Escritorio de advocacia ou tribunal", profilePoints: { direito: 3 } },
        { id: "c", text: "Startup de tecnologia ou laboratorio", profilePoints: { tech: 3 } },
        { id: "d", text: "Estudio de criacao ou agencia", profilePoints: { criativo: 3 } },
        { id: "e", text: "Minha propria empresa", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q7",
      text: "Qual e seu maior medo profissional?",
      options: [
        { id: "a", text: "Nao conseguir salvar alguem", profilePoints: { saude: 3 } },
        { id: "b", text: "Cometer uma injustica", profilePoints: { direito: 3 } },
        { id: "c", text: "Ficar desatualizado com a tecnologia", profilePoints: { tech: 3 } },
        { id: "d", text: "Perder minha criatividade", profilePoints: { criativo: 3 } },
        { id: "e", text: "Falir", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Se voce ganhasse R$ 1 milhao, o que faria?",
      options: [
        { id: "a", text: "Abriria uma clinica ou ONG de saude", profilePoints: { saude: 3 } },
        { id: "b", text: "Faria um curso no exterior", profilePoints: { direito: 2, tech: 2 } },
        { id: "c", text: "Investiria em tecnologia e acoes", profilePoints: { tech: 2, negocios: 2 } },
        { id: "d", text: "Produziria um filme ou album musical", profilePoints: { criativo: 3 } },
        { id: "e", text: "Abriria um negocio imediatamente", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Qual rede social voce mais usa?",
      options: [
        { id: "a", text: "Nao uso muito — prefiro ler artigos", profilePoints: { saude: 2, direito: 2 } },
        { id: "b", text: "Twitter/X — pra acompanhar debates", profilePoints: { direito: 3 } },
        { id: "c", text: "GitHub / Reddit / Discord", profilePoints: { tech: 3 } },
        { id: "d", text: "Instagram / TikTok / Pinterest", profilePoints: { criativo: 3 } },
        { id: "e", text: "LinkedIn — networking e negocios", profilePoints: { negocios: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Qual frase mais combina com voce?",
      options: [
        { id: "a", text: "Quero fazer a diferenca na vida das pessoas", profilePoints: { saude: 3 } },
        { id: "b", text: "Justica e o pilar da sociedade", profilePoints: { direito: 3 } },
        { id: "c", text: "Tecnologia muda o mundo", profilePoints: { tech: 3 } },
        { id: "d", text: "A arte e a expressao da alma", profilePoints: { criativo: 3 } },
        { id: "e", text: "O dinheiro compra liberdade", profilePoints: { negocios: 3 } },
      ],
    },
  ],
};
