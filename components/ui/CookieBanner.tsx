"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "hd_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de privacidade"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        background: "var(--color-brand-dark)",
        borderTop: "1px solid rgba(186,158,132,0.2)",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.72rem",
          lineHeight: 1.7,
          color: "var(--color-brand-white)",
          opacity: 0.75,
          margin: 0,
          flex: 1,
          minWidth: "240px",
        }}
      >
        Utilizamos seus dados apenas para responder ao seu contato, conforme a{" "}
        <a
          href="/privacidade"
          style={{
            color: "var(--color-brand-accent)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Política de Privacidade
        </a>
        .
      </p>

      <button
        onClick={accept}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-brand-white)",
          background: "transparent",
          border: "1px solid rgba(186,158,132,0.4)",
          padding: "0.55rem 1.4rem",
          cursor: "pointer",
          transition: "border-color var(--duration-base), color var(--duration-base)",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget).style.borderColor = "var(--color-brand-accent)";
          (e.currentTarget).style.color = "var(--color-brand-accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget).style.borderColor = "rgba(186,158,132,0.4)";
          (e.currentTarget).style.color = "var(--color-brand-white)";
        }}
      >
        Entendido
      </button>
    </div>
  );
}
