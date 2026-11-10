// Fuente: centro/contenido/sobre-mi.md, sección Contacto (DEC-05, DEC-06).
export const contact = {
  title: "¿Hablamos de tu proyecto?",
  text: "Cuéntame qué necesitas y vemos juntos el punto correcto de la balanza entre lo que necesita y lo que cuesta.",
  links: [
    { id: "email", label: "Correo", value: "jesus3928cf@gmail.com", href: "mailto:jesus3928cf@gmail.com" },
    { id: "whatsapp", label: "WhatsApp", value: "323 525 2137", href: "https://wa.me/573235252137" },
    { id: "github", label: "GitHub", value: "JesusCocheroMeg", href: "https://github.com/JesusCocheroMeg" },
    { id: "linkedin", label: "LinkedIn", value: "jesus-cf", href: "https://www.linkedin.com/in/jesus-cf-494502272/" },
  ],
} as const;

export type ContactId = (typeof contact.links)[number]["id"];
