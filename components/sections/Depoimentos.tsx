"use client";

const testimonials = [
  {
    quote:
      "A High Design transformou o que parecia um processo caótico em algo totalmente claro e seguro. Cada etapa foi explicada com paciência e precisão. Hoje nossa casa é exatamente o que sonhamos.",
    author: "Família Rodrigues",
    location: "Residencial — São Paulo",
  },
  {
    quote:
      "O que mais nos impressionou foi o compromisso com a realidade. Nenhuma promessa vazia. O projeto foi pensado para ser construído dentro do nosso orçamento, sem surpresas.",
    author: "Marcos & Ana Lima",
    location: "Residencial — Campinas",
  },
  {
    quote:
      "Profissionalismo, estética e acolhimento em cada reunião. A equipe da High Design entende que construir uma casa é uma decisão emocional antes de ser financeira.",
    author: "Família Costa",
    location: "Residencial Alto Padrão — São Paulo",
  },
];

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      style={{
        background: "var(--color-brand-primary)",
        padding: "var(--space-section) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative oversized quote mark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-1rem",
          left: "2rem",
          fontFamily: "Georgia, serif",
          fontSize: "20rem",
          lineHeight: 1,
          color: "rgba(245,242,238,0.04)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              marginBottom: "1rem",
            }}
          >
            Depoimentos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 300,
              color: "var(--color-brand-white)",
              lineHeight: 1.15,
            }}
          >
            O que nossos clientes
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-accent)" }}>
              dizem sobre a jornada
            </em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="depoimentos-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(245,242,238,0.2)",
                paddingTop: "2rem",
              }}
            >
              {/* Stars placeholder */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#ba9e84">
                    <polygon points="5,1 6.18,3.82 9.27,4.18 7,6.27 7.63,9.27 5,7.73 2.37,9.27 3,6.27 0.73,4.18 3.82,3.82" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  color: "var(--color-brand-white)",
                  fontStyle: "italic",
                  opacity: 0.9,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-brand-accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-white)",
                    opacity: 0.5,
                    marginTop: "0.25rem",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "var(--color-brand-white)",
            opacity: 0.3,
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          * Conteúdo ilustrativo — depoimentos reais em breve
        </p>
      </div>
    </section>
  );
}
