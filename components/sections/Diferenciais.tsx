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
  { num: "01", title: "Projetos concebidos para serem construídos",            desc: "Soluções que respeitam orçamento, terreno, normas e realidade do cliente — reduzindo erros, retrabalhos e desperdícios, com fidelidade ao conceito ao longo da obra." },
  { num: "02", title: "Método claro, organizado e didático",                   desc: "O cliente nunca caminha no escuro. Cada fase é explicada, cada decisão contextualizada e cada impacto antecipado com clareza." },
  { num: "03", title: "Funcional, elegante, atemporal e executável",           desc: "Os quatro pilares fundamentais de cada entrega, presentes do primeiro traço à última visita de obra." },
  { num: "04", title: "Acompanhamento próximo e orientação firme",             desc: "Agimos como uma bússola profissional: orientação estratégica, prioridades claras e suporte integral nas decisões mais sensíveis." },
  { num: "05", title: "Comunicação humana, empática e madura",                 desc: "Transparência sem distanciamento. Linguagem acessível, relação profissional e escuta genuína em cada interação." },
  { num: "06", title: "Curadoria estética e técnica",                          desc: "Filtramos ideias, referências, soluções, materiais e orçamentos reais para cada projeto — com critério e sensibilidade." },
  { num: "07", title: "Relacionamentos saudáveis e profissionais",            desc: "Processo respeitado com clientes, equipe, fornecedores e parceiros, em um ambiente organizado, colaborativo e maduro." },
  { num: "08", title: "Conhecimento técnico e sensibilidade humana",          desc: "Não entregamos só plantas e pranchas: entregamos ambientes com alma, onde técnica e humanidade coexistem em equilíbrio." },
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
              Entregamos decisões assertivas, entendimento profundo do processo e uma experiência arquitetônica que une precisão, beleza e inteligência espacial.
            </p>
          </div>
        </motion.div>

        {/* 9-item grid (1px hairline dividers via stone-700 bg) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-stone-700"
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
              className="bg-stone-900 p-7 lg:p-8 min-h-[200px] lg:min-h-[240px] flex flex-col gap-3 transition-colors duration-[420ms] ease-brand hover:bg-stone-700"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent">
                {item.num}
              </span>
              {/* h3, not h4 — the section heading is the h2 above, and
                  skipping a level breaks the document outline. */}
              <h3 className="m-0 text-[1.1rem] font-normal text-brand-white leading-[1.25] tracking-[0.005em]">
                {item.title}
              </h3>
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
