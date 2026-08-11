import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/sections/Footer";
import { services } from "@/lib/services";
import {
  abs,
  graph,
  jsonLdScript,
  breadcrumbSchema,
  webPageSchema,
  ORG_ID,
  ORG_NAME,
  ORG_SHORT_NAME,
} from "@/lib/seo";

const pageUrl = abs("/servicos");

const description =
  "Os sete serviços da High Design Arquitetura e Urbanismo, da análise do terreno à entrega das chaves: consultoria de terreno e de construção, projeto arquitetônico, orçamento, gestão de obra, imóvel pronto e reforma.";

export const metadata: Metadata = {
  title: "Serviços",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Serviços — ${ORG_NAME}`,
    description,
    url: pageUrl,
    type: "website",
    locale: "pt_BR",
  },
};

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
];

export default function ServicosIndex() {
  const pageGraph = graph([
    webPageSchema({
      url: pageUrl,
      name: `Serviços — ${ORG_SHORT_NAME}`,
      description,
      type: "CollectionPage",
      crumbs,
    }),
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      numberOfItems: services.length,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.nome,
        url: abs(`/servicos/${s.slug}`),
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${pageUrl}#catalog`,
      name: "Esteira de serviços High Design",
      provider: { "@id": ORG_ID },
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${abs(`/servicos/${s.slug}`)}#service`,
          name: s.nome,
          description: s.descricao,
          url: abs(`/servicos/${s.slug}`),
        },
      })),
    },
    breadcrumbSchema(crumbs, pageUrl),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(pageGraph) }}
      />

      <BlogHeader />

      <main style={{ paddingTop: "96px" }}>
        <section style={{ padding: "var(--space-9) var(--gutter) var(--space-8)" }}>
          <div className="max-w-content mx-auto">
            <nav
              aria-label="Trilha de navegação"
              className="flex items-center flex-wrap gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 mb-9"
            >
              <Link
                href="/"
                className="no-underline text-stone-500 hover:text-brand-accent transition-colors duration-[420ms]"
              >
                Início
              </Link>
              <span className="inline-block h-px bg-stone-300" style={{ width: "16px" }} aria-hidden />
              <span className="text-brand-dark">Serviços</span>
            </nav>

            <div className="flex items-center gap-3.5 mb-7">
              <span className="inline-block h-px bg-brand-accent" style={{ width: "44px" }} aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
                Esteira de serviços · 07 etapas
              </span>
            </div>

            <h1
              className="font-display font-light text-brand-dark m-0"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                maxWidth: "17ch",
              }}
            >
              Do terreno à entrega{" "}
              <em className="italic text-brand-primary">das chaves</em>
            </h1>

            <p className="hd-lead mt-7 mb-0">
              Cada etapa da jornada de construção tem um serviço próprio, com entregáveis
              definidos e um ponto de decisão no fim. Podem ser contratados isoladamente ou em
              sequência, conforme o momento do seu projeto.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 var(--gutter) var(--space-10)" }}>
          <div className="max-w-content mx-auto">
            <ol className="list-none p-0 m-0 border-t border-stone-300">
              {services.map((s, i) => (
                <li key={s.slug} className="border-b border-stone-300">
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-3 md:gap-10 items-start no-underline py-9"
                  >
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand-accent pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block max-w-[62ch]">
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-stone-500 block mb-3">
                        {s.sigla}
                      </span>
                      <h2
                        className="font-display font-normal text-brand-dark group-hover:text-brand-primary transition-colors duration-[420ms] leading-[1.2] m-0"
                        style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", letterSpacing: "-0.01em" }}
                      >
                        {s.nome}
                      </h2>
                      <span className="block font-display italic text-brand-primary mt-3" style={{ fontSize: "1rem" }}>
                        {s.tagline}
                      </span>
                      <span className="block text-[14px] text-stone-500 leading-[1.7] mt-4">
                        {s.descricao}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent whitespace-nowrap pt-1 md:text-right">
                      Ver detalhes →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className="mt-14 text-center">
              <Link href="/#contato" className="hd-btn no-underline">
                Não sabe por onde começar? Fale conosco <span className="arrow" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
