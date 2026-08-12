import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import PostBody from "@/components/blog/PostBody";
import PostCard from "@/components/blog/PostCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import AuthorCard from "@/components/blog/AuthorCard";
import ArticleCTA from "@/components/blog/ArticleCTA";
import Footer from "@/components/sections/Footer";
import {
  getAllPosts,
  getPostBySlug,
  getPostIndex,
  getPostWordCount,
  getRelatedPosts,
} from "@/lib/blog";
import {
  siteUrl,
  abs,
  graph,
  jsonLdScript,
  breadcrumbSchema,
  ORG_ID,
  ORG_SHORT_NAME,
  PERSON_ID,
  PERSON_NAME,
  WEBSITE_ID,
} from "@/lib/seo";

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
    // The layout's title template already appends the brand, so the raw title
    // is passed here — appending it again would truncate in the SERP.
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: PERSON_NAME, url: abs("/sobre") }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: ORG_SHORT_NAME,
      locale: "pt_BR",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [abs("/sobre")],
      section: post.category,
      tags: post.keywords,
      // Cover art is portrait editorial photography, so the generated 1200×630
      // card is used for sharing instead — see app/opengraph-image.tsx.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"],
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

  const url = `${siteUrl}/blog/${post.slug}`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const pageGraph = graph([
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      // headline is capped at 110 chars by Google; longer values are ignored
      // outright, so a long title is truncated rather than silently dropped.
      headline: post.title.length > 110 ? `${post.title.slice(0, 107)}…` : post.title,
      name: post.title,
      description: post.description,
      abstract: post.excerpt,
      image: [abs(post.cover)],
      url,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      // Linking author by @id merges every article's authorship into the one
      // Person entity, instead of creating a new author per post.
      author: { "@id": PERSON_ID },
      creator: { "@id": PERSON_ID },
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": `${siteUrl}/blog#blog` },
      articleSection: post.category,
      keywords: post.keywords,
      wordCount: getPostWordCount(post),
      timeRequired: `PT${post.readingTime.replace(/\D/g, "") || "6"}M`,
      inLanguage: "pt-BR",
      about: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: post.title,
      description: post.description,
      isPartOf: { "@id": WEBSITE_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: abs(post.cover) },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "pt-BR",
    },
    breadcrumbSchema(crumbs, url),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(pageGraph) }}
      />

      <BlogHeader />
      <ReadingProgress />

      <main style={{ paddingTop: "96px" }}>
        {/* Hero do artigo — editorial centrado */}
        <header
          className="mx-auto text-center"
          style={{ maxWidth: "880px", padding: "var(--space-9) var(--gutter) var(--space-7)" }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center flex-wrap gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 mb-8">
            <Link href="/" className="no-underline text-stone-500 hover:text-brand-accent transition-colors duration-[420ms]">
              High Design
            </Link>
            <span className="inline-block h-px bg-stone-300" style={{ width: "16px" }} aria-hidden />
            <Link href="/blog" className="no-underline text-stone-500 hover:text-brand-accent transition-colors duration-[420ms]">
              Blog
            </Link>
            <span className="inline-block h-px bg-stone-300" style={{ width: "16px" }} aria-hidden />
            <span>{post.category}</span>
          </nav>

          {/* Category chip */}
          <span className="hd-article-cat mb-7">{post.category}</span>

          {/* Título */}
          <h1
            className="font-display font-normal text-brand-dark mx-auto m-0 mb-7"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: "22ch",
            }}
          >
            {post.title}
          </h1>

          {/* Standfirst */}
          <p
            className="font-display font-normal text-stone-500 mx-auto m-0"
            style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", lineHeight: 1.6, maxWidth: "58ch" }}
          >
            {post.description}
          </p>
        </header>

        {/* Meta bar */}
        <div style={{ padding: "0 var(--gutter)" }}>
          <div
            className="mx-auto flex items-center justify-center flex-wrap gap-x-7 gap-y-4 border-y border-stone-300"
            style={{ maxWidth: "880px", padding: "var(--space-5) 0" }}
          >
            {/* Byline links to the author's entity page — the internal link
                that ties every article to the Emanoella Goulart entity. */}
            <Link href="/sobre" className="flex items-center gap-3 no-underline group">
              <span className="hd-avatar" style={{ width: "44px", height: "44px", fontSize: "14px" }} aria-hidden>
                EG
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[13px] text-brand-dark font-medium group-hover:text-brand-primary transition-colors duration-[420ms]">
                  {PERSON_NAME}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-stone-500 mt-[2px]">
                  Arquiteta · High Design
                </span>
              </span>
            </Link>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" aria-hidden />
            <time
              dateTime={post.publishedAt}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-500"
            >
              {post.date}
            </time>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" aria-hidden />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-500">
              {post.readingTime} de leitura
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" aria-hidden />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-500">{post.kicker}</span>
          </div>
        </div>

        {/* Capa */}
        <div style={{ padding: "var(--space-7) var(--gutter) 0", marginBottom: "var(--space-8)" }}>
          <div className="max-w-content mx-auto">
            <div className="hd-tile w-full" style={{ aspectRatio: "16/8", maxHeight: "560px" }}>
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 1180px"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex justify-between gap-5 mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-stone-500">
              <span>{post.kicker}</span>
              <span>Fig. 01</span>
            </div>
          </div>
        </div>

        {/* Corpo do artigo */}
        <section style={{ padding: "0 var(--gutter) var(--space-8)" }}>
          <div className="max-w-content mx-auto">
            <PostBody body={post.body} />
          </div>
        </section>

        {/* Sobre a autora */}
        <section style={{ padding: "0 var(--gutter) var(--space-9)" }}>
          <div className="mx-auto" style={{ maxWidth: "720px" }}>
            <AuthorCard />
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

        {/* CTA band */}
        <section style={{ padding: "var(--space-9) var(--gutter) var(--space-10)" }}>
          <div className="max-w-content mx-auto">
            <ArticleCTA />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
