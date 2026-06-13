import type { Metadata } from "next";
import Image from "next/image";
import BlogHeader from "@/components/blog/BlogHeader";
import PostCard from "@/components/blog/PostCard";
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
  const [featured, ...rest] = posts;

  return (
    <>
      <BlogHeader />

      <main style={{ paddingTop: "96px" }}>
        {/* Hero / chapter header */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "var(--space-9) var(--gutter) var(--space-8)" }}
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

          <div className="max-w-content mx-auto">
            <div className="hd-chapter">
              <div className="num">Blog · Artigos</div>
              <div>
                <h1
                  className="font-display font-normal text-brand-dark m-0"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.01em", maxWidth: "20ch" }}
                >
                  Conteúdo que guia,
                  <br />
                  <em className="italic text-brand-primary">do primeiro traço à obra</em>
                </h1>
                <p className="hd-lead mt-4 mb-0">
                  Textos técnicos e didáticos sobre arquitetura, orçamento, terrenos e como construir com segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artigo em destaque */}
        <section style={{ padding: "0 var(--gutter) var(--space-8)" }}>
          <div className="max-w-content mx-auto">
            <PostCard post={featured} variant="feature" />
          </div>
        </section>

        {/* Demais artigos */}
        {rest.length > 0 && (
          <section
            style={{ padding: "var(--space-7) var(--gutter) var(--space-10)" }}
          >
            <div className="max-w-content mx-auto">
              <hr className="hd-rule mb-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rest.map((post, i) => (
                  <PostCard key={post.slug} post={post} variant="default" />
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
