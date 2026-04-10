"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ParaQuemE() {
  const profile = [
    "Valoriza orientação técnica e processo claro para construir",
    "Busca um projeto funcional, elegante, atemporal e executável",
    "Deseja previsibilidade e segurança nas etapas de planejamento",
    "Entende o projeto como investimento emocional e financeiro",
    "Procura apoio profissional para evitar erros e desperdícios",
    "Prioriza estética refinada pensada para o dia a dia real",
    "Deseja construir com método, organização e suporte integral",
  ];

  return (
    <section id="para-quem" className="bg-brand-white py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-6">
            Para quem é
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.15] text-brand-dark mb-6">
            Feito para famílias
            <br />
            <em className="italic text-brand-primary">que valorizam o processo</em>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-display text-[0.85rem] leading-[1.8] text-brand-primary opacity-[0.85] mb-10">
            A High Design atende desde clientes com investimento moderado até famílias que buscam maior sofisticação e personalização — mantendo sempre postura acessível, com clareza, acolhimento e segurança.
          </motion.p>

          {/* Checklist */}
          <motion.ul variants={container} className="list-none p-0 m-0 flex flex-col gap-4">
            {profile.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 pb-4 border-b border-neutral-200"
              >
                <span className="w-[18px] h-[18px] min-w-[18px] border border-brand-accent flex items-center justify-center mt-0.5">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#ba9e84" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </span>
                <p className="font-display text-[0.83rem] leading-[1.6] text-brand-dark opacity-[0.85]">
                  {item}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right: image stack */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background rectangle */}
          <div className="absolute -top-6 -right-6 bottom-6 left-6 bg-brand-secondary z-0" />

          {/* Main image */}
          <div className="relative z-10 aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/images/5c0853e988370864c56cac0ba5b90762.jpg"
              alt="Família e projeto arquitetônico"
              fill
              className="object-cover"
            />
          </div>

          {/* Caption tag */}
          <div className="absolute -bottom-6 left-0 z-20 bg-brand-accent px-6 py-4">
            <p className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-brand-white opacity-90">
              Médio a alto padrão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
