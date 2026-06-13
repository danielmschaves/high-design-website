import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import PostBody from "@/components/blog/PostBody";
import PostCard from "@/components/blog/PostCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import Footer from "@/components/sections/Footer";
import {
  getAllPosts,
  getPostBySlug,
  getPostIndex,
  getRelatedPosts,
} from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://highdesign.arq.br";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: `${post.title} — High Design Arquitetura`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "High Design Arquitetura",
      locale: "pt_BR",
      type: "article",
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const idx = getPostIndex(slug);
  const prevPost = idx > 0 ? allPosts[idx - 1] : null;
  const nextPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const related = getRelatedPosts(slug, 2);
  const postNumber = String(idx + 1).padStart(2, "0");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.cover}`,
    url: `${siteUrl}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Emanoella Goulart",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "High Design Arquitetura e Urbanismo",
      url: siteUrl,
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogHeader />
      <ReadingProgress />

      <main style={{ paddingTop: "96px" }}>
        {/* Hero do artigo */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "var(--space-9) var(--gutter) var(--space-7)" }}
        >
          {/* Monogram watermark */}
          <div
            className="absolute right-[-60px] top-[-40px] pointer-events-none select-none"
            aria-hidden
            style={{ width: "400px", opacity: 0.04 }}
          >
            <Image
              src="/assets/logos/Ativo 2.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-content mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500 no-underline hover:text-brand-dark transition-colors duration-[420ms] inline-flex items-center gap-3 mb-10"
            >
              <span
                className="inline-block h-px bg-current"
                style={{ width: "14px" }}
              />
              Todos os artigos
            </Link>

            {/* Kicker */}
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-5">
              Nº {postNumber} · {post.category} · {post.readingTime}
            </p>

            {/* Título */}
            <h1
              className="font-display font-normal text-brand-dark m-0 mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.8vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                maxWidth: "22ch",
              }}
            >
              {post.title}
            </h1>

            {/* Byline */}
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500 m-0">
              Emanoella Goulart · High Design Arquitetura
            </p>
          </div>
        </section>

        {/* Capa */}
        <div style={{ padding: "0 var(--gutter)", marginBottom: "var(--space-8)" }}>
          <div className="max-w-content mx-auto">
            <div
              className="hd-tile w-full"
              style={{ aspectRatio: "21/9", maxHeight: "520px" }}
            >
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 1440px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Corpo do artigo */}
        <section style={{ padding: "0 var(--gutter) var(--space-9)" }}>
          <div className="max-w-content mx-auto">
            <PostBody body={post.body} />
          </div>
        </section>

        {/* Separador */}
        <div style={{ padding: "0 var(--gutter)" }}>
          <div className="max-w-content mx-auto">
            <hr className="hd-rule" />
          </div>
        </div>

        {/* Navegação anterior / próximo */}
        {(prevPost || nextPost) && (
          <section style={{ padding: "var(--space-7) var(--gutter)" }}>
            <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-2 no-underline p-6 border border-stone-300 hover:border-brand-accent transition-colors duration-[420ms] ease-brand"
                >
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500">
                    ← Anterior
                  </span>
                  <span
                    className="font-display text-brand-dark group-hover:text-brand-primary transition-colors duration-[420ms]"
                    style={{ fontSize: "var(--text-body)", lineHeight: 1.3 }}
                  >
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-2 no-underline p-6 border border-stone-300 hover:border-brand-accent transition-colors duration-[420ms] ease-brand text-right md:text-right"
                >
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500">
                    Próximo →
                  </span>
                  <span
                    className="font-display text-brand-dark group-hover:text-brand-primary transition-colors duration-[420ms]"
                    style={{ fontSize: "var(--text-body)", lineHeight: 1.3 }}
                  >
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* Artigos relacionados */}
        {related.length > 0 && (
          <section
            style={{
              padding: "var(--space-7) var(--gutter) var(--space-10)",
              background: "var(--color-paper)",
            }}
          >
            <div className="max-w-content mx-auto">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-8">
                Você também pode gostar
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((p, i) => (
                  <PostCard key={p.slug} post={p} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
