import type { Ui } from "../types";

export const ui: Ui = {
  meta: { title: "Desarrollo de software", ogLocale: "es_CO" },
  nav: {
    label: "Principal",
    goHome: "ir al inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchTo: "EN",
    switchLabel: "Read in English",
  },
  hero: { stagesLabel: "Etapas que cubro", seeProjects: "Ver proyectos", contactMe: "Contáctame" },
  headings: {
    services: { eyebrow: "Servicios", title: ["Qué puedo hacer por ", "tu empresa", ""] },
    about: { eyebrow: "Sobre mí", title: ["Cómo ", "trabajo", ""] },
    projects: { eyebrow: "Portafolio", title: ["Proyectos ", "destacados", ""] },
    tech: { eyebrow: "Tecnologías", title: ["Con qué ", "construyo", ""] },
    contact: { eyebrow: "Contacto" },
  },
  about: { career: "Trayectoria", work: "Trabajo", study: "Estudio" },
  tech: {
    featured: "Tecnologías destacadas",
    note: "Las que más he usado en producción. No son las únicas: me adapto a las que ya use tu equipo o a las que pida el proyecto, siempre que estén a mi alcance. Si algo está muy lejos de lo que domino, te lo digo desde el principio.",
    tools: "Infraestructura y herramientas destacadas",
  },
  project: { more: "Ver más", less: "Ver menos", screenshots: "Ver capturas ({n})", tech: "Tecnologías" },
  gallery: {
    eyebrow: "Capturas",
    dialog: "Capturas de {title}",
    close: "Cerrar",
    prev: "Anterior",
    next: "Siguiente",
    view: "Ver captura {n}",
  },
  footer: { versionTitle: "Ver qué cambió en esta versión" },
  suggest: { text: "This site is also available in English.", go: "View in English", stay: "Stay in Spanish" },
};
