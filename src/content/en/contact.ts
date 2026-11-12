// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { Contact, WhatsappFloat } from "../types";
import { contact as es } from "../es/contact";

const label = { email: "Email", whatsapp: "WhatsApp", github: "GitHub", linkedin: "LinkedIn" } as const;

export const contact: Contact = {
  title: "Shall we talk about your project?",
  text: "Tell me what you need and together we'll find the right balance between what it needs and what it costs. Happy to work with you in English by email or chat.",
  // Mismos datos que en español; solo cambian las etiquetas.
  links: es.links.map((l) => ({ ...l, label: label[l.id] })),
};

const whatsappNumber = es.links.find((l) => l.id === "whatsapp")!.href;

export const whatsappFloat: WhatsappFloat = {
  label: "Message me on WhatsApp",
  href: `${whatsappNumber}?text=${encodeURIComponent(
    "Hi Jesús, I saw your portfolio and I'd like to talk to you about a project.",
  )}`,
};
