"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre",        href: "#sobre" },
    { label: "Por que a HD", href: "#diferenciais" },
    { label: "Serviços",     href: "#servicos" },
    { label: "Portfólio",    href: "#portfolio" },
    // Real route, not an anchor — gives the author entity page a site-wide
    // internal link from every page that renders the navbar.
    { label: "Arquiteta",    href: "/sobre" },
    { label: "Blog",         href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[420ms] ease-brand ${
        scrolled
          ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-300/50 py-[14px]"
          : "bg-transparent py-[22px]"
      }`}
      style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center no-underline">
          <Image
            src="/assets/logos/Ativo 9.png"
            alt="High Design ARQ."
            width={200}
            height={36}
            className="object-contain h-[22px] w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-[11px] tracking-[0.24em] uppercase text-stone-500 no-underline pb-[3px] transition-colors duration-[420ms] hover:text-brand-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-accent after:transition-all after:duration-[420ms] after:ease-brand hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="font-display text-[10px] tracking-[0.22em] uppercase text-brand-white bg-brand-dark px-5 py-[11px] no-underline transition-colors duration-[420ms] hover:bg-brand-primary inline-flex items-center gap-3"
          >
            Iniciar projeto
            <span className="hd-arrow-inline relative inline-block w-[14px] h-px bg-current" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px bg-brand-dark transition-all duration-300"
              style={{
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-stone-50 border-t border-stone-300 md:hidden -mx-[var(--gutter)]"
          >
            <div className="px-8 py-6 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[12px] tracking-[0.24em] uppercase text-brand-dark no-underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="font-display text-[11px] tracking-[0.22em] uppercase text-brand-white bg-brand-dark px-6 py-4 no-underline text-center"
              >
                Iniciar projeto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
