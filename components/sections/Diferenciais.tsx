"use client";

export default function Diferenciais() {
  const items = [
    {
      num: "01",
      title: "Projetos concebidos para serem construídos",
      desc: "Soluções que respeitam orçamento, terreno, normas e realidade da família — tecnicamente viáveis e construtivamente seguras.",
    },
    {
      num: "02",
      title: "Método claro, organizado e didático",
      desc: "O cliente nunca caminha no escuro. Cada fase é explicada, cada decisão contextualizada com clareza e profissionalismo.",
    },
    {
      num: "03",
      title: "Arquitetura funcional, elegante e atemporal",
      desc: "Os quatro pilares fundamentais de cada entrega: funcionalidade, elegância, atemporalidade e exequibilidade.",
    },
    {
      num: "04",
      title: "Acompanhamento próximo e orientação firme",
      desc: "Orientação estratégica, explicações claras, direcionamento sobre prioridades e suporte integral às dúvidas do cliente.",
    },
    {
      num: "05",
      title: "Comunicação humana, empática e madura",
      desc: "Transparência sem distanciamento. Linguagem acessível, relação profissional e ambiente emocional estável.",
    },
    {
      num: "06",
      title: "Curadoria estética e técnica",
      desc: "Filtramos ideias, referências, soluções, materiais e possibilidades reais para cada projeto com critério e sensibilidade.",
    },
    {
      num: "07",
      title: "Relacionamentos saudáveis e profissionais",
      desc: "Processo respeitado com clientes, equipe, fornecedores e parceiros — em um ambiente organizado e maduro.",
    },
    {
      num: "08",
      title: "Conhecimento técnico e sensibilidade humana",
      desc: "Ambientes com alma, que acolhem e funcionam — onde técnica e humanidade coexistem em equilíbrio.",
    },
    {
      num: "09",
      title: "Experiência premium acessível",
      desc: "Sofisticação sem perder humanidade, acolhimento e sensibilidade emocional no segmento médio-alto.",
    },
  ];

  return (
    <section
      id="diferenciais"
      style={{
        background: "var(--color-brand-dark)",
        padding: "var(--space-section) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Large decorative number background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "28rem",
          fontWeight: 700,
          color: "rgba(186,158,132,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        HD
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
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
            Por que a High Design
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              fontWeight: 300,
              color: "var(--color-brand-white)",
              lineHeight: 1.15,
              maxWidth: "500px",
            }}
          >
            O que nos torna
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brand-accent)" }}>
              diferentes
            </em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
          className="diferenciais-grid"
        >
          {items.map((item, i) => (
            <div
              key={item.num}
              style={{
                padding: "2rem 2rem 2rem 0",
                borderTop: "1px solid rgba(186,158,132,0.2)",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(186,158,132,0.1)" : "none",
                paddingRight: (i + 1) % 3 !== 0 ? "2rem" : "0",
                paddingLeft: i % 3 !== 0 ? "2rem" : "0",
                transition: "background var(--duration-base)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(186,158,132,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-brand-accent)",
                  marginBottom: "0.75rem",
                  opacity: 0.6,
                }}
              >
                {item.num}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--color-brand-white)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                  letterSpacing: "0.01em",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                  color: "var(--color-brand-accent)",
                  opacity: 0.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
