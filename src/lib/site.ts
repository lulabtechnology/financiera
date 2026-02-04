export const SITE = {
  name: "RapiCredito",
  title: "Cotiza tu préstamo por WhatsApp | RapiCredito",
  description:
    "Préstamos personales con asesoría humana y proceso claro. Precalifica y cotiza por WhatsApp. Sujeto a evaluación.",
  ogImage: "/images/og.jpg",
  igHandle: process.env.NEXT_PUBLIC_IG_HANDLE || "rapcredito",
  defaultHours: "Lunes a viernes (horario laboral)",

  // WhatsApp (principal + alterno)
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER || "50768362408",
  waNumberAlt: process.env.NEXT_PUBLIC_WA_NUMBER_2 || "50762013360",

  // Teléfono formateado (solo para mostrar)
  phoneDisplayPrimary: "6836-2408",
  phoneDisplayAlt: "6201-3360",
};

export const WA_CTA = "Cotiza tu préstamo ahora por WhatsApp";

/** ✅ Esto es lo que te faltaba exportar (lo usa whatsapp.ts) */
export const WA_DEFAULT_MESSAGE =
  "Hola, quiero cotizar un préstamo. ¿Me orientan por favor?";

export function igLink() {
  return `https://instagram.com/${SITE.igHandle}`;
}

function encodeWA(text: string) {
  return encodeURIComponent(text);
}

/**
 * ✅ Link WhatsApp (por defecto usa el principal, pero puedes pasar el alterno)
 * Ej: waLink("Hola", SITE.waNumberAlt)
 */
export function waLink(message: string, numberOverride?: string) {
  const n = (numberOverride || SITE.waNumber).replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeWA(message)}`;
}
