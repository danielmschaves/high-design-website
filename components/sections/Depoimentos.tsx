"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "A High Design transformou o que parecia um processo caótico em algo totalmente claro e seguro. Cada etapa foi explicada com paciência e precisão. Hoje nossa casa é exatamente o que sonhamos.",
    author: "Família Rodrigues",
    location: "Residencial — São Paulo",
  },
  {
    quote:
      "O que mais nos impressionou foi o compromisso com a realidade. Nenhuma promessa vazia. O projeto foi pensado para ser construído dentro do nosso orçamento, sem surpresas.",
    author: "Marcos & Ana Lima",
    location: "Residencial — Campinas",
  },
  {
    quote:
      "Profissionalismo, estética e acolhimento em cada reunião. A equipe da High Design entende que construir uma casa é uma decisão emocional antes de ser financeira.",
    author: "Família Costa",
    location: "Residencial Alto Padrão — São Paulo",
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
    <section id="depoimentos" className="bg-brand-primary py-24 overflow-hidden relative">
      {/* Decorative oversized quote mark */}
      <div
        aria-hidden
        className="absolute -top-4 left-8 font-serif text-[20rem] leading-none pointer-events-none select-none"
        style={{ color: "rgba(245,242,238,0.04)", fontFamily: "Georgia, serif" }}
      >
        &ldquo;
      </div>

      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light text-brand-white leading-[1.15]">
            O que nossos clientes
            <br />
            <em className="italic text-brand-accent">dizem sobre a jornada</em>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              className="border-t border-brand-white/20 pt-8"
            >
              {/* Stars */}
              <div className="flex gap-[3px] mb-5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#ba9e84">
                    <polygon points="5,1 6.18,3.82 9.27,4.18 7,6.27 7.63,9.27 5,7.73 2.37,9.27 3,6.27 0.73,4.18 3.82,3.82" />
                  </svg>
                ))}
              </div>

              <p className="font-display text-[0.85rem] leading-[1.8] text-brand-white italic opacity-90 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="font-display text-[0.75rem] font-bold text-brand-accent tracking-[0.05em]">
                  {t.author}
                </p>
                <p className="font-display text-[0.65rem] tracking-[0.15em] uppercase text-brand-white opacity-50 mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <p className="font-display text-[0.6rem] tracking-[0.1em] text-brand-white opacity-30 text-center mt-12">
          * Conteúdo ilustrativo — depoimentos reais em breve
        </p>
      </div>
    </section>
  );
}
