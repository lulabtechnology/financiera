import { WA_CTA, waLink } from "@/lib/site";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink(WA_CTA)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para cotizar"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--wa)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(11,11,12,0.18)] hover:brightness-95 transition border-2 border-[rgba(210,19,21,0.35)]"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M12 3c-5 0-9 3.6-9 8.1 0 2.3 1.1 4.4 3 5.9L5 21l4.2-2.2c.9.2 1.8.3 2.8.3 5 0 9-3.6 9-8.1S17 3 12 3z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M8.5 12.2c1.8 2.2 3.9 3.6 6.2 4.1.5.1 1-.2 1.2-.7l.6-1.5c.2-.4 0-.9-.4-1.1l-1.4-.7c-.4-.2-.9-.1-1.1.3l-.3.6c-1.1-.4-2.1-1.2-3-2.2l.5-.4c.4-.3.4-.8.1-1.2l-1-1.2c-.3-.4-.8-.4-1.2-.1l-1.3 1c-.4.3-.5.8-.3 1.2z"
            fill="currentColor"
          />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}
