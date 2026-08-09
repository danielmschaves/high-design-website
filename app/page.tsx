import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Diferenciais from "@/components/sections/Diferenciais";
import ParaQuemE from "@/components/sections/ParaQuemE";
import Esteira from "@/components/sections/Esteira";
import Processo from "@/components/sections/Processo";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Depoimentos from "@/components/sections/Depoimentos";
import Faq from "@/components/sections/Faq";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";
import WhatsApp from "@/components/ui/WhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import { faqSchema } from "@/lib/faq";
import {
  siteUrl,
  graph,
  jsonLdScript,
  webPageSchema,
  ORG_DESCRIPTION,
  ORG_NAME,
  PERSON_NAME,
} from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
};

/**
 * Homepage-scoped nodes. Organization, Person and WebSite already ship from
 * the root layout on every route; these reference them by `@id` rather than
 * repeating them, which keeps the payload small and the entity singular.
 */
const homeGraph = graph([
  webPageSchema({
    url: `${siteUrl}/`,
    name: `${ORG_NAME} — ${PERSON_NAME}`,
    description: ORG_DESCRIPTION,
    primaryImage: "/assets/images/2b86d6b1ba077c8f4c9bc359c197dd8b.jpg",
  }),
  faqSchema(`${siteUrl}/`),
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeGraph) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Diferenciais />
        <ParaQuemE />
        <Esteira />
        <Processo />
        <Portfolio />
        <Blog />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
