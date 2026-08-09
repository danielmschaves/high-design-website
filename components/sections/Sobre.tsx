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

const pillars = [
  { code: "01 · FUN", label: "Funcional",   desc: "A arquitetura precisa servir ao dia a dia real de quem habita o espaço." },
  { code: "02 · ELE", label: "Elegante",    desc: "A estética comunica identidade, cuidado e intenção. Refinada e coerente, sem excessos." },
  { code: "03 · ATE", label: "Atemporal",   desc: "Um projeto bem concebido permanece relevante e belo ao longo dos anos." },
  { code: "04 · EXE", label: "Executável",  desc: "O projeto precisa virar obra: alinhado à realidade financeira do cliente, para ser construído com fidelidade e segurança." },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-stone-50 overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
    >
      <div className="max-w-content mx-auto">
        {/* Chapter header */}
        <motion.div
          className="hd-chapter"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="num">01 · Sobre o escritório</div>
          <div>
            <h2>
              Transformamos histórias
              <br />
              <em>em espaços bem planejados</em>
            </h2>
            <p>
              A High Design Arquitetura e Urbanismo é um escritório especializado em projetos residenciais e comerciais. Nosso trabalho é dar forma a espaços funcionais, elegantes, atemporais e executáveis, acompanhando você da escolha do terreno até a entrega das chaves.
            </p>
          </div>
        </motion.div>

        {/* Two-col body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-start">
          {/* Framed image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg"
              alt="Projeto High Design"
              fill
              className="object-cover"
            />
            {/* inner technical-frame */}
            <div className="absolute inset-[18px] border border-brand-white/30 pointer-events-none" />
            {/* mono tag bottom */}
            <div className="absolute bottom-4 left-[18px] right-[18px] flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-brand-white/80">
              <span>Projeto residencial</span>
              <span>HD / 02</span>
            </div>
          </motion.div>

          {/* Body copy + pillars */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="font-display font-light leading-[1.15] mb-6 text-brand-dark"
              style={{ fontSize: "clamp(1.5rem, 2.3vw, 2rem)", letterSpacing: "-0.005em" }}
            >
              Nossa essência é oferecer uma jornada de construção{" "}
              <em className="italic text-brand-primary">segura, organizada e emocionalmente tranquila</em>.
            </motion.h3>

            <motion.p variants={fadeUp} className="text-stone-500 leading-[1.7] mb-5 max-w-[52ch]">
              Conduzimos cada cliente desde a primeira decisão até a materialização do projeto, com{" "}
              <strong className="text-brand-dark font-bold">clareza, confiança e direção</strong>.
            </motion.p>

            <motion.p variants={fadeUp} className="text-stone-500 leading-[1.7] mb-9 max-w-[52ch]">
              Nosso princípio central é a{" "}
              <strong className="text-brand-dark font-bold">exequibilidade</strong>: todo projeto nasce para ser construído. Nada é criado para ficar no papel. Cada solução é pensada para funcionar na prática, respeitando o seu orçamento, o terreno, as suas necessidades e o seu jeito de viver.
            </motion.p>

            {/* 2x2 pillars */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-7 bg-paper border border-stone-300 transition-colors duration-[420ms] ease-brand hover:bg-brand-secondary"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent">
                    {p.code}
                  </p>
                  <h4 className="mt-3 mb-2 text-[1.1rem] font-bold tracking-[0.01em] text-brand-dark">
                    {p.label}
                  </h4>
                  <p className="m-0 text-[13px] text-stone-500 leading-[1.55]">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Por que nascemos — origin citation */}
        <motion.blockquote
          className="mt-16 md:mt-24 border-t border-stone-300 pt-12 max-w-[58ch] mx-auto text-center m-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent mb-6">
            Por que nascemos
          </p>
          <p
            className="font-display font-light italic text-brand-dark leading-[1.35] m-0"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)", letterSpacing: "-0.01em" }}
          >
            &ldquo;Entregar método onde há improviso, clareza onde há confusão e
            segurança onde há risco.&rdquo;
          </p>
          <p className="text-stone-500 leading-[1.8] mt-7 text-[14px]">
            A construção civil no Brasil ainda opera, em grande parte, na informalidade.
            São projetos que nunca saem do papel, obras que param pela metade e retrabalhos
            que consomem orçamentos inteiros. A High Design nasceu para fazer diferente.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
