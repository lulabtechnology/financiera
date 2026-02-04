import { WA_DEFAULT_MESSAGE, waLink } from "./site";

export type IncomeType =
  | "Privado"
  | "Gobierno"
  | "Jubilado/Pensionado"
  | "Independiente";

export type PrequalFormData = {
  fullName: string;
  cedula?: string;
  age: string; // se valida en el form
  incomeType: IncomeType | "";
  incomeRange: string;
  desiredAmountRange: string;
  desiredTerm?: string;
  province: string;
  comments?: string;
};

function clean(v?: string) {
  const s = (v ?? "").trim();
  return s.length ? s : undefined;
}

export function buildPrequalMessage(data: PrequalFormData) {
  const name = clean(data.fullName) || "No indicado";
  const ced = clean(data.cedula);
  const age = clean(data.age);
  const incomeType = clean(data.incomeType) || "No indicado";
  const incomeRange = clean(data.incomeRange) || "No indicado";
  const desiredAmount = clean(data.desiredAmountRange) || "No indicado";
  const desiredTerm = clean(data.desiredTerm);
  const province = clean(data.province) || "No indicado";
  const comments = clean(data.comments);

  const lines: string[] = [];
  lines.push("👋 *Precalificación - RapiCredito*");
  lines.push("");
  lines.push(`• *Nombre:* ${name}`);
  if (ced) lines.push(`• *Cédula:* ${ced}`);
  if (age) lines.push(`• *Edad:* ${age}`);
  lines.push(`• *Tipo de ingreso:* ${incomeType}`);
  lines.push(`• *Ingreso mensual aprox:* ${incomeRange}`);
  lines.push(`• *Monto deseado:* ${desiredAmount}`);
  if (desiredTerm) lines.push(`• *Plazo deseado:* ${desiredTerm}`);
  lines.push(`• *Provincia/Zona:* ${province}`);
  if (comments) {
    lines.push("");
    lines.push(`📝 *Comentarios:* ${comments}`);
  }
  lines.push("");
  lines.push("¿Qué requisitos aplican en mi caso y cuáles serían los próximos pasos?");

  return lines.join("\n");
}

export function buildFallbackMessage(fullName?: string) {
  const name = clean(fullName);
  if (!name) return WA_DEFAULT_MESSAGE;
  return `Hola, soy ${name}. ${WA_DEFAULT_MESSAGE}`;
}

/** ✅ Devuelve el link final wa.me... listo para window.open */
export function buildWaUrlFromMessage(message: string, numberOverride?: string) {
  return waLink(message, numberOverride);
}
