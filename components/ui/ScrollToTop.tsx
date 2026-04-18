"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-8 z-[190] w-11 h-11 bg-brand-dark border border-brand-accent/30 cursor-pointer flex items-center justify-center opacity-[0.85]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="12" x2="7" y2="2" stroke="#f5f2ee" strokeWidth="1.2" strokeLinecap="square" />
            <polyline points="3,6 7,2 11,6" fill="none" stroke="#f5f2ee" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
