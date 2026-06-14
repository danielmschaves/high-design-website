import Image from "next/image";
import Link from "next/link";

export default function ArticleCTA() {
  return (
    <div
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-8 md:gap-12"
      style={{
        background: "var(--color-brand-dark)",
        color: "var(--color-stone-100)",
        padding: "clamp(48px, 7vw, 88px)",
      }}
    >
      {/* Monogram watermark */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden
        style={{ right: "-40px", bottom: "-50px", width: "320px", opacity: 0.06 }}
      >
        <Image
          src="/assets/logos/Ativo 2.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="relative z-[2]">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent m-0">
          Do primeiro traço à obra
        </p>
        <h2
          className="font-display font-normal m-0 mt-4"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--color-brand-white)",
          }}
        >
          Pronto para um projeto que{" "}
          <em className="italic" style={{ color: "var(--color-brand-accent)" }}>
            nasce para ser construído?
          </em>
        </h2>
        <p
          className="m-0 mt-5"
          style={{ color: "rgba(245,242,238,0.6)", maxWidth: "44ch", lineHeight: 1.6 }}
        >
          A primeira conversa é uma escuta genuína, sem compromisso — com método,
          clareza e acolhimento do começo ao fim.
        </p>
      </div>

      <div className="relative z-[2] flex flex-col gap-4">
        <Link
          href="/#contato"
          className="hd-btn justify-center no-underline"
          style={{ background: "var(--color-brand-accent)", color: "var(--color-brand-dark)" }}
        >
          Iniciar conversa
          <span className="arrow" />
        </Link>
        <span
          className="font-mono text-[11px] tracking-[0.14em] uppercase text-center"
          style={{ color: "rgba(245,242,238,0.5)" }}
        >
          contato@highdesign.arq.br
        </span>
      </div>
    </div>
  );
}
