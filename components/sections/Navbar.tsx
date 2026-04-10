"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-brand ${
        scrolled
          ? "bg-brand-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(61,48,53,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center no-underline">
          <Image
            src="/assets/logos/Ativo 9.png"
            alt="High Design ARQ."
            width={200}
            height={36}
            className="object-contain h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-brand-dark no-underline opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-brand-white bg-brand-dark px-[1.4rem] py-[0.6rem] no-underline transition-colors duration-300 hover:bg-brand-primary"
          >
            Fale Conosco
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
            className="overflow-hidden bg-brand-white border-t border-neutral-200 md:hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-brand-dark no-underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-brand-white bg-brand-dark px-[1.4rem] py-[0.8rem] no-underline text-center"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
