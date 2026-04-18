"use client";

import { useState } from "react";
import Image from "next/image";
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
  "w-full bg-transparent border-0 border-b py-3.5 font-display text-[1rem] text-brand-white outline-none transition-colors duration-[420ms] ease-brand placeholder:text-brand-white/30";

const labelClass =
  "font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent block mb-1";

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
    <section
      id="contato"
      className="bg-brand-dark text-stone-100 overflow-hidden relative"
      style={{ padding: "var(--space-10) 0" }}
    >
      {/* Monogram watermark */}
      <Image
        src="/assets/logos/Ativo 2.png"
        alt=""
        aria-hidden
        width={420}
        height={420}
        className="absolute pointer-events-none select-none"
        style={{
          left: "-60px",
          bottom: "-40px",
          width: "420px",
          height: "auto",
          opacity: 0.06,
          filter: "brightness(0) invert(1)",
        }}
      />

      <div
        className="relative max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
        style={{ padding: "0 var(--gutter)" }}
      >
        {/* Left: chapter header + info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeUp}
            className="hd-chapter"
            style={{ borderColor: "var(--color-stone-700)" }}
          >
            <div className="num">07 · Contato</div>
            <div>
              <h2 className="text-brand-white">
                Inicie sua
                <br />
                <em className="italic" style={{ color: "var(--color-brand-accent)" }}>
                  jornada arquitetônica
                </em>
              </h2>
              <p style={{ color: "rgba(245,242,238,0.6)" }}>
                Conte-nos sobre seu projeto e nosso time entrará em contato para agendar uma conversa inicial sem compromisso.
              </p>
            </div>
          </motion.div>

          <motion.div variants={container} className="flex flex-col gap-10">
            <motion.div variants={fadeUp}>
              <p className={labelClass}>E-mail</p>
              <a
                href="mailto:contato@highdesign.arq.br"
                className="font-display text-[1.1rem] text-brand-white no-underline border-b pb-0.5 hover:text-brand-accent transition-colors duration-300"
                style={{ borderColor: "rgba(186,158,132,0.6)" }}
              >
                contato@highdesign.arq.br
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={labelClass}>Responsável</p>
              <p className="font-display text-[1.1rem] text-brand-white">Emanoella Goulart</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={labelClass}>Segmento</p>
              <p className="font-display text-[1.05rem] text-brand-white leading-[1.55]">
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
            <div className="border p-12 text-center" style={{ borderColor: "var(--color-stone-700)" }}>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-4">
                Mensagem enviada
              </p>
              <p className="font-display text-[1rem] text-brand-white leading-[1.7]">
                Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div>
                <label htmlFor="nome" className={labelClass}>Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                  style={{ borderBottomColor: "rgba(245,242,238,0.2)" }}
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClass}>E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={{ borderBottomColor: "rgba(245,242,238,0.2)" }}
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
                    style={{ borderBottomColor: "rgba(245,242,238,0.2)" }}
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
                  style={{ borderBottomColor: "rgba(245,242,238,0.2)" }}
                  placeholder="Conte-nos sobre seu projeto, terreno, estilo e expectativas..."
                />
              </div>

              {error && (
                <p className="font-display text-[0.85rem]" style={{ color: "#e07070" }}>
                  Erro ao enviar. Tente novamente ou escreva para contato@highdesign.arq.br
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`font-mono text-[11px] tracking-[0.22em] uppercase border-0 py-4 px-9 self-start transition-colors duration-[420ms] ease-brand mt-3 ${
                  loading
                    ? "bg-brand-primary text-brand-white cursor-not-allowed opacity-70"
                    : "bg-brand-accent text-brand-dark cursor-pointer hover:bg-brand-white"
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
