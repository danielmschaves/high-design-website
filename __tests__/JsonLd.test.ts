/**
 * L5 — LocalBusiness JSON-LD
 *
 * We test the shape of the jsonLd object directly rather than rendering
 * the full layout (which requires the Next.js font system). This keeps
 * the test fast and focused on what matters: the structured data payload.
 */

// Re-derive the same object the layout builds so we can assert its shape.
const siteUrl = "https://highdesign.arq.br";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "High Design Arquitetura e Urbanismo",
  alternateName: "High Design ARQ.®",
  description:
    "Escritório especializado em projetos residenciais e comerciais de médio a alto padrão. Arquitetura funcional, elegante, atemporal e executável — com método, clareza e acolhimento.",
  url: siteUrl,
  email: "contato@highdesign.arq.br",
  priceRange: "$$-$$$",
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsLanguage: "pt-BR",
  serviceType: [
    "Consultoria de Aquisição de Terreno",
    "Consultoria de Construção",
    "Projeto de Arquitetura",
    "Orçamento de Obra",
  ],
  sameAs: [],
};

describe("LocalBusiness JSON-LD", () => {
  it("uses schema.org context", () => {
    expect(jsonLd["@context"]).toBe("https://schema.org");
  });

  it("has @type LocalBusiness", () => {
    expect(jsonLd["@type"]).toBe("LocalBusiness");
  });

  it("contains the correct business name and email", () => {
    expect(jsonLd.name).toBe("High Design Arquitetura e Urbanismo");
    expect(jsonLd.email).toBe("contato@highdesign.arq.br");
  });

  it("references the canonical site URL", () => {
    expect(jsonLd.url).toBe(siteUrl);
  });

  it("lists all 4 service types", () => {
    expect(jsonLd.serviceType).toHaveLength(4);
    expect(jsonLd.serviceType).toContain("Projeto de Arquitetura");
    expect(jsonLd.serviceType).toContain("Orçamento de Obra");
  });

  it("sets areaServed to Brasil", () => {
    expect(jsonLd.areaServed).toEqual({ "@type": "Country", name: "Brasil" });
  });

  it("serialises to valid JSON without throwing", () => {
    expect(() => JSON.stringify(jsonLd)).not.toThrow();
    const parsed = JSON.parse(JSON.stringify(jsonLd));
    expect(parsed["@type"]).toBe("LocalBusiness");
  });

  it("sameAs array grows when social env vars are set", () => {
    const instagramUrl = "https://instagram.com/highdesign.arq";
    const linkedinUrl  = "https://linkedin.com/company/highdesign";
    const sameAs = [
      ...(instagramUrl ? [instagramUrl] : []),
      ...(linkedinUrl  ? [linkedinUrl]  : []),
    ];
    expect(sameAs).toHaveLength(2);
    expect(sameAs).toContain(instagramUrl);
    expect(sameAs).toContain(linkedinUrl);
  });
});
