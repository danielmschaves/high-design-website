"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardFadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const items = [
  { num: "01", title: "Projetos concebidos para serem construídos",   desc: "Soluções que respeitam orçamento, terreno, normas e realidade da família — tecnicamente viáveis e construtivamente seguras." },
  { num: "02", title: "Método claro, organizado e didático",          desc: "O cliente nunca caminha no escuro. Cada fase é explicada, cada decisão contextualizada com clareza e profissionalismo." },
  { num: "03", title: "Arquitetura funcional, elegante e atemporal",  desc: "Os quatro pilares fundamentais de cada entrega: funcionalidade, elegância, atemporalidade e exequibilidade." },
  { num: "04", title: "Acompanhamento próximo e orientação firme",    desc: "Orientação estratégica, explicações claras, direcionamento sobre prioridades e suporte integral às dúvidas do cliente." },
  { num: "05", title: "Comunicação humana, empática e madura",        desc: "Transparência sem distanciamento. Linguagem acessível, relação profissional e ambiente emocional estável." },
  { num: "06", title: "Curadoria estética e técnica",                 desc: "Filtramos ideias, referências, soluções, materiais e possibilidades reais para cada projeto com critério e sensibilidade." },
  { num: "07", title: "Relacionamentos saudáveis e profissionais",    desc: "Processo respeitado com clientes, equipe, fornecedores e parceiros — em um ambiente organizado e maduro." },
  { num: "08", title: "Conhecimento técnico e sensibilidade humana",  desc: "Ambientes com alma, que acolhem e funcionam — onde técnica e humanidade coexistem em equilíbrio." },
  { num: "09", title: "Experiência premium acessível",                desc: "Sofisticação sem perder humanidade, acolhimento e sensibilidade emocional no segmento médio-alto." },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="bg-stone-900 text-stone-100 overflow-hidden relative"
      style={{ padding: "var(--space-10) 0" }}
    >
      {/* Monogram watermark */}
      <Image
        src="/assets/logos/Ativo 2.png"
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="absolute pointer-events-none select-none"
        style={{ right: "-80px", top: "40px", width: "520px", opacity: 0.035, height: "auto" }}
      />

      <div className="relative max-w-content mx-auto" style={{ padding: "0 var(--gutter)" }}>
        {/* Chapter header (dark variant) */}
        <motion.div
          className="hd-chapter"
          style={{ borderColor: "var(--color-stone-700)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="num">02 · Por que a High Design</div>
          <div>
            <h2 className="text-brand-white">
              O que nos torna{" "}
              <em className="italic" style={{ color: "var(--color-brand-accent)" }}>
                diferentes
              </em>
            </h2>
            <p style={{ color: "rgba(245,242,238,0.55)" }}>
              O escritório entrega decisões assertivas, entendimento profundo do processo e uma experiência arquitetônica que une precisão, beleza e inteligência espacial.
            </p>
          </div>
        </motion.div>

        {/* 9-item grid (1px hairline dividers via stone-700 bg) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 bg-stone-700"
          style={{ gap: "1px" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.num}
              variants={cardFadeUp}
              className="bg-stone-900 p-9 min-h-[220px] flex flex-col gap-3 transition-colors duration-[420ms] ease-brand hover:bg-stone-700"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent">
                {item.num}
              </span>
              <h4 className="m-0 text-[1.1rem] font-normal text-brand-white leading-[1.25] tracking-[0.005em]">
                {item.title}
              </h4>
              <p className="mt-auto mb-0 text-[13px] leading-[1.6]" style={{ color: "rgba(245,242,238,0.55)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
