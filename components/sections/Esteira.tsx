"use client";

import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Esteira() {
  return (
    <section id="servicos" className="bg-brand-secondary py-24">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Intro header */}
        <motion.div
          className="max-w-[640px] mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.sigla}
              className="relative overflow-hidden bg-brand-dark p-8 md:p-10 flex flex-col"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative oversized step number */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-5 font-display font-bold leading-none text-brand-white select-none pointer-events-none"
                style={{ fontSize: "8rem", opacity: 0.04 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Top row: sigla badge + step counter */}
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-[0.55rem] tracking-[0.18em] border border-brand-accent px-[0.65rem] py-[0.4rem] text-brand-accent">
                  {service.sigla}
                </span>
                <span className="font-display text-[0.6rem] tracking-[0.15em] text-brand-accent opacity-40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Nome */}
              <h3 className="font-display text-[1.1rem] md:text-[1.2rem] font-light leading-[1.3] text-brand-white mb-3">
                {service.nome}
              </h3>

              {/* Tagline */}
              <p className="font-display text-[0.83rem] italic text-brand-accent mb-7">
                {service.tagline}
              </p>

              <div className="border-t border-brand-accent/20 mb-6" />

              {/* O que resolvemos */}
              <div className="mb-6">
                <p className="font-display text-[0.58rem] tracking-[0.25em] uppercase text-brand-accent opacity-60 mb-3">
                  O que resolvemos
                </p>
                <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
                  {service.dores.map((dor, j) => (
                    <li
                      key={j}
                      className="flex gap-3 font-display text-[0.82rem] leading-[1.75] text-brand-white opacity-70"
                    >
                      <span className="text-brand-accent flex-shrink-0">—</span>
                      <span>{dor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-brand-accent/20 mb-6" />

              {/* O que entregamos — flex-grow pushes it to fill card height */}
              <div className="flex-grow">
                <p className="font-display text-[0.58rem] tracking-[0.25em] uppercase text-brand-accent opacity-60 mb-3">
                  O que entregamos
                </p>
                <p className="font-display text-[0.82rem] leading-[1.75] text-brand-white opacity-70">
                  {service.entrega}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contato"
            className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-brand-white bg-brand-dark px-8 py-[0.9rem] no-underline inline-block transition-colors duration-300 hover:bg-brand-primary"
          >
            Solicitar orçamento
          </a>
        </div>

      </div>
    </section>
  );
}
