import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/sections/Footer";
import PostCard from "@/components/blog/PostCard";
import { services } from "@/lib/services";
import { getPostBySlug } from "@/lib/blog";
import { faqs } from "@/lib/faq";
import {
  abs,
  graph,
  jsonLdScript,
  breadcrumbSchema,
  webPageSchema,
  ORG_ID,
  ORG_NAME,
  PERSON_ID,
  PERSON_NAME,
} from "@/lib/seo";

/**
 * One indexable page per service.
 *
 * The homepage accordion already carried this copy, but it was locked inside a
 * single URL competing on brand terms — so nothing on the site could rank for
 * commercial queries like "orçamento detalhado de obra" or "viabilidade de
 * terreno". Each service now has its own URL, canonical, breadcrumb and
 * `Service` node, and pulls in the FAQ entries and articles that already
 * discuss it. Every word here comes from lib/services.ts, lib/faq.ts or
 * lib/blog.ts — no new claims are introduced.
 */

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const url = abs(`/servicos/${service.slug}`);
  return {
    title: service.nome,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.nome} | ${ORG_NAME}`,
      description: service.metaDescription,
      url,
      type: "website",
      locale: "pt_BR",
    },
  };
}

/** FAQ entries explicitly assigned to this service in lib/services.ts. */
function relatedFaqs(questions: string[]) {
  return questions
    .map((q) => faqs.find((f) => f.question === q))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const others = services.filter((s) => s.slug !== slug);
  const posts = service.relatedPosts
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const serviceFaqs = relatedFaqs(service.faqQuestions);

  const url = abs(`/servicos/${service.slug}`);
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: service.nome, path: `/servicos/${service.slug}` },
  ];

  const pageGraph = graph([
    webPageSchema({
      url,
      name: service.nome,
      description: service.metaDescription,
      crumbs,
    }),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.nome,
      description: service.descricao,
      serviceType: service.nome,
      url,
      provider: { "@id": ORG_ID },
      // The architect is the named professional performing the work — a
      // credibility signal for a regulated profession.
      areaServed: { "@type": "State", name: "Santa Catarina" },
      inLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `O que está incluso — ${service.nome}`,
        itemListElement: service.entregaveis.map((e) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: e },
        })),
      },
    },
    breadcrumbSchema(crumbs, url),
    // No FAQPage node here on purpose. The homepage is the canonical FAQPage;
    // re-emitting the same questions from a service URL would put identical
    // Q&A markup on two pages. The questions still render as visible content
    // below, which is where they help the reader.
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(pageGraph) }}
      />

      <BlogHeader />

      <main style={{ paddingTop: "96px" }}>
        {/* ── Hero ───────────────────────────────────────────────── */}
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
              <Link
                href="/servicos"
                className="no-underline text-stone-500 hover:text-brand-accent transition-colors duration-[420ms]"
              >
                Serviços
              </Link>
              <span className="inline-block h-px bg-stone-300" style={{ width: "16px" }} aria-hidden />
              <span className="text-brand-dark">{service.sigla}</span>
            </nav>

            <div className="flex items-center gap-3.5 mb-7">
              <span className="inline-block h-px bg-brand-accent" style={{ width: "44px" }} aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
                {String(idx + 1).padStart(2, "0")} · {service.sigla}
              </span>
            </div>

            <h1
              className="font-display font-light text-brand-dark m-0"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                maxWidth: "20ch",
              }}
            >
              {service.nome}
            </h1>

            <p
              className="font-display font-light italic text-brand-primary mt-6 mb-0"
              style={{ fontSize: "clamp(1.15rem, 2vw, 1.6rem)", lineHeight: 1.35 }}
            >
              {service.tagline}
            </p>

            <p className="text-stone-500 leading-[1.8] mt-8 mb-0 max-w-[62ch]">
              {service.descricao}
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-10">
              <Link href="/#contato" className="hd-btn no-underline">
                Iniciar este serviço <span className="arrow" />
              </Link>
              <Link href="/servicos" className="hd-btn hd-btn--ghost no-underline">
                Ver todos os serviços <span className="arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Entregáveis ────────────────────────────────────────── */}
        <section
          style={{ padding: "var(--space-9) var(--gutter)", background: "var(--color-paper)" }}
          aria-labelledby="entregaveis-heading"
        >
          <div className="max-w-content mx-auto">
            <div className="hd-chapter">
              <div className="num">O que entregamos</div>
              <div>
                <h2 id="entregaveis-heading">
                  O que está incluso
                  <br />
                  <em>neste serviço</em>
                </h2>
              </div>
            </div>

            <ol className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 gap-[2px]">
              {service.entregaveis.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-6 p-8 bg-stone-50 border border-stone-300 transition-colors duration-[420ms] ease-brand hover:bg-brand-secondary"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[15px] text-brand-dark leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone-500 mt-8 m-0">
              Responsável técnica ·{" "}
              <Link
                href="/sobre"
                className="text-brand-accent no-underline border-b border-brand-accent pb-0.5 hover:text-brand-primary transition-colors duration-[420ms]"
              >
                {PERSON_NAME}
              </Link>
            </p>
          </div>
        </section>

        {/* ── FAQ (only when entries actually mention this service) ── */}
        {serviceFaqs.length > 0 && (
          <section
            style={{ padding: "var(--space-9) var(--gutter)" }}
            aria-labelledby="servico-faq-heading"
          >
            <div className="max-w-content mx-auto">
              <div className="hd-chapter">
                <div className="num">Perguntas frequentes</div>
                <div>
                  <h2 id="servico-faq-heading">
                    Dúvidas sobre
                    <br />
                    <em>{service.sigla.toLowerCase()}</em>
                  </h2>
                </div>
              </div>

              <dl className="m-0">
                {serviceFaqs.map((f) => (
                  <div key={f.question} className="border-b border-stone-300 py-7">
                    <dt className="font-display text-brand-dark leading-[1.35] m-0 mb-4" style={{ fontSize: "1.1rem" }}>
                      {f.question}
                    </dt>
                    <dd className="m-0 text-stone-500 leading-[1.8] max-w-[68ch]" style={{ fontSize: "0.95rem" }}>
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* ── Artigos relacionados ───────────────────────────────── */}
        {posts.length > 0 && (
          <section
            style={{ padding: "var(--space-9) var(--gutter)", background: "var(--color-paper)" }}
            aria-labelledby="artigos-servico-heading"
          >
            <div className="max-w-content mx-auto">
              <div className="hd-chapter">
                <div className="num">Leitura relacionada</div>
                <div>
                  <h2 id="artigos-servico-heading">
                    Para entender
                    <br />
                    <em>antes de decidir</em>
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Outros serviços ────────────────────────────────────── */}
        <section
          style={{ padding: "var(--space-9) var(--gutter)" }}
          aria-labelledby="outros-servicos-heading"
        >
          <div className="max-w-content mx-auto">
            <h2
              id="outros-servicos-heading"
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent font-normal m-0 mb-8"
            >
              Outros serviços da esteira
            </h2>
            <ul className="list-none p-0 m-0 border-t border-stone-300">
              {others.map((s) => (
                <li key={s.slug} className="border-b border-stone-300">
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-8 items-baseline no-underline py-6"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent">
                      {s.sigla}
                    </span>
                    <span>
                      <span className="block font-display text-brand-dark group-hover:text-brand-primary transition-colors duration-[420ms] leading-[1.3]" style={{ fontSize: "1.1rem" }}>
                        {s.nome}
                      </span>
                      <span className="block text-[13.5px] text-stone-500 mt-1.5">{s.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section
          className="bg-brand-dark"
          style={{ padding: "var(--space-9) var(--gutter)" }}
        >
          <div className="max-w-content mx-auto text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent mb-7">
              Próximo passo
            </p>
            <p
              className="font-display font-light italic text-brand-white leading-[1.25] m-0 mx-auto max-w-[24ch]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)", letterSpacing: "-0.01em" }}
            >
              Conte sobre o seu projeto. A primeira conversa é uma escuta, sem compromisso.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-11">
              <Link href="/#contato" className="hd-btn no-underline">
                Iniciar projeto <span className="arrow" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
