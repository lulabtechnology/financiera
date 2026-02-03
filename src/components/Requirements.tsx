"use client";

import { useMemo, useState } from "react";

type Key = "privada" | "gobierno" | "pensionado";

export default function Requirements() {
  const groups = useMemo(() => ([
    {
      key: "privada" as Key,
      title: "Empresa privada",
      subtitle: "Requisitos más comunes para asalariados del sector privado.",
      image: "/images/requirements.jpg",
      items: [
        "Cédula vigente (frente y reverso).",
        "Carta de trabajo o constancia laboral.",
        "Comprobantes de ingreso recientes (talonarios / pagos).",
        "Referencia bancaria (si aplica).",
        "Recibo de servicio o comprobante de residencia (según el caso).",
      ],
    },
    {
      key: "gobierno" as Key,
      title: "Gobierno",
      subtitle: "Requisitos típicos para servidores públicos.",
      image: "/images/requirements.jpg",
      items: [
        "Cédula vigente (frente y reverso).",
        "Talonarios / comprobantes de pago recientes.",
        "Carta de trabajo o certificación (si aplica).",
        "Referencia bancaria (si aplica).",
        "Comprobante de residencia (según el caso).",
      ],
    },
    {
      key: "pensionado" as Key,
      title: "Pensionados / Jubilados",
      subtitle: "Requisitos frecuentes para pensión o jubilación.",
      image: "/images/requirements.jpg",
      items: [
        "Cédula vigente (frente y reverso).",
        "Comprobante de pensión/jubilación (documento vigente).",
        "Estado de cuenta o referencia bancaria (si aplica).",
        "Comprobante de residencia (según el caso).",
        "Documento adicional si aplica (ej. apoderado/representante).",
      ],
    },
  ]), []);

  const [openKey, setOpenKey] = useState<Key>("privada");

  const active = groups.find(g => g.key === openKey) ?? groups[0];

  function openAndScroll(key: Key) {
    setOpenKey(key);
    const el = document.getElementById("requisitos-detalle");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="requisitos" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Requisitos por categoría</h2>
          <p className="mt-3 text-black/70">
            Primero lo visual (para entender rápido). Luego, si quieres, abres el detalle por categoría.
            <span className="block mt-2 text-xs text-black/55">
              *Puede variar según evaluación. No garantizamos aprobación.
            </span>
          </p>
        </div>

        {/* Visual cards FIRST */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.key} className="card overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/10]">
                <img
                  src={g.image}
                  alt={`Imagen referencial - ${g.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                    {g.title}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {g.subtitle}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-black">
                    Ver requisitos
                  </div>
                  <button
                    type="button"
                    onClick={() => openAndScroll(g.key)}
                    className="rounded-xl bg-[var(--brand)] px-3 py-2 text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
                  >
                    Ver más
                  </button>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  {/* Preview corto (2 items) */}
                  {g.items.slice(0, 2).map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                  <li className="text-xs text-black/55">+ ver lista completa</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Detail (clean, no saturar) */}
        <div id="requisitos-detalle" className="mt-10 card rounded-3xl p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-[rgba(210,19,21,0.10)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
                Detalle
              </div>
              <h3 className="mt-3 text-xl font-semibold">{active.title}</h3>
              <p className="mt-2 text-sm text-black/70">{active.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => setOpenKey(g.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition border",
                    openKey === g.key
                      ? "bg-[var(--brand)] text-white border-transparent"
                      : "bg-white text-black border-black/10 hover:bg-black/5"
                  ].join(" ")}
                >
                  {g.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-black/10 bg-[var(--surface2)] p-5">
            <ul className="grid gap-3 text-sm text-black/75 md:grid-cols-2">
              {active.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs text-black/55">
              *Sujeto a evaluación y verificación de información. No garantizamos aprobación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
