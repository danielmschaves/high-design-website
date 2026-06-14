"use client";

import { useMemo, useState } from "react";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog";

interface BlogIndexListProps {
  posts: BlogPost[];
}

const ALL = "Todos";

export default function BlogIndexList({ posts }: BlogIndexListProps) {
  const [active, setActive] = useState<string>(ALL);

  // Unique categories in order of first appearance.
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const p of posts) if (!seen.includes(p.category)) seen.push(p.category);
    return [ALL, ...seen];
  }, [posts]);

  const showFeatured = active === ALL;
  const filtered = showFeatured ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;
  const gridPosts = showFeatured ? rest : filtered;

  return (
    <>
      {/* Filtro de categorias */}
      <section style={{ padding: "0 var(--gutter)" }}>
        <div className="max-w-content mx-auto flex flex-wrap gap-2 border-y border-stone-300" style={{ padding: "var(--space-5) 0" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`hd-cat-chip ${active === cat ? "is-active" : ""}`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Artigo em destaque (apenas em "Todos") */}
      {showFeatured && featured && (
        <section style={{ padding: "var(--space-8) var(--gutter) 0" }}>
          <div className="max-w-content mx-auto">
            <PostCard post={featured} variant="feature" />
          </div>
        </section>
      )}

      {/* Grade de artigos */}
      <section style={{ padding: "var(--space-7) var(--gutter) var(--space-10)" }}>
        <div className="max-w-content mx-auto">
          <div className="flex items-end justify-between border-b border-stone-300 pb-7 mb-10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-brand-accent m-0">
                Blog High Design
              </p>
              <h2
                className="font-display font-normal text-brand-dark m-0 mt-2"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", letterSpacing: "-0.01em" }}
              >
                {active === ALL ? (
                  <>
                    Mais <em className="italic text-brand-primary">artigos</em>
                  </>
                ) : (
                  active
                )}
              </h2>
            </div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-stone-500 hidden sm:block">
              {gridPosts.length} {gridPosts.length === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridPosts.map((post) => (
                <PostCard key={post.slug} post={post} variant="default" />
              ))}
            </div>
          ) : (
            <p className="font-display text-stone-500" style={{ fontSize: "var(--text-body)" }}>
              Nenhum artigo nesta categoria por enquanto.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
