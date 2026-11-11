// Fuente: centro/contenido/sobre-mi.md, «Qué puedo hacer por tu empresa» (F16, DEC-06).
export type ServiceId = "custom" | "ai" | "automation" | "continue" | "cloud";

export const services = {
  title: "Qué puedo hacer por tu empresa",
  intro: "Construyo sistemas que resuelven problemas reales de la operación y que se pagan solos.",
  items: [
    {
      id: "custom",
      title: "Sistemas a la medida",
      text: "CRM, ERP y plataformas internas hechas para cómo trabaja tu empresa, no al revés. Dejas de pagar licencias de sistemas que no se ajustan.",
      proof: "Focus · Nova",
    },
    {
      id: "ai",
      title: "Inteligencia artificial en tus procesos",
      text: "IA que registra, evalúa y sugiere: ventas que se llenan solas, llamadas auditadas, asistentes que atienden 24/7.",
      proof: "ARM · Speech Analytics · Enigma",
    },
    {
      id: "automation",
      title: "Automatización de tareas",
      text: "Lo que hoy se hace a mano, hecho solo: facturación, reportes, cargas masivas desde Excel, recordatorios y seguimientos.",
      proof: "Speech Analytics · Focus",
    },
    {
      id: "continue",
      title: "Continuar un proyecto en marcha",
      text: "Si ya tienes un sistema a medias o sin quién lo mantenga, me sumo, reviso lo necesario y sigo construyendo sobre lo que existe.",
    },
    {
      id: "cloud",
      title: "Arquitectura y despliegue en la nube",
      text: "Sistemas seguros, rápidos y fáciles de mantener, desplegados en Google Cloud, Vercel o la infraestructura que ya uses.",
      proof: "Nova",
    },
  ] satisfies { id: ServiceId; title: string; text: string; proof?: string }[],
};
