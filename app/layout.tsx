import type { Metadata } from "next";
import { centuryGothicPro, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://highdesign.arq.br";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "High Design Arquitetura e Urbanismo",
  alternateName: "High Design ARQ.®",
  description:
    "Escritório de arquitetura e urbanismo especializado em projetos residenciais e comerciais. Do terreno à entrega das chaves, com método, técnica e acolhimento — para que cada projeto vire obra construída.",
  url: siteUrl,
  email: "contato@highdesign.arq.br",
  priceRange: "$$-$$$",
  areaServed: {
    "@type": "State",
    name: "Santa Catarina",
  },
  knowsLanguage: "pt-BR",
  serviceType: [
    "Consultoria de Aquisição de Terreno",
    "Consultoria de Construção",
    "Projeto Arquitetônico e Engenharia",
    "Orçamento Detalhado de Obra",
    "Gestão de Obra",
    "Consultoria de Aquisição ou Venda de Imóvel Pronto",
    "Projeto de Reforma e Transformação",
  ],
  sameAs: [
    ...(process.env.NEXT_PUBLIC_INSTAGRAM_URL ? [process.env.NEXT_PUBLIC_INSTAGRAM_URL] : []),
    ...(process.env.NEXT_PUBLIC_LINKEDIN_URL  ? [process.env.NEXT_PUBLIC_LINKEDIN_URL]  : []),
  ],
};

export const metadata: Metadata = {
  title: "High Design Arquitetura | Do primeiro traço à obra construída",
  description:
    "Escritório de arquitetura e urbanismo especializado em projetos residenciais e comerciais. Do terreno à entrega das chaves, com método, técnica e acolhimento — para que cada projeto vire obra construída.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "High Design Arquitetura | Do primeiro traço à obra construída",
    description:
      "Transformamos histórias em espaços bem planejados — com método, técnica e acolhimento.",
    url: siteUrl,
    siteName: "High Design Arquitetura",
    images: [
      {
        url: "/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg",
        width: 1200,
        height: 630,
        alt: "High Design Arquitetura — projeto residencial",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Design Arquitetura | Do primeiro traço à obra construída",
    description:
      "Transformamos histórias em espaços bem planejados — com método, técnica e acolhimento.",
    images: ["/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
