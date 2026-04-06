"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background var(--duration-base) var(--ease-brand), box-shadow var(--duration-base) var(--ease-brand)",
        background: scrolled ? "rgba(245,242,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(61,48,53,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/assets/logos/Ativo 9.png"
            alt="High Design ARQ."
            width={200}
            height={36}
            style={{ objectFit: "contain", height: "28px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-brand-dark)",
                textDecoration: "none",
                opacity: 0.7,
                transition: "opacity var(--duration-base)",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.7")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-brand-white)",
              background: "var(--color-brand-dark)",
              padding: "0.6rem 1.4rem",
              textDecoration: "none",
              transition: "background var(--duration-base)",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--color-brand-primary)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--color-brand-dark)")}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile hamburger — visibility controlled by .show-mobile CSS class */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "var(--color-brand-dark)",
                transition: "all var(--duration-base)",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu — conditionally rendered, no class needed */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-brand-white)",
            borderTop: "1px solid var(--color-neutral-200)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-brand-dark)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-brand-white)",
              background: "var(--color-brand-dark)",
              padding: "0.8rem 1.4rem",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
