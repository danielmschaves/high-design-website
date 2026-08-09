import Link from "next/link";

export default function AuthorCard() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-7 p-8 sm:p-10"
      style={{ background: "var(--color-brand-secondary)" }}
    >
      <div
        className="hd-avatar"
        style={{ width: "76px", height: "76px", fontSize: "22px" }}
        aria-hidden
      >
        EG
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent m-0 mb-2">
          Sobre a autora
        </p>
        <h4
          className="font-display font-bold text-brand-dark m-0 mb-2"
          style={{ fontSize: "1.2rem" }}
        >
          <Link
            href="/sobre"
            className="no-underline text-brand-dark hover:text-brand-primary transition-colors duration-[420ms]"
          >
            Emanoella Goulart
          </Link>
        </h4>
        <p
          className="font-display text-stone-500 m-0"
          style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
        >
          Arquiteta e urbanista à frente da High Design. Conduz projetos
          residenciais e comerciais de médio a alto padrão com método, técnica e
          acolhimento — do primeiro traço à obra.
        </p>
        <Link
          href="/sobre"
          className="inline-block mt-4 font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent no-underline border-b border-brand-accent pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors duration-[420ms]"
        >
          Conheça Emanoella Goulart
        </Link>
      </div>
    </div>
  );
}
