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

  it("allows crawling and advertises the sitemap on the real domain", () => {
    process.env.VERCEL_ENV = "production";
    const r = robots() as any;
    expect(r.sitemap).toBe(`${siteUrl}/sitemap.xml`);
    expect(r.rules[0].allow).toBe("/");
  });

  /**
   * Preview builds live on per-commit *.vercel.app hosts. Letting them get
   * indexed creates a duplicate of the whole site competing for the same
   * brand terms.
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

/**
 * While the site is served from its temporary *.vercel.app deployment URL, the
 * entity @ids in lib/seo.ts are derived from that hostname. Letting it be
 * indexed would burn the @ids against a host we are about to abandon, so the
 * whole deployment must serve noindex until NEXT_PUBLIC_SITE_URL names the
 * real domain.
 *
 * lib/seo.ts reads the env var at module load, so each case is exercised in an
 * isolated module registry with the variable already set.
 */
describe("temporary-host indexing guard", () => {
  const load = (url: string) => {
    let mod: typeof import("../lib/seo");
    let robotsFn: typeof import("../app/robots").default;
    jest.isolateModules(() => {
      process.env.NEXT_PUBLIC_SITE_URL = url;
      mod = require("../lib/seo");
      robotsFn = require("../app/robots").default;
    });
    return { seo: mod!, robots: robotsFn! };
  };

  const original = process.env.NEXT_PUBLIC_SITE_URL;
  afterEach(() => {
    if (original === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = original;
    delete process.env.VERCEL_ENV;
  });

  it("marks a *.vercel.app deployment URL as non-indexable", () => {
    const { seo } = load("https://high-design-website.vercel.app/");
    expect(seo.isTemporaryHost).toBe(true);
    expect(seo.isIndexable).toBe(false);
  });

  it("marks the real domain as indexable", () => {
    const { seo } = load("https://highdesign.arq.br");
    expect(seo.isTemporaryHost).toBe(false);
    expect(seo.isIndexable).toBe(true);
  });

  it("does not advertise a sitemap while on the temporary host", () => {
    process.env.VERCEL_ENV = "production";
    const { robots: r } = load("https://high-design-website.vercel.app");
    const out = r() as any;
    expect(out.sitemap).toBeUndefined();
    expect(out.host).toBeUndefined();
  });

  /**
   * Crawling stays allowed on the temporary host on purpose: a robots.txt
   * Disallow would stop Googlebot fetching the page and therefore hide the
   * noindex tag, which is what actually keeps the URL out of the index.
   */
  it("still allows crawling on the temporary host so noindex is readable", () => {
    process.env.VERCEL_ENV = "production";
    const { robots: r } = load("https://high-design-website.vercel.app");
    expect((r() as any).rules[0].allow).toBe("/");
    expect((r() as any).rules[0].disallow).toBeUndefined();
  });

  it("derives @ids from whichever host is configured", () => {
    const temp = load("https://high-design-website.vercel.app");
    expect(temp.seo.ORG_ID).toBe("https://high-design-website.vercel.app/#organization");

    const real = load("https://highdesign.arq.br");
    expect(real.seo.ORG_ID).toBe("https://highdesign.arq.br/#organization");
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
