export const SITE = {
  name: "RapiCredito",
  title: "RapiCredito | Préstamos personales rápidos en Panamá",
  description:
    "Préstamos personales rápidos con asesoría humana y proceso claro. Precalifica en minutos y cotiza por WhatsApp.",
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER ?? "50768362408",
  igHandle: (process.env.NEXT_PUBLIC_IG_HANDLE ?? "rapcredito").replace("@", ""),
  ogImage: "/images/og.jpg",
  defaultHours: "Lunes a viernes (horario laboral)",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}

export function igLink() {
  return `https://instagram.com/${SITE.igHandle}`;
}

export const WA_CTA = "Cotiza tu préstamo ahora por WhatsApp";

export const WA_DEFAULT_MESSAGE =
  "Hola RapiCredito 👋\n\nQuiero cotizar un préstamo personal. ¿Me apoyan con la precalificación y requisitos?\n";
