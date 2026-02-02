import Link from "next/link";
import { igLink, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.svg"
              alt="RapiCredito"
              className="h-10 w-10 rounded-xl bg-white/5 p-1 ring-1 ring-white/10"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{SITE.name}</div>
              <div className="text-xs text-white/60">Asesoría humana · Proceso claro</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <Link href="/politica-de-privacidad" className="hover:text-white transition">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition">Términos</Link>
            <a href={igLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-xs text-white/60">
          <div className="font-semibold text-white/75">Disclaimer</div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Sujeto a evaluación y verificación de información.</li>
            <li>No garantizamos aprobación.</li>
            <li>Esta landing no procesa pagos en línea.</li>
          </ul>
        </div>

        <div className="mt-6 text-xs text-white/45">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
