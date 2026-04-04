"use client";

import Image from "next/image";

export default function Sobre() {
  const pillars = [
    { label: "Funcional", desc: "Espaços inteligentes que servem à vida real" },
    { label: "Elegante", desc: "Estética refinada, coerente e sofisticada" },
    { label: "Atemporal", desc: "Soluções que permanecem relevantes ao longo dos anos" },
    { label: "Executável", desc: "Projetos viáveis, alinhados à obra que será construída" },
  ];

  return (
    <section
      id="sobre"
      style={{
        background: "var(--color-brand-secondary)",
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
        className="sobre-grid"
      >
        {/* Left: visual block */}
        <div style={{ position: "relative" }}>
          {/* Main image */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              maxWidth: "400px",
            }}
          >
            <Image
              src="/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg"
              alt="Projeto High Design"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Floating accent block */}
          <div
            style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-2rem",
              width: "180px",
              aspectRatio: "1",
              background: "var(--color-brand-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <Image
              src="/assets/logos/Ativo 2.png"
              alt="HD"
              width={120}
              height={120}
              style={{ width: "100%", height: "auto", opacity: 0.25, filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Decorative line */}
          <div
            style={{
              position: "absolute",
              top: "2rem",
              left: "-1.5rem",
              width: "1px",
              height: "60%",
              background: "var(--color-brand-accent)",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Right: copy */}
        <div>
          {/* Section label */}
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
            Sobre o escritório
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--color-brand-dark)",
              marginBottom: "1.75rem",
            }}
          >
            Transformamos histórias
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-primary)" }}>
              em espaços bem planejados
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "var(--color-brand-primary)",
              marginBottom: "1.25rem",
              opacity: 0.85,
            }}
          >
            A High Design é um escritório especializado em projetos residenciais e comerciais de médio a alto padrão, dedicado a transformar histórias em espaços tecnicamente sólidos e alinhados à realidade de cada família.
          </p>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "var(--color-brand-primary)",
              marginBottom: "2.5rem",
              opacity: 0.85,
            }}
          >
            Nossa essência é oferecer uma jornada de construção <strong style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>segura, organizada e emocionalmente tranquila</strong>, guiando o cliente desde a primeira decisão até a materialização do projeto com clareza, confiança e direção.
          </p>

          {/* Principle callout */}
          <div
            style={{
              borderLeft: "3px solid var(--color-brand-accent)",
              paddingLeft: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                color: "var(--color-brand-dark)",
                fontStyle: "italic",
              }}
            >
              "Todo projeto nasce para ser construído. Nada é criado para ficar no papel. Cada solução é pensada para estruturar na prática."
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-brand-accent)",
                marginTop: "0.5rem",
              }}
            >
              Princípio central: Exequibilidade
            </p>
          </div>

          {/* Four pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                style={{
                  borderTop: "1px solid var(--color-neutral-200)",
                  paddingTop: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-accent)",
                    marginBottom: "0.25rem",
                    fontWeight: 700,
                  }}
                >
                  {p.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    color: "var(--color-brand-primary)",
                    lineHeight: 1.5,
                    opacity: 0.8,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
