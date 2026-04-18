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

const profile = [
  "Valoriza orientação técnica e processo claro para construir",
  "Busca um projeto funcional, elegante, atemporal e executável",
  "Deseja previsibilidade e segurança nas etapas de planejamento",
  "Entende o projeto como investimento emocional e financeiro",
  "Procura apoio profissional para evitar erros e desperdícios",
  "Prioriza estética refinada pensada para o dia a dia real",
  "Deseja construir com método, organização e suporte integral",
];

export default function ParaQuemE() {
  return (
    <section
      id="para-quem"
      className="bg-brand-secondary overflow-hidden"
      style={{ padding: "var(--space-10) 0" }}
    >
      <div
        className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center"
        style={{ padding: "0 var(--gutter)" }}
      >
        {/* Left: chapter-style header + intro */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent"
          >
            03 · Para quem é
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display font-light leading-[1.1] mt-3 mb-0 text-brand-dark max-w-[18ch]"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", letterSpacing: "-0.01em" }}
          >
            Feito para famílias
            <br />
            <em className="italic text-brand-primary">que valorizam o processo</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-stone-500 leading-[1.6] max-w-[46ch]"
            style={{ fontSize: "var(--text-lead)" }}
          >
            A High Design atende desde clientes com investimento moderado até famílias que buscam maior sofisticação e personalização — mantendo sempre postura acessível, com clareza, acolhimento e segurança.
          </motion.p>
        </motion.div>

        {/* Right: square-marker checklist */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="list-none p-0 m-0 flex flex-col gap-[2px]"
        >
          {profile.map((item, i) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className={`grid grid-cols-[40px_1fr] gap-5 items-center py-5 border-t border-brand-primary/25 ${
                i === profile.length - 1 ? "border-b border-brand-primary/25" : ""
              }`}
            >
              <span className="relative w-6 h-6 border border-brand-accent">
                <span className="absolute inset-[5px] bg-brand-accent" />
              </span>
              <p className="m-0 text-[15px] leading-[1.4] text-brand-dark">{item}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
