// Fuente: centro/contenido/sobre-mi.md, sección Contacto (DEC-05, DEC-06).
export const contact = {
  title: "¿Hablamos de tu proyecto?",
  text: "Cuéntame qué necesitas y vemos juntos el punto correcto de la balanza entre lo que necesita y lo que cuesta.",
  links: [
    { id: "email", label: "Correo", value: "jesus3928cf@gmail.com", href: "mailto:jesus3928cf@gmail.com" },
    { id: "whatsapp", label: "WhatsApp", value: "304 468 5281", href: "https://wa.me/573044685281" },
    { id: "github", label: "GitHub", value: "JesusCocheroMeg", href: "https://github.com/JesusCocheroMeg" },
    { id: "linkedin", label: "LinkedIn", value: "jesus-cf", href: "https://www.linkedin.com/in/jesus-cf-494502272/" },
  ],
} as const;

// Botón flotante (F14): abre WhatsApp con un mensaje ya escrito.
export const whatsappFloat = {
  label: "Escríbeme por WhatsApp",
  href: `https://wa.me/573044685281?text=${encodeURIComponent(
    "Hola Jesús, vi tu portafolio y me gustaría hablar contigo sobre un proyecto.",
  )}`,
};

export type ContactId = (typeof contact.links)[number]["id"];
