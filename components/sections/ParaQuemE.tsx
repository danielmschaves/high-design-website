"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const profiles = [
  {
    code: "R · Morar",
    title: "Cliente residencial",
    desc: "Quem está construindo ou reformando a casa própria — muitas vezes a decisão mais importante e emocional de uma fase da vida. Valoriza estética, propósito, acolhimento e a certeza de ser guiado por alguém de confiança.",
  },
  {
    code: "C · Operar",
    title: "Cliente comercial",
    desc: "Empresário abrindo, expandindo ou reposicionando o espaço do negócio. Vê arquitetura como investimento, não como sonho. Quer prazo, custo e escopo claros, processo eficiente e um resultado que comunique o nível da empresa.",
  },
  {
    code: "I · Rentabilizar",
    title: "Investidor imobiliário",
    desc: "Constrói para vender, alugar ou compor patrimônio. Pensa em números — custo por metro quadrado, prazo de retorno, margem. Valoriza método, viabilidade financeira desde o início e previsibilidade acima de tudo.",
  },
];

export default function ParaQuemE() {
  return (
    <section
      id="para-quem"
      className="bg-brand-secondary overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
    >
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[58ch] mb-14 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent"
          >
            03 · Para quem existimos
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display font-light leading-[1.1] mt-3 mb-0 text-brand-dark max-w-[18ch]"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", letterSpacing: "-0.01em" }}
          >
            Feito para quem
            <br />
            <em className="italic text-brand-primary">valoriza o processo</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-stone-500 leading-[1.7]"
            style={{ fontSize: "var(--text-lead)" }}
          >
            Atendemos três perfis de cliente, classificados pelo objetivo principal do
            projeto: <strong className="text-brand-dark font-bold">morar, operar um negócio ou rentabilizar</strong>. Os perfis não são
            exclusivos — um mesmo cliente pode combinar características de mais de um.
          </motion.p>
        </motion.div>

        {/* Three profile cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 bg-brand-primary/20"
          style={{ gap: "1px" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {profiles.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="bg-brand-secondary p-8 lg:p-10 flex flex-col gap-4 transition-colors duration-[420ms] ease-brand hover:bg-paper"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent">
                {p.code}
              </span>
              <h3 className="m-0 font-display text-[1.25rem] font-normal tracking-[-0.005em] text-brand-dark">
                {p.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.7] text-stone-500">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
