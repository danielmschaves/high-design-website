"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/assets/images/04c863415f33702f810a01f9cf1549a8.jpg", ambiente: "Sala de Estar",    tipo: "Residencial",    area: "52 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/0eff937e87b0ec78e5d622666344b9c9.jpg", ambiente: "Cozinha",           tipo: "Alto Padrão",    area: "38 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg", ambiente: "Fachada",           tipo: "Residencial",    area: "320 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/2f1b802614bd75a610e756275d26d87e.jpg", ambiente: "Área Social",       tipo: "Residencial",    area: "74 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/31166dcb438f1f8b51e5287e095c7d62.jpg", ambiente: "Quarto Master",     tipo: "Alto Padrão",    area: "28 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/3be025d3627c2467c8a208c9fa75d44d.jpg", ambiente: "Escritório",        tipo: "Corporativo",    area: "110 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/52bf605197dcea5dd18e7d18e8566dcd.jpg", ambiente: "Banheiro",          tipo: "Alto Padrão",    area: "14 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/5c0853e988370864c56cac0ba5b90762.jpg", ambiente: "Varanda",           tipo: "Residencial",    area: "22 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/69a3d43734db3451996709d7ff87e6b7.jpg", ambiente: "Hall de Entrada",   tipo: "Residencial",    area: "18 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/7e4f69ecd7f5871fc2e98c759985d963.jpg", ambiente: "Sala de Jantar",    tipo: "Residencial",    area: "44 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/9a4535949326248195570e966863116d.jpg", ambiente: "Suíte",             tipo: "Alto Padrão",    area: "32 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/b5e398407c9b26dac0fd2e08befd071f.jpg", ambiente: "Home Office",       tipo: "Residencial",    area: "16 m²", servico: "Projeto de Arquitetura" },
  { src: "/assets/images/c1f800ae03e0db2e4568ffa992f4ed12.jpg", ambiente: "Terraço",           tipo: "Residencial",    area: "36 m²", servico: "Projeto Executivo" },
  { src: "/assets/images/c3601f1a110ed6b4f42566cd55e741eb.jpg", ambiente: "Lavabo",            tipo: "Alto Padrão",    area: "8 m²",  servico: "Projeto Executivo" },
  { src: "/assets/images/cde5c7744460198965c27f696e6b055e.jpg", ambiente: "Living",            tipo: "Residencial",    area: "60 m²", servico: "Projeto de Arquitetura" },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      style={{
        background: "var(--color-brand-dark)",
        padding: "var(--space-section) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
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
              Portfólio
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
              Projetos que
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-brand-accent)" }}>
                transformam espaços
              </em>
            </h2>
          </div>

          <a
            href="#contato"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(186,158,132,0.4)",
              paddingBottom: "2px",
              opacity: 0.8,
            }}
          >
            Ver todos os projetos
          </a>
        </div>

        {/* Grid: 3 columns, varying row heights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="portfolio-grid"
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              style={{
                position: "relative",
                aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={img.src}
                alt={`${img.ambiente} · ${img.tipo}`}
                fill
                style={{
                  objectFit: "cover",
                  transform: hovered === i ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.6s var(--ease-brand)",
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(61,48,53,0.92) 0%, rgba(61,48,53,0.2) 55%, transparent 100%)",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity var(--duration-base)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.25rem",
                  gap: "0.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "var(--color-brand-white)",
                    lineHeight: 1.2,
                  }}
                >
                  {img.ambiente}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-white)",
                    opacity: 0.7,
                  }}
                >
                  {img.tipo} · {img.area}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-accent)",
                    opacity: 0.85,
                    marginTop: "0.25rem",
                  }}
                >
                  {img.servico}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
