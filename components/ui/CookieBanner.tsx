"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "hd_cookie_consent";
// Floating buttons (WhatsApp, ScrollToTop) read this offset so they rise above
// the banner while it's visible and settle back once it's dismissed.
const OFFSET_VAR = "--cookie-banner-offset";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  // Publish the banner's measured height (plus a gap) as a CSS variable while
  // it's visible; reset to 0 when hidden so the buttons return to their resting
  // position. A ResizeObserver keeps it accurate when the banner wraps on mobile.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty(OFFSET_VAR, "0px");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const apply = () =>
      root.style.setProperty(OFFSET_VAR, `${el.offsetHeight + 16}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty(OFFSET_VAR, "0px");
    };
  }, [visible]);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          role="region"
          aria-label="Aviso de privacidade"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[300] bg-brand-dark border-t border-brand-accent/20 px-8 py-4 flex items-center justify-between gap-6 flex-wrap"
        >
          <p className="font-display text-[0.72rem] leading-[1.7] text-brand-white opacity-75 m-0 flex-1 min-w-[240px]">
            Utilizamos seus dados apenas para responder ao seu contato, conforme a{" "}
            <a
              href="/privacidade"
              className="text-brand-accent underline underline-offset-[3px]"
            >
              Política de Privacidade
            </a>
            .
          </p>

          <button
            onClick={accept}
            className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-brand-white bg-transparent border border-brand-accent/40 px-[1.4rem] py-[0.55rem] cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
          >
            Entendido
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
