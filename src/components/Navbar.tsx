import { SITE, WA_CTA, waLink } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#requisitos", label: "Requisitos" },
  { href: "#precalificacion", label: "Precalificación" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] glass px-4 py-2"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="RapiCredito"
            className="h-10 w-auto"
            loading="eager"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/70 hover:text-black transition"
            >
              {l.label}
            </a>
          ))}

          <a
            href={waLink(WA_CTA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/5 transition"
            aria-label="Abrir WhatsApp"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <details className="group">
            <summary className="list-none cursor-pointer rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-black/5 transition">
              Menú
            </summary>
            <div className="mt-2 w-[min(92vw,360px)] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_35px_rgba(11,11,12,0.10)]">
              <nav aria-label="Menú móvil" className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm text-black/75 hover:bg-black/5 hover:text-black transition"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={waLink(WA_CTA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-xl bg-[var(--brand)] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[var(--brand2)] transition"
                >
                  {WA_CTA}
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
