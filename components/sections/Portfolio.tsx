"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Tipo = "Residencial" | "Alto Padrão" | "Corporativo";
type Size = "lg" | "md" | "sm" | "wide" | "tall";

const images: { src: string; ambiente: string; tipo: Tipo; area: string; servico: string; size: Size }[] = [
  { src: "/assets/images/04c863415f33702f810a01f9cf1549a8.jpg", ambiente: "Sala de Estar",    tipo: "Residencial",    area: "52 m²",  servico: "Projeto de Arquitetura", size: "lg" },
  { src: "/assets/images/0eff937e87b0ec78e5d622666344b9c9.jpg", ambiente: "Cozinha",           tipo: "Alto Padrão",    area: "38 m²",  servico: "Projeto Executivo",      size: "md" },
  { src: "/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg", ambiente: "Fachada",           tipo: "Residencial",    area: "320 m²", servico: "Projeto de Arquitetura", size: "sm" },
  { src: "/assets/images/2f1b802614bd75a610e756275d26d87e.jpg", ambiente: "Área Social",       tipo: "Residencial",    area: "74 m²",  servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/31166dcb438f1f8b51e5287e095c7d62.jpg", ambiente: "Quarto Master",     tipo: "Alto Padrão",    area: "28 m²",  servico: "Projeto de Arquitetura", size: "sm" },
  { src: "/assets/images/3be025d3627c2467c8a208c9fa75d44d.jpg", ambiente: "Escritório",        tipo: "Corporativo",    area: "110 m²", servico: "Projeto de Arquitetura", size: "wide" },
  { src: "/assets/images/52bf605197dcea5dd18e7d18e8566dcd.jpg", ambiente: "Banheiro",          tipo: "Alto Padrão",    area: "14 m²",  servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/5c0853e988370864c56cac0ba5b90762.jpg", ambiente: "Varanda",           tipo: "Residencial",    area: "22 m²",  servico: "Projeto de Arquitetura", size: "sm" },
  { src: "/assets/images/69a3d43734db3451996709d7ff87e6b7.jpg", ambiente: "Hall de Entrada",   tipo: "Residencial",    area: "18 m²",  servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg", ambiente: "Sala de Jantar",    tipo: "Residencial",    area: "44 m²",  servico: "Projeto de Arquitetura", size: "sm" },
  { src: "/assets/images/9a4535949326248195570e966863116d.jpg", ambiente: "Suíte",             tipo: "Alto Padrão",    area: "32 m²",  servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/b5e398407c9b26dac0fd2e08befd071f.jpg", ambiente: "Home Office",       tipo: "Residencial",    area: "16 m²",  servico: "Projeto de Arquitetura", size: "sm" },
  { src: "/assets/images/c1f800ae03e0db2e4568ffa992f4ed12.jpg", ambiente: "Terraço",           tipo: "Residencial",    area: "36 m²",  servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/c3601f1a110ed6b4f42566cd55e741eb.jpg", ambiente: "Lavabo",            tipo: "Alto Padrão",    area: "8 m²",   servico: "Projeto Executivo",      size: "sm" },
  { src: "/assets/images/cde5c7744460198965c27f696e6b055e.jpg", ambiente: "Living",            tipo: "Residencial",    area: "60 m²",  servico: "Projeto de Arquitetura", size: "sm" },
];

const filters = ["Todos", "Residencial", "Comercial", "Alto Padrão"] as const;
type Filter = (typeof filters)[number];

const sizeClass: Record<Size, string> = {
  lg:   "md:col-span-6 md:row-span-2",
  md:   "md:col-span-6 md:row-span-2",
  sm:   "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8 md:row-span-2",
  tall: "md:col-span-4 md:row-span-3",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const cardFade = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("Todos");

  const filtered = images.filter((img) => {
    if (active === "Todos") return true;
    if (active === "Comercial") return img.tipo === "Corporativo";
    return img.tipo === active;
  });

  return (
    <section
      id="portfolio"
      className="bg-stone-50 overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
    >
      <div className="max-w-content mx-auto">
        {/* Header with chapter num + filters */}
        <motion.div
          className="flex items-end justify-between flex-wrap gap-6 pb-10 mb-14 border-b border-stone-300"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent">
              06 · Portfólio
            </span>
            <h2
              className="font-display font-normal mt-3 mb-0 text-brand-dark"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", letterSpacing: "-0.01em", lineHeight: 1.05 }}
            >
              Projetos que
              <br />
              <em className="italic text-brand-primary">transformam espaços</em>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const on = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={on}
                  className={`px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] uppercase border transition-all duration-[420ms] ease-brand cursor-pointer ${
                    on
                      ? "bg-brand-dark text-brand-white border-brand-dark"
                      : "bg-transparent text-stone-500 border-stone-300 hover:bg-brand-dark hover:text-brand-white hover:border-brand-dark"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-12 gap-3"
          style={{ gridAutoRows: "180px" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          key={active}
        >
          {filtered.map((img) => (
            <motion.div
              key={img.src}
              variants={cardFade}
              className={`relative overflow-hidden bg-stone-200 group col-span-1 row-span-2 ${sizeClass[img.size]}`}
            >
              <Image
                src={img.src}
                alt={`${img.ambiente} · ${img.tipo}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1440px) 33vw, 480px"
                className="object-cover object-center transition-transform duration-[900ms] ease-brand group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[420ms] ease-brand flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top, rgba(26,22,20,0.8) 0%, transparent 50%)" }}
              >
                <p className="font-display text-[1.1rem] text-brand-white tracking-[-0.005em] leading-[1.2]">
                  {img.ambiente}
                </p>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase mt-1.5" style={{ color: "rgba(245,242,238,0.7)" }}>
                  {img.tipo} · {img.area}
                </p>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mt-1">
                  {img.servico}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
