import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Diferenciais from "@/components/sections/Diferenciais";
import ParaQuemE from "@/components/sections/ParaQuemE";
import Esteira from "@/components/sections/Esteira";
import Portfolio from "@/components/sections/Portfolio";
import Depoimentos from "@/components/sections/Depoimentos";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";
import WhatsApp from "@/components/ui/WhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
        <Portfolio />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
    </>
  );
}
