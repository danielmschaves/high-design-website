import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

/**
 * XML sitemap at /sitemap.xml, referenced from /robots.txt.
 *
 * Priorities are relative *within this site only* — they tell Google which
 * URLs we consider most representative, not how important the site is overall.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Newest post drives the homepage/blog-index lastModified so crawlers see a
  // fresh signal whenever content ships, without hand-editing dates.
  const newest = posts.reduce<string | undefined>((latest, p) => {
    return !latest || p.publishedAt > latest ? p.publishedAt : latest;
  }, undefined);
  const lastContentUpdate = newest ? new Date(newest) : new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: lastContentUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/privacidade`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
