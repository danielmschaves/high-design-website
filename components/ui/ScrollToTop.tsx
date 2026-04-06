"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      style={{
        position: "fixed",
        bottom: "6rem",
        right: "2rem",
        zIndex: 190,
        width: "44px",
        height: "44px",
        background: "var(--color-brand-dark)",
        border: "1px solid rgba(186,158,132,0.3)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background var(--duration-base), opacity var(--duration-base)",
        opacity: 0.85,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--color-brand-primary)";
        (e.currentTarget as HTMLButtonElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--color-brand-dark)";
        (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="12" x2="7" y2="2" stroke="#f5f2ee" strokeWidth="1.2" strokeLinecap="square" />
        <polyline points="3,6 7,2 11,6" fill="none" stroke="#f5f2ee" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    </button>
  );
}
