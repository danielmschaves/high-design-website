"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  sigla: string;
  nome: string;
  tagline: string;
  descricao: string;
  entregaveis: string[];
};

const services: Service[] = [
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

export default function Esteira() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="bg-stone-50 overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
    >
      <div className="max-w-content mx-auto">
        {/* Chapter header */}
        <motion.div
          className="hd-chapter"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="num">04 · Serviços</div>
          <div>
            <h2>
              Da escolha do terreno
              <br />
              <em>à entrega das chaves</em>
            </h2>
            <p>
              Sete serviços pensados para cada momento da sua jornada — com início, escopo e entrega bem definidos. Contrate de forma independente ou em sequência: quem percorre a esteira progressivamente acumula documentação, reduz retrabalho e decide com mais segurança.
            </p>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="border-t border-stone-300">
          {services.map((s, i) => {
            const open = openIdx === i;
            return (
              <div key={s.sigla} className="border-b border-stone-300">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`esteira-panel-${i}`}
                  className={`w-full grid grid-cols-[32px_1fr_24px] md:grid-cols-[56px_132px_minmax(0,1fr)_minmax(0,1.3fr)_44px] gap-4 md:gap-8 items-center py-6 md:py-8 text-left bg-transparent border-0 cursor-pointer transition-all duration-[420ms] ease-brand ${
                    open ? "bg-brand-secondary/40" : "hover:bg-brand-secondary/30"
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-stone-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden md:flex">
                    <span className="hd-code">{s.sigla}</span>
                  </span>
                  <span className="font-display text-[1.05rem] md:text-[1.2rem] font-normal tracking-[-0.005em] leading-[1.25] text-brand-dark">
                    {s.nome}
                  </span>
                  <span className="hidden md:block text-[13px] leading-[1.5] text-stone-500">
                    {s.tagline}
                  </span>
                  <span
                    aria-hidden
                    className={`hidden md:inline-block justify-self-end relative h-px bg-stone-300 transition-all duration-[420ms] ease-brand ${
                      open ? "w-9 bg-brand-dark" : "w-5"
                    }`}
                    style={{ transform: open ? "rotate(90deg)" : "none" }}
                  >
                    <span
                      className="absolute right-0 -top-[3px] w-2 h-2 border-r border-t"
                      style={{
                        borderColor: open ? "var(--color-brand-dark)" : "var(--color-stone-300)",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </span>
                  {/* mobile chevron */}
                  <span
                    aria-hidden
                    className={`md:hidden justify-self-end relative h-px w-4 bg-stone-300 transition-all duration-[420ms] ease-brand ${
                      open ? "bg-brand-dark" : ""
                    }`}
                    style={{ transform: open ? "rotate(90deg)" : "none" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      id={`esteira-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-12 pt-2 md:pl-[56px]">
                        {/* Left: description */}
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-4">
                            O serviço
                          </p>
                          <p className="m-0 text-[15px] leading-[1.7] text-stone-500">
                            {s.descricao}
                          </p>
                        </div>

                        {/* Right: deliverables */}
                        <div className="md:border-l md:border-stone-300 md:pl-16">
                          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-4">
                            O que entregamos
                          </p>
                          <ul className="list-none p-0 m-0 flex flex-col">
                            {s.entregaveis.map((d) => (
                              <li
                                key={d}
                                className="grid grid-cols-[16px_1fr] gap-3 text-[14px] leading-[1.5] text-brand-dark py-3 border-t border-stone-300/70 first:border-t-0 first:pt-0"
                              >
                                <span className="text-brand-accent">—</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a href="#contato" className="hd-btn">
            Solicitar orçamento <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
