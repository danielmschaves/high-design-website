import type { Metadata } from "next";
import Image from "next/image";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogIndexList from "@/components/blog/BlogIndexList";
import Footer from "@/components/sections/Footer";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://highdesign.arq.br";

export const metadata: Metadata = {
  title: "Blog — High Design Arquitetura",
  description:
    "Conteúdo técnico e didático sobre arquitetura, viabilidade de terrenos, orçamento de obra e como escolher bem o escritório certo para o seu projeto.",
  openGraph: {
    title: "Blog — High Design Arquitetura",
    description:
      "Conteúdo técnico e didático sobre arquitetura, viabilidade de terrenos, orçamento de obra e como escolher bem o escritório certo para o seu projeto.",
    url: `${siteUrl}/blog`,
    siteName: "High Design Arquitetura",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/blog` },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <BlogHeader />

      <main style={{ paddingTop: "96px" }}>
        {/* Hero / chapter header */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "var(--space-9) var(--gutter) var(--space-7)" }}
        >
          {/* Monogram watermark */}
          <div
            className="absolute right-0 top-0 pointer-events-none select-none"
            aria-hidden
            style={{ width: "340px", opacity: 0.04 }}
          >
            <Image
              src="/assets/logos/Ativo 2.png"
              alt=""
              width={340}
              height={340}
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3.5 mb-7">
                <span className="inline-block h-px bg-brand-accent" style={{ width: "44px" }} aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
                  Blog · Artigos
                </span>
              </div>

              <h1
                className="font-display font-normal text-brand-dark m-0"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  maxWidth: "16ch",
                }}
              >
                Conteúdo que guia,{" "}
                <em className="italic text-brand-primary">do primeiro traço à obra</em>
              </h1>
              <p className="hd-lead mt-6 mb-0">
                Textos técnicos e didáticos sobre arquitetura, orçamento, terrenos e como construir com
                segurança.
              </p>
            </div>

            {/* Post count */}
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-stone-500 md:text-right leading-[1.9]">
              <strong
                className="block font-display font-normal text-brand-dark"
                style={{ fontSize: "3rem", letterSpacing: "-0.02em" }}
              >
                {String(posts.length).padStart(2, "0")}
              </strong>
              {posts.length === 1 ? "artigo publicado" : "artigos publicados"}
            </div>
          </div>
        </section>

        {/* Lista filtrável */}
        <BlogIndexList posts={posts} />
      </main>

      <Footer />
    </>
  );
}
