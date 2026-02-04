import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Requirements from "@/components/Requirements";
import PrequalificationForm from "@/components/PrequalificationForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sectors /> {/* ✅ nuevo bloque (nicho top) */}
        <Benefits />
        <HowItWorks />
        <Requirements />
        <PrequalificationForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
