import type { Ui } from "../types";

export const ui: Ui = {
  meta: { title: "Software Development", ogLocale: "en_US" },
  nav: {
    label: "Main",
    goHome: "go to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "ES",
    switchLabel: "Ver en español",
  },
  hero: { stagesLabel: "Stages I cover", seeProjects: "See projects", contactMe: "Contact me" },
  headings: {
    services: { eyebrow: "Services", title: ["What I can do for ", "your business", ""] },
    about: { eyebrow: "About", title: ["How I ", "work", ""] },
    projects: { eyebrow: "Portfolio", title: ["Featured ", "projects", ""] },
    tech: { eyebrow: "Tech", title: ["What I ", "build", " with"] },
    contact: { eyebrow: "Contact" },
  },
  about: { career: "Career", work: "Work", study: "Education" },
  tech: {
    featured: "Featured technologies",
    note: "The ones I've used most in production. They're not the only ones: I adapt to whatever your team already uses or the project calls for, as long as it's within my reach. If something is far from what I know, I'll tell you from the start.",
    tools: "Featured infrastructure and tools",
  },
  project: { more: "See more", less: "See less", screenshots: "See screenshots ({n})", tech: "Tech" },
  gallery: {
    eyebrow: "Screenshots",
    dialog: "Screenshots of {title}",
    close: "Close",
    prev: "Previous",
    next: "Next",
    view: "View screenshot {n}",
  },
  footer: { versionTitle: "See what changed in this version" },
  suggest: { text: "Este sitio también está en español.", go: "Ver en español", stay: "Seguir en inglés" },
};
