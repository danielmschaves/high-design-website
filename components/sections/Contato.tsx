"use client";

import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formspreeId) { setSent(true); return; } // dev fallback
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          mensagem: form.mensagem,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(186,158,132,0.4)",
    padding: "0.75rem 0",
    fontFamily: "var(--font-display)",
    fontSize: "0.85rem",
    color: "var(--color-brand-white)",
    outline: "none",
    transition: "border-color var(--duration-base)",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "0.6rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--color-brand-accent)",
    display: "block",
    marginBottom: "0.25rem",
    opacity: 0.8,
  };

  return (
    <section
      id="contato"
      style={{
        background: "var(--color-neutral-900)",
        padding: "var(--space-section) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(186,158,132,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(186,158,132,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
          position: "relative",
        }}
        className="contato-grid"
      >
        {/* Left: info */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              marginBottom: "1.5rem",
            }}
          >
            Contato
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 300,
              color: "var(--color-brand-white)",
              lineHeight: 1.15,
              marginBottom: "1.75rem",
            }}
          >
            Inicie sua
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-accent)" }}>
              jornada arquitetônica
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--color-brand-white)",
              opacity: 0.6,
              marginBottom: "3rem",
              maxWidth: "380px",
            }}
          >
            Conte-nos sobre seu projeto e nosso time entrará em contato para agendar uma conversa inicial sem compromisso.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <p style={labelStyle}>E-mail</p>
              <a
                href="mailto:contato@highdesign.arq.br"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-brand-white)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(186,158,132,0.3)",
                  paddingBottom: "2px",
                }}
              >
                contato@highdesign.arq.br
              </a>
            </div>

            <div>
              <p style={labelStyle}>Responsável</p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-brand-white)",
                  opacity: 0.8,
                }}
              >
                Emanoella Goulart
              </p>
            </div>

            <div>
              <p style={labelStyle}>Segmento</p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.83rem",
                  color: "var(--color-brand-accent)",
                  lineHeight: 1.6,
                  opacity: 0.8,
                }}
              >
                Residencial · Comercial
                <br />
                Médio a Alto Padrão
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {sent ? (
            <div
              style={{
                border: "1px solid rgba(186,158,132,0.3)",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1rem",
                }}
              >
                Mensagem enviada
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-brand-white)",
                  lineHeight: 1.7,
                  opacity: 0.8,
                }}
              >
                Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <label htmlFor="nome" style={labelStyle}>Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  style={inputStyle}
                  placeholder="Seu nome"
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-brand-accent)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(186,158,132,0.4)")}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="email" style={labelStyle}>E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    placeholder="seu@email.com"
                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-brand-accent)")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(186,158,132,0.4)")}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" style={labelStyle}>Telefone</label>
                  <input
                    id="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    style={inputStyle}
                    placeholder="(11) 9 0000-0000"
                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-brand-accent)")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(186,158,132,0.4)")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" style={labelStyle}>Sobre seu projeto</label>
                <textarea
                  id="mensagem"
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderBottom: "1px solid rgba(186,158,132,0.4)",
                  }}
                  placeholder="Conte-nos sobre seu projeto, terreno, estilo e expectativas..."
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-brand-accent)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(186,158,132,0.4)")}
                />
              </div>

              {error && (
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "#e07070" }}>
                  Erro ao enviar. Tente novamente ou escreva para contato@highdesign.arq.br
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-white)",
                  background: loading ? "var(--color-brand-primary)" : "var(--color-brand-accent)",
                  border: "none",
                  padding: "1rem 2rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  transition: "background var(--duration-base)",
                  opacity: loading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => { if (!loading) (e.target as HTMLElement).style.background = "var(--color-brand-primary)"; }}
                onMouseLeave={(e) => { if (!loading) (e.target as HTMLElement).style.background = "var(--color-brand-accent)"; }}
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
