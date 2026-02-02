"use client";

import { useMemo, useState } from "react";
import type { IncomeType, PrequalFormData } from "@/lib/whatsapp";
import { buildFallbackMessage, buildPrequalMessage, buildWaUrlFromMessage } from "@/lib/whatsapp";
import { WA_CTA } from "@/lib/site";

const incomeTypes: IncomeType[] = ["Privado", "Gobierno", "Jubilado/Pensionado", "Independiente"];

const incomeRanges = [
  "Menos de B/. 800",
  "B/. 800 – 1,200",
  "B/. 1,201 – 1,800",
  "B/. 1,801 – 2,500",
  "Más de B/. 2,500",
];

const amountRanges = [
  "B/. 300 – 800",
  "B/. 801 – 1,500",
  "B/. 1,501 – 3,000",
  "B/. 3,001 – 5,000",
  "Más de B/. 5,000",
];

const termOptions = ["3 meses", "6 meses", "12 meses", "18 meses", "24 meses", "Prefiero que me orienten"];

const provinces = [
  "Panamá",
  "Panamá Oeste",
  "Colón",
  "Coclé",
  "Chiriquí",
  "Herrera",
  "Los Santos",
  "Veraguas",
  "Darién",
  "Bocas del Toro",
  "Guna Yala",
  "Otra / No estoy seguro",
];

function isValidCedula(v: string) {
  // Validación ligera: permite números, guiones y letras (algunas cédulas pueden incluir letras en formatos especiales).
  // No es una validación oficial, solo evita caracteres raros.
  return /^[A-Za-z0-9-]+$/.test(v.trim());
}

export default function PrequalificationForm() {
  const [data, setData] = useState<PrequalFormData>({
    fullName: "",
    cedula: "",
    age: "",
    incomeType: "",
    incomeRange: incomeRanges[1],
    desiredAmountRange: amountRanges[1],
    desiredTerm: "",
    province: "Panamá",
    comments: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const canSend = useMemo(() => {
    return data.fullName.trim().length >= 3 && data.age.trim() !== "" && data.incomeType !== "" && data.province.trim() !== "";
  }, [data]);

  function onChange<K extends keyof PrequalFormData>(key: K, value: PrequalFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  }

  function validate() {
    const e: Record<string, string> = {};

    if (data.fullName.trim().length < 3) e.fullName = "Escribe tu nombre y apellido.";
    if (!data.age.trim()) e.age = "Indica tu edad.";
    else {
      const n = Number(data.age);
      if (Number.isNaN(n)) e.age = "Edad inválida.";
      else if (n < 21) e.age = "Debes ser mayor de 21 para precalificar.";
      else if (n > 85) e.age = "Verifica tu edad.";
    }

    if (!data.incomeType) e.incomeType = "Selecciona tu tipo de ingreso.";
    if (!data.province.trim()) e.province = "Selecciona una provincia/zona.";

    const ced = (data.cedula ?? "").trim();
    if (ced && !isValidCedula(ced)) e.cedula = "Cédula: usa solo letras/números y guiones.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function openWhatsApp(message: string) {
    const url = buildWaUrlFromMessage(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const msg = buildPrequalMessage({
      ...data,
      cedula: (data.cedula ?? "").trim() || undefined,
      desiredTerm: (data.desiredTerm ?? "").trim() || undefined,
      comments: (data.comments ?? "").trim() || undefined,
    });
    openWhatsApp(msg);
  }

  function sendFallback() {
    openWhatsApp(buildFallbackMessage(data.fullName));
  }

  return (
    <section id="precalificacion" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Precalificación</h2>
            <p className="mt-3 text-white/70">
              Completa lo básico (toma menos de 2 minutos). Al enviar, se abrirá WhatsApp con un mensaje ordenado para continuar con un asesor.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold">¿Prefieres escribir directo?</h3>
              <p className="mt-2 text-sm text-white/70">
                Puedes tocar el botón y te abrimos WhatsApp incluso si no llenas todo.
              </p>
              <button
                type="button"
                onClick={sendFallback}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 transition"
              >
                {WA_CTA}
              </button>
              <p className="mt-3 text-xs text-white/55">
                *Sujeto a evaluación. No garantizamos aprobación.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 shadow-soft">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-semibold" htmlFor="fullName">Nombre y Apellido</label>
                <input
                  id="fullName"
                  value={data.fullName}
                  onChange={(e) => onChange("fullName", e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                  placeholder="Ej: Juan Pérez"
                  autoComplete="name"
                />
                {errors.fullName && <p className="mt-1 text-xs text-rose-300">{errors.fullName}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" htmlFor="cedula">Cédula (opcional)</label>
                  <input
                    id="cedula"
                    value={data.cedula}
                    onChange={(e) => onChange("cedula", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="Ej: 8-123-456"
                    inputMode="text"
                  />
                  {errors.cedula && <p className="mt-1 text-xs text-rose-300">{errors.cedula}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="age">Edad (≥ 21)</label>
                  <input
                    id="age"
                    value={data.age}
                    onChange={(e) => onChange("age", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="Ej: 29"
                    inputMode="numeric"
                  />
                  {errors.age && <p className="mt-1 text-xs text-rose-300">{errors.age}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold" htmlFor="incomeType">Tipo de ingreso</label>
                <select
                  id="incomeType"
                  value={data.incomeType}
                  onChange={(e) => onChange("incomeType", e.target.value as any)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                >
                  <option value="" className="bg-[#0b1220]">Selecciona...</option>
                  {incomeTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#0b1220]">{t}</option>
                  ))}
                </select>
                {errors.incomeType && <p className="mt-1 text-xs text-rose-300">{errors.incomeType}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" htmlFor="incomeRange">Ingreso mensual aprox.</label>
                  <select
                    id="incomeRange"
                    value={data.incomeRange}
                    onChange={(e) => onChange("incomeRange", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                  >
                    {incomeRanges.map((r) => (
                      <option key={r} value={r} className="bg-[#0b1220]">{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="desiredAmountRange">Monto deseado</label>
                  <select
                    id="desiredAmountRange"
                    value={data.desiredAmountRange}
                    onChange={(e) => onChange("desiredAmountRange", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                  >
                    {amountRanges.map((r) => (
                      <option key={r} value={r} className="bg-[#0b1220]">{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" htmlFor="desiredTerm">Plazo deseado (opcional)</label>
                  <select
                    id="desiredTerm"
                    value={data.desiredTerm}
                    onChange={(e) => onChange("desiredTerm", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                  >
                    <option value="" className="bg-[#0b1220]">No estoy seguro</option>
                    {termOptions.map((r) => (
                      <option key={r} value={r} className="bg-[#0b1220]">{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="province">Provincia / Zona</label>
                  <select
                    id="province"
                    value={data.province}
                    onChange={(e) => onChange("province", e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                  >
                    {provinces.map((p) => (
                      <option key={p} value={p} className="bg-[#0b1220]">{p}</option>
                    ))}
                  </select>
                  {errors.province && <p className="mt-1 text-xs text-rose-300">{errors.province}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold" htmlFor="comments">Comentarios (opcional)</label>
                <textarea
                  id="comments"
                  value={data.comments}
                  onChange={(e) => onChange("comments", e.target.value)}
                  className="mt-2 min-h-[92px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                  placeholder="Ej: quiero consolidar deudas / necesito para una urgencia / me orientan con requisitos…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-400 transition disabled:opacity-60 disabled:hover:bg-emerald-500"
                disabled={!canSend}
                aria-disabled={!canSend}
              >
                Enviar precalificación por WhatsApp
              </button>

              <button
                type="button"
                onClick={sendFallback}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Enviar por WhatsApp (sin llenar todo)
              </button>

              <p className="text-xs text-white/55">
                Al enviar, se abre WhatsApp con un mensaje listo. No se procesan pagos en esta landing.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
