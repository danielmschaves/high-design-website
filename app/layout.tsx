import type { Metadata, Viewport } from "next";
import { centuryGothicPro, jetbrainsMono } from "@/lib/fonts";
import {
  siteUrl,
  abs,
  graph,
  jsonLdScript,
  organizationSchema,
  personSchema,
  websiteSchema,
  ORG_NAME,
  ORG_SHORT_NAME,
  ORG_DESCRIPTION,
  PERSON_NAME,
  SITE_KEYWORDS,
} from "@/lib/seo";
import "./globals.css";

const title = "High Design Arquitetura | Emanoella Goulart — do primeiro traço à obra";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    // Every child page appends the brand, so the brand term appears in the
    // title of every indexed URL — the cheapest brand-recall signal there is.
    template: `%s | ${ORG_SHORT_NAME}`,
  },
  description: ORG_DESCRIPTION,
  applicationName: ORG_SHORT_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: PERSON_NAME, url: abs("/sobre") }],
  creator: PERSON_NAME,
  publisher: ORG_NAME,
  category: "Arquitetura e Urbanismo",
  // NOTE: no `alternates.canonical` here on purpose. Metadata is inherited by
  // child routes, so a canonical set on the root layout would point every page
  // at the homepage and drop them from the index. Each route declares its own.
  openGraph: {
    title,
    description: ORG_DESCRIPTION,
    url: siteUrl,
    siteName: ORG_SHORT_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ORG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Let Google use full-length text snippets, large image previews and
      // full video previews — the defaults are more conservative and cost
      // click-through on brand queries.
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Phone/email autolinking rewrites our markup on iOS and can break layout;
  // the contact details are already real links.
  formatDetection: { telephone: false, email: false, address: false },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#3d3035" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Site-wide entity graph. Emitted on every page so that Organization, Person
 * and WebSite nodes are reinforced from each URL and resolve to one entity.
 * Page-specific nodes (WebPage, BreadcrumbList, BlogPosting, FAQPage) are
 * added by the individual routes and reference these by `@id`.
 */
const siteGraph = graph([organizationSchema(), personSchema(), websiteSchema()]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${centuryGothicPro.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(siteGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
