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
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";
import WhatsApp from "@/components/ui/WhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <>
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
        <Contato />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
