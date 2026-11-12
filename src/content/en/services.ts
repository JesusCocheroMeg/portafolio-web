// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { Services } from "../types";

export const services: Services = {
  intro: "I build systems that solve real operational problems and pay for themselves.",
  items: [
    {
      id: "custom",
      title: "Custom systems",
      text: "CRMs, ERPs and internal platforms built around how your company works, not the other way around. Stop paying for licenses of systems that don't fit.",
    },
    {
      id: "ai",
      title: "AI in your processes",
      text: "AI that records, evaluates and suggests: sales that fill themselves in and audited calls.",
    },
    {
      id: "automation",
      title: "Task automation",
      text: "What's done by hand today, done automatically: billing, reports, bulk uploads from Excel, reminders and follow-ups.",
    },
    {
      id: "continue",
      title: "Continuing an ongoing project",
      text: "If you have a half-built system or no one to maintain it, I join in, review what's needed and keep building on what already exists.",
    },
    {
      id: "cloud",
      title: "Cloud architecture and deployment",
      text: "Secure, fast, easy-to-maintain systems, deployed on Google Cloud, Vercel or the infrastructure you already use, if it's within my reach; if it isn't, I'll tell you from the start.",
    },
  ],
};
