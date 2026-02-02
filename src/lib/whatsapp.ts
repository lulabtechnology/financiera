import { waLink, WA_DEFAULT_MESSAGE } from "./site";

export type IncomeType = "Privado" | "Gobierno" | "Jubilado/Pensionado" | "Independiente";

export type PrequalFormData = {
  fullName: string;
  cedula?: string;
  age: string;
  incomeType: IncomeType | "";
  incomeRange: string;
  desiredAmountRange: string;
  desiredTerm?: string;
  province: string;
  comments?: string;
};

function cleanLine(label: string, value?: string) {
  const v = (value ?? "").trim();
  if (!v) return null;
  return `• ${label}: ${v}`;
}

export function buildPrequalMessage(data: PrequalFormData) {
  const lines: Array<string | null> = [
    "Hola RapiCredito 👋",
    "",
    "Quiero precalificar un préstamo personal.",
    "",
    cleanLine("Nombre", data.fullName),
    cleanLine("Cédula", data.cedula),
    cleanLine("Edad", data.age),
    cleanLine("Tipo de ingreso", data.incomeType),
    cleanLine("Ingreso mensual aprox.", data.incomeRange),
    cleanLine("Monto deseado", data.desiredAmountRange),
    cleanLine("Plazo deseado", data.desiredTerm),
    cleanLine("Provincia/Zona", data.province),
    data.comments?.trim() ? "" : null,
    data.comments?.trim() ? "Comentarios:" : null,
    data.comments?.trim() ? data.comments.trim() : null,
    "",
    "¿Me apoyan con la cotización y los requisitos?",
  ];

  return lines.filter(Boolean).join("\n");
}

export function buildFallbackMessage(name?: string) {
  const n = (name ?? "").trim();
  const intro = n ? `Hola RapiCredito 👋\n\nSoy ${n}.` : "Hola RapiCredito 👋";
  return `${intro}\n\n${WA_DEFAULT_MESSAGE}`;
}

export function buildWaUrlFromMessage(message: string) {
  return waLink(message);
}
