"use client";

import { useState } from "react";

const steps = [
  {
    sigla: "LV",
    nome: "Levantamento",
    desc: "Fase inicial: medição do espaço, análise de normas urbanísticas, laudos e documentos do imóvel. Briefing para entender necessidades, expectativas, estilo e orçamento.",
  },
  {
    sigla: "EM",
    nome: "Estudo de Massa",
    desc: "Análise das diretrizes municipais e condicionantes ambientais do terreno. Define parâmetros construtivos iniciais e apresenta números globais de custo.",
  },
  {
    sigla: "EP",
    nome: "Estudo Preliminar",
    desc: "Esboço das ideias gerais do projeto conforme o programa de necessidades. Visualização dos espaços através de plantas de layout e imagens 3D realísticas.",
  },
  {
    sigla: "EVF",
    nome: "Estudo de Viabilidade Financeira",
    desc: "Levantamento de quantidades e valores de insumos, equipamentos e mão de obra. Garante compatibilidade entre o projeto, acabamentos escolhidos e o aporte financeiro disponível.",
  },
  {
    sigla: "PL",
    nome: "Projeto Legal para Aprovação",
    desc: "Desenvolvimento de todos os cadernos técnicos exigidos pela prefeitura e órgãos competentes para obter o alvará de construção.",
  },
  {
    sigla: "COMP",
    nome: "Compatibilização de Projetos Complementares",
    desc: "Integração do projeto arquitetônico com os projetos estruturais, elétricos e hidrossanitários — garantindo concordância entre todas as disciplinas.",
  },
  {
    sigla: "PE",
    nome: "Projeto Executivo",
    desc: "Etapa final de detalhamento para execução da obra. Inclui cadernos de ambientes, marcenaria, marmoraria, paginação de piso, mapas de instalações e luminotécnica.",
  },
  {
    sigla: "PO",
    nome: "Planejamento de Obra",
    desc: "Estruturação e listagem das atividades em sequência lógica de execução, com EAP e PERT/CPM para controle preciso do cronograma.",
  },
  {
    sigla: "OE",
    nome: "Orçamento Executivo de Obra",
    desc: "Orçamento detalhado com custos reais do mercado, apresentando a composição de materiais e mão de obra para cada fase da construção.",
  },
  {
    sigla: "EO",
    nome: "Execução de Obra",
    desc: "Gerenciamento, acompanhamento e fiscalização completa da obra. Inclui gestão do cronograma, compra de materiais, contratação de mão de obra, emissão de relatórios e verificação de segurança.",
  },
];

export default function Esteira() {
  const [open, setOpen] = useState<number | null>(0);

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
        <div style={{ position: "sticky", top: "6rem" }}>
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
              à obra entregue
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
            Nossa esteira de serviços cobre cada etapa da jornada arquitetônica. Você pode contratar individualmente ou em pacotes, conforme sua necessidade.
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
            10 etapas · LV → EO
          </p>
        </div>

        {/* Right: accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <div
              key={step.sigla}
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
                  gap: "1.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {/* Sigla */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: open === i ? "var(--color-brand-white)" : "var(--color-brand-accent)",
                    background: open === i ? "var(--color-brand-dark)" : "transparent",
                    border: "1px solid var(--color-brand-accent)",
                    padding: "0.4rem 0.6rem",
                    minWidth: "52px",
                    textAlign: "center",
                    transition: "all var(--duration-base)",
                    flexShrink: 0,
                  }}
                >
                  {step.sigla}
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
                  {step.nome}
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
                  maxHeight: open === i ? "200px" : "0",
                  transition: "max-height 0.4s var(--ease-brand)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.83rem",
                    lineHeight: 1.8,
                    color: "var(--color-brand-primary)",
                    padding: "1rem 0 1.5rem 4.5rem",
                    opacity: 0.85,
                  }}
                >
                  {step.desc}
                </p>
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
