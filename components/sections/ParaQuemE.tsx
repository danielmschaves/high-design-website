"use client";

import Image from "next/image";

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
    <section
      id="para-quem"
      style={{
        background: "var(--color-brand-white)",
        padding: "var(--space-section) 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="para-quem-grid"
      >
        {/* Left: copy */}
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
            Para quem é
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
            Feito para famílias
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-primary)" }}>
              que valorizam o processo
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--color-brand-primary)",
              marginBottom: "2.5rem",
              opacity: 0.85,
            }}
          >
            A High Design atende desde clientes com investimento moderado até famílias que buscam maior sofisticação e personalização — mantendo sempre postura acessível, com clareza, acolhimento e segurança.
          </p>

          {/* Checklist */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {profile.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--color-neutral-200)",
                }}
              >
                {/* Check mark */}
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    minWidth: "18px",
                    border: "1px solid var(--color-brand-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#ba9e84" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.83rem",
                    lineHeight: 1.6,
                    color: "var(--color-brand-dark)",
                    opacity: 0.85,
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image stack */}
        <div style={{ position: "relative" }}>
          {/* Background rectangle */}
          <div
            style={{
              position: "absolute",
              top: "-1.5rem",
              right: "-1.5rem",
              bottom: "1.5rem",
              left: "1.5rem",
              background: "var(--color-brand-secondary)",
              zIndex: 0,
            }}
          />

          {/* Main image */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              aspectRatio: "4/5",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/images/5c0853e988370864c56cac0ba5b90762.jpg"
              alt="Família e projeto arquitetônico"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Caption tag */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              left: "0",
              zIndex: 2,
              background: "var(--color-brand-accent)",
              padding: "1rem 1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--color-brand-white)",
                opacity: 0.9,
              }}
            >
              Médio a alto padrão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
