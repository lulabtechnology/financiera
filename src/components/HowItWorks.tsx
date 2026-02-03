import { WA_CTA, waLink } from "@/lib/site";

export default function HowItWorks() {
  const steps = [
    {
      title: "1) Precalifica",
      desc: "Completa el formulario (o escríbenos directo). Te respondemos con lo que aplica para ti.",
    },
    {
      title: "2) Envía lo básico",
      desc: "Te indicamos requisitos según tu tipo de ingreso y revisamos tu información.",
    },
    {
      title: "3) Cotización clara",
      desc: "Te explicamos opciones, tiempos estimados y próximos pasos con transparencia.",
    },
  ];

  const tips = [
    "Mensajes directos, sin rodeos",
    "Requisitos por categoría",
    "Acompañamiento humano",
  ];

  return (
    <section id="como-funciona" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-black md:text-3xl">Cómo funciona</h2>
            <p className="mt-3 text-black/70">
              Tres pasos sencillos para avanzar sin complicarte.
            </p>

            <div className="mt-7 space-y-4">
              {steps.map((s) => (
                <div key={s.title} className="card rounded-3xl p-5">
                  <div className="text-sm font-semibold text-black">{s.title}</div>
                  <div className="mt-2 text-sm text-black/70">{s.desc}</div>
                </div>
              ))}
            </div>

            <a
              href={waLink(WA_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
            >
              {WA_CTA}
            </a>

            <p className="mt-3 text-xs text-black/55">
              *Sujeto a evaluación. No garantizamos aprobación.
            </p>
          </div>

          <div className="card rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-black">Tip rápido</h3>
            <p className="mt-2 text-sm text-black/70">
              Si ya tienes a mano tu identificación y comprobantes de ingreso, el proceso suele fluir mejor.
              Si te falta algo, no pasa nada: te decimos qué opción conviene según tu caso.
            </p>

            <div className="mt-5 grid gap-3 text-sm text-black/75">
              {tips.map((t) => (
                <div key={t} className="rounded-2xl border border-black/10 bg-[var(--surface2)] p-4">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(210,19,21,0.10)] text-[var(--brand)] font-bold">
                      ✓
                    </span>
                    {t}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#requisitos"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5 transition"
            >
              Ver requisitos por categoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
