import { SITE, WA_CTA, waLink } from "@/lib/site";

const sectors = [
  {
    title: "Educadores",
    desc: "Opciones pensadas para docentes. Te orientamos según tu caso y tipo de ingreso.",
    image: "/images/segment-educadores.jpg",
    bullets: ["Proceso guiado", "Requisitos por categoría", "Respuesta clara por WhatsApp"],
  },
  {
    title: "Sector Salud (Doctores)",
    desc: "Programas frecuentes para médicos y personal de salud. Te explicamos opciones sin enredos.",
    image: "/images/segment-salud.jpg",
    bullets: ["Atención humana", "Paso a paso", "Evaluación responsable"],
  },
  {
    title: "Policías / Seguridad",
    desc: "Asesoría directa para personal de seguridad. Te indicamos lo básico para avanzar rápido.",
    image: "/images/segment-policia.jpg",
    bullets: ["Mensajes directos", "Checklist simple", "Acompañamiento"],
  },
];

export default function Sectors() {
  return (
    <section id="sectores" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Sectores que más atendemos</h2>
          <p className="mt-3 text-black/70">
            Creamos un flujo más claro para estos perfiles. Escríbenos y te decimos qué aplica para ti.
            <span className="block mt-2 text-xs text-black/55">
              *Sujeto a evaluación. No garantizamos aprobación.
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.title} className="card overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/11] md:aspect-[16/12]">
             <div className="relative h-full w-full bg-[var(--surface2)]">
  <img
    src={s.image}
    alt={`Imagen referencial - ${s.title}`}
    className="h-full w-full object-contain p-3"
    loading="lazy"
  />
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                    {s.title}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-black/75">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid gap-2">
                  <a
                    href={waLink(`${WA_CTA} — ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
                  >
                    Cotizar por WhatsApp
                  </a>

                  <a
                    href={waLink(`Hola, quiero cotizar. Mi perfil es ${s.title}.`, SITE.waNumberAlt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5 transition"
                  >
                    WhatsApp alterno ({SITE.phoneDisplayAlt})
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
