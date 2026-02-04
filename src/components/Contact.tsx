import { igLink, SITE, WA_CTA, waLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-black md:text-3xl">Contacto</h2>
            <p className="mt-3 text-black/70">
              La forma más rápida de avanzar es por WhatsApp. Si no te responden por el principal,
              usa el alterno.
            </p>

            <div className="mt-6 space-y-3">
              {/* WhatsApp principal */}
              <a
                href={waLink(WA_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="card inline-flex w-full items-center justify-between rounded-3xl px-5 py-4 hover:bg-black/5 transition"
              >
                <span className="text-sm font-semibold text-black">WhatsApp principal</span>
                <span className="text-sm text-black/70">{SITE.phoneDisplayPrimary}</span>
              </a>

              {/* WhatsApp alterno */}
              <a
                href={waLink("Hola, quiero cotizar mi préstamo. ¿Me orientan por favor?", SITE.waNumberAlt)}
                target="_blank"
                rel="noopener noreferrer"
                className="card inline-flex w-full items-center justify-between rounded-3xl px-5 py-4 hover:bg-black/5 transition"
              >
                <span className="text-sm font-semibold text-black">WhatsApp alterno</span>
                <span className="text-sm text-black/70">{SITE.phoneDisplayAlt}</span>
              </a>

              <a
                href={igLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card inline-flex w-full items-center justify-between rounded-3xl px-5 py-4 hover:bg-black/5 transition"
              >
                <span className="text-sm font-semibold text-black">Instagram</span>
                <span className="text-sm text-black/70">@{SITE.igHandle}</span>
              </a>

              <div className="card rounded-3xl px-5 py-4">
                <div className="text-sm font-semibold text-black">Horario</div>
                <div className="mt-1 text-sm text-black/70">{SITE.defaultHours}</div>
              </div>

              {/* ✅ NUEVO: Dirección */}
              <div className="card rounded-3xl px-5 py-4">
                <div className="text-sm font-semibold text-black">Dirección</div>
                <div className="mt-1 text-sm text-black/70">
                  Panamá, Rep. de Panamá. Calle 37 entre Ave. Perú y Ave. Cuba.
                </div>
              </div>

              <div className="card rounded-3xl p-5">
                <div className="text-sm font-semibold text-black">Microcopy de confianza</div>
                <p className="mt-2 text-sm text-black/70">
                  Te hablamos claro. Si tu caso aplica, te guiamos con pasos concretos. Si no aplica,
                  también te lo decimos sin hacerte perder tiempo.
                </p>
              </div>
            </div>
          </div>

          <div className="card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black">¿Listo para cotizar?</h3>
            <p className="mt-2 text-sm text-black/70">
              Escríbenos tu tipo de ingreso, rango de ingreso y monto aproximado. Con eso iniciamos.
            </p>

            {/* ✅ NUEVO: Dirección también aquí (mini corporativa) */}
            <p className="mt-4 text-sm text-black/70">
              <span className="font-semibold text-black">Dirección:</span>{" "}
              Panamá, Rep. de Panamá. Calle 37 entre Ave. Perú y Ave. Cuba.
            </p>

            <div className="mt-6 grid gap-2">
              <a
                href={waLink(WA_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
              >
                {WA_CTA}
              </a>

              <a
                href={waLink("Hola, quiero cotizar. ¿Me apoyan con los requisitos según mi caso?", SITE.waNumberAlt)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5 transition"
              >
                Escribir al WhatsApp alterno ({SITE.phoneDisplayAlt})
              </a>
            </div>

            <p className="mt-4 text-xs text-black/55">
              *Sujeto a evaluación. No garantizamos aprobación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
