"use client";

import { useState } from "react";

const services = [
  {
    sigla: "TERRENO",
    nome: "Consultoria de Aquisição de Terreno",
    tagline: "Avalie os riscos antes de assinar",
    dores: [
      "Custos ocultos de terraplenagem e contenções que surgem após a compra",
      "Incerteza sobre o que é legalmente permitido construir no lote",
      "Dificuldade em comparar opções e escolher com segurança",
    ],
    entrega:
      "Dossiê de Viabilidade com análise topográfica, estudo solar, raio-x legal e veredito da arquiteta — incluindo reunião de briefing e apresentação dos resultados.",
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
      "Risco de retrabalho e desperdício por falta de detalhamento técnico",
      "Complexidade na aprovação junto à prefeitura ou ao condomínio",
    ],
    entrega:
      "Estudo preliminar com plantas humanizadas e renders 3D, projeto legal para aprovação, projeto executivo detalhado (o manual da obra) e memorial descritivo completo de materiais.",
  },
  {
    sigla: "ORÇAMENTO",
    nome: "Orçamento de Obra",
    tagline: "Saiba exatamente quanto vai custar antes de contratar",
    dores: [
      "Receio de o dinheiro acabar no meio da execução",
      "Orçamentos de empreiteiros que variam drasticamente sem explicação",
      "Ausência de planejamento de fluxo de caixa ao longo da obra",
    ],
    entrega:
      "Levantamento completo de quantitativos, cotação real de mercado (materiais e mão de obra), planilha por etapa construtiva com Curva ABC e cronograma físico-financeiro mensal.",
  },
];

export default function Esteira() {
  const [open, setOpen] = useState<number | null>(0);

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "0.58rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--color-brand-accent)",
    opacity: 0.7,
    marginBottom: "0.6rem",
  };

  const bodyStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: "0.82rem",
    lineHeight: 1.75,
    color: "var(--color-brand-primary)",
    opacity: 0.85,
  };

  return (
    <section
      id="servicos"
      style={{
        background: "var(--color-brand-secondary)",
        padding: "var(--space-section) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="esteira-grid"
      >
        {/* Left: sticky header */}
        <div style={{ position: "sticky", top: "6rem" }} className="esteira-sticky">
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
            Serviços
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--color-brand-dark)",
              marginBottom: "1.5rem",
            }}
          >
            Da concepção
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-primary)" }}>
              à entrega das chaves
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.83rem",
              lineHeight: 1.8,
              color: "var(--color-brand-primary)",
              opacity: 0.8,
              marginBottom: "2rem",
            }}
          >
            Quatro serviços pensados para cada momento da sua jornada. Contrate individualmente ou em sequência — cada etapa prepara o terreno para a próxima.
          </p>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              opacity: 0.6,
            }}
          >
            4 serviços · Terreno → Chaves
          </p>
        </div>

        {/* Right: accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((service, i) => (
            <div
              key={service.sigla}
              style={{
                borderTop: i === 0 ? "1px solid var(--color-neutral-200)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--color-neutral-200)",
                  padding: "1.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {/* Sigla badge */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.18em",
                    color: open === i ? "var(--color-brand-white)" : "var(--color-brand-accent)",
                    background: open === i ? "var(--color-brand-dark)" : "transparent",
                    border: "1px solid var(--color-brand-accent)",
                    padding: "0.4rem 0.65rem",
                    textAlign: "center",
                    transition: "all var(--duration-base)",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.sigla}
                </span>

                {/* Step number */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "var(--color-brand-accent)",
                    opacity: 0.5,
                    minWidth: "24px",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9rem",
                    fontWeight: open === i ? 700 : 400,
                    color: "var(--color-brand-dark)",
                    flex: 1,
                    transition: "font-weight var(--duration-base)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {service.nome}
                </span>

                {/* Toggle icon */}
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform var(--duration-base)",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="#786169" strokeWidth="1" />
                    <line x1="0" y1="6" x2="12" y2="6" stroke="#786169" strokeWidth="1" />
                  </svg>
                </span>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? "600px" : "0",
                  transition: "max-height 0.45s var(--ease-brand)",
                }}
              >
                <div style={{ padding: "1.25rem 0 2rem 4.25rem" }}>
                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.83rem",
                      fontStyle: "italic",
                      color: "var(--color-brand-primary)",
                      marginBottom: "1.5rem",
                      opacity: 0.9,
                    }}
                  >
                    {service.tagline}
                  </p>

                  {/* Dores */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={labelStyle}>O que resolvemos</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {service.dores.map((dor, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.75rem", ...bodyStyle }}>
                          <span style={{ color: "var(--color-brand-accent)", flexShrink: 0 }}>—</span>
                          <span>{dor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entrega */}
                  <div>
                    <p style={labelStyle}>O que entregamos</p>
                    <p style={bodyStyle}>{service.entrega}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA below accordion */}
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--color-neutral-200)" }}>
            <a
              href="#contato"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-brand-white)",
                background: "var(--color-brand-dark)",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "background var(--duration-base)",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--color-brand-primary)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--color-brand-dark)")}
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
