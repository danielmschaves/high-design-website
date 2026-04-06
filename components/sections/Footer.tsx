"use client";

import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const linkedinUrl  = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  const nav = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer
      style={{
        background: "var(--color-brand-dark)",
        padding: "4rem 0 2rem",
        borderTop: "1px solid rgba(186,158,132,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: "320px" }}>
            <Image
              src="/assets/logos/Ativo 1.png"
              alt="High Design ARQ."
              width={280}
              height={50}
              style={{ width: "220px", height: "auto", marginBottom: "1.25rem" }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                lineHeight: 1.7,
                color: "var(--color-brand-white)",
                opacity: 0.45,
              }}
            >
              Arquitetura que guia, do primeiro traço à obra.
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--color-brand-accent)",
                opacity: 0.6,
                marginBottom: "0.5rem",
              }}
            >
              Navegação
            </p>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  color: "var(--color-brand-white)",
                  textDecoration: "none",
                  opacity: 0.55,
                  letterSpacing: "0.05em",
                  transition: "opacity var(--duration-base)",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.55")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social links — shown only when env vars are set */}
          {(instagramUrl || linkedinUrl) && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-accent)",
                  opacity: 0.6,
                  marginBottom: "0.5rem",
                }}
              >
                Redes Sociais
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      color: "var(--color-brand-white)",
                      textDecoration: "none",
                      opacity: 0.55,
                      transition: "opacity var(--duration-base)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      color: "var(--color-brand-white)",
                      textDecoration: "none",
                      opacity: 0.55,
                      transition: "opacity var(--duration-base)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--color-brand-accent)",
                opacity: 0.6,
                marginBottom: "0.5rem",
              }}
            >
              Contato
            </p>
            <a
              href="mailto:contato@highdesign.arq.br"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                color: "var(--color-brand-white)",
                textDecoration: "none",
                opacity: 0.55,
              }}
            >
              contato@highdesign.arq.br
            </a>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                color: "var(--color-brand-white)",
                opacity: 0.55,
              }}
            >
              Emanoella Goulart
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(186,158,132,0.12)", paddingTop: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "var(--color-brand-white)",
                opacity: 0.25,
              }}
            >
              © {new Date().getFullYear()} High Design Arquitetura e Urbanismo. Todos os direitos reservados.
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "var(--color-brand-white)",
                opacity: 0.25,
              }}
            >
              High Design ARQ.®
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
