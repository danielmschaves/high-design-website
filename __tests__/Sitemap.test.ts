import sitemap from "../app/sitemap";
import robots from "../app/robots";
import manifest from "../app/manifest";
import { siteUrl } from "../lib/seo";
import { getAllPosts } from "../lib/blog";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("includes the homepage, the author page and the blog index", () => {
    expect(urls).toContain(`${siteUrl}/`);
    expect(urls).toContain(`${siteUrl}/sobre`);
    expect(urls).toContain(`${siteUrl}/blog`);
  });

  it("includes every blog post", () => {
    for (const post of getAllPosts()) {
      expect(urls).toContain(`${siteUrl}/blog/${post.slug}`);
    }
  });

  it("contains no duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("uses absolute URLs on the canonical host", () => {
    for (const url of urls) {
      expect(url.startsWith(`${siteUrl}/`)).toBe(true);
    }
  });

  it("ranks the homepage above the privacy policy", () => {
    const home = entries.find((e) => e.url === `${siteUrl}/`)!;
    const privacy = entries.find((e) => e.url === `${siteUrl}/privacidade`)!;
    expect(home.priority!).toBeGreaterThan(privacy.priority!);
  });

  it("dates each post from its own publishedAt", () => {
    const post = getAllPosts()[0];
    const entry = entries.find((e) => e.url === `${siteUrl}/blog/${post.slug}`)!;
    expect(new Date(entry.lastModified as Date).toISOString()).toContain(
      post.publishedAt
    );
  });
});

describe("robots", () => {
  afterEach(() => {
    delete process.env.VERCEL_ENV;
  });

  it("allows crawling and advertises the sitemap in production", () => {
    process.env.VERCEL_ENV = "production";
    const r = robots() as any;
    expect(r.sitemap).toBe(`${siteUrl}/sitemap.xml`);
    expect(r.rules[0].allow).toBe("/");
  });

  /**
   * Preview builds live on *.vercel.app. Letting them get indexed creates a
   * duplicate of the whole site competing for the same brand terms.
   */
  it("blocks everything on preview deployments", () => {
    process.env.VERCEL_ENV = "preview";
    const r = robots() as any;
    expect(r.rules[0].disallow).toBe("/");
    expect(r.sitemap).toBeUndefined();
  });

  it("defaults to allowing crawlers when VERCEL_ENV is unset", () => {
    const r = robots() as any;
    expect(r.rules[0].allow).toBe("/");
  });
});

describe("manifest", () => {
  it("declares brand name, language and theme colours", () => {
    const m = manifest();
    expect(m.name).toContain("High Design");
    expect(m.lang).toBe("pt-BR");
    expect(m.theme_color).toBe("#3d3035");
    expect(m.start_url).toBe("/");
  });
});
