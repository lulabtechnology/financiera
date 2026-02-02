export default function Requirements() {
  const groups = [
    {
      title: "Empresa privada",
      items: [
        "Cédula vigente (frente y reverso).",
        "Carta de trabajo o constancia laboral.",
        "Comprobantes de ingreso recientes (talonarios / pagos).",
        "Referencia bancaria (si aplica).",
        "Recibo de servicio o comprobante de residencia (según el caso).",
      ],
    },
    {
      title: "Gobierno",
      items: [
        "Cédula vigente (frente y reverso).",
        "Talonarios / comprobantes de pago recientes.",
        "Carta de trabajo o certificación (si aplica).",
        "Referencia bancaria (si aplica).",
        "Comprobante de residencia (según el caso).",
      ],
    },
    {
      title: "Pensionados / Jubilados",
      items: [
        "Cédula vigente (frente y reverso).",
        "Comprobante de pensión/jubilación (documento vigente).",
        "Estado de cuenta o referencia bancaria (si aplica).",
        "Comprobante de residencia (según el caso).",
        "Documento adicional si aplica (ej. apoderado/representante).",
      ],
    },
  ];

  return (
    <section id="requisitos" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Requisitos por categoría</h2>
            <p className="mt-3 text-white/70">
              Selecciona tu tipo de ingreso para ver una lista clara de lo que normalmente se solicita.
              (Puede variar según evaluación.)
            </p>

            <div className="mt-6 space-y-3">
              {groups.map((g, idx) => (
                <details
                  key={g.title}
                  className="glass rounded-3xl p-5"
                  open={idx === 0}
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white/90">
                    {g.title}
                  </summary>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-white/55">
                    *Sujeto a evaluación. No garantizamos aprobación.
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Optional image placeholder */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              aria-label="Imagen de requisitos (placeholder)"
            >
              <img
                src="/images/requirements.jpg"
                alt="Requisitos (imagen referencial)"
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-[#0b1220]/60 p-3 text-sm text-white/80">
                Te decimos exactamente qué enviar según tu caso, para evitar vueltas.
              </div>
            </div>

            <div className="mt-4 text-xs text-white/55">
              Tip: si no tienes todo listo, igual puedes escribirnos; te orientamos con lo esencial.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
