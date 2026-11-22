// Fuente: centro/contenido/sobre-mi.md, sección Contacto (DEC-05, DEC-06).
import type { Contact, WhatsappFloat } from "../types";

export const contact: Contact = {
  title: "¿Hablamos de tu proyecto?",
  text: "Cuéntame qué necesitas y vemos juntos el punto correcto de la balanza entre lo que necesita y lo que cuesta.",
  links: [
    { id: "email", label: "Correo", value: "contacto@jesuscochero.dev", href: "mailto:contacto@jesuscochero.dev" },
    { id: "whatsapp", label: "WhatsApp", value: "304 468 5281", href: "https://wa.me/573044685281" },
    { id: "github", label: "GitHub", value: "JesusCocheroMeg", href: "https://github.com/JesusCocheroMeg" },
    { id: "linkedin", label: "LinkedIn", value: "jesuscocherodev", href: "https://www.linkedin.com/in/jesuscocherodev/" },
  ],
  // Mismo contenido en Instagram, TikTok y YouTube: basta con Instagram (decisión 2026-11-22).
  social: [{ id: "instagram", label: "Instagram", href: "https://www.instagram.com/jesus.cochero.dev/" }],
};

// Botón flotante (F14): abre WhatsApp con un mensaje ya escrito.
export const whatsappFloat: WhatsappFloat = {
  label: "Escríbeme por WhatsApp",
  href: `https://wa.me/573044685281?text=${encodeURIComponent(
    "Hola Jesús, vi tu portafolio y me gustaría hablar contigo sobre un proyecto.",
  )}`,
};
