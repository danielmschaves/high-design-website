"use client";

import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Por que a HD", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const servicos = [
  "Consultoria de Terreno",
  "Consultoria de Construção",
  "Projeto de Arquitetura",
  "Orçamento de Obra",
];

export default function Footer() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <footer
      className="bg-ink"
      style={{ color: "rgba(245,242,238,0.55)", padding: "72px var(--gutter) 40px" }}
    >
      {/* Top */}
      <div
        className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-12"
        style={{ borderBottom: "1px solid rgba(245,242,238,0.08)" }}
      >
        {/* Logo + tagline */}
        <div>
          <Image
            src="/assets/logos/Ativo 1.png"
            alt="High Design ARQ."
            width={280}
            height={50}
            className="mb-5"
            style={{ height: "24px", width: "auto", filter: "brightness(0) invert(1) opacity(0.85)" }}
          />
          <p className="font-display text-[13px] leading-[1.6] m-0 max-w-[30ch]">
            Arquitetura que guia, do primeiro traço à obra.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h5 className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent font-normal m-0 mb-5">
            Navegação
          </h5>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[13px] no-underline transition-colors duration-300 hover:text-brand-white"
                  style={{ color: "rgba(245,242,238,0.55)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h5 className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent font-normal m-0 mb-5">
            Serviços
          </h5>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {servicos.map((s) => (
              <li key={s} className="font-display text-[13px]">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contato + Social */}
        <div>
          <h5 className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent font-normal m-0 mb-5">
            Contato
          </h5>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li>
              <a
                href="mailto:contato@highdesign.arq.br"
                className="font-display text-[13px] no-underline transition-colors duration-300 hover:text-brand-white"
                style={{ color: "rgba(245,242,238,0.55)" }}
              >
                contato@highdesign.arq.br
              </a>
            </li>
            <li className="font-display text-[13px]">Emanoella Goulart</li>
            {(instagramUrl || linkedinUrl) && (
              <li className="flex gap-4 mt-3">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-2 font-display text-[12px] no-underline transition-colors duration-300 hover:text-brand-white"
                    style={{ color: "rgba(245,242,238,0.55)" }}
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
                    className="flex items-center gap-2 font-display text-[12px] no-underline transition-colors duration-300 hover:text-brand-white"
                    style={{ color: "rgba(245,242,238,0.55)" }}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-content mx-auto pt-8 flex items-center justify-between flex-wrap gap-3">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase m-0" style={{ color: "rgba(245,242,238,0.4)" }}>
          © {new Date().getFullYear()} High Design Arquitetura e Urbanismo
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase m-0" style={{ color: "rgba(245,242,238,0.4)" }}>
          CNPJ · CAU-BR · Emanoella Goulart
        </p>
      </div>
    </footer>
  );
}
