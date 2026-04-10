"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/04c863415f33702f810a01f9cf1549a8.jpg", ambiente: "Sala de Estar",    tipo: "Residencial",    area: "52 m²",  servico: "Projeto de Arquitetura" },
  { src: "/assets/images/0eff937e87b0ec78e5d622666344b9c9.jpg", ambiente: "Cozinha",           tipo: "Alto Padrão",    area: "38 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg", ambiente: "Fachada",           tipo: "Residencial",    area: "320 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/2f1b802614bd75a610e756275d26d87e.jpg", ambiente: "Área Social",       tipo: "Residencial",    area: "74 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/31166dcb438f1f8b51e5287e095c7d62.jpg", ambiente: "Quarto Master",     tipo: "Alto Padrão",    area: "28 m²",  servico: "Projeto de Arquitetura" },
  { src: "/assets/images/3be025d3627c2467c8a208c9fa75d44d.jpg", ambiente: "Escritório",        tipo: "Corporativo",    area: "110 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/52bf605197dcea5dd18e7d18e8566dcd.jpg", ambiente: "Banheiro",          tipo: "Alto Padrão",    area: "14 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/5c0853e988370864c56cac0ba5b90762.jpg", ambiente: "Varanda",           tipo: "Residencial",    area: "22 m²",  servico: "Projeto de Arquitetura" },
  { src: "/assets/images/69a3d43734db3451996709d7ff87e6b7.jpg", ambiente: "Hall de Entrada",   tipo: "Residencial",    area: "18 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg", ambiente: "Sala de Jantar",    tipo: "Residencial",    area: "44 m²",  servico: "Projeto de Arquitetura" },
  { src: "/assets/images/9a4535949326248195570e966863116d.jpg", ambiente: "Suíte",             tipo: "Alto Padrão",    area: "32 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/b5e398407c9b26dac0fd2e08befd071f.jpg", ambiente: "Home Office",       tipo: "Residencial",    area: "16 m²",  servico: "Projeto de Arquitetura" },
  { src: "/assets/images/c1f800ae03e0db2e4568ffa992f4ed12.jpg", ambiente: "Terraço",           tipo: "Residencial",    area: "36 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/c3601f1a110ed6b4f42566cd55e741eb.jpg", ambiente: "Lavabo",            tipo: "Alto Padrão",    area: "8 m²",   servico: "Projeto Executivo" },
  { src: "/assets/images/cde5c7744460198965c27f696e6b055e.jpg", ambiente: "Living",            tipo: "Residencial",    area: "60 m²",  servico: "Projeto de Arquitetura" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const cardFade = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-brand-dark py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
              Portfólio
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light text-brand-white leading-[1.15]">
              Projetos que
              <br />
              <em className="italic text-brand-accent">transformam espaços</em>
            </h2>
          </div>
          <a
            href="#contato"
            className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-brand-accent no-underline border-b border-brand-accent/40 pb-0.5 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            Ver todos os projetos
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={cardFade}
              className="relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={img.src}
                  alt={`${img.ambiente} · ${img.tipo}`}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 gap-1"
                style={{ background: "linear-gradient(to top, rgba(61,48,53,0.92) 0%, rgba(61,48,53,0.2) 55%, transparent 100%)" }}
              >
                <p className="font-display text-[0.8rem] font-bold tracking-[0.04em] text-brand-white leading-[1.2]">
                  {img.ambiente}
                </p>
                <p className="font-display text-[0.6rem] tracking-[0.15em] uppercase text-brand-white opacity-70">
                  {img.tipo} · {img.area}
                </p>
                <p className="font-display text-[0.55rem] tracking-[0.2em] uppercase text-brand-accent opacity-85 mt-1">
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
