/**
 * Frequently-asked questions.
 *
 * Every answer here restates something the site already asserts elsewhere
 * (brand pillars, the seven services, the blog articles). Nothing is invented:
 * FAQ schema whose answers are not visible on the page — or not true — is a
 * structured-data violation, not an optimisation.
 *
 * These render as a real <section> on the homepage *and* feed FAQPage JSON-LD.
 * The visible copy and the schema come from this one array, so they cannot
 * drift apart.
 */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "O que é a High Design Arquitetura e Urbanismo?",
    answer:
      "A High Design Arquitetura e Urbanismo é um escritório de arquitetura e urbanismo especializado em projetos residenciais e comerciais de médio a alto padrão. O escritório conduz o cliente da escolha do terreno até a entrega das chaves, com base em quatro pilares: funcional, elegante, atemporal e executável.",
  },
  {
    question: "Quem é Emanoella Goulart?",
    answer:
      "Emanoella Goulart é a arquiteta e urbanista à frente da High Design Arquitetura e Urbanismo. Ela conduz projetos residenciais e comerciais de médio a alto padrão com método, técnica e acolhimento, e é responsável técnica por todos os projetos do escritório. Contato: contato@highdesign.arq.br.",
  },
  {
    question: "Quais serviços a High Design oferece?",
    answer:
      "São sete serviços que cobrem toda a jornada de construção: Consultoria de Aquisição de Terreno, Consultoria de Construção, Projeto Arquitetônico e Engenharia, Orçamento Detalhado de Obra, Gestão de Obra, Consultoria de Aquisição ou Venda de Imóvel Pronto e Projeto de Reforma e Transformação. Cada um pode ser contratado isoladamente ou em sequência.",
  },
  {
    question: "Preciso já ter um terreno para começar?",
    answer:
      "Não. Se você ainda não comprou, a Consultoria de Aquisição de Terreno analisa o lote nos aspectos técnico, legal e ambiental antes da compra e entrega um veredito objetivo — Recomendado, com Ressalvas ou Não Recomendado. Se você já tem o terreno, a Consultoria de Construção valida o que é possível construir nele antes de qualquer investimento em projeto completo.",
  },
  {
    question: "Quanto custa construir?",
    answer:
      "Nenhum profissional sério responde isso na primeira reunião sem antes analisar o terreno, o programa de necessidades e o padrão de acabamento pretendido. O caminho responsável é um Estudo de Massa com indicadores de custo no início e, na sequência, um Estudo de Viabilidade Financeira que separa a estrutura dos acabamentos — assim você decide com números reais, enquanto ajustar ainda é barato.",
  },
  {
    question: "A High Design acompanha a obra ou só entrega o projeto?",
    answer:
      "As duas coisas, conforme a contratação. O serviço de Gestão de Obra cobre gerenciamento, acompanhamento e fiscalização integral da construção, do planejamento à regularização final e ao Habite-se, incluindo cronograma, relatórios periódicos e controle financeiro.",
  },
  {
    question: "O que é compatibilização de projetos e por que ela importa?",
    answer:
      "Compatibilização é a etapa em que arquitetura, estrutura, elétrica, hidráulica e demais disciplinas são sobrepostas e conferidas entre si antes da obra começar. Sem ela, os conflitos entre projetos só aparecem no canteiro — quando corrigir custa muito mais. É o que separa um projeto executivo de um conjunto de desenhos bonitos.",
  },
  {
    question: "A High Design faz orçamento de projetos de outros escritórios?",
    answer:
      "Sim. O Orçamento Detalhado de Obra pode ser contratado tanto para projetos da High Design quanto para projetos desenvolvidos por outros profissionais. O levantamento parte de quantitativos extraídos do projeto executivo e de cotações reais de mercado, não de estimativas genéricas.",
  },
  {
    question: "Quais regiões a High Design atende?",
    answer:
      "O escritório atende Santa Catarina e projetos em todo o Brasil, com atendimento em português. O primeiro contato pode ser feito pelo e-mail contato@highdesign.arq.br ou pelo formulário do site.",
  },
  {
    question: "Como começar um projeto com a High Design?",
    answer:
      "O primeiro passo é uma conversa de escuta, sem compromisso, para entender o momento do seu projeto — se você ainda está avaliando um terreno, já tem o lote, ou quer reformar um imóvel existente. A partir daí indicamos qual serviço da esteira faz sentido começar. Escreva para contato@highdesign.arq.br ou use o formulário na seção de contato.",
  },
];

/** FAQPage JSON-LD built from the same array the section renders. */
export function faqSchema(pageUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
