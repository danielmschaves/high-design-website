/**
 * The seven-service "esteira" — single source of truth.
 *
 * Previously this lived inline in components/sections/Esteira.tsx. It was
 * lifted here so the rendered accordion, the JSON-LD OfferCatalog and the
 * footer list all describe the same services with the same wording. Divergence
 * between visible copy and structured data is a spam signal; sharing the array
 * makes divergence impossible.
 */

export type Service = {
  /** URL segment for /servicos/[slug]. Never change once indexed. */
  slug: string;
  /** Short code shown in the accordion's left rail. */
  sigla: string;
  nome: string;
  tagline: string;
  descricao: string;
  entregaveis: string[];
  /** Meta description for the service page — a restatement of the copy above,
   *  trimmed to roughly 155 characters so it is not truncated in the SERP. */
  metaDescription: string;
  /** Slugs of blog posts covering this service, for internal linking. */
  relatedPosts: string[];
  /**
   * Questions from lib/faq.ts to surface on this service's page, matched
   * explicitly rather than by substring search. A fuzzy matcher put the same
   * general FAQ on all seven pages; each question now belongs to at most one
   * service, so no page repeats another's content.
   */
  faqQuestions: string[];
};

export const services: Service[] = [
  {
    slug: "consultoria-de-aquisicao-de-terreno",
    sigla: "TERRENO",
    nome: "Consultoria de Aquisição de Terreno",
    tagline: "Avalie os riscos antes de comprar.",
    descricao:
      "Análise técnica, legal e ambiental do lote antes da compra. Investigamos o que não é visível ao olho leigo e entregamos um parecer objetivo: o que pode ser construído, sob quais condições e com quais implicações financeiras.",
    entregaveis: [
      "Reunião de briefing e visita técnica ao lote",
      "Dossiê de Viabilidade — ficha técnica, análise topográfica, estudo solar",
      "Restrições, condicionantes legais e ambientais mapeadas",
      "Veredito da arquiteta: Recomendado · com Ressalvas · Não Recomendado",
    ],
    metaDescription:
      "Análise técnica, legal e ambiental do lote antes da compra. Descubra o que pode ser construído, sob quais condições e com quais implicações financeiras.",
    relatedPosts: ["viabilidade-de-terreno-antes-de-comprar", "projeto-que-nunca-vira-obra"],
    faqQuestions: [
      "Preciso já ter um terreno para começar?",
    ]
  },
  {
    slug: "consultoria-de-construcao",
    sigla: "CONSTRUÇÃO",
    nome: "Consultoria de Construção",
    tagline: "Descubra o que é possível construir no seu lote.",
    descricao:
      "Para quem já tem o terreno e quer validar a viabilidade da construção antes de investir em projeto completo. Cruzamos suas aspirações com as normas do lote e o orçamento disponível, com clareza sobre o que é possível e viável.",
    entregaveis: [
      "Reunião de diagnóstico",
      "Dossiê de Viabilidade Arquitetônica e Financeira — raio-x legal e ambiental",
      "Estudo de Massa 3D e orçamento paramétrico (estrutura + acabamentos)",
      "Plantas e imagens 3D do Estudo Preliminar + reunião de direcionamento",
    ],
    metaDescription:
      "Já tem o terreno? Valide a viabilidade arquitetônica e financeira da construção antes de investir em projeto completo, com estudo de massa e orçamento paramétrico.",
    relatedPosts: ["projeto-que-nunca-vira-obra", "quanto-custa-construir"],
    faqQuestions: [
      "Quanto custa construir?",
    ]
  },
  {
    slug: "projeto-arquitetonico-e-engenharia",
    sigla: "PROJETO",
    nome: "Projeto Arquitetônico e Engenharia",
    tagline: "Do esboço ao manual completo de execução.",
    descricao:
      "Desenvolvimento completo do projeto, da concepção ao manual de obra. Transforma sua visão em um projeto exclusivo, tecnicamente detalhado e legalmente apto para construir, com compatibilização integral entre todas as disciplinas de engenharia.",
    entregaveis: [
      "Briefing aprofundado, moodboard e programa formalizados",
      "Estudo Preliminar com renderizações 3D",
      "Estudo de Viabilidade Financeira (quando contratado)",
      "Projeto Legal com alvará (quando aplicável)",
      "Relatório de Compatibilização e lista de materiais do Anteprojeto",
      "10 cadernos do Projeto Executivo",
    ],
    metaDescription:
      "Projeto completo, da concepção ao manual de obra, com compatibilização integral entre arquitetura e todas as disciplinas de engenharia.",
    relatedPosts: ["compatibilizacao-de-projetos", "projeto-que-nunca-vira-obra"],
    faqQuestions: [
      "O que é compatibilização de projetos e por que ela importa?",
    ]
  },
  {
    slug: "orcamento-detalhado-de-obra",
    sigla: "ORÇAMENTO",
    nome: "Orçamento Detalhado de Obra",
    tagline: "Saiba exatamente quanto vai custar antes de construir.",
    descricao:
      "Levantamento minucioso dos custos reais a partir de quantitativos extraídos do projeto executivo e cotações reais de mercado — não estimativas genéricas. Pode ser contratado para projetos da High Design ou de outros profissionais.",
    entregaveis: [
      "Planilha de levantamento de quantitativos",
      "Planilha orçamentária detalhada por etapa",
      "Curva ABC e cronograma físico-financeiro",
      "Reunião de apresentação estratégica",
    ],
    metaDescription:
      "Custos reais a partir de quantitativos do projeto executivo e cotações de mercado — não estimativas genéricas. Também para projetos de outros profissionais.",
    relatedPosts: ["quanto-custa-construir", "projeto-que-nunca-vira-obra"],
    faqQuestions: [
      "A High Design faz orçamento de projetos de outros escritórios?",
    ]
  },
  {
    slug: "gestao-de-obra",
    sigla: "GESTÃO",
    nome: "Gestão de Obra",
    tagline: "Construa com acompanhamento profissional completo.",
    descricao:
      "Gerenciamento, acompanhamento e fiscalização integral da obra, do planejamento à regularização final. Assumimos a coordenação completa da construção, protegendo você de fraudes, sobrepreços, erros de execução e descontrole financeiro.",
    entregaveis: [
      "Caminho crítico e cronograma de atividades",
      "Orçamento detalhado incluso e gestão ativa da obra",
      "Relatórios periódicos e de segurança (EPIs e NRs)",
      "Documentação de regularização técnica e Habite-se",
    ],
    metaDescription:
      "Gerenciamento, acompanhamento e fiscalização integral da obra, do planejamento ao Habite-se. Proteção contra sobrepreços, erros de execução e descontrole financeiro.",
    relatedPosts: ["compatibilizacao-de-projetos", "quanto-custa-construir"],
    faqQuestions: [
      "A High Design acompanha a obra ou só entrega o projeto?",
    ]
  },
  {
    slug: "aquisicao-ou-venda-de-imovel-pronto",
    sigla: "IMÓVEL PRONTO",
    nome: "Aquisição ou Venda de Imóvel Pronto",
    tagline: "Compre — ou venda — com informação técnica de verdade.",
    descricao:
      "Para quem está adquirindo ou vendendo um imóvel já construído, em duas vertentes independentes. Na compra, uma vistoria técnica antes da assinatura revela patologias ocultas e orienta sobre direitos e prazos de garantia. Na venda, uma análise de mercado por inferência estatística define o preço justo, protegendo contra o subpreço e contra a precificação que trava o negócio.",
    entregaveis: [
      "Vistoria técnica do imóvel antes da assinatura (compra)",
      "Dossiê Técnico de Compra: laudos estrutural e de instalações, conforto e riscos",
      "Análise documental e parecer técnico final (compra)",
      "Análise comparativa de mercado e faixa de valor recomendada (venda)",
    ],
    metaDescription:
      "Vistoria técnica antes de assinar na compra; análise de mercado por inferência estatística na venda. Informação técnica de verdade dos dois lados do negócio.",
    relatedPosts: ["como-escolher-um-arquiteto", "viabilidade-de-terreno-antes-de-comprar"],
    faqQuestions: []
  },
  {
    slug: "projeto-de-reforma-e-transformacao",
    sigla: "REFORMA",
    nome: "Projeto de Reforma e Transformação",
    tagline: "Transforme o que já existe — com a segurança de uma obra nova.",
    descricao:
      "Atende três modalidades conforme a complexidade: Transformação Completa com Ampliação (acréscimo de área, com aprovação na prefeitura e averbação na matrícula); Transformação Completa sem Ampliação (demolição e reconfiguração de ambientes, sem ampliar a área); e Transformação Simples (troca de bancada, revestimentos, pintura e marcenaria, sem mexer na estrutura).",
    entregaveis: [
      "Levantamento métrico e análise bioclimática",
      "Briefing e moodboard formalizados",
      "Estudo Preliminar e compatibilização",
      "Anteprojeto e Projeto Executivo, conforme a modalidade",
    ],
    metaDescription:
      "Transformação completa com ou sem ampliação, ou reforma simples. Levantamento métrico, projeto e compatibilização com a segurança de uma obra nova.",
    relatedPosts: ["compatibilizacao-de-projetos", "como-escolher-um-arquiteto"],
    faqQuestions: []
  },
];
