import { WA_CTA, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="relative overflow-hidden">
        {/* Background image placeholders (mobile-first) */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35
                     bg-[url('/images/hero-mobile.jpg')]
                     md:bg-[url('/images/hero-desktop.jpg')]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1220]/20 via-[#0b1220]/75 to-[#0b1220]" aria-hidden="true" />

        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl motion-safe:animate-floaty" aria-hidden="true" />
        <div className="pointer-events-none absolute top-10 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl motion-safe:animate-floaty" style={{ animationDelay: "1.5s" }} aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl motion-safe:animate-floaty" style={{ animationDelay: "3s" }} aria-hidden="true" />

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="glass rounded-3xl p-6 md:p-8 shadow-soft">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                Respuesta rápida · Asesoría humana · Proceso claro
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl motion-safe:animate-fadeUp">
                Dinero rápido,{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-200 bg-[length:220%_220%] bg-clip-text text-transparent motion-safe:animate-shine">
                  sin complicaciones
                </span>
                .
              </h1>

              <p
                className="mt-4 text-base leading-relaxed text-white/75 md:text-lg motion-safe:animate-fadeUp"
                style={{ animationDelay: "120ms" }}
              >
                Préstamos personales rápidos en Panamá, con acompañamiento humano y una cotización clara desde el inicio.
                Escríbenos por WhatsApp y te guiamos paso a paso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row motion-safe:animate-fadeUp" style={{ animationDelay: "220ms" }}>
                <a
                  href={waLink(WA_CTA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 transition"
                >
                  {WA_CTA}
                </a>
                <a
                  href="#requisitos"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver requisitos
                </a>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                <li className="flex items-center gap-2">
                  <img src="/icons/speed.svg" alt="" className="h-5 w-5 opacity-90" />
                  Precalificación ágil
                </li>
                <li className="flex items-center gap-2">
                  <img src="/icons/clear.svg" alt="" className="h-5 w-5 opacity-90" />
                  Información clara
                </li>
                <li className="flex items-center gap-2">
                  <img src="/icons/support.svg" alt="" className="h-5 w-5 opacity-90" />
                  Atención humana
                </li>
              </ul>

              <p className="mt-4 text-xs text-white/55">
                *Sujeto a evaluación. No garantizamos aprobación.
              </p>
            </div>

            {/* Right side highlight card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-lg font-semibold">Una cotización que se entiende</h2>
              <p className="mt-2 text-sm text-white/70">
                Te orientamos con lo esencial: requisitos, pasos, tiempos estimados y lo que puedes preparar desde ya.
                Sin promesas raras: solo un proceso simple y transparente.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <img src="/icons/steps.svg" alt="" className="mt-0.5 h-6 w-6 opacity-90" />
                    <div>
                      <div className="text-sm font-semibold">Guía paso a paso</div>
                      <div className="text-sm text-white/65">
                        Te decimos qué enviar y en qué orden para avanzar sin enredos.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <img src="/icons/secure.svg" alt="" className="mt-0.5 h-6 w-6 opacity-90" />
                    <div>
                      <div className="text-sm font-semibold">Comunicación responsable</div>
                      <div className="text-sm text-white/65">
                        Tus datos se usan para contactarte y evaluar tu caso. Sin pagos en línea en esta fase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#precalificacion"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
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
