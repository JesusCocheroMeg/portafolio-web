import { FaWhatsapp } from "react-icons/fa";
import { getContent, type Lang } from "@/content";

/** Botón fijo en la esquina inferior derecha. Verde WhatsApp para que se reconozca al instante. */
export function WhatsAppButton({ lang }: { lang: Lang }) {
  const { whatsappFloat } = getContent(lang);
  return (
    <a
      href={whatsappFloat.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappFloat.label}
      data-umami-event="contacto"
      data-umami-event-canal="whatsapp"
      data-umami-event-lugar="boton-flotante"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 text-white shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#1ebe5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 motion-reduce:transition-none"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
      <span className="hidden pr-1 text-sm font-bold md:group-hover:inline md:group-focus-visible:inline">
        {whatsappFloat.label}
      </span>
    </a>
  );
}
