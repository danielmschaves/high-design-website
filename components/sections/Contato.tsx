"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const inputClass =
  "w-full bg-transparent border-0 border-b border-b-brand-accent/40 focus:border-b-brand-accent py-3 font-display text-[0.85rem] text-brand-white outline-none transition-colors duration-300";

const labelClass =
  "font-display text-[0.6rem] tracking-[0.25em] uppercase text-brand-accent block mb-1 opacity-80";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formspreeId) { setSent(true); return; }
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="bg-neutral-900 py-24 overflow-hidden relative">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(186,158,132,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(186,158,132,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start relative">

        {/* Left: info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-6">
            Contato
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light text-brand-white leading-[1.15] mb-7">
            Inicie sua
            <br />
            <em className="italic text-brand-accent">jornada arquitetônica</em>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-display text-[0.85rem] leading-[1.8] text-brand-white opacity-60 mb-12 max-w-[380px]">
            Conte-nos sobre seu projeto e nosso time entrará em contato para agendar uma conversa inicial sem compromisso.
          </motion.p>

          <motion.div variants={container} className="flex flex-col gap-8">
            <motion.div variants={fadeUp}>
              <p className={labelClass}>E-mail</p>
              <a
                href="mailto:contato@highdesign.arq.br"
                className="font-display text-[0.9rem] text-brand-white no-underline border-b border-brand-accent/30 pb-0.5"
              >
                contato@highdesign.arq.br
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={labelClass}>Responsável</p>
              <p className="font-display text-[0.9rem] text-brand-white opacity-80">Emanoella Goulart</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={labelClass}>Segmento</p>
              <p className="font-display text-[0.83rem] text-brand-accent leading-[1.6] opacity-80">
                Residencial · Comercial
                <br />
                Médio a Alto Padrão
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {sent ? (
            <div className="border border-brand-accent/30 p-12 text-center">
              <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-brand-accent mb-4">
                Mensagem enviada
              </p>
              <p className="font-display text-[0.9rem] text-brand-white leading-[1.7] opacity-80">
                Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label htmlFor="nome" className={labelClass}>Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClass}>E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className={labelClass}>Telefone</label>
                  <input
                    id="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className={inputClass}
                    placeholder="(11) 9 0000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className={labelClass}>Sobre seu projeto</label>
                <textarea
                  id="mensagem"
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Conte-nos sobre seu projeto, terreno, estilo e expectativas..."
                />
              </div>

              {error && (
                <p className="font-display text-[0.75rem] text-[#e07070]">
                  Erro ao enviar. Tente novamente ou escreva para contato@highdesign.arq.br
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`font-display text-[0.7rem] tracking-[0.2em] uppercase text-brand-white border-0 py-4 px-8 self-start transition-colors duration-300 ${
                  loading
                    ? "bg-brand-primary cursor-not-allowed opacity-70"
                    : "bg-brand-accent cursor-pointer hover:bg-brand-primary"
                }`}
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
