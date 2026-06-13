"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const vantagens = [
  {
    title: "Documentação acumulada",
    desc: "Cada etapa gera documentos que alimentam a seguinte. Você não recomeça do zero ao contratar um novo serviço.",
  },
  {
    title: "Alinhamento progressivo",
    desc: "O projeto é refinado e validado tecnicamente a cada fase, reduzindo o risco de retrabalho nas etapas mais avançadas e caras.",
  },
  {
    title: "Decisões mais seguras",
    desc: "Quem passou pela consultoria de terreno chega ao projeto com terreno validado, programa definido e orçamento paramétrico em mãos.",
  },
];

const etapas = [
  "Levantamento",
  "Briefing",
  "Estudo de Massa",
  "Estudo Preliminar",
  "Viabilidade Financeira",
  "Projeto Legal",
  "Compatibilização",
  "Anteprojeto",
  "Projeto Executivo",
  "Planejamento de Obra",
  "Orçamento Executivo",
  "Gestão da Obra",
];

export default function Processo() {
  return (
    <section
      id="como-funciona"
      className="bg-brand-secondary overflow-hidden"
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
          <div className="num">05 · Como funciona</div>
          <div>
            <h2>
              Cada etapa prepara
              <br />
              <em>a próxima</em>
            </h2>
            <p>
              Nossos serviços foram desenhados para funcionar em sequência. Quem percorre a
              esteira de forma progressiva acumula três vantagens concretas.
            </p>
          </div>
        </motion.div>

        {/* Three advantages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-primary/20 mb-16 md:mb-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {vantagens.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="bg-brand-secondary p-8 lg:p-9 flex flex-col gap-3"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[1.15rem] font-normal tracking-[-0.005em] text-brand-dark">
                {v.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.7] text-stone-500">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical pipeline — scale-bar / dimension line */}
        <div>
          <div className="flex items-baseline justify-between mb-7">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent">
              A esteira técnica, em resumo
            </p>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500">
              01 — 12
            </p>
          </div>
          <motion.ol
            className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-primary/15 border-t-2 border-brand-dark"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {etapas.map((etapa, i) => {
              const isDestination = i === etapas.length - 1;
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.li
                  key={etapa}
                  variants={fadeUp}
                  className={`relative overflow-hidden min-h-[132px] p-5 lg:p-6 flex flex-col justify-end ${
                    isDestination ? "bg-brand-dark" : "bg-brand-secondary"
                  }`}
                >
                  {/* tick descending from the baseline */}
                  <span
                    aria-hidden
                    className={`absolute top-0 left-0 w-px h-3 ${
                      isDestination ? "bg-brand-white" : "bg-brand-accent"
                    }`}
                  />
                  {/* oversized ghost ordinal */}
                  <span
                    aria-hidden
                    className={`absolute -top-3 right-1 font-mono font-bold leading-none select-none ${
                      isDestination ? "text-brand-white/10" : "text-brand-primary/[0.07]"
                    }`}
                    style={{ fontSize: "4rem" }}
                  >
                    {num}
                  </span>
                  <span className="relative font-mono text-[10px] tracking-[0.22em] text-brand-accent mb-1.5">
                    {num}
                  </span>
                  <span
                    className={`relative font-display leading-[1.25] ${
                      isDestination
                        ? "text-brand-white text-[15px] font-bold"
                        : "text-brand-dark text-[14px]"
                    }`}
                  >
                    {etapa}
                  </span>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
