import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/sections/Footer";
import { getAllPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import {
  abs,
  breadcrumbSchema,
  graph,
  jsonLdScript,
  webPageSchema,
  CONTACT_EMAIL,
  ORG_NAME,
  PERSON_ID,
  PERSON_NAME,
  PERSON_DESCRIPTION,
} from "@/lib/seo";

const pageUrl = abs("/sobre");

/**
 * The dedicated entity page for Emanoella Goulart.
 *
 * A person only ranks for their own name when a single URL is unambiguously
 * *about* them — a mention in a footer or an author byline is not enough.
 * This page is that URL: it carries the Person node's `mainEntityOfPage`, is
 * typed as a ProfilePage, and links out to everything she is responsible for
 * (services, articles) so the association is crawlable rather than implied.
 */
export const metadata: Metadata = {
  title: `${PERSON_NAME} — Arquiteta e Urbanista`,
  description:
    "Emanoella Goulart é arquiteta e urbanista à frente da High Design Arquitetura e Urbanismo. Conduz projetos residenciais e comerciais de médio a alto padrão com método, técnica e acolhimento — do primeiro traço à obra construída.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${PERSON_NAME} — Arquiteta e Urbanista | ${ORG_NAME}`,
    description: PERSON_DESCRIPTION,
    url: pageUrl,
    type: "profile",
    locale: "pt_BR",
  },
};

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Emanoella Goulart", path: "/sobre" },
];

const method = [
  {
    code: "01 · MÉTODO",
    title: "Um processo claro em cada etapa",
    text: "Cada serviço tem entregáveis definidos e um ponto de decisão no fim. O cliente sempre sabe em que fase está, o que já foi resolvido e o que vem a seguir.",
  },
  {
    code: "02 · TÉCNICA",
    title: "Rigor e responsabilidade projetual",
    text: "Viabilidade legal e ambiental, compatibilização entre disciplinas e orçamento com quantitativos reais. O projeto é conferido antes de virar canteiro.",
  },
  {
    code: "03 · ACOLHIMENTO",
    title: "Uma jornada emocionalmente tranquila",
    text: "Construir é uma decisão de vida, não apenas uma decisão técnica. A condução é feita com escuta, clareza e direção — do primeiro traço à entrega das chaves.",
  },
];

export default function SobrePage() {
  const posts = getAllPosts();

  const pageGraph = graph([
    {
      ...webPageSchema({
        url: pageUrl,
        name: `${PERSON_NAME} — Arquiteta e Urbanista`,
        description: PERSON_DESCRIPTION,
        type: "ProfilePage",
        crumbs,
      }),
      // `mainEntity` is the signal that says "this page IS this person", as
      // opposed to merely mentioning them. It overrides the default `about`
      // (the organization) that webPageSchema sets for ordinary pages.
      mainEntity: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
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
              <span className="text-brand-dark">Emanoella Goulart</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 md:gap-[72px] items-start">
              <div>
                <div className="flex items-center gap-3.5 mb-7">
                  <span className="inline-block h-px bg-brand-accent" style={{ width: "44px" }} aria-hidden />
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
                    Arquiteta e urbanista · Responsável técnica
                  </span>
                </div>

                <h1
                  className="font-display font-light text-brand-dark m-0"
                  style={{
                    fontSize: "clamp(2.25rem, 5vw, 4rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Emanoella Goulart
                </h1>

                <p
                  className="font-display font-light text-brand-primary mt-5 mb-0"
                  style={{ fontSize: "clamp(1.15rem, 2vw, 1.6rem)", lineHeight: 1.35 }}
                >
                  Arquiteta e urbanista à frente da{" "}
                  <em className="italic">High Design Arquitetura e Urbanismo</em>.
                </p>

                <p className="text-stone-500 leading-[1.8] mt-8 mb-5 max-w-[56ch]">
                  Emanoella Goulart conduz projetos residenciais e comerciais de médio a alto
                  padrão com{" "}
                  <strong className="text-brand-dark font-bold">método, técnica e acolhimento</strong>
                  . É responsável técnica pelos projetos da High Design e acompanha o cliente da
                  primeira decisão — muitas vezes antes mesmo da compra do terreno — até a
                  entrega das chaves.
                </p>

                <p className="text-stone-500 leading-[1.8] m-0 max-w-[56ch]">
                  Seu princípio de trabalho é a{" "}
                  <strong className="text-brand-dark font-bold">exequibilidade</strong>: todo
                  projeto nasce para ser construído. Nada é desenhado para ficar no papel, e cada
                  solução é alinhada ao orçamento real, ao terreno e ao modo de viver de quem vai
                  ocupar o espaço.
                </p>

                <div className="flex items-center gap-4 flex-wrap mt-10">
                  <Link href="/#contato" className="hd-btn no-underline">
                    Fale com Emanoella <span className="arrow" />
                  </Link>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hd-btn hd-btn--ghost no-underline"
                  >
                    {CONTACT_EMAIL} <span className="arrow" />
                  </a>
                </div>
              </div>

              {/* Identity card */}
              <aside
                className="p-9 md:p-10"
                style={{ background: "var(--color-brand-secondary)" }}
              >
                <div
                  className="hd-avatar mb-7"
                  style={{ width: "84px", height: "84px", fontSize: "24px" }}
                  aria-hidden
                >
                  EG
                </div>

                <dl className="m-0 flex flex-col gap-6">
                  {[
                    { k: "Nome", v: "Emanoella Goulart" },
                    { k: "Atuação", v: "Arquitetura e urbanismo" },
                    { k: "Escritório", v: "High Design Arquitetura e Urbanismo" },
                    { k: "Segmento", v: "Residencial e comercial · médio a alto padrão" },
                    { k: "Atendimento", v: "Santa Catarina e demais estados do Brasil" },
                  ].map((row) => (
                    <div key={row.k}>
                      <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-1.5">
                        {row.k}
                      </dt>
                      <dd className="m-0 font-display text-[15px] text-brand-dark leading-[1.5]">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-accent mb-1.5">
                      E-mail
                    </dt>
                    <dd className="m-0">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-display text-[15px] text-brand-dark no-underline border-b border-brand-accent pb-0.5 hover:text-brand-primary transition-colors duration-300"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Como Emanoella trabalha ────────────────────────────── */}
        <section
          style={{ padding: "var(--space-9) var(--gutter)", background: "var(--color-paper)" }}
          aria-labelledby="metodo-heading"
        >
          <div className="max-w-content mx-auto">
            <div className="hd-chapter">
              <div className="num">01 · Como trabalha</div>
              <div>
                <h2 id="metodo-heading">
                  Método onde há improviso,
                  <br />
                  <em>clareza onde há confusão</em>
                </h2>
                <p>
                  A construção civil no Brasil ainda opera, em grande parte, na informalidade —
                  projetos que nunca saem do papel, obras que param pela metade, retrabalhos que
                  consomem orçamentos inteiros. A High Design nasceu para fazer diferente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
              {method.map((m) => (
                <article
                  key={m.code}
                  className="p-8 bg-stone-50 border border-stone-300 transition-colors duration-[420ms] ease-brand hover:bg-brand-secondary"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent m-0">
                    {m.code}
                  </p>
                  <h3 className="mt-4 mb-3 font-display text-[1.15rem] font-bold tracking-[0.005em] text-brand-dark leading-[1.3]">
                    {m.title}
                  </h3>
                  <p className="m-0 text-[13.5px] text-stone-500 leading-[1.65]">{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Serviços sob responsabilidade técnica ──────────────── */}
        <section
          style={{ padding: "var(--space-9) var(--gutter)" }}
          aria-labelledby="atuacao-heading"
        >
          <div className="max-w-content mx-auto">
            <div className="hd-chapter">
              <div className="num">02 · Áreas de atuação</div>
              <div>
                <h2 id="atuacao-heading">
                  Os sete serviços que
                  <br />
                  <em>Emanoella conduz</em>
                </h2>
                <p>
                  Cada etapa da jornada de construção tem um serviço próprio, com entregáveis
                  definidos. Podem ser contratados isoladamente ou em sequência, conforme o
                  momento do seu projeto.
                </p>
              </div>
            </div>

            <ol className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
              {services.map((s, i) => (
                <li
                  key={s.sigla}
                  className="p-8 bg-paper border border-stone-300 transition-colors duration-[420ms] ease-brand hover:bg-brand-secondary"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-accent m-0">
                    {String(i + 1).padStart(2, "0")} · {s.sigla}
                  </p>
                  <h3 className="mt-4 mb-2 font-display text-[1.05rem] font-bold text-brand-dark leading-[1.3]">
                    {s.nome}
                  </h3>
                  <p className="m-0 text-[13.5px] text-stone-500 leading-[1.6]">{s.tagline}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Link href="/#servicos" className="hd-btn hd-btn--link no-underline">
                Ver os entregáveis de cada serviço <span className="arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Artigos assinados ──────────────────────────────────── */}
        <section
          style={{ padding: "var(--space-9) var(--gutter)", background: "var(--color-paper)" }}
          aria-labelledby="artigos-heading"
        >
          <div className="max-w-content mx-auto">
            <div className="hd-chapter">
              <div className="num">03 · Publicações</div>
              <div>
                <h2 id="artigos-heading">
                  Artigos assinados por
                  <br />
                  <em>Emanoella Goulart</em>
                </h2>
                <p>
                  Conteúdo técnico e didático sobre viabilidade de terrenos, orçamento de obra,
                  compatibilização de projetos e como escolher bem o escritório certo.
                </p>
              </div>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col">
              {posts.map((post) => (
                <li key={post.slug} className="border-t border-stone-300 last:border-b">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[auto_1fr] gap-3 md:gap-10 items-baseline no-underline py-7"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 md:w-[120px] block">
                      {post.date}
                    </span>
                    <span className="block">
                      <span
                        className="block font-display text-brand-dark group-hover:text-brand-primary transition-colors duration-[420ms] leading-[1.3]"
                        style={{ fontSize: "1.15rem" }}
                      >
                        {post.title}
                      </span>
                      <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-brand-accent mt-2.5">
                        {post.category} · {post.readingTime}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/blog" className="hd-btn hd-btn--link no-underline">
                Ver todos os artigos <span className="arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Fechamento ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-brand-dark"
          style={{ padding: "var(--space-9) var(--gutter)" }}
        >
          <Image
            src="/assets/logos/Ativo 2.png"
            alt=""
            aria-hidden
            width={420}
            height={420}
            className="absolute pointer-events-none select-none"
            style={{
              right: "-60px",
              bottom: "-60px",
              width: "380px",
              height: "auto",
              opacity: 0.06,
              filter: "brightness(0) invert(1)",
            }}
          />
          <div className="relative max-w-content mx-auto text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent mb-7">
              Próximo passo
            </p>
            <p
              className="font-display font-light italic text-brand-white leading-[1.25] m-0 mx-auto max-w-[24ch]"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)", letterSpacing: "-0.01em" }}
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
