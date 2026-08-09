/**
 * Central SEO configuration and structured-data builders.
 *
 * Everything Google needs to resolve "High Design Arquitetura" and "Emanoella
 * Goulart" as *entities* — rather than as loose keyword matches — is defined
 * here once and reused across every route.
 *
 * The JSON-LD strategy is a linked `@graph`: a small number of nodes with
 * stable `@id`s that reference each other (Organization ← Person ← WebSite ←
 * WebPage). Repeating the same `@id` on every page is what lets a crawler
 * merge signals from all pages into a single entity, instead of reading each
 * page as an unrelated business listing.
 */

import { services } from "./services";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://highdesign.arq.br"
).replace(/\/$/, "");

export const ORG_NAME = "High Design Arquitetura e Urbanismo";
export const ORG_SHORT_NAME = "High Design Arquitetura";
export const ORG_LEGAL_SUFFIX = "High Design ARQ.®";
export const PERSON_NAME = "Emanoella Goulart";
export const CONTACT_EMAIL = "contato@highdesign.arq.br";

/** Stable node identifiers — never change these once indexed. */
export const ORG_ID = `${siteUrl}/#organization`;
export const PERSON_ID = `${siteUrl}/#emanoella-goulart`;
export const WEBSITE_ID = `${siteUrl}/#website`;

export const ORG_DESCRIPTION =
  "Escritório de arquitetura e urbanismo especializado em projetos residenciais e comerciais de médio a alto padrão. Do terreno à entrega das chaves, com método, técnica e acolhimento — para que cada projeto vire obra construída.";

export const PERSON_DESCRIPTION =
  "Arquiteta e urbanista à frente da High Design Arquitetura e Urbanismo. Conduz projetos residenciais e comerciais de médio a alto padrão com método, técnica e acolhimento — do primeiro traço à obra construída.";

export const DEFAULT_OG_ALT =
  "High Design Arquitetura e Urbanismo — arquitetura que guia, do primeiro traço à obra";

/**
 * Search terms this site legitimately competes for. Kept honest: brand terms,
 * the founder's name, and the services actually offered. The `keywords` meta
 * tag carries little direct ranking weight today, but the same vocabulary is
 * reused in copy, headings and `knowsAbout`, where it does matter.
 */
export const SITE_KEYWORDS = [
  "High Design Arquitetura",
  "High Design Arquitetura e Urbanismo",
  "High Design ARQ",
  "Emanoella Goulart",
  "Emanoella Goulart arquiteta",
  "arquiteta Santa Catarina",
  "escritório de arquitetura Santa Catarina",
  "projeto arquitetônico residencial",
  "projeto arquitetônico comercial",
  "consultoria de aquisição de terreno",
  "viabilidade de terreno",
  "orçamento detalhado de obra",
  "gestão de obra",
  "compatibilização de projetos",
  "projeto de reforma",
  "arquitetura de alto padrão",
];

/** Topical authority signals, shared by the organization and person nodes. */
export const KNOWS_ABOUT = [
  "Arquitetura residencial",
  "Arquitetura comercial",
  "Urbanismo",
  "Viabilidade de terreno",
  "Estudo de viabilidade financeira de obra",
  "Projeto executivo",
  "Compatibilização de projetos",
  "Orçamento de obra",
  "Gestão e fiscalização de obra",
  "Reforma e retrofit",
];

/** Social profiles are env-gated so we never publish a URL that 404s. */
export function socialProfiles(): string[] {
  return [
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ].filter((u): u is string => Boolean(u && u.trim()));
}

/**
 * WhatsApp number, stored digits-only, rendered as E.164 for schema.org.
 * Returns undefined when unset so we never emit an empty `telephone`.
 */
export function telephone(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return raw ? `+${raw}` : undefined;
}

/** Absolute URL helper — schema.org and OG tags both require absolute URLs. */
export const abs = (path: string): string =>
  path.startsWith("http")
    ? path
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

const LOGO_ID = `${siteUrl}/#logo`;

const logoNode = () => ({
  "@type": "ImageObject" as const,
  "@id": LOGO_ID,
  url: abs("/assets/logos/Ativo 1.png"),
  contentUrl: abs("/assets/logos/Ativo 1.png"),
  width: 2174,
  height: 620,
  caption: ORG_NAME,
});

/**
 * The organization node. Typed as both Organization and ProfessionalService so
 * it can feed a knowledge panel *and* qualify for local-business treatment.
 *
 * No street address is asserted: publishing a fabricated one would poison the
 * very local-SEO signal it is meant to improve. Add a real `address` here once
 * it exists — it pairs with a Google Business Profile (see README).
 */
export function organizationSchema() {
  const tel = telephone();
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: ORG_NAME,
    alternateName: [ORG_SHORT_NAME, ORG_LEGAL_SUFFIX, "High Design ARQ."],
    legalName: ORG_NAME,
    description: ORG_DESCRIPTION,
    slogan: "Arquitetura que guia, do primeiro traço à obra.",
    url: siteUrl,
    logo: logoNode(),
    image: { "@id": LOGO_ID },
    email: CONTACT_EMAIL,
    ...(tel ? { telephone: tel } : {}),
    priceRange: "$$-$$$",
    knowsLanguage: "pt-BR",
    areaServed: [
      { "@type": "State", name: "Santa Catarina" },
      { "@type": "Country", name: "Brasil" },
    ],
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsAbout: KNOWS_ABOUT,
    serviceType: services.map((s) => s.nome),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Esteira de serviços High Design",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.nome,
          description: s.descricao,
          serviceType: s.nome,
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "State", name: "Santa Catarina" },
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      ...(tel ? { telephone: tel } : {}),
      availableLanguage: ["Portuguese", "pt-BR"],
      areaServed: "BR",
    },
    sameAs: socialProfiles(),
  };
}

/**
 * The person node — the primary asset for the "Emanoella Goulart" query.
 * `mainEntityOfPage` points at /sobre, telling Google which URL *is* this
 * person rather than merely mentioning them.
 */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    givenName: "Emanoella",
    familyName: "Goulart",
    jobTitle: "Arquiteta e Urbanista",
    description: PERSON_DESCRIPTION,
    url: abs("/sobre"),
    mainEntityOfPage: { "@id": `${abs("/sobre")}#webpage` },
    email: CONTACT_EMAIL,
    worksFor: { "@id": ORG_ID },
    founderOf: { "@id": ORG_ID },
    knowsLanguage: "pt-BR",
    knowsAbout: KNOWS_ABOUT,
    hasOccupation: {
      "@type": "Occupation",
      name: "Arquiteta e Urbanista",
      occupationalCategory: "2161 Arquitetos e urbanistas",
      responsibilities:
        "Concepção de projetos arquitetônicos residenciais e comerciais, estudos de viabilidade, compatibilização de projetos, orçamento e gestão de obra.",
    },
    sameAs: socialProfiles(),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: ORG_SHORT_NAME,
    description: ORG_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "pt-BR",
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList — gives Google the site hierarchy for the SERP breadcrumb. */
export function breadcrumbSchema(crumbs: Crumb[], pageUrl: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function webPageSchema({
  url,
  name,
  description,
  crumbs,
  type = "WebPage",
  primaryImage,
}: {
  url: string;
  name: string;
  description: string;
  crumbs?: Crumb[];
  type?: string;
  primaryImage?: string;
}) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "pt-BR",
    ...(primaryImage
      ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(primaryImage) } }
      : {}),
    ...(crumbs?.length ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

/** Wraps nodes in a single `@graph` document. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Serialises JSON-LD for `dangerouslySetInnerHTML`, escaping `</script>`. */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
