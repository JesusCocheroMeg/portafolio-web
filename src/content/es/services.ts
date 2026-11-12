// Fuente: centro/contenido/sobre-mi.md, «Qué puedo hacer por tu empresa» (F16, DEC-06).
import type { Services } from "../types";

export const services: Services = {
  intro: "Construyo sistemas que resuelven problemas reales de la operación y que se pagan solos.",
  items: [
    {
      id: "custom",
      title: "Sistemas a la medida",
      text: "CRM, ERP y plataformas internas hechas para cómo trabaja tu empresa, no al revés. Dejas de pagar licencias de sistemas que no se ajustan.",
    },
    {
      id: "ai",
      title: "Inteligencia artificial en tus procesos",
      text: "IA que registra, evalúa y sugiere: ventas que se llenan solas y llamadas auditadas.",
    },
    {
      id: "automation",
      title: "Automatización de tareas",
      text: "Lo que hoy se hace a mano, hecho solo: facturación, reportes, cargas masivas desde Excel, recordatorios y seguimientos.",
    },
    {
      id: "continue",
      title: "Continuar un proyecto en marcha",
      text: "Si ya tienes un sistema a medias o sin quién lo mantenga, me sumo, reviso lo necesario y sigo construyendo sobre lo que existe.",
    },
    {
      id: "cloud",
      title: "Arquitectura y despliegue en la nube",
      text: "Sistemas seguros, rápidos y fáciles de mantener, desplegados en Google Cloud, Vercel o la infraestructura que ya uses, si está a mi alcance; si no, te lo digo desde el principio.",
    },
  ],
};
