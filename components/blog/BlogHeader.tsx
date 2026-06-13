"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[420ms] ease-brand ${
        scrolled
          ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-300/50 py-[14px]"
          : "bg-transparent py-[22px]"
      }`}
      style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
    >
      <div className="max-w-content mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/assets/logos/Ativo 9.png"
            alt="High Design ARQ."
            width={200}
            height={36}
            className="object-contain h-[22px] w-auto"
            priority
          />
        </Link>

        <Link
          href="/"
          className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500 no-underline hover:text-brand-dark transition-colors duration-[420ms] flex items-center gap-3"
        >
          <span
            className="inline-block h-px bg-current transition-all duration-[420ms]"
            style={{ width: "14px" }}
          />
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}
