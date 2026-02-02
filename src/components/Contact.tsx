import { igLink, SITE, WA_CTA, waLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Contacto</h2>
            <p className="mt-3 text-white/70">
              La forma más rápida de avanzar es por WhatsApp. Te respondemos con asesoría humana y proceso claro.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={waLink(WA_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-between rounded-3xl px-5 py-4 hover:bg-white/10 transition"
              >
                <span className="text-sm font-semibold">WhatsApp (click-to-chat)</span>
                <span className="text-sm text-white/70">+507 6836-2408</span>
              </a>

              <a
                href={igLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-between rounded-3xl px-5 py-4 hover:bg-white/10 transition"
              >
                <span className="text-sm font-semibold">Instagram</span>
                <span className="text-sm text-white/70">@{SITE.igHandle}</span>
              </a>

              <div className="glass rounded-3xl px-5 py-4">
                <div className="text-sm font-semibold">Horario</div>
                <div className="mt-1 text-sm text-white/70">{SITE.defaultHours}</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Microcopy de confianza</div>
                <p className="mt-2 text-sm text-white/70">
                  Te hablamos claro. Si tu caso aplica, te guiamos con pasos concretos. Si no aplica, también te lo decimos sin hacerte perder tiempo.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">¿Listo para cotizar?</h3>
            <p className="mt-2 text-sm text-white/70">
              Escríbenos y dime: tu tipo de ingreso, rango de ingreso mensual y monto aproximado. Con eso iniciamos.
            </p>

            <a
              href={waLink(WA_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 transition"
            >
              {WA_CTA}
            </a>

            <p className="mt-4 text-xs text-white/55">
              *Sujeto a evaluación. No garantizamos aprobación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
