/**
 * Structured-data contract tests.
 *
 * These import the real builders from lib/seo.ts rather than re-declaring the
 * payload, so a change to the schema is caught here instead of shipping to
 * production and silently breaking a rich result.
 */

import {
  siteUrl,
  abs,
  graph,
  jsonLdScript,
  organizationSchema,
  personSchema,
  websiteSchema,
  breadcrumbSchema,
  webPageSchema,
  ORG_ID,
  PERSON_ID,
  WEBSITE_ID,
  ORG_NAME,
  PERSON_NAME,
  CONTACT_EMAIL,
} from "../lib/seo";
import { faqs, faqSchema } from "../lib/faq";
import { services } from "../lib/services";

describe("Organization schema", () => {
  const org = organizationSchema() as any;

  it("is typed as both Organization and ProfessionalService", () => {
    expect(org["@type"]).toEqual(["Organization", "ProfessionalService"]);
  });

  it("uses the stable organization @id", () => {
    expect(org["@id"]).toBe(ORG_ID);
    expect(ORG_ID).toBe(`${siteUrl}/#organization`);
  });

  it("carries the business name and contact email", () => {
    expect(org.name).toBe(ORG_NAME);
    expect(org.email).toBe(CONTACT_EMAIL);
  });

  it("lists all 7 service types, matching lib/services", () => {
    expect(org.serviceType).toHaveLength(7);
    expect(org.serviceType).toEqual(services.map((s) => s.nome));
  });

  it("exposes an OfferCatalog whose offers mirror the services", () => {
    expect(org.hasOfferCatalog.itemListElement).toHaveLength(services.length);
    const names = org.hasOfferCatalog.itemListElement.map(
      (o: any) => o.itemOffered.name
    );
    expect(names).toEqual(services.map((s) => s.nome));
  });

  it("links the founder to the person node by @id", () => {
    expect(org.founder).toEqual({ "@id": PERSON_ID });
  });

  it("serves Santa Catarina and Brazil", () => {
    expect(org.areaServed).toEqual([
      { "@type": "State", name: "Santa Catarina" },
      { "@type": "Country", name: "Brasil" },
    ]);
  });

  it("omits telephone when no WhatsApp number is configured", () => {
    expect(org.telephone).toBeUndefined();
  });

  it("emits an E.164 telephone when a WhatsApp number is configured", () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "55 (48) 99999-0000";
    expect((organizationSchema() as any).telephone).toBe("+5548999990000");
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  });

  it("grows sameAs when social env vars are set", () => {
    expect(organizationSchema().sameAs).toHaveLength(0);
    process.env.NEXT_PUBLIC_INSTAGRAM_URL = "https://instagram.com/highdesign.arq";
    process.env.NEXT_PUBLIC_LINKEDIN_URL = "https://linkedin.com/company/highdesign";
    expect(organizationSchema().sameAs).toHaveLength(2);
    delete process.env.NEXT_PUBLIC_INSTAGRAM_URL;
    delete process.env.NEXT_PUBLIC_LINKEDIN_URL;
  });
});

describe("Person schema", () => {
  const person = personSchema() as any;

  it("names Emanoella Goulart with a stable @id", () => {
    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe(PERSON_NAME);
    expect(person["@id"]).toBe(PERSON_ID);
  });

  it("points mainEntityOfPage at the /sobre entity page", () => {
    expect(person.url).toBe(`${siteUrl}/sobre`);
    expect(person.mainEntityOfPage).toEqual({ "@id": `${siteUrl}/sobre#webpage` });
  });

  it("links back to the organization as employer and founder", () => {
    expect(person.worksFor).toEqual({ "@id": ORG_ID });
    expect(person.founderOf).toEqual({ "@id": ORG_ID });
  });

  it("declares the architect job title", () => {
    expect(person.jobTitle).toBe("Arquiteta e Urbanista");
  });
});

describe("WebSite schema", () => {
  it("links to the organization as publisher", () => {
    const site = websiteSchema() as any;
    expect(site["@id"]).toBe(WEBSITE_ID);
    expect(site.publisher).toEqual({ "@id": ORG_ID });
    expect(site.inLanguage).toBe("pt-BR");
  });
});

describe("Breadcrumb schema", () => {
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
  ];
  const bc = breadcrumbSchema(crumbs, `${siteUrl}/blog`) as any;

  it("numbers positions from 1 and resolves absolute item URLs", () => {
    expect(bc.itemListElement).toHaveLength(2);
    expect(bc.itemListElement[0].position).toBe(1);
    expect(bc.itemListElement[1].item).toBe(`${siteUrl}/blog`);
  });
});

describe("WebPage schema", () => {
  it("only references a breadcrumb when crumbs are supplied", () => {
    const without = webPageSchema({
      url: `${siteUrl}/`,
      name: "Home",
      description: "d",
    }) as any;
    expect(without.breadcrumb).toBeUndefined();

    const withCrumbs = webPageSchema({
      url: `${siteUrl}/blog`,
      name: "Blog",
      description: "d",
      crumbs: [{ name: "Início", path: "/" }],
    }) as any;
    expect(withCrumbs.breadcrumb).toEqual({ "@id": `${siteUrl}/blog#breadcrumb` });
  });
});

describe("FAQ schema", () => {
  const faq = faqSchema(`${siteUrl}/`) as any;

  it("emits one Question per entry in lib/faq", () => {
    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity).toHaveLength(faqs.length);
  });

  it("carries a non-empty accepted answer for every question", () => {
    for (const q of faq.mainEntity) {
      expect(q["@type"]).toBe("Question");
      expect(q.name.length).toBeGreaterThan(0);
      expect(q.acceptedAnswer.text.length).toBeGreaterThan(0);
    }
  });

  it("answers the founder-identity question that the name query targets", () => {
    const q = faqs.find((f) => f.question.includes("Emanoella Goulart"));
    expect(q).toBeDefined();
    expect(q!.answer).toContain("arquiteta");
  });
});

describe("Graph serialisation", () => {
  const doc = graph([organizationSchema(), personSchema(), websiteSchema()]);

  it("wraps nodes in a single @graph with one @context", () => {
    expect(doc["@context"]).toBe("https://schema.org");
    expect((doc as any)["@graph"]).toHaveLength(3);
  });

  it("round-trips through JSON without throwing", () => {
    expect(() => JSON.parse(JSON.stringify(doc))).not.toThrow();
  });

  it("escapes '<' so a payload cannot break out of the script tag", () => {
    const out = jsonLdScript({ name: "</script><img onerror=alert(1)>" });
    expect(out).not.toContain("</script>");
    expect(out).toContain("\\u003c");
    expect(JSON.parse(out).name).toBe("</script><img onerror=alert(1)>");
  });
});

describe("URL helpers", () => {
  it("makes relative paths absolute and leaves absolute URLs alone", () => {
    expect(abs("/sobre")).toBe(`${siteUrl}/sobre`);
    expect(abs("sobre")).toBe(`${siteUrl}/sobre`);
    expect(abs("https://example.com/x")).toBe("https://example.com/x");
  });
});
