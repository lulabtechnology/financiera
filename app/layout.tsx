import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "préstamos personales",
    "Panamá",
    "cotización por WhatsApp",
    "asesoría financiera",
    "precalificación",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} - ${SITE.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
