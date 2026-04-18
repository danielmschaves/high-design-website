"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    sigla: "TERRENO",
    nome: "Consultoria de Aquisição de Terreno",
    tagline: "Avalie os riscos antes de adquirir",
    dores: [
      "Identificação de riscos ocultos: enchentes, deslizamentos, terraplanagem e contenções",
      "Incerteza sobre o que é legalmente permitido construir no lote",
      "Dificuldade em comparar opções e escolher com segurança",
    ],
    entrega:
      "Dossiê de Viabilidade com análise topográfica, estudo solar, raio-x legal e veredito do terreno — incluindo reunião de briefing e apresentação dos resultados.",
  },
  {
    sigla: "CONSTRUÇÃO",
    nome: "Consultoria de Construção",
    tagline: "Descubra o que é possível construir no seu lote",
    dores: [
      "Dúvida se o orçamento disponível cobre o projeto idealizado",
      "Falta de visão espacial da construção no terreno",
      "Risco de iniciar a obra sem direcionamento técnico e financeiro",
    ],
    entrega:
      "Dossiê de Viabilidade Arquitetônica e Financeira com raio-x legal, estudo de massa 3D e orçamento paramétrico real — mais reunião de diagnóstico e direcionamento estratégico.",
  },
  {
    sigla: "PROJETO",
    nome: "Projeto de Arquitetura",
    tagline: "Do esboço ao manual completo de execução",
    dores: [
      "Insegurança sobre estética, funcionalidade e conforto dos ambientes",
      "Risco de retrabalho e desperdício por falta de detalhamento técnico e compatibilização",
      "Complexidade na aprovação junto à prefeitura ou ao condomínio",
    ],
    entrega:
      "Estudo preliminar com plantas humanizadas e renders 3D, projeto legal para aprovação, compatibilização com projetos de engenharia, projeto executivo detalhado (o manual da obra) e memorial descritivo completo de materiais.",
  },
  {
    sigla: "ORÇAMENTO",
    nome: "Orçamento de Obra",
    tagline: "Saiba exatamente quanto vai custar antes de construir",
    dores: [
      "Receio de o dinheiro acabar no meio da execução",
      "Orçamentos de empreiteiros que variam drasticamente sem explicação",
      "Ausência de planejamento de fluxo de caixa ao longo da obra",
    ],
    entrega:
      "Levantamento completo de quantitativos, cotação real de mercado (materiais e mão de obra), lista de etapas construtivas com Curva ABC e cronograma físico-financeiro mensal.",
  },
];

export default function Esteira() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
              Da concepção
              <br />
              <em>à entrega das chaves</em>
            </h2>
            <p>
              Quatro serviços pensados para cada momento da sua jornada. Contrate individualmente ou em sequência — cada etapa prepara o terreno para a próxima.
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
                  className={`w-full grid grid-cols-[36px_104px_1fr] md:grid-cols-[70px_120px_1.2fr_2fr_70px] gap-3 md:gap-8 items-center py-6 md:py-7 text-left bg-transparent border-0 cursor-pointer transition-all duration-[420ms] ease-brand ${
                    open ? "bg-brand-secondary/40" : "hover:bg-brand-secondary/30"
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-stone-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hd-code">{s.sigla}</span>
                  <span className="font-display text-[1.05rem] md:text-[1.15rem] font-normal tracking-[-0.005em] leading-[1.25] text-brand-dark">
                    {s.nome}
                  </span>
                  <span className="hidden md:block text-stone-500 text-[13px] leading-[1.55]">
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
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-8 pb-9 pt-2 pl-0 md:pl-[70px]">
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-3">
                            O que resolvemos
                          </p>
                        </div>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                          {s.dores.map((d) => (
                            <li
                              key={d}
                              className="flex gap-3 text-[14px] leading-[1.7] text-stone-500"
                            >
                              <span className="text-brand-accent flex-shrink-0">—</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-2">
                          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-3">
                            O que entregamos
                          </p>
                        </div>
                        <p className="m-0 text-[14px] leading-[1.7] text-brand-dark mt-2">
                          {s.entrega}
                        </p>
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
