"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 1s var(--ease-brand), transform 1s var(--ease-brand)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "640px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
      }}
    >
      {/* Left panel — editorial copy */}
      <div
        style={{
          background: "var(--color-brand-white)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem 5rem 4rem 5rem",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-left"
      >
        {/* Decorative grid lines */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--color-neutral-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-200) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.25,
            pointerEvents: "none",
          }}
        />

        <div ref={textRef} style={{ position: "relative" }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              marginBottom: "2rem",
            }}
          >
            Arquitetura e Urbanismo
          </p>

          {/* HD monogram — oversized decorative */}
          <div
            style={{
              position: "absolute",
              top: "-2rem",
              right: "-3rem",
              width: "220px",
              opacity: 0.06,
              pointerEvents: "none",
            }}
            aria-hidden
          >
            <Image
              src="/assets/logos/Ativo 3.png"
              alt=""
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Main tagline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: "var(--color-brand-dark)",
              marginBottom: "1.75rem",
              maxWidth: "480px",
            }}
          >
            Arquitetura que guia,
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-brand-primary)",
              }}
            >
              do primeiro traço
            </em>
            <br />
            à obra.
          </h1>

          {/* Sub tagline */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--color-brand-primary)",
              maxWidth: "380px",
              marginBottom: "2.5rem",
              opacity: 0.85,
            }}
          >
            Transformamos histórias em espaços bem planejados — com método, técnica e acolhimento.
          </p>

          {/* CTA group */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
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
              Inicie seu projeto
            </a>
            <a
              href="#servicos"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-brand-dark)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-brand-accent)",
                paddingBottom: "2px",
                opacity: 0.7,
              }}
            >
              Ver serviços
            </a>
          </div>

          {/* Bottom meta */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-neutral-200)",
              display: "flex",
              gap: "2.5rem",
            }}
          >
            {[
              { num: "10+", label: "Anos de prática" },
              { num: "200+", label: "Projetos entregues" },
              { num: "100%", label: "Exequibilidade" },
            ].map((s) => (
              <div key={s.num}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--color-brand-accent)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-primary)",
                    opacity: 0.7,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — full-bleed photo */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        className="hero-right"
      >
        <Image
          src="/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg"
          alt="Projeto residencial High Design"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Subtle dark overlay at bottom for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(61,48,53,0.4) 100%)",
          }}
        />

        {/* Floating caption */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            right: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245,242,238,0.7)",
            }}
          >
            Projeto residencial · High Design ARQ.®
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        className="hero-left-only"
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-brand-primary)",
            opacity: 0.5,
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "var(--color-brand-accent)",
            opacity: 0.4,
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
