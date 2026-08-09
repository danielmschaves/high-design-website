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
  /** Short code shown in the accordion's left rail. */
  sigla: string;
  nome: string;
  tagline: string;
  descricao: string;
  entregaveis: string[];
};

export const services: Service[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
