"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "A High Design transformou o que parecia um processo caótico em algo totalmente claro e seguro. Cada etapa foi explicada com paciência e precisão. Hoje nossa casa é exatamente o que sonhamos.",
    author: "Família Rodrigues",
    location: "Residencial · São Paulo",
  },
  {
    quote:
      "O que mais nos impressionou foi o compromisso com a realidade. Nenhuma promessa vazia. O projeto foi pensado para ser construído dentro do nosso orçamento, sem surpresas.",
    author: "Marcos & Ana Lima",
    location: "Residencial · Campinas",
  },
  {
    quote:
      "Profissionalismo, estética e acolhimento em cada reunião. A equipe entende que construir uma casa é uma decisão emocional antes de ser financeira.",
    author: "Família Costa",
    location: "Alto Padrão · São Paulo",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
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
          <div className="num">07 · Depoimentos</div>
          <div>
            <h2>
              O que nossos clientes
              <br />
              <em>dizem sobre a jornada</em>
            </h2>
            <p>
              Clientes que confiaram à High Design a transformação dos seus espaços e o cuidado em cada etapa do processo.
            </p>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              className="border-t border-brand-primary/25 pt-8"
            >
              {/* Stars */}
              <div className="flex gap-[3px] mb-6">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="11" height="11" viewBox="0 0 10 10" fill="var(--color-brand-accent)">
                    <polygon points="5,1 6.18,3.82 9.27,4.18 7,6.27 7.63,9.27 5,7.73 2.37,9.27 3,6.27 0.73,4.18 3.82,3.82" />
                  </svg>
                ))}
              </div>

              <blockquote
                className="font-display italic text-brand-dark m-0 mb-7"
                style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", lineHeight: 1.45, letterSpacing: "-0.005em" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500">
                <strong className="block text-brand-dark font-medium text-[12px] mb-1">
                  {t.author}
                </strong>
                {t.location}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 text-center mt-14 opacity-60">
          * Conteúdo ilustrativo — depoimentos reais em breve
        </p>
      </div>
    </section>
  );
}
