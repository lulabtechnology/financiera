import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Términos</h1>
        <p className="mt-4 text-white/70">
          Al usar esta landing y escribirnos por WhatsApp, aceptas estos términos básicos.
        </p>

        <div className="mt-8 space-y-6 text-sm text-white/75">
          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">1) Uso del sitio</h2>
            <p className="mt-2">
              Esta página sirve para informarte y facilitar el contacto por WhatsApp. No constituye una aprobación ni una oferta garantizada.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">2) Evaluación</h2>
            <p className="mt-2">
              Toda solicitud está sujeta a evaluación y verificación de información. No garantizamos aprobación.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">3) Exactitud de la información</h2>
            <p className="mt-2">
              Eres responsable de la información que compartes. Si algo cambia, indícalo para orientarte correctamente.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">4) Contacto</h2>
            <p className="mt-2">
              El canal principal de atención es WhatsApp. El horario regular es de lunes a viernes en horario laboral.
            </p>
          </section>
        </div>

        <div className="mt-10 text-sm text-white/70">
          <Link href="/" className="underline hover:text-white">Volver al inicio</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
