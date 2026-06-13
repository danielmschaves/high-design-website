import { type BlogBlock } from "@/lib/blog";
import Link from "next/link";

function renderInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-brand-dark">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

interface PostBodyProps {
  body: BlogBlock[];
}

export default function PostBody({ body }: PostBodyProps) {
  return (
    <div
      className="mx-auto w-full"
      style={{ maxWidth: "66ch" }}
    >
      {body.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <div key={i} className="mt-12 mb-4">
                <div
                  className="h-px bg-brand-accent mb-5"
                  style={{ width: "24px" }}
                  aria-hidden
                />
                <h2
                  className="font-display font-bold text-brand-dark m-0"
                  style={{ fontSize: "var(--text-h3)", lineHeight: 1.25, letterSpacing: "0.01em" }}
                >
                  {block.text}
                </h2>
              </div>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className="font-display text-stone-500 mb-5 m-0 mt-5"
                style={{ fontSize: "var(--text-body)", lineHeight: 1.8, letterSpacing: "0.005em" }}
              >
                {renderInline(block.text)}
              </p>
            );

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

          case "callout":
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
