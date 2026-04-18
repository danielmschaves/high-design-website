"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const meta = [
  { k: "Método",  v: <>Um <strong className="font-bold">processo claro</strong> em cada etapa</> },
  { k: "Técnica", v: <><strong className="font-bold">Rigor</strong> e responsabilidade projetual</> },
  { k: "Obra",    v: <>Todo projeto nasce <strong className="font-bold">para ser construído</strong></> },
  {
    k: "Contato",
    v: (
      <a
        href="mailto:contato@highdesign.arq.br"
        className="text-brand-dark no-underline border-b border-brand-accent pb-0.5 hover:text-brand-primary transition-colors duration-300"
      >
        contato@highdesign.arq.br
      </a>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-stone-50 overflow-hidden"
    >
      {/* Faint grid background, masked to fade out toward bottom */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(61,48,53,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(61,48,53,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
        }}
      />

      {/* Centered content column */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center relative z-[2]"
        style={{ padding: "180px var(--gutter) 120px" }}
      >
        <motion.div
          className="flex items-center gap-4 mb-11"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="block w-11 h-px bg-brand-accent" />
          <span className="hd-eyebrow">Arquitetura e urbanismo · Médio a alto padrão</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display font-light text-brand-dark m-0 max-w-[20ch]"
          style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Arquitetura que guia,<br />
          <em className="italic font-light text-brand-primary">do primeiro traço</em>
          <br />
          à obra construída.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-9 mb-11 max-w-[52ch] text-stone-500 leading-[1.8]"
          style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", opacity: 0.85 }}
        >
          Transformamos histórias em espaços bem planejados — com método, técnica e acolhimento.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#contato" className="hd-btn">
            Inicie seu projeto <span className="arrow" />
          </a>
          <a href="#servicos" className="hd-btn hd-btn--ghost">
            Conheça os serviços <span className="arrow" />
          </a>
        </motion.div>
      </div>

      {/* Marquee bar (4 cells) */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 border-t border-stone-300/60 bg-stone-50 relative z-[2]"
      >
        {meta.map((m, i) => (
          <div
            key={m.k}
            className={`px-8 py-7 ${
              i === 0 ? "" : "md:border-l border-stone-300/60"
            } ${i >= 2 ? "border-t md:border-t-0 border-stone-300/60" : ""} ${
              i === 2 ? "border-l-0 md:border-l" : ""
            }`}
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-2">
              {m.k}
            </p>
            <p className="text-[1rem] text-brand-dark leading-[1.3]">{m.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
