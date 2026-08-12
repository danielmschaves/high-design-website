import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * /robots.txt
 *
 * Preview deployments must never be indexed — duplicate content on a
 * *.vercel.app host competes with the canonical domain for the very brand
 * terms we are trying to win. Vercel sets VERCEL_ENV to "preview" on those
 * builds, so we disallow everything there and allow everything in production.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : true;

  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
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
