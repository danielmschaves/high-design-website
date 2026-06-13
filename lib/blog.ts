export type BlogCategory =
  | "Antes de começar"
  | "Orçamento e planejamento"
  | "Autoridade técnica";

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "callout"; label: string; text: string; cta: { href: string; label: string } };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  readingTime: string;
  excerpt: string;
  cover: string;
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
    cover: "/assets/images/04c863415f33702f810a01f9cf1549a8.jpg",
    excerpt:
      "Existe uma cena que se repete em escritórios de arquitetura por todo o Brasil. O cliente recebe um projeto encantador — renders impecáveis, uma casa dos sonhos. Ele aprova, pede orçamento de obra. O custo real é o dobro do que tem para investir. O projeto vai para a gaveta.",
    body: [
      {
        type: "paragraph",
        text: "Existe uma cena que se repete em escritórios de arquitetura por todo o Brasil. O cliente recebe um projeto encantador — plantas humanizadas, renders impecáveis, uma casa dos sonhos em três dimensões. Ele aprova, paga, comemora. E então pede um orçamento de obra. É aí que o sonho trava: o custo real é o dobro do que ele tem para investir. O projeto, lindo como é, não cabe na realidade. Ele vai para a gaveta.",
      },
      {
        type: "paragraph",
        text: "Esse não é um caso isolado. É talvez a falha mais comum — e mais cara — do mercado de arquitetura. E quase sempre tem a mesma origem: o projeto foi concebido sem considerar o **orçamento real da obra** desde o primeiro traço.",
      },
      {
        type: "heading",
        text: "O projeto é um meio, não um fim",
      },
      {
        type: "paragraph",
        text: "Um projeto arquitetônico não é o destino. É o instrumento que transforma uma intenção em estrutura, um sonho em espaço construído. Quando o projeto existe apenas na tela, ele não cumpriu sua função. Beleza sem viabilidade é ilusão; e funcionalidade sem orçamento real é decoração sem chão.",
      },
      {
        type: "paragraph",
        text: "Por isso, na High Design, a exequibilidade é um princípio inegociável: cada solução nasce alinhada à realidade financeira do cliente. O projeto é concebido para ser executado, dentro do orçamento disponível, com fidelidade e segurança.",
      },
      {
        type: "heading",
        text: "O que torna um projeto realmente executável",
      },
      {
        type: "paragraph",
        text: "Três decisões, tomadas cedo, separam um projeto que vira obra de um que fica no papel:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Estudo de Massa com indicadores de custo logo no início.** Antes de detalhar qualquer ambiente, é possível estimar o custo global da edificação com base no CUB e nos custos Extra-CUB. Isso dá ao cliente uma primeira referência financeira antes de qualquer investimento pesado em projeto.",
          "**Estudo de Viabilidade Financeira antes do detalhamento.** Um pré-orçamento que separa a \"parte cinza\" (estrutura) do raio-x dos acabamentos permite decidir com base em números reais — e ajustar o projeto enquanto ajustar ainda é barato.",
          "**Compatibilização entre arquitetura e engenharia.** Um projeto só é verdadeiramente executivo quando todas as disciplinas conversam entre si. Sem isso, os custos extras aparecem na obra, quando já é tarde.",
        ],
      },
      {
        type: "heading",
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
        type: "callout",
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
    cover: "/assets/images/2f1b802614bd75a610e756275d26d87e.jpg",
    excerpt:
      "Comprar um terreno parece simples: você gosta da localização, o preço cabe no bolso, fecha negócio. Mas o terreno guarda informações que não estão à vista — e que determinam, antes de qualquer projeto, o que você pode (ou não pode) construir ali.",
    body: [
      {
        type: "paragraph",
        text: "Comprar um terreno parece simples: você gosta da localização, o preço cabe no bolso, fecha negócio. Mas o terreno guarda informações que não estão à vista — e que determinam, antes de qualquer projeto, o que você pode (ou não pode) construir ali. Descobrir isso depois da compra é uma das formas mais frustrantes de perder dinheiro.",
      },
      {
        type: "heading",
        text: "O que o olho leigo não vê",
      },
      {
        type: "paragraph",
        text: "Dois terrenos vizinhos, de mesmo tamanho e preço, podem ter potenciais construtivos completamente diferentes. A diferença está em parâmetros técnicos e legais que só uma análise dedicada revela:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Zoneamento e plano diretor** — definem o uso permitido e o que pode ser erguido no lote.",
          "**Taxa de ocupação e coeficiente de aproveitamento** — determinam quanto da área do terreno pode ser ocupada e qual a área total construível.",
          "**Recuos e gabarito** — afastamentos obrigatórios e altura máxima, que moldam o volume possível da edificação.",
          "**Outorga onerosa** — em alguns casos, construir além de certo limite exige pagamento ao município.",
          "**Restrições ambientais** — APP, declividade, vegetação protegida e outras condicionantes que podem inviabilizar parte do projeto.",
        ],
      },
      {
        type: "heading",
        text: "A consulta de viabilidade da prefeitura não basta sozinha",
      },
      {
        type: "paragraph",
        text: "Muitos compradores solicitam a consulta de viabilidade municipal e acham que está resolvido. O documento é essencial — mas é técnico, e interpretá-lo corretamente exige conhecimento de código de obras e uso e ocupação do solo. Uma leitura equivocada pode dar falsa segurança a uma compra inviável, ou descartar um terreno que era perfeitamente bom.",
      },
      {
        type: "heading",
        text: "O que uma análise de aquisição entrega",
      },
      {
        type: "paragraph",
        text: "Antes de comprar, é possível ter em mãos: a análise interpretada da consulta de viabilidade, o levantamento das condicionantes legais e ambientais, um Estudo de Massa em 3D mostrando o que cabe no lote, e indicadores iniciais de custo. Com isso, o veredito é objetivo — Recomendado, Recomendado com Ressalvas ou Não Recomendado — e baseado em dados, não em intuição.",
      },
      {
        type: "heading",
        text: "A decisão mais barata da sua obra",
      },
      {
        type: "paragraph",
        text: "Avaliar um terreno antes de comprá-lo é, proporcionalmente, uma das decisões mais baratas de toda a jornada construtiva — e uma das que mais protege o seu capital. Um terreno comprado às cegas pode custar caro em duas frentes: o valor pago por algo que não serve ao seu projeto, e o custo de adaptar o sonho ao que o lote realmente permite.",
      },
      {
        type: "callout",
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
    cover: "/assets/images/3be025d3627c2467c8a208c9fa75d44d.jpg",
    excerpt:
      "\"Quanto custa o metro quadrado?\" é provavelmente a primeira pergunta que todo cliente faz. É uma pergunta legítima — afinal, ninguém quer começar uma obra sem saber onde está se metendo. Mas é também a que mais leva a frustração quando respondida rápido demais.",
    body: [
      {
        type: "paragraph",
        text: "\"Quanto custa o metro quadrado?\" é provavelmente a primeira pergunta que todo cliente faz. É uma pergunta legítima — afinal, ninguém quer começar uma obra sem saber onde está se metendo. Mas é também a pergunta que mais leva a frustração quando respondida rápido demais, com um número fechado dado de improviso. Um profissional sério evita o chute. E há boas razões para isso.",
      },
      {
        type: "heading",
        text: "Por que o \"preço fechado na primeira reunião\" é um sinal de alerta",
      },
      {
        type: "paragraph",
        text: "Assumir um custo fechado antes de um levantamento técnico completo é, na prática, prometer algo que ainda não se pode saber. O custo de uma obra depende do terreno, do projeto, dos acabamentos escolhidos, da complexidade estrutural e de dezenas de variáveis que só se definem ao longo do processo. Um número dado cedo demais é, no melhor caso, um chute; no pior, uma promessa que vai ser quebrada — com o cliente pagando a diferença.",
      },
      {
        type: "heading",
        text: "Como o custo é estimado de verdade — em camadas",
      },
      {
        type: "paragraph",
        text: "A estimativa de custo de uma obra não é um evento único. Ela é refinada em etapas, ganhando precisão conforme o projeto avança:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Indicadores globais (Estudo de Massa).** Logo no início, com base no CUB e nos custos Extra-CUB, é possível ter uma primeira ordem de grandeza. Serve para decidir se a ideia faz sentido financeiramente.",
          "**Estudo de Viabilidade Financeira.** Um pré-orçamento que separa estrutura (\"parte cinza\") de acabamentos, suficiente para saber se o projeto cabe no seu limite — e onde estão os maiores pesos.",
          "**Orçamento Executivo.** Com o projeto executivo pronto, o custo é levantado a partir de quantitativos reais e cotações de mercado, não de médias genéricas. Aqui entram Curva ABC, cronograma físico-financeiro e a previsão de desembolso mês a mês.",
        ],
      },
      {
        type: "heading",
        text: "Por que a precisão importa tanto",
      },
      {
        type: "paragraph",
        text: "Cada camada reduz a margem de surpresa. O cliente que chega à obra com um Orçamento Executivo detalhado sabe quanto vai gastar, quando vai gastar e quais insumos pesam mais no bolso. Isso transforma a obra de uma fonte de ansiedade em um processo controlado e auditável.",
      },
      {
        type: "paragraph",
        text: "A diferença entre uma estimativa baseada em CUB e um orçamento real é a diferença entre \"deve custar mais ou menos isso\" e \"vai custar isto, distribuído assim\". Para quem está investindo o resultado de anos de planejamento, essa diferença é tudo.",
      },
      {
        type: "callout",
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
    cover: "/assets/images/69a3d43734db3451996709d7ff87e6b7.jpg",
    excerpt:
      "Há uma etapa do projeto que o cliente raramente vê, raramente entende — e que frequentemente é ignorada por escritórios para baratear a proposta. É também uma das que mais protege o bolso de quem constrói.",
    body: [
      {
        type: "paragraph",
        text: "Há uma etapa do projeto que o cliente raramente vê, raramente entende — e que frequentemente é ignorada por escritórios para baratear a proposta. É também uma das que mais protege o bolso de quem constrói. Chama-se compatibilização, e a sua ausência é a origem da maioria dos retrabalhos caros de uma obra.",
      },
      {
        type: "heading",
        text: "O que é compatibilizar",
      },
      {
        type: "paragraph",
        text: "Uma casa não tem apenas um projeto. Tem o arquitetônico, o estrutural, o elétrico, o hidrossanitário — e cada um costuma ser desenhado por uma disciplina diferente. Compatibilizar é coordenar todos esses projetos entre si, garantindo que eles não se contradigam quando saírem do papel e virarem obra.",
      },
      {
        type: "paragraph",
        text: "Um projeto só é verdadeiramente executivo quando todas as disciplinas conversam entre si. Sem compatibilização, cada projeto está \"certo\" isoladamente — e errado em conjunto.",
      },
      {
        type: "heading",
        text: "O que acontece quando se pula essa etapa",
      },
      {
        type: "paragraph",
        text: "Os sintomas aparecem na obra, quando consertar já é caro:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Furos em canos embutidos** na parede, descobertos depois que o revestimento já foi colocado.",
          "**Pontos elétricos e hidráulicos posicionados sobre pilares**, onde simplesmente não podem existir.",
          "**Tubulações e ralos da cobertura não previstos** após a impermeabilização — exigindo furar a manta recém-aplicada.",
          "**Pé-direito mais baixo que o esperado**, por conflito entre forro e vigas.",
          "**O mestre de obras decidindo no improviso**, sem embasamento técnico, porque o projeto não respondeu à dúvida.",
        ],
      },
      {
        type: "paragraph",
        text: "Cada um desses problemas é um retrabalho. Somados, representam a perda de dezenas de milhares de reais — e atrasos que ninguém previu.",
      },
      {
        type: "heading",
        text: "Por que é um diferencial, e não um custo",
      },
      {
        type: "paragraph",
        text: "Escritórios que tratam a compatibilização como opcional estão, na prática, transferindo o risco para a obra do cliente. O que se \"economiza\" no projeto volta multiplicado no canteiro. Tratar a compatibilização como etapa obrigatória é uma decisão de quem assume responsabilidade pelo que será construído, não apenas pelo que será desenhado.",
      },
      {
        type: "paragraph",
        text: "A compatibilização é invisível justamente porque funciona: quando bem feita, os problemas que ela evita simplesmente nunca acontecem. O cliente nunca vê o rombo que não teve.",
      },
      {
        type: "callout",
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
    cover: "/assets/images/cde5c7744460198965c27f696e6b055e.jpg",
    excerpt:
      "Contratar um arquiteto é uma decisão de confiança. Você está entregando a alguém o projeto onde as memórias mais importantes da sua vida vão acontecer. O problema é que, na primeira reunião, tudo parece bom. As diferenças reais aparecem nas perguntas que poucos clientes sabem fazer.",
    body: [
      {
        type: "paragraph",
        text: "Contratar um arquiteto é uma decisão de confiança. Você está entregando a alguém o projeto onde as memórias mais importantes da sua vida vão acontecer — e, muitas vezes, o resultado de anos de poupança. O problema é que, na primeira reunião, tudo parece bom: portfólio bonito, conversa agradável, promessas animadoras. As diferenças reais aparecem nas perguntas que poucos clientes sabem fazer.",
      },
      {
        type: "paragraph",
        text: "Aqui estão sete delas.",
      },
      {
        type: "heading",
        text: "1. \"Vocês consideram o orçamento da obra desde o início do projeto?\"",
      },
      {
        type: "paragraph",
        text: "A resposta certa não é \"depois a gente vê\". Um bom escritório alinha o projeto à sua realidade financeira desde o Estudo de Massa, com indicadores de custo logo nas primeiras etapas. Se a viabilidade financeira só aparece no fim, o risco de um projeto que não cabe no bolso é alto.",
      },
      {
        type: "heading",
        text: "2. \"O projeto inclui compatibilização entre as disciplinas?\"",
      },
      {
        type: "paragraph",
        text: "Pergunte explicitamente. A compatibilização entre arquitetura, estrutura e instalações é o que evita retrabalhos caros na obra — e é justamente o que muitos escritórios omitem para baratear a proposta.",
      },
      {
        type: "heading",
        text: "3. \"Como funciona o processo, etapa por etapa?\"",
      },
      {
        type: "paragraph",
        text: "Um bom profissional explica o caminho com clareza, com etapas definidas e prazos realistas. Se a resposta for vaga, desconfie: método claro é sinal de quem trabalha com método, e não com improviso.",
      },
      {
        type: "heading",
        text: "4. \"O que vocês entregam, exatamente, ao final?\"",
      },
      {
        type: "paragraph",
        text: "Peça a lista de entregáveis. Um Projeto Executivo sério inclui cadernos de detalhamento — geral, ambientes, marcenaria, marmoraria, paginação de piso, esquadrias, luminotécnica, instalações. \"Plantas e renders\" não é a mesma coisa que um manual de execução.",
      },
      {
        type: "heading",
        text: "5. \"Vocês prometem preço ou prazo fechado agora?\"",
      },
      {
        type: "paragraph",
        text: "Cuidado se a resposta for sim. Custo e prazo fechados antes de um levantamento técnico completo são promessas que costumam ser quebradas. Quem trabalha com responsabilidade evita o número fechado prematuro — e explica por quê.",
      },
      {
        type: "heading",
        text: "6. \"Vocês acompanham a escolha de materiais e a obra?\"",
      },
      {
        type: "paragraph",
        text: "Bons escritórios oferecem suporte na seleção de acabamentos (a etapa de Anteprojeto) e, quando contratado, na gestão da própria obra. Saber se você terá apoio nessas fases sensíveis evita decisões solitárias e caras.",
      },
      {
        type: "heading",
        text: "7. \"Vocês me dizem 'não' quando preciso ouvir?\"",
      },
      {
        type: "paragraph",
        text: "Talvez a mais reveladora. Um profissional que concorda com tudo não está te protegendo — está te deixando errar sozinho. Orientação firme significa alguém que conduz com segurança, aponta riscos e diz a verdade técnica, mesmo quando não é o que você queria ouvir.",
      },
      {
        type: "heading",
        text: "O que essas perguntas revelam, no fundo",
      },
      {
        type: "paragraph",
        text: "Todas elas medem a mesma coisa: se o escritório assume responsabilidade pelo que será construído, ou apenas pelo que será desenhado. A arquitetura que te protege é aquela que pensa na obra real desde o primeiro traço — e que coloca o seu interesse à frente da venda fácil.",
      },
      {
        type: "paragraph",
        text: "Você não precisa carregar o peso técnico sozinho. Mas precisa escolher quem vai carregá-lo com você.",
      },
      {
        type: "callout",
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
