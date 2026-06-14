import { type BlogBlock } from "@/lib/blog";
import Link from "next/link";

function renderInline(text: string) {
  // First split on **bold**, then handle _italic_ inside the non-bold segments.
  const boldParts = text.split(/\*\*(.*?)\*\*/g);
  return boldParts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="font-bold text-brand-dark">
          {part}
        </strong>
      );
    }
    const italParts = part.split(/_(.*?)_/g);
    return italParts.map((p, j) =>
      j % 2 === 1 ? (
        <em key={`${i}-${j}`} className="italic text-brand-primary">
          {p}
        </em>
      ) : (
        <span key={`${i}-${j}`}>{p}</span>
      )
    );
  });
}

interface PostBodyProps {
  body: BlogBlock[];
}

export default function PostBody({ body }: PostBodyProps) {
  return (
    <div className="mx-auto w-full" style={{ maxWidth: "66ch" }}>
      {body.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="font-display font-normal text-brand-dark grid items-baseline border-t border-stone-300 m-0"
                style={{
                  gridTemplateColumns: block.num ? "auto 1fr" : "1fr",
                  gap: "18px",
                  marginTop: "56px",
                  paddingTop: "32px",
                  fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                {block.num && (
                  <span className="font-mono text-[13px] tracking-[0.1em] text-brand-accent font-medium">
                    {block.num}
                  </span>
                )}
                <span>{block.text}</span>
              </h2>
            );

          case "paragraph": {
            const isLead = block.dropcap || block.leadIn;
            if (isLead) {
              const first = block.text.charAt(0);
              const rest = block.text.slice(1);
              return (
                <div key={i} className="mt-5 mb-5">
                  {block.leadIn && (
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent m-0 mb-3">
                      {block.leadIn}
                    </p>
                  )}
                  <p
                    className="font-display text-stone-500 m-0 overflow-hidden"
                    style={{ fontSize: "var(--text-body)", lineHeight: 1.8, letterSpacing: "0.005em" }}
                  >
                    {block.dropcap ? (
                      <>
                        <span className="hd-dropcap-letter">{first}</span>
                        {renderInline(rest)}
                      </>
                    ) : (
                      renderInline(block.text)
                    )}
                  </p>
                </div>
              );
            }
            return (
              <p
                key={i}
                className="font-display text-stone-500 mb-5 m-0 mt-5"
                style={{ fontSize: "var(--text-body)", lineHeight: 1.8, letterSpacing: "0.005em" }}
              >
                {renderInline(block.text)}
              </p>
            );
          }

          case "list":
            if (block.ordered) {
              return (
                <ol key={i} className="list-none p-0 m-0 mt-4 mb-5 flex flex-col gap-4">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-4">
                      <span
                        className="font-mono text-[11px] tracking-[0.1em] text-brand-accent flex-shrink-0 mt-[3px]"
                        style={{ minWidth: "20px" }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-display text-stone-500"
                        style={{ fontSize: "var(--text-body)", lineHeight: 1.75 }}
                      >
                        {renderInline(item)}
                      </span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={i} className="list-none p-0 m-0 mt-4 mb-5 flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="text-brand-accent flex-shrink-0 mt-[2px]">—</span>
                    <span
                      className="font-display text-stone-500"
                      style={{ fontSize: "var(--text-body)", lineHeight: 1.75 }}
                    >
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <div key={i} className="mt-8 mb-6 flex flex-col">
                {block.items.map((step, j) => (
                  <div
                    key={j}
                    className="hd-step grid gap-6 py-6 border-t border-stone-300"
                    style={{ gridTemplateColumns: "48px 1fr" }}
                  >
                    <span className="font-mono text-[13px] font-bold text-brand-accent tracking-[0.06em] pt-[2px]">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4
                        className="font-display font-bold text-brand-dark m-0 mb-2"
                        style={{ fontSize: "1.05rem", lineHeight: 1.3 }}
                      >
                        {renderInline(step.title)}
                      </h4>
                      <p
                        className="font-display text-stone-500 m-0"
                        style={{ fontSize: "var(--text-body)", lineHeight: 1.7 }}
                      >
                        {renderInline(step.text)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case "pullquote":
            return (
              <figure
                key={i}
                className="my-12 pl-8 m-0 border-l-2"
                style={{ borderLeftColor: "var(--color-brand-accent)" }}
              >
                <blockquote
                  className="font-display font-normal text-brand-dark m-0"
                  style={{
                    fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {renderInline(block.text)}
                </blockquote>
                <figcaption className="font-mono text-[10px] tracking-[0.16em] uppercase text-stone-500 mt-5">
                  {block.cite}
                </figcaption>
              </figure>
            );

          case "callout":
            return (
              <div
                key={i}
                className="my-12 p-8 sm:p-9 border border-stone-300"
                style={{ background: "var(--color-paper)" }}
              >
                <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-brand-accent mb-6">
                  <span className="inline-block h-px bg-brand-accent" style={{ width: "28px" }} aria-hidden />
                  {block.label}
                </div>
                <ul className="list-none m-0 p-0 flex flex-col">
                  {block.items.map((it, j) => (
                    <li
                      key={j}
                      className="grid items-start gap-4 py-4 border-b border-stone-200 last:border-b-0"
                      style={{ gridTemplateColumns: "20px 1fr" }}
                    >
                      <span
                        className="relative mt-[3px]"
                        style={{ width: "20px", height: "20px", border: "1px solid var(--color-brand-accent)" }}
                        aria-hidden
                      >
                        <span className="absolute" style={{ inset: "4px", background: "var(--color-brand-accent)" }} />
                      </span>
                      <span
                        className="font-display text-brand-dark"
                        style={{ fontSize: "1rem", lineHeight: 1.55 }}
                      >
                        <strong className="block font-bold text-brand-dark mb-0.5">
                          {renderInline(it.title)}
                        </strong>
                        {renderInline(it.text)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "nextStep":
            return (
              <div
                key={i}
                className="mt-14 mb-2 p-8 border-l-2 relative overflow-hidden"
                style={{
                  borderLeftColor: "var(--color-brand-accent)",
                  background: "var(--color-brand-secondary)",
                }}
              >
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-3 m-0">
                  {block.label}
                </p>
                <p
                  className="font-display text-brand-dark mb-6 m-0 mt-1"
                  style={{ fontSize: "var(--text-body)", lineHeight: 1.75 }}
                >
                  {block.text}
                </p>
                <Link
                  href={block.cta.href}
                  className="hd-btn hd-btn--link inline-flex items-center gap-3 no-underline"
                >
                  {block.cta.label}
                  <span className="hd-arrow-inline" />
                </Link>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
