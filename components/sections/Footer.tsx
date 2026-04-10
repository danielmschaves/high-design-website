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
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-[rgba(186,158,132,0.15)]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-8">
          {/* Logo + tagline */}
          <div className="max-w-[320px]">
            <Image
              src="/assets/logos/Ativo 1.png"
              alt="High Design ARQ."
              width={280}
              height={50}
              className="w-[220px] h-auto mb-5"
            />
            <p className="font-display text-[0.75rem] leading-[1.7] text-brand-white opacity-45">
              Arquitetura que guia, do primeiro traço à obra.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="font-display text-[0.55rem] tracking-[0.3em] uppercase text-brand-accent opacity-60 mb-2">
              Navegação
            </p>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-[0.75rem] text-brand-white no-underline opacity-[0.55] hover:opacity-100 tracking-[0.05em] transition-opacity duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          {(instagramUrl || linkedinUrl) && (
            <div className="flex flex-col gap-3">
              <p className="font-display text-[0.55rem] tracking-[0.3em] uppercase text-brand-accent opacity-60 mb-2">
                Redes Sociais
              </p>
              <div className="flex flex-col gap-3">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-[0.6rem] font-display text-[0.75rem] text-brand-white no-underline opacity-[0.55] hover:opacity-100 transition-opacity duration-300"
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
                    className="flex items-center gap-[0.6rem] font-display text-[0.75rem] text-brand-white no-underline opacity-[0.55] hover:opacity-100 transition-opacity duration-300"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-[0.55rem] tracking-[0.3em] uppercase text-brand-accent opacity-60 mb-2">
              Contato
            </p>
            <a
              href="mailto:contato@highdesign.arq.br"
              className="font-display text-[0.75rem] text-brand-white no-underline opacity-[0.55]"
            >
              contato@highdesign.arq.br
            </a>
            <p className="font-display text-[0.75rem] text-brand-white opacity-[0.55]">
              Emanoella Goulart
            </p>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[rgba(186,158,132,0.12)] pt-6 flex items-center justify-between flex-wrap gap-2">
          <p className="font-display text-[0.6rem] tracking-[0.1em] text-brand-white opacity-25">
            © {new Date().getFullYear()} High Design Arquitetura e Urbanismo. Todos os direitos reservados.
          </p>
          <p className="font-display text-[0.6rem] tracking-[0.1em] text-brand-white opacity-25">
            High Design ARQ.®
          </p>
        </div>
      </div>
    </footer>
  );
}
