"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    sigla: "TERRENO",
    nome: "Consultoria de Aquisição de Terreno",
    tagline: "Avalie os riscos antes de adquirir",
    dores: [
      "Identificação de riscos ocultos: enchentes, deslizamentos, terraplanagem e contenções",
      "Incerteza sobre o que é legalmente permitido construir no lote",
      "Dificuldade em comparar opções e escolher com segurança",
    ],
    entrega:
      "Dossiê de Viabilidade com análise topográfica, estudo solar, raio-x legal e veredito do terreno — incluindo reunião de briefing e apresentação dos resultados.",
  },
  {
    sigla: "CONSTRUÇÃO",
    nome: "Consultoria de Construção",
    tagline: "Descubra o que é possível construir no seu lote",
    dores: [
      "Dúvida se o orçamento disponível cobre o projeto idealizado",
      "Falta de visão espacial da construção no terreno",
      "Risco de iniciar a obra sem direcionamento técnico e financeiro",
    ],
    entrega:
      "Dossiê de Viabilidade Arquitetônica e Financeira com raio-x legal, estudo de massa 3D e orçamento paramétrico real — mais reunião de diagnóstico e direcionamento estratégico.",
  },
  {
    sigla: "PROJETO",
    nome: "Projeto de Arquitetura",
    tagline: "Do esboço ao manual completo de execução",
    dores: [
      "Insegurança sobre estética, funcionalidade e conforto dos ambientes",
      "Risco de retrabalho e desperdício por falta de detalhamento técnico e compatibilização",
      "Complexidade na aprovação junto à prefeitura ou ao condomínio",
    ],
    entrega:
      "Estudo preliminar com plantas humanizadas e renders 3D, projeto legal para aprovação, compatibilização com projetos de engenharia, projeto executivo detalhado (o manual da obra) e memorial descritivo completo de materiais.",
  },
  {
    sigla: "ORÇAMENTO",
    nome: "Orçamento de Obra",
    tagline: "Saiba exatamente quanto vai custar antes de construir",
    dores: [
      "Receio de o dinheiro acabar no meio da execução",
      "Orçamentos de empreiteiros que variam drasticamente sem explicação",
      "Ausência de planejamento de fluxo de caixa ao longo da obra",
    ],
    entrega:
      "Levantamento completo de quantitativos, cotação real de mercado (materiais e mão de obra), lista de etapas construtivas com Curva ABC e cronograma físico-financeiro mensal.",
  },
];

export default function Esteira() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="servicos" className="bg-brand-secondary py-24">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-20 items-start">

        {/* Left: sticky header */}
        <motion.div
          className="md:sticky md:top-24"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-6">
            Serviços
          </p>

          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.15] text-brand-dark mb-6">
            Da concepção
            <br />
            <em className="italic text-brand-primary">à entrega das chaves</em>
          </h2>

          <p className="font-display text-[0.83rem] leading-[1.8] text-brand-primary opacity-80 mb-8">
            Quatro serviços pensados para cada momento da sua jornada. Contrate individualmente ou em sequência — cada etapa prepara o terreno para a próxima.
          </p>

          <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-brand-accent opacity-60">
            4 serviços · Terreno → Chaves
          </p>
        </motion.div>

        {/* Right: accordion */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {services.map((service, i) => (
            <div
              key={service.sigla}
              className={i === 0 ? "border-t border-neutral-200" : ""}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full bg-transparent border-0 border-b border-neutral-200 py-6 flex items-center gap-5 cursor-pointer text-left"
              >
                {/* Sigla badge */}
                <span
                  className={`font-display text-[0.55rem] tracking-[0.18em] border border-brand-accent px-[0.65rem] py-[0.4rem] text-center flex-shrink-0 whitespace-nowrap transition-all duration-300 ${
                    open === i ? "text-brand-white bg-brand-dark" : "text-brand-accent bg-transparent"
                  }`}
                >
                  {service.sigla}
                </span>

                {/* Step number */}
                <span className="font-display text-[0.6rem] tracking-[0.15em] text-brand-accent opacity-50 min-w-[24px] flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <span
                  className={`font-display text-[0.9rem] text-brand-dark flex-1 tracking-[0.01em] transition-all duration-300 ${
                    open === i ? "font-bold" : "font-normal"
                  }`}
                >
                  {service.nome}
                </span>

                {/* Toggle icon */}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="#786169" strokeWidth="1" />
                    <line x1="0" y1="6" x2="12" y2="6" stroke="#786169" strokeWidth="1" />
                  </svg>
                </motion.span>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key={`content-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pt-5 pb-8 pl-[4.25rem]">
                      <p className="font-display text-[0.83rem] italic text-brand-primary opacity-90 mb-6">
                        {service.tagline}
                      </p>

                      <div className="mb-6">
                        <p className="font-display text-[0.58rem] tracking-[0.25em] uppercase text-brand-accent opacity-70 mb-[0.6rem]">
                          O que resolvemos
                        </p>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                          {service.dores.map((dor, j) => (
                            <li key={j} className="flex gap-3 font-display text-[0.82rem] leading-[1.75] text-brand-primary opacity-[0.85]">
                              <span className="text-brand-accent flex-shrink-0">—</span>
                              <span>{dor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-display text-[0.58rem] tracking-[0.25em] uppercase text-brand-accent opacity-70 mb-[0.6rem]">
                          O que entregamos
                        </p>
                        <p className="font-display text-[0.82rem] leading-[1.75] text-brand-primary opacity-[0.85]">
                          {service.entrega}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-neutral-200">
            <a
              href="#contato"
              className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-brand-white bg-brand-dark px-8 py-[0.9rem] no-underline inline-block transition-colors duration-300 hover:bg-brand-primary"
            >
              Solicitar orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
