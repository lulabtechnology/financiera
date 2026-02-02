import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Política de Privacidad</h1>
        <p className="mt-4 text-white/70">
          Esta política explica cómo usamos la información que compartes con nosotros al escribirnos o precalificar.
        </p>

        <div className="mt-8 space-y-6 text-sm text-white/75">
          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Qué información recopilamos</h2>
            <p className="mt-2">
              Podemos recibir datos como nombre, edad, tipo de ingreso, rango de ingreso, monto deseado y comentarios.
              La cédula puede ser solicitada o compartida de forma opcional según el caso.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Para qué la usamos</h2>
            <p className="mt-2">
              Usamos la información únicamente para: (1) contactarte por WhatsApp, (2) orientar requisitos,
              y (3) evaluar tu solicitud de forma responsable. No vendemos tu información.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Pagos</h2>
            <p className="mt-2">
              Esta landing no procesa pagos en línea. Cualquier gestión se coordina directamente contigo.
            </p>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Contactarnos</h2>
            <p className="mt-2">
              Si deseas actualizar o eliminar información compartida, escríbenos por WhatsApp.
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
