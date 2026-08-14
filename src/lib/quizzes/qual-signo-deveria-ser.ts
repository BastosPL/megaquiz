import type { Quiz } from "@/lib/types";

export const qualSignoDeveriaSer: Quiz = {
  id: "qual-signo-deveria-ser",
  slug: "qual-signo-voce-deveria-ser",
  title: "Qual Signo Você Deveria Ser?",
  description: "Será que seu signo real combina com sua personalidade? Descubra qual deveria ser!",
  type: "personality",
  category: "personalidade",
  emoji: "♈",
  color: "#EC4899",
  tags: ["signo", "zodiaco", "personalidade", "astrologia", "viral"],
  createdAt: "2026-06-11",
  featured: true,
  author: "Patrick Bastos",
  authorBio: "Diretor executivo, autor e empreendedor digital, Patrick Bastos atua na criação de projetos que unem conteúdo, tecnologia e experiência do usuário. No MegaQuiz, é responsável pela direção editorial e revisão dos conteúdos.",
  lastReviewedAt: "2026-07-12",
  introText: "Nem todo mundo se reconhece no signo em que nasceu. Fogo, Terra, Ar ou Água — responda sobre temperamento, rotina e valores para ver se o zodíaco erraria ou acertaria no seu caso.",
  profiles: [
    {
      id: "aries",
      title: "Áries ♈ (Fogo)",
      emoji: "🔥",
      description:
        "Você deveria ser ariano(a)! Áries é o primeiro signo do zodíaco e marca o equinócio de primavera no hemisfério norte, simbolizando começo e iniciativa. Na mitologia grega, sua constelação representa o carneiro do velocino de ouro que salvou Frixo e Hele. Sua estrela mais brilhante, Hamal, fica a 66 anos-luz da Terra e já foi usada como referência de navegação por marinheiros da Antiguidade. Você é puro impulso, ação e coragem de quem abre caminhos.",
    },
    {
      id: "leao",
      title: "Leão ♌ (Fogo)",
      emoji: "👑",
      description:
        "Você deveria ser leonino(a)! A constelação de Leão abriga Regulus, uma estrela quase 4 vezes maior que o Sol e uma das mais brilhantes do céu noturno, perfeitamente condizente com a personalidade do signo. Na mitologia, representa o Leão de Nemeia, cuja pele era impenetrável e que Hércules derrotou no primeiro de seus 12 trabalhos. Você carrega esse brilho e essa resistência: generoso com quem ama, imponente por natureza e absolutamente incapaz de passar despercebido.",
    },
    {
      id: "escorpiao",
      title: "Escorpião ♏ (Água)",
      emoji: "🦂",
      description:
        "Você deveria ser escorpiano(a)! A constelação de Escorpião contém Antares, uma supergigante vermelha cujo nome significa 'rival de Marte' por sua cor avermelhada intensa. Na mitologia grega, é o escorpião enviado por Gaia (a deusa Terra) para derrotar o caçador Órion, e por isso as duas constelações nunca aparecem juntas no céu. Você tem essa intensidade que transforma e essa profundidade emocional que poucos conseguem acompanhar.",
    },
    {
      id: "aquario",
      title: "Aquário ♒ (Ar)",
      emoji: "💫",
      description:
        "Você deveria ser aquariano(a)! Apesar do nome sugerir água, Aquário é um signo de Ar, e sua constelação representa Ganimedes, o jovem troiano tão belo que Zeus o levou ao Olimpo para servir de copeiro dos deuses. A estrela Sadalsuud, a mais brilhante da constelação, tem nome árabe que significa 'a sorte das sortes'. Você pensa fora de qualquer caixa, valoriza causas coletivas acima de interesses pessoais e carrega ideias que o mundo ainda vai levar um tempo pra alcançar.",
    },
    {
      id: "touro",
      title: "Touro ♉ (Terra)",
      emoji: "🌿",
      description:
        "Você deveria ser taurino(a)! A constelação de Touro abriga as Plêiades, o aglomerado estelar mais famoso do céu, visível a olho nu e celebrado por civilizações desde os sumérios. Na mitologia grega, representa Zeus disfarçado de touro branco para conquistar Europa. Aldebaran, a estrela principal, é uma gigante laranja cujo nome árabe significa 'a seguidora', pois parece seguir as Plêiades pelo céu. Você tem essa solidez: leal, sensorial, paciente, e com um apreço pelas coisas boas da vida que beira a arte.",
    },
    {
      id: "gemeos",
      title: "Gêmeos ♊ (Ar)",
      emoji: "🎭",
      description:
        "Você deveria ser geminiano(a)! A constelação de Gêmeos é marcada por Castor e Pollux, duas estrelas brilhantes que representam os gêmeos da mitologia grega: Castor, mortal, e Pólux, imortal. Quando Castor morreu, Pólux pediu a Zeus para dividir sua imortalidade, e foram colocados juntos no céu para sempre. Essa dualidade é sua essência: versátil, curioso, capaz de conversar sobre filosofia e memes no mesmo fôlego, e com uma adaptabilidade que os outros signos invejam.",
    },
  ],
  questions: [
    {
      id: "q1",
      text: "Numa festa, você:",
      options: [
        { id: "a", text: "Sou o primeiro a chegar e o último a sair", profilePoints: { aries: 3, leao: 1 } },
        { id: "b", text: "Sou o centro da roda de conversa", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo tudo de um canto estratégico", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Converso com todo mundo sobre tudo", profilePoints: { gemeos: 3, aquario: 1 } },
        { id: "e", text: "Fico no canto confortável com comida e drink", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q2",
      text: "O que mais te define?",
      options: [
        { id: "a", text: "Coragem e impulsividade", profilePoints: { aries: 3 } },
        { id: "b", text: "Carisma e generosidade", profilePoints: { leao: 3 } },
        { id: "c", text: "Intensidade e mistério", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Originalidade e independência", profilePoints: { aquario: 3 } },
        { id: "e", text: "Estabilidade e sensualidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q3",
      text: "Como você lida com uma traição?",
      options: [
        { id: "a", text: "Explodo na hora — raiva instantânea", profilePoints: { aries: 3 } },
        { id: "b", text: "Fico dramático(a) e faço questão que todos saibam", profilePoints: { leao: 3 } },
        { id: "c", text: "Guardo e planejo minha vingança gelada", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Processo racionalmente e sigo em frente", profilePoints: { aquario: 3, gemeos: 1 } },
        { id: "e", text: "Demoro pra aceitar mas corto a pessoa pra sempre", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q4",
      text: "Qual é seu amor incondicional?",
      options: [
        { id: "a", text: "Adrenalina e aventura", profilePoints: { aries: 3 } },
        { id: "b", text: "Atenção e admiração", profilePoints: { leao: 3 } },
        { id: "c", text: "Conexão profunda e verdadeira", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Liberdade e ideias novas", profilePoints: { aquario: 3 } },
        { id: "e", text: "Conforto, comida e natureza", profilePoints: { touro: 3 } },
        { id: "f", text: "Conversas e novas pessoas", profilePoints: { gemeos: 3 } },
      ],
    },
    {
      id: "q5",
      text: "Seu maior defeito?",
      options: [
        { id: "a", text: "Impulsividade — ajo sem pensar", profilePoints: { aries: 3 } },
        { id: "b", text: "Ego — preciso ser o centro", profilePoints: { leao: 3 } },
        { id: "c", text: "Ciúmes e possessividade", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Frieza emocional", profilePoints: { aquario: 3 } },
        { id: "e", text: "Teimosia absoluta", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q6",
      text: "Qual elemento você mais se identifica?",
      options: [
        { id: "a", text: "Fogo — paixão e energia", profilePoints: { aries: 2, leao: 2 } },
        { id: "b", text: "Água — emoção e profundidade", profilePoints: { escorpiao: 3 } },
        { id: "c", text: "Ar — razão e comunicação", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "d", text: "Terra — estabilidade e praticidade", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q7",
      text: "O que você faz quando gosta de alguém?",
      options: [
        { id: "a", text: "Chego junto direto — sem medo", profilePoints: { aries: 3 } },
        { id: "b", text: "Conquisto com charme e presentes", profilePoints: { leao: 3 } },
        { id: "c", text: "Observo de longe e descubro tudo sobre a pessoa", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Viro amigo primeiro e vejo se rola", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Sou romântico(a) — flores, jantares, gestos", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q8",
      text: "Qual cor você mais veste?",
      options: [
        { id: "a", text: "Vermelho", profilePoints: { aries: 3 } },
        { id: "b", text: "Dourado/Amarelo", profilePoints: { leao: 3 } },
        { id: "c", text: "Preto", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Cores diferentes e chamativas", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Tons terrosos e neutros", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q9",
      text: "Você se considera mais:",
      options: [
        { id: "a", text: "Competitivo e guerreiro", profilePoints: { aries: 3 } },
        { id: "b", text: "Confiante e luminoso", profilePoints: { leao: 3 } },
        { id: "c", text: "Intenso e transformador", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Visionário e diferente", profilePoints: { aquario: 3 } },
        { id: "e", text: "Firme e confiável", profilePoints: { touro: 3 } },
      ],
    },
    {
      id: "q10",
      text: "Se você pudesse ter um superpoder:",
      options: [
        { id: "a", text: "Super força", profilePoints: { aries: 3 } },
        { id: "b", text: "Controlar o fogo", profilePoints: { leao: 3 } },
        { id: "c", text: "Ler mentes", profilePoints: { escorpiao: 3 } },
        { id: "d", text: "Teletransporte", profilePoints: { aquario: 2, gemeos: 2 } },
        { id: "e", text: "Imortalidade", profilePoints: { touro: 3 } },
      ],
    },
  ],
};
