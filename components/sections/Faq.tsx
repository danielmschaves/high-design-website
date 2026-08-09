"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/faq";

/**
 * Visible FAQ section, rendered from the same array that feeds FAQPage
 * JSON-LD on the homepage.
 *
 * Answers are rendered into the DOM even when collapsed (the accordion only
 * animates height) so crawlers — and users with JS disabled — read the full
 * text. Hiding schema-backed answers behind a client-side fetch is what gets
 * FAQ markup flagged.
 */
export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-stone-50 overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-content mx-auto">
        <div className="hd-chapter">
          <div className="num">08 · Perguntas frequentes</div>
          <div>
            <h2 id="faq-heading">
              As dúvidas que aparecem
              <br />
              <em>antes do primeiro traço</em>
            </h2>
            <p>
              Respostas diretas sobre como funciona o trabalho da High Design Arquitetura e
              Urbanismo, quem conduz os projetos e por onde começar.
            </p>
          </div>
        </div>

        {/* No top border — .hd-chapter already closes with a rule. */}
        <dl className="m-0">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div key={faq.question} className="border-b border-stone-300">
                <dt className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-start justify-between gap-8 bg-transparent border-0 cursor-pointer text-left py-7 px-0 group"
                  >
                    <span className="flex items-start gap-6">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent pt-1.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-display text-brand-dark leading-[1.35] transition-colors duration-[420ms] group-hover:text-brand-primary"
                        style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="relative shrink-0 mt-2 block w-[14px] h-[14px]"
                    >
                      <span className="absolute top-1/2 left-0 w-[14px] h-px bg-brand-accent" />
                      <span
                        className="absolute top-1/2 left-0 w-[14px] h-px bg-brand-accent transition-transform duration-[420ms] ease-brand"
                        style={{ transform: open ? "rotate(0deg)" : "rotate(90deg)" }}
                      />
                    </span>
                  </button>
                </dt>

                {/*
                  Stays mounted whether open or closed. Google allows FAQ
                  answers to be collapsed behind an accordion, but the text
                  must exist in the served HTML — unmounting closed panels
                  would leave the FAQPage schema asserting answers that are
                  not on the page.
                */}
                <motion.dd
                  id={panelId}
                  aria-labelledby={buttonId}
                  className="m-0 overflow-hidden"
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="text-stone-500 leading-[1.8] m-0 pb-8 max-w-[68ch]"
                    style={{ paddingLeft: "44px", fontSize: "0.95rem" }}
                  >
                    {faq.answer}
                  </p>
                </motion.dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
