"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
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
