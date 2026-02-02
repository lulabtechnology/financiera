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
      desc: "Te explicamos condiciones, tiempos estimados y próximos pasos con transparencia.",
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Cómo funciona</h2>
            <p className="mt-3 text-white/70">
              Tres pasos sencillos para avanzar sin complicarte.
            </p>

            <div className="mt-7 space-y-4">
              {steps.map((s) => (
                <div key={s.title} className="glass rounded-3xl p-5">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="mt-2 text-sm text-white/70">{s.desc}</div>
                </div>
              ))}
            </div>

            <a
              href={waLink(WA_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 transition"
            >
              {WA_CTA}
            </a>

            <p className="mt-3 text-xs text-white/55">
              *Sujeto a evaluación. No garantizamos aprobación.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Tip rápido</h3>
            <p className="mt-2 text-sm text-white/70">
              Si ya tienes a mano tu identificación y comprobantes de ingreso, el proceso suele fluir mucho mejor.
              Si te falta algo, no pasa nada: te decimos qué opción conviene según tu caso.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <div className="glass rounded-2xl p-4">✔ Mensajes directos, sin rodeos</div>
              <div className="glass rounded-2xl p-4">✔ Requisitos por categoría</div>
              <div className="glass rounded-2xl p-4">✔ Acompañamiento humano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
