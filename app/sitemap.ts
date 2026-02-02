import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Si defines NEXT_PUBLIC_SITE_URL, Next construye URLs absolutas en metadata.
  // Aquí dejamos rutas relativas (válidas en Vercel/Next).
  return [
    { url: "/", lastModified: new Date() },
    { url: "/politica-de-privacidad", lastModified: new Date() },
    { url: "/terminos", lastModified: new Date() },
  ];
}
