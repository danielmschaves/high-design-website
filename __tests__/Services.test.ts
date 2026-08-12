import { services } from "../lib/services";
import { faqs } from "../lib/faq";
import { getPostBySlug } from "../lib/blog";
import sitemap from "../app/sitemap";
import { siteUrl } from "../lib/seo";

describe("services data", () => {
  it("has seven services", () => {
    expect(services).toHaveLength(7);
  });

  it("gives every service a unique, URL-safe slug", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("keeps meta descriptions inside the SERP truncation limit", () => {
    for (const s of services) {
      expect(s.metaDescription.length).toBeGreaterThan(50);
      expect(s.metaDescription.length).toBeLessThanOrEqual(165);
    }
  });

  it("points relatedPosts at blog posts that actually exist", () => {
    for (const s of services) {
      for (const slug of s.relatedPosts) {
        expect(getPostBySlug(slug)).toBeDefined();
      }
    }
  });

  it("points faqQuestions at questions that actually exist", () => {
    for (const s of services) {
      for (const q of s.faqQuestions) {
        expect(faqs.some((f) => f.question === q)).toBe(true);
      }
    }
  });

  /**
   * A fuzzy substring matcher previously put the same general FAQ on all seven
   * service pages, duplicating the Q&A across URLs. Assignment is explicit now,
   * and each question must belong to at most one service.
   */
  it("never assigns the same FAQ to two services", () => {
    const assigned = services.flatMap((s) => s.faqQuestions);
    expect(new Set(assigned).size).toBe(assigned.length);
  });
});

describe("sitemap includes the service pages", () => {
  const urls = sitemap().map((e) => e.url);

  it("lists the services hub", () => {
    expect(urls).toContain(`${siteUrl}/servicos`);
  });

  it("lists every service detail page", () => {
    for (const s of services) {
      expect(urls).toContain(`${siteUrl}/servicos/${s.slug}`);
    }
  });

  it("still has no duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});
