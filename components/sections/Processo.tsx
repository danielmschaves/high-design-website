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
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-primary/20"
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
      </div>
    </section>
  );
}
