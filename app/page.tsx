import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Requirements from "@/components/Requirements";
import PrequalificationForm from "@/components/PrequalificationForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
