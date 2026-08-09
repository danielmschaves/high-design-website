export type BlogCategory =
  | "Antes de começar"
  | "Orçamento e planejamento"
  | "Autoridade técnica";

export type BlogBlock =
  | { type: "heading"; text: string; num?: string }
  | { type: "paragraph"; text: string; dropcap?: boolean; leadIn?: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "callout"; label: string; items: { title: string; text: string }[] }
  | { type: "pullquote"; text: string; cite: string }
  | { type: "nextStep"; label: string; text: string; cta: { href: string; label: string } };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  readingTime: string;
  /** Human-readable date, rendered in the UI (e.g. "10 Jun 2026"). */
  date: string;
  /** ISO 8601 publication date — required by BlogPosting JSON-LD and sitemap. */
  publishedAt: string;
  /** ISO 8601 last-substantive-edit date. Falls back to publishedAt. */
  updatedAt?: string;
  kicker: string;
  excerpt: string;
  cover: string;
  /** Topic terms for `Article.keywords`; also used to pick related posts. */
  keywords: string[];
  body: BlogBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "projeto-que-nunca-vira-obra",
    title: "Por que tantos projetos lindos nunca viram obra (e como evitar isso)",
    description:
      "O erro mais caro da construção não acontece na obra — acontece no projeto. Entenda por que projetos bonitos param no papel e o que torna um projeto realmente executável.",
    category: "Antes de começar",
    readingTime: "~6 min",
    date: "10 Jun 2026",
    publishedAt: "2026-06-10",
    keywords: [
      "projeto executável",
      "viabilidade de obra",
      "estudo de massa",
      "orçamento de obra",
      "por que projetos não viram obra",
    ],
    kicker: "Projeto · Exequibilidade",
    cover: "/assets/images/04c863415f33702f810a01f9cf1549a8.jpg",
    excerpt:
      "Existe uma cena que se repete em escritórios de arquitetura por todo o Brasil. O cliente recebe um projeto encantador — renders impecáveis, uma casa dos sonhos. Ele aprova, pede orçamento de obra. O custo real é o dobro do que tem para investir. O projeto vai para a gaveta.",
    body: [
      {
        type: "paragraph",
        dropcap: true,
        leadIn: "A cena ·",
        text: "Existe uma cena que se repete em escritórios de arquitetura por todo o Brasil. O cliente recebe um projeto encantador — plantas humanizadas, renders impecáveis, uma casa dos sonhos em três dimensões. Ele aprova, paga, comemora. E então pede um orçamento de obra. É aí que o sonho trava: o custo real é o dobro do que ele tem para investir. O projeto, lindo como é, não cabe na realidade. Ele vai para a gaveta.",
      },
      {
        type: "paragraph",
        text: "Esse não é um caso isolado. É talvez a falha mais comum — e mais cara — do mercado de arquitetura. E quase sempre tem a mesma origem: o projeto foi concebido sem considerar o **orçamento real da obra** desde o primeiro traço.",
      },
      {
        type: "heading",
        num: "01",
        text: "O projeto é um meio, não um fim",
      },
      {
        type: "paragraph",
        text: "Um projeto arquitetônico não é o destino. É o instrumento que transforma uma intenção em estrutura, um sonho em espaço construído. Quando o projeto existe apenas na tela, ele não cumpriu sua função. Beleza sem viabilidade é ilusão; e funcionalidade sem orçamento real é decoração sem chão.",
      },
      {
        type: "pullquote",
        text: "Beleza sem viabilidade é ilusão. Um projeto que fica na tela _não cumpriu a sua função._",
        cite: "Princípio da exequibilidade · High Design",
      },
      {
        type: "paragraph",
        text: "Por isso, na High Design, a exequibilidade é um princípio inegociável: cada solução nasce alinhada à realidade financeira do cliente. O projeto é concebido para ser executado, dentro do orçamento disponível, com fidelidade e segurança.",
      },
      {
        type: "heading",
        num: "02",
        text: "O que torna um projeto realmente executável",
      },
      {
        type: "paragraph",
        text: "Três decisões, tomadas cedo, separam um projeto que vira obra de um que fica no papel:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Estudo de Massa com indicadores de custo logo no início",
            text: "Antes de detalhar qualquer ambiente, é possível estimar o custo global da edificação com base no CUB e nos custos Extra-CUB. Isso dá ao cliente uma primeira referência financeira antes de qualquer investimento pesado em projeto.",
          },
          {
            title: "Estudo de Viabilidade Financeira antes do detalhamento",
            text: "Um pré-orçamento que separa a \"parte cinza\" (estrutura) do raio-x dos acabamentos permite decidir com base em números reais — e ajustar o projeto enquanto ajustar ainda é barato.",
          },
          {
            title: "Compatibilização entre arquitetura e engenharia",
            text: "Um projeto só é verdadeiramente executivo quando todas as disciplinas conversam entre si. Sem isso, os custos extras aparecem na obra, quando já é tarde.",
          },
        ],
      },
      {
        type: "heading",
        num: "03",
        text: "O custo de ignorar a viabilidade",
      },
      {
        type: "paragraph",
        text: "Quando o orçamento entra na conversa só depois do projeto pronto, o cliente fica diante de três saídas, todas ruins: gastar muito além do planejado, abandonar o projeto, ou começar a obra e parar no meio. Nenhuma delas precisava acontecer.",
      },
      {
        type: "paragraph",
        text: "A pergunta certa não é \"quanto vai ficar bonito?\", mas \"isto cabe na minha realidade — e como eu tenho certeza disso antes de investir na minha construção?\".",
      },
      {
        type: "nextStep",
        label: "Próximo passo",
        text: "Se você ainda não começou, a Consultoria de Construção cruza o que você deseja com o que o terreno permite e com o seu orçamento, antes de qualquer projeto completo. É a forma mais segura de garantir que o projeto nasça para ser construído.",
        cta: { href: "/#servicos", label: "Conheça os serviços" },
      },
    ],
  },

  {
    slug: "viabilidade-de-terreno-antes-de-comprar",
    title: "Antes de comprar o terreno: o que a viabilidade revela (e que ninguém te conta)",
    description:
      "Nem todo terreno permite construir o que você imagina. Entenda o que uma análise de viabilidade revela sobre zoneamento, recuos e potencial construtivo — antes de assinar a compra.",
    category: "Antes de começar",
    readingTime: "~7 min",
    date: "02 Jun 2026",
    publishedAt: "2026-06-02",
    keywords: [
      "viabilidade de terreno",
      "comprar terreno",
      "análise de lote",
      "restrições ambientais",
      "consultoria de terreno",
    ],
    kicker: "Terreno · Viabilidade",
    cover: "/assets/images/2f1b802614bd75a610e756275d26d87e.jpg",
    excerpt:
      "Comprar um terreno parece simples: você gosta da localização, o preço cabe no bolso, fecha negócio. Mas o terreno guarda informações que não estão à vista — e que determinam, antes de qualquer projeto, o que você pode (ou não pode) construir ali.",
    body: [
      {
        type: "paragraph",
        dropcap: true,
        leadIn: "A compra ·",
        text: "Comprar um terreno parece simples: você gosta da localização, o preço cabe no bolso, fecha negócio. Mas o terreno guarda informações que não estão à vista — e que determinam, antes de qualquer projeto, o que você pode (ou não pode) construir ali. Descobrir isso depois da compra é uma das formas mais frustrantes de perder dinheiro.",
      },
      {
        type: "heading",
        num: "01",
        text: "O que o olho leigo não vê",
      },
      {
        type: "paragraph",
        text: "Dois terrenos vizinhos, de mesmo tamanho e preço, podem ter potenciais construtivos completamente diferentes. A diferença está em parâmetros técnicos e legais que só uma análise dedicada revela:",
      },
      {
        type: "callout",
        label: "O que define o potencial de um lote",
        items: [
          { title: "Zoneamento e plano diretor", text: "Definem o uso permitido e o que pode ser erguido no lote." },
          { title: "Taxa de ocupação e coeficiente de aproveitamento", text: "Determinam quanto da área pode ser ocupada e qual a área total construível." },
          { title: "Recuos e gabarito", text: "Afastamentos obrigatórios e altura máxima, que moldam o volume possível." },
          { title: "Outorga onerosa", text: "Em alguns casos, construir além de certo limite exige pagamento ao município." },
          { title: "Restrições ambientais", text: "APP, declividade e vegetação protegida podem inviabilizar parte do projeto." },
        ],
      },
      {
        type: "heading",
        num: "02",
        text: "A consulta de viabilidade da prefeitura não basta sozinha",
      },
      {
        type: "paragraph",
        text: "Muitos compradores solicitam a consulta de viabilidade municipal e acham que está resolvido. O documento é essencial — mas é técnico, e interpretá-lo corretamente exige conhecimento de código de obras e uso e ocupação do solo.",
      },
      {
        type: "pullquote",
        text: "Uma leitura equivocada pode dar falsa segurança a uma compra inviável — ou _descartar um terreno que era perfeitamente bom._",
        cite: "Leitura técnica · High Design",
      },
      {
        type: "heading",
        num: "03",
        text: "O que uma análise de aquisição entrega",
      },
      {
        type: "paragraph",
        text: "Antes de comprar, é possível ter em mãos um diagnóstico completo — e um veredito objetivo, baseado em dados, não em intuição.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Consulta de viabilidade interpretada",
            text: "A análise técnica do documento municipal, traduzida para o que ele significa na prática para o seu projeto.",
          },
          {
            title: "Condicionantes legais e ambientais",
            text: "O levantamento de tudo que restringe ou libera o que pode ser construído no lote.",
          },
          {
            title: "Estudo de Massa em 3D",
            text: "Uma visualização do que efetivamente cabe no terreno, respeitando recuos e gabarito.",
          },
          {
            title: "Veredito com indicadores de custo",
            text: "Recomendado, Recomendado com Ressalvas ou Não Recomendado — com uma primeira ordem de grandeza de custo.",
          },
        ],
      },
      {
        type: "heading",
        num: "04",
        text: "A decisão mais barata da sua obra",
      },
      {
        type: "paragraph",
        text: "Avaliar um terreno antes de comprá-lo é, proporcionalmente, uma das decisões **mais baratas** de toda a jornada construtiva — e uma das que mais protege o seu capital. Um terreno comprado às cegas pode custar caro em duas frentes: o valor pago por algo que não serve ao seu projeto, e o custo de adaptar o sonho ao que o lote realmente permite.",
      },
      {
        type: "nextStep",
        label: "Próximo passo",
        text: "A Consultoria de Aquisição de Terreno investiga o que não é visível ao olho leigo e entrega um parecer claro sobre a viabilidade do lote — antes da assinatura.",
        cta: { href: "/#servicos", label: "Conheça os serviços" },
      },
    ],
  },

  {
    slug: "quanto-custa-construir",
    title: "Quanto custa construir? Por que ninguém sério responde isso na primeira reunião",
    description:
      "\"Quanto custa o m²?\" é a pergunta mais comum — e a mais perigosa quando respondida cedo demais. Entenda como o custo de uma obra é estimado de verdade, etapa por etapa.",
    category: "Orçamento e planejamento",
    readingTime: "~7 min",
    date: "26 Mai 2026",
    publishedAt: "2026-05-26",
    keywords: [
      "quanto custa construir",
      "custo de obra",
      "CUB",
      "orçamento detalhado de obra",
      "planejamento financeiro de obra",
    ],
    kicker: "Custo · CUB",
    cover: "/assets/images/3be025d3627c2467c8a208c9fa75d44d.jpg",
    excerpt:
      "\"Quanto custa o metro quadrado?\" é provavelmente a primeira pergunta que todo cliente faz. É uma pergunta legítima — afinal, ninguém quer começar uma obra sem saber onde está se metendo. Mas é também a que mais leva a frustração quando respondida rápido demais.",
    body: [
      {
        type: "paragraph",
        dropcap: true,
        leadIn: "A pergunta ·",
        text: "\"Quanto custa o metro quadrado?\" é provavelmente a primeira pergunta que todo cliente faz. É uma pergunta legítima — afinal, ninguém quer começar uma obra sem saber onde está se metendo. Mas é também a pergunta que mais leva a frustração quando respondida rápido demais, com um número fechado dado de improviso. Um profissional sério evita o chute. E há boas razões para isso.",
      },
      {
        type: "heading",
        num: "01",
        text: "Por que o \"preço fechado na primeira reunião\" é um sinal de alerta",
      },
      {
        type: "paragraph",
        text: "Assumir um custo fechado antes de um levantamento técnico completo é, na prática, prometer algo que ainda não se pode saber. O custo de uma obra depende do terreno, do projeto, dos acabamentos escolhidos, da complexidade estrutural e de dezenas de variáveis que só se definem ao longo do processo.",
      },
      {
        type: "pullquote",
        text: "Um número dado cedo demais é, no melhor caso, um chute. No pior, _uma promessa que vai ser quebrada_ — com o cliente pagando a diferença.",
        cite: "Responsabilidade orçamentária · High Design",
      },
      {
        type: "heading",
        num: "02",
        text: "Como o custo é estimado de verdade — em camadas",
      },
      {
        type: "paragraph",
        text: "A estimativa de custo de uma obra não é um evento único. Ela é refinada em etapas, ganhando precisão conforme o projeto avança:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Indicadores globais (Estudo de Massa)",
            text: "Logo no início, com base no CUB e nos custos Extra-CUB, é possível ter uma primeira ordem de grandeza. Serve para decidir se a ideia faz sentido financeiramente.",
          },
          {
            title: "Estudo de Viabilidade Financeira",
            text: "Um pré-orçamento que separa estrutura (\"parte cinza\") de acabamentos, suficiente para saber se o projeto cabe no seu limite — e onde estão os maiores pesos.",
          },
          {
            title: "Orçamento Executivo",
            text: "Com o projeto executivo pronto, o custo é levantado a partir de quantitativos reais e cotações de mercado, não de médias genéricas. Aqui entram Curva ABC, cronograma físico-financeiro e a previsão de desembolso mês a mês.",
          },
        ],
      },
      {
        type: "heading",
        num: "03",
        text: "Por que a precisão importa tanto",
      },
      {
        type: "paragraph",
        text: "Cada camada reduz a margem de surpresa. O cliente que chega à obra com um Orçamento Executivo detalhado sabe quanto vai gastar, quando vai gastar e quais insumos pesam mais no bolso. Isso transforma a obra de uma fonte de ansiedade em um processo **controlado e auditável**.",
      },
      {
        type: "paragraph",
        text: "A diferença entre uma estimativa baseada em CUB e um orçamento real é a diferença entre \"deve custar mais ou menos isso\" e \"vai custar isto, distribuído assim\". Para quem está investindo o resultado de anos de planejamento, essa diferença é tudo.",
      },
      {
        type: "nextStep",
        label: "Próximo passo",
        text: "O Orçamento Detalhado de Obra levanta os custos reais a partir do seu projeto executivo e de cotações de mercado — uma base sólida para negociar com construtores e controlar gastos sem surpresas.",
        cta: { href: "/#servicos", label: "Conheça os serviços" },
      },
    ],
  },

  {
    slug: "compatibilizacao-de-projetos",
    title: "Compatibilização de projetos: a etapa invisível que evita rombos de dezenas de milhares de reais",
    description:
      "Furos em canos embutidos, pontos elétricos sobre pilares, pé-direito mais baixo que o previsto. Quase todo retrabalho caro de obra nasce da falta de compatibilização. Entenda por quê.",
    category: "Autoridade técnica",
    readingTime: "~6 min",
    date: "19 Mai 2026",
    publishedAt: "2026-05-19",
    keywords: [
      "compatibilização de projetos",
      "projeto executivo",
      "engenharia compatibilizada",
      "retrabalho em obra",
      "coordenação de projetos",
    ],
    kicker: "Projeto · Engenharia",
    cover: "/assets/images/69a3d43734db3451996709d7ff87e6b7.jpg",
    excerpt:
      "Há uma etapa do projeto que o cliente raramente vê, raramente entende — e que frequentemente é ignorada por escritórios para baratear a proposta. É também uma das que mais protege o bolso de quem constrói.",
    body: [
      {
        type: "paragraph",
        dropcap: true,
        leadIn: "O bastidor ·",
        text: "Há uma etapa do projeto que o cliente raramente vê, raramente entende — e que frequentemente é ignorada por escritórios para baratear a proposta. É também uma das que mais protege o bolso de quem constrói. Chama-se compatibilização, e a sua ausência é a origem da maioria dos retrabalhos caros de uma obra.",
      },
      {
        type: "heading",
        num: "01",
        text: "O que é compatibilizar",
      },
      {
        type: "paragraph",
        text: "Uma casa não tem apenas um projeto. Tem o arquitetônico, o estrutural, o elétrico, o hidrossanitário — e cada um costuma ser desenhado por uma disciplina diferente. Compatibilizar é coordenar todos esses projetos entre si, garantindo que eles não se contradigam quando saírem do papel e virarem obra.",
      },
      {
        type: "pullquote",
        text: "Sem compatibilização, cada projeto está \"certo\" isoladamente — _e errado em conjunto._",
        cite: "Coordenação de disciplinas · High Design",
      },
      {
        type: "heading",
        num: "02",
        text: "O que acontece quando se pula essa etapa",
      },
      {
        type: "paragraph",
        text: "Os sintomas aparecem na obra, quando consertar já é caro:",
      },
      {
        type: "callout",
        label: "Sintomas de um projeto não compatibilizado",
        items: [
          { title: "Furos em canos embutidos", text: "Descobertos depois que o revestimento já foi colocado." },
          { title: "Pontos sobre pilares", text: "Instalações elétricas e hidráulicas posicionadas onde simplesmente não podem existir." },
          { title: "Tubulações não previstas na cobertura", text: "Exigindo furar a manta de impermeabilização recém-aplicada." },
          { title: "Pé-direito mais baixo que o esperado", text: "Por conflito entre forro e vigas estruturais." },
          { title: "O mestre de obras decidindo no improviso", text: "Sem embasamento técnico, porque o projeto não respondeu à dúvida." },
        ],
      },
      {
        type: "paragraph",
        text: "Cada um desses problemas é um retrabalho. Somados, representam a perda de **dezenas de milhares de reais** — e atrasos que ninguém previu.",
      },
      {
        type: "heading",
        num: "03",
        text: "Por que é um diferencial, e não um custo",
      },
      {
        type: "paragraph",
        text: "Escritórios que tratam a compatibilização como opcional estão, na prática, transferindo o risco para a obra do cliente. O que se \"economiza\" no projeto volta multiplicado no canteiro. Tratar a compatibilização como etapa obrigatória é uma decisão de quem assume responsabilidade pelo que será construído, não apenas pelo que será desenhado.",
      },
      {
        type: "pullquote",
        text: "A compatibilização é invisível justamente porque funciona: o cliente _nunca vê o rombo que não teve._",
        cite: "Princípio de exequibilidade · High Design",
      },
      {
        type: "nextStep",
        label: "Próximo passo",
        text: "No Projeto Arquitetônico e Engenharia da High Design, a compatibilização entre todas as disciplinas é parte integral do escopo — não um adicional. É assim que o projeto chega à obra sem armadilhas escondidas.",
        cta: { href: "/#servicos", label: "Conheça os serviços" },
      },
    ],
  },

  {
    slug: "como-escolher-um-arquiteto",
    title: "Como escolher um arquiteto: 7 perguntas que revelam se você está em boas mãos",
    description:
      "Antes de contratar, faça as perguntas certas. Um guia prático para avaliar se um escritório de arquitetura vai realmente proteger o seu projeto, o seu orçamento e o seu sonho.",
    category: "Antes de começar",
    readingTime: "~8 min",
    date: "12 Mai 2026",
    publishedAt: "2026-05-12",
    keywords: [
      "como escolher um arquiteto",
      "contratar arquiteto",
      "escritório de arquitetura",
      "responsabilidade técnica",
      "perguntas para arquiteto",
    ],
    kicker: "Contratação",
    cover: "/assets/images/cde5c7744460198965c27f696e6b055e.jpg",
    excerpt:
      "Contratar um arquiteto é uma decisão de confiança. Você está entregando a alguém o projeto onde as memórias mais importantes da sua vida vão acontecer. O problema é que, na primeira reunião, tudo parece bom. As diferenças reais aparecem nas perguntas que poucos clientes sabem fazer.",
    body: [
      {
        type: "paragraph",
        dropcap: true,
        leadIn: "Confiança ·",
        text: "Contratar um arquiteto é uma decisão de confiança. Você está entregando a alguém o projeto onde as memórias mais importantes da sua vida vão acontecer — e, muitas vezes, o resultado de anos de poupança. O problema é que, na primeira reunião, tudo parece bom: portfólio bonito, conversa agradável, promessas animadoras. As diferenças reais aparecem nas perguntas que poucos clientes sabem fazer.",
      },
      {
        type: "paragraph",
        text: "Aqui estão sete delas.",
      },
      {
        type: "steps",
        items: [
          {
            title: "\"Vocês consideram o orçamento da obra desde o início do projeto?\"",
            text: "A resposta certa não é \"depois a gente vê\". Um bom escritório alinha o projeto à sua realidade financeira desde o Estudo de Massa, com indicadores de custo logo nas primeiras etapas. Se a viabilidade financeira só aparece no fim, o risco de um projeto que não cabe no bolso é alto.",
          },
          {
            title: "\"O projeto inclui compatibilização entre as disciplinas?\"",
            text: "Pergunte explicitamente. A compatibilização entre arquitetura, estrutura e instalações é o que evita retrabalhos caros na obra — e é justamente o que muitos escritórios omitem para baratear a proposta.",
          },
          {
            title: "\"Como funciona o processo, etapa por etapa?\"",
            text: "Um bom profissional explica o caminho com clareza, com etapas definidas e prazos realistas. Se a resposta for vaga, desconfie: método claro é sinal de quem trabalha com método, e não com improviso.",
          },
          {
            title: "\"O que vocês entregam, exatamente, ao final?\"",
            text: "Peça a lista de entregáveis. Um Projeto Executivo sério inclui cadernos de detalhamento — geral, ambientes, marcenaria, marmoraria, paginação de piso, esquadrias, luminotécnica, instalações. \"Plantas e renders\" não é a mesma coisa que um manual de execução.",
          },
          {
            title: "\"Vocês prometem preço ou prazo fechado agora?\"",
            text: "Cuidado se a resposta for sim. Custo e prazo fechados antes de um levantamento técnico completo são promessas que costumam ser quebradas. Quem trabalha com responsabilidade evita o número fechado prematuro — e explica por quê.",
          },
          {
            title: "\"Vocês acompanham a escolha de materiais e a obra?\"",
            text: "Bons escritórios oferecem suporte na seleção de acabamentos (a etapa de Anteprojeto) e, quando contratado, na gestão da própria obra. Saber se você terá apoio nessas fases sensíveis evita decisões solitárias e caras.",
          },
          {
            title: "\"Vocês me dizem 'não' quando preciso ouvir?\"",
            text: "Talvez a mais reveladora. Um profissional que concorda com tudo não está te protegendo — está te deixando errar sozinho. Orientação firme significa alguém que conduz com segurança, aponta riscos e diz a verdade técnica, mesmo quando não é o que você queria ouvir.",
          },
        ],
      },
      {
        type: "heading",
        num: "·",
        text: "O que essas perguntas revelam, no fundo",
      },
      {
        type: "paragraph",
        text: "Todas elas medem a mesma coisa: se o escritório **assume responsabilidade pelo que será construído**, ou apenas pelo que será desenhado. A arquitetura que te protege é aquela que pensa na obra real desde o primeiro traço — e que coloca o seu interesse à frente da venda fácil.",
      },
      {
        type: "pullquote",
        text: "Você não precisa carregar o peso técnico sozinho. Mas precisa escolher _quem vai carregá-lo com você._",
        cite: "High Design · Arquitetura que guia",
      },
      {
        type: "nextStep",
        label: "Próximo passo",
        text: "Na High Design, a primeira conversa é uma escuta genuína — sem compromisso. Conte sobre o seu projeto e descubra, na prática, como é ser guiado com método, clareza e acolhimento.",
        cta: { href: "/#contato", label: "Inicie sua conversa" },
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostIndex(slug: string): number {
  return posts.findIndex((p) => p.slug === slug);
}

/** Flattens a post body to plain text — used for wordCount and articleBody. */
export function getPostPlainText(post: BlogPost): string {
  const parts: string[] = [post.excerpt];

  for (const block of post.body) {
    switch (block.type) {
      case "heading":
        parts.push(block.text);
        break;
      case "paragraph":
        parts.push(block.text);
        break;
      case "list":
        parts.push(...block.items);
        break;
      case "steps":
        parts.push(...block.items.flatMap((i) => [i.title, i.text]));
        break;
      case "callout":
        parts.push(block.label, ...block.items.flatMap((i) => [i.title, i.text]));
        break;
      case "pullquote":
        parts.push(block.text);
        break;
      case "nextStep":
        parts.push(block.text);
        break;
    }
  }

  // Strip the inline markdown emphasis markers used in the body copy.
  return parts.join(" ").replace(/[*_]/g, "");
}

export function getPostWordCount(post: BlogPost): number {
  return getPostPlainText(post).split(/\s+/).filter(Boolean).length;
}

export function getRelatedPosts(slug: string, n = 2): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, n);
  const sameCategory = posts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, n);
}
