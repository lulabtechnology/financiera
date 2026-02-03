import { WA_CTA, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="relative overflow-hidden">
        {/* Background image placeholders */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center
                     bg-[url('/images/hero-mobile.jpg')]
                     md:bg-[url('/images/hero-desktop.jpg')]"
          aria-hidden="true"
        />
        {/* Clean overlay for readability */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.40) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Brand blobs */}
        <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[rgba(210,19,21,0.14)] blur-3xl motion-safe:animate-floaty" aria-hidden="true" />
        <div className="pointer-events-none absolute top-12 -right-24 h-72 w-72 rounded-full bg-[rgba(156,47,49,0.10)] blur-3xl motion-safe:animate-floaty" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="card rounded-3xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70">
                <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                Respuesta rápida · Asesoría humana · Proceso claro
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl motion-safe:animate-fadeUp">
                Dinero rápido,{" "}
                <span
                  className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand2)] to-[var(--brand)]
                             bg-[length:220%_220%] bg-clip-text text-transparent motion-safe:animate-shine"
                >
                  sin complicaciones
                </span>
                .
              </h1>

              <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg motion-safe:animate-fadeUp" style={{ animationDelay: "120ms" }}>
                Préstamos personales rápidos en Panamá, con acompañamiento humano y una cotización clara desde el inicio.
                Escríbenos por WhatsApp y te guiamos paso a paso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row motion-safe:animate-fadeUp" style={{ animationDelay: "220ms" }}>
                <a
                  href={waLink(WA_CTA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
                >
                  {WA_CTA}
                </a>
                <a
                  href="#requisitos"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5 transition"
                >
                  Ver requisitos
                </a>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-3">
                <li className="flex items-center gap-2">
                  <img src="/icons/speed.svg" alt="" className="h-5 w-5 opacity-80 invert" />
                  Precalificación ágil
                </li>
                <li className="flex items-center gap-2">
                  <img src="/icons/clear.svg" alt="" className="h-5 w-5 opacity-80 invert" />
                  Información clara
                </li>
                <li className="flex items-center gap-2">
                  <img src="/icons/support.svg" alt="" className="h-5 w-5 opacity-80 invert" />
                  Atención humana
                </li>
              </ul>

              <p className="mt-4 text-xs text-black/55">
                *Sujeto a evaluación. No garantizamos aprobación.
              </p>
            </div>

            {/* Right side mini panel */}
            <div className="card rounded-3xl p-6 md:p-8">
              <h2 className="text-lg font-semibold">Cotiza con claridad</h2>
              <p className="mt-2 text-sm text-black/70">
                Te orientamos con lo esencial: requisitos, pasos y tiempos estimados. Sin promesas raras, solo un proceso claro.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-black/10 bg-[var(--surface2)] p-4">
                  <div className="text-sm font-semibold">Guía paso a paso</div>
                  <div className="mt-1 text-sm text-black/65">
                    Te decimos qué enviar y en qué orden para avanzar sin enredos.
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[var(--surface2)] p-4">
                  <div className="text-sm font-semibold">Comunicación responsable</div>
                  <div className="mt-1 text-sm text-black/65">
                    Tus datos se usan solo para contactarte y evaluar tu caso.
                  </div>
                </div>
              </div>

              <a
                href="#precalificacion"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5 transition"
              >
                Ir a precalificación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
