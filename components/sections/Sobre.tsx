"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Sobre() {
  const pillars = [
    { label: "Funcional", desc: "Espaços inteligentes que servem à vida real" },
    { label: "Elegante", desc: "Estética refinada, coerente e sofisticada" },
    { label: "Atemporal", desc: "Soluções que permanecem relevantes ao longo dos anos" },
    { label: "Executável", desc: "Projetos viáveis, alinhados à obra que será construída" },
  ];

  return (
    <section id="sobre" className="bg-brand-secondary py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* Left: visual block */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[3/4] overflow-hidden max-w-[400px]">
            <Image
              src="/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg"
              alt="Projeto High Design"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating accent block */}
          <div className="absolute -bottom-8 -right-8 w-[180px] aspect-square bg-brand-accent flex items-center justify-center p-6">
            <Image
              src="/assets/logos/Ativo 2.png"
              alt="HD"
              width={120}
              height={120}
              className="w-full h-auto opacity-25"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Decorative line */}
          <div className="absolute top-8 -left-6 w-px h-[60%] bg-brand-accent opacity-40" />
        </motion.div>

        {/* Right: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-6">
            Sobre o escritório
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.15] text-brand-dark mb-7">
            Transformamos histórias
            <br />
            <em className="italic text-brand-primary">em espaços bem planejados</em>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-display text-[0.9rem] leading-[1.9] text-brand-primary opacity-[0.85] mb-5">
            A High Design é um escritório especializado em projetos residenciais e comerciais de médio a alto padrão, dedicado a transformar histórias em espaços tecnicamente sólidos e alinhados à realidade de cada família.
          </motion.p>

          <motion.p variants={fadeUp} className="font-display text-[0.9rem] leading-[1.9] text-brand-primary opacity-[0.85] mb-10">
            Nossa essência é oferecer uma jornada de construção{" "}
            <strong className="font-bold text-brand-dark">segura, organizada e emocionalmente tranquila</strong>
            , guiando o cliente desde a primeira decisão até a materialização do projeto com clareza, confiança e direção.
          </motion.p>

          {/* Principle callout */}
          <motion.div variants={fadeUp} className="border-l-[3px] border-brand-accent pl-5 mb-10">
            <p className="font-display text-[0.8rem] leading-[1.7] text-brand-dark italic">
              "Todo projeto nasce para ser construído. Nada é criado para ficar no papel. Cada solução é pensada para estruturar na prática."
            </p>
            <p className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-brand-accent mt-2">
              Princípio central: Exequibilidade
            </p>
          </motion.div>

          {/* Four pillars */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.label} className="border-t border-neutral-200 pt-3">
                <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-brand-accent mb-1 font-bold">
                  {p.label}
                </p>
                <p className="font-display text-[0.75rem] text-brand-primary leading-[1.5] opacity-80">
                  {p.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
