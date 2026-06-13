import Image from "next/image";
import Link from "next/link";
import { getAllPosts, type BlogPost } from "@/lib/blog";

interface PostCardProps {
  post: BlogPost;
  variant?: "default" | "feature";
}

export default function PostCard({ post, variant = "default" }: PostCardProps) {
  const postNumber = String(getAllPosts().findIndex((p) => p.slug === post.slug) + 1).padStart(2, "0");

  if (variant === "feature") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-0 no-underline border border-stone-300 hover:border-brand-accent transition-colors duration-[420ms] ease-brand"
      >
        {/* Capa */}
        <div className="hd-tile" style={{ aspectRatio: "16/10", minHeight: "280px" }}>
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-[900ms] ease-brand group-hover:scale-[1.04]"
            priority
          />
        </div>
        {/* Conteúdo */}
        <div className="flex flex-col justify-between p-8 md:p-10 bg-paper">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-4">
              Nº {postNumber} · {post.category} · {post.readingTime}
            </p>
            <h2
              className="font-display font-normal text-brand-dark mb-5 m-0"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            >
              {post.title}
            </h2>
            <p className="font-display text-stone-500 leading-[1.65] m-0" style={{ fontSize: "var(--text-body)" }}>
              {post.excerpt}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-brand-dark transition-colors duration-[420ms] group-hover:text-brand-accent">
            Ler artigo
            <span className="hd-arrow-inline" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col no-underline border border-stone-300 hover:border-brand-accent transition-colors duration-[420ms] ease-brand bg-paper h-full"
    >
      {/* Capa */}
      <div className="hd-tile" style={{ aspectRatio: "16/9" }}>
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-[900ms] ease-brand group-hover:scale-[1.04]"
        />
      </div>
      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-3">
          Nº {postNumber} · {post.category} · {post.readingTime}
        </p>
        <h3
          className="font-display font-normal text-brand-dark mb-3 m-0 flex-1"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.25, letterSpacing: "-0.005em" }}
        >
          {post.title}
        </h3>
        <p className="font-display text-stone-500 text-[13px] leading-[1.6] m-0 mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-brand-dark transition-colors duration-[420ms] group-hover:text-brand-accent">
          Ler artigo
          <span className="hd-arrow-inline" />
        </div>
      </div>
    </Link>
  );
}
