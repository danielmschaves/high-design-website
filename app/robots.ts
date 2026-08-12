import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/seo";

/**
 * /robots.txt
 *
 * Three states:
 *
 * 1. Preview deploys — never crawl. Duplicate content on a per-commit
 *    *.vercel.app host competes with the canonical domain for the very brand
 *    terms we are trying to win.
 * 2. Temporary production host (still on *.vercel.app, real domain not yet
 *    pointed at Vercel) — crawling is deliberately ALLOWED so Googlebot can
 *    fetch each page and read the `noindex` it serves. Blocking here with
 *    Disallow would hide that tag, and a URL blocked by robots.txt can still
 *    end up indexed without content if anything links to it. No sitemap is
 *    advertised in this state.
 * 3. Real domain — full crawl, sitemap advertised.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  if (!isIndexable) {
    return { rules: [{ userAgent: "*", allow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js build assets carry no standalone search value.
        disallow: ["/_next/static/chunks/", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
