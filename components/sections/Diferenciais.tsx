"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardFadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Diferenciais() {
  const items = [
    {
      num: "01",
      title: "Projetos concebidos para serem construídos",
      desc: "Soluções que respeitam orçamento, terreno, normas e realidade da família — tecnicamente viáveis e construtivamente seguras.",
    },
    {
      num: "02",
      title: "Método claro, organizado e didático",
      desc: "O cliente nunca caminha no escuro. Cada fase é explicada, cada decisão contextualizada com clareza e profissionalismo.",
    },
    {
      num: "03",
      title: "Arquitetura funcional, elegante e atemporal",
      desc: "Os quatro pilares fundamentais de cada entrega: funcionalidade, elegância, atemporalidade e exequibilidade.",
    },
    {
      num: "04",
      title: "Acompanhamento próximo e orientação firme",
      desc: "Orientação estratégica, explicações claras, direcionamento sobre prioridades e suporte integral às dúvidas do cliente.",
    },
    {
      num: "05",
      title: "Comunicação humana, empática e madura",
      desc: "Transparência sem distanciamento. Linguagem acessível, relação profissional e ambiente emocional estável.",
    },
    {
      num: "06",
      title: "Curadoria estética e técnica",
      desc: "Filtramos ideias, referências, soluções, materiais e possibilidades reais para cada projeto com critério e sensibilidade.",
    },
    {
      num: "07",
      title: "Relacionamentos saudáveis e profissionais",
      desc: "Processo respeitado com clientes, equipe, fornecedores e parceiros — em um ambiente organizado e maduro.",
    },
    {
      num: "08",
      title: "Conhecimento técnico e sensibilidade humana",
      desc: "Ambientes com alma, que acolhem e funcionam — onde técnica e humanidade coexistem em equilíbrio.",
    },
    {
      num: "09",
      title: "Experiência premium acessível",
      desc: "Sofisticação sem perder humanidade, acolhimento e sensibilidade emocional no segmento médio-alto.",
    },
  ];

  return (
    <section id="diferenciais" className="bg-brand-dark py-24 overflow-hidden relative">
      {/* Large decorative "HD" */}
      <div
        aria-hidden
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display font-bold leading-none pointer-events-none select-none text-[28rem]"
        style={{ color: "rgba(186,158,132,0.04)" }}
      />

      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            Por que a High Design
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light text-brand-white leading-[1.15] max-w-[500px]">
            O que nos torna
            <br />
            <em className="italic text-brand-accent">diferentes</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              variants={cardFadeUp}
              className="transition-colors duration-300 hover:bg-[rgba(186,158,132,0.05)]"
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                paddingLeft: i % 3 !== 0 ? "2rem" : "0",
                paddingRight: (i + 1) % 3 !== 0 ? "2rem" : "0",
                borderTop: "1px solid rgba(186,158,132,0.2)",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(186,158,132,0.1)" : "none",
              }}
            >
              <p className="font-display text-[0.6rem] tracking-[0.2em] text-brand-accent opacity-60 mb-3">
                {item.num}
              </p>
              <p className="font-display text-[0.85rem] font-bold text-brand-white mb-2 leading-[1.4] tracking-[0.01em]">
                {item.title}
              </p>
              <p className="font-display text-[0.78rem] leading-[1.7] text-brand-accent opacity-70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
