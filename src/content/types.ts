// Forma del contenido del sitio. Español (`es/`) e inglés (`en/`) la cumplen igual: si falta un texto, no compila.
export type Lang = "es" | "en";

export type SectionId = "inicio" | "servicios" | "sobre-mi" | "proyectos" | "tecnologias" | "contacto";
export type ServiceId = "custom" | "ai" | "automation" | "continue" | "cloud";
export type ContactId = "email" | "whatsapp" | "github" | "linkedin";

/** Título con una parte resaltada: [antes, resaltado, después]. */
export type Heading = readonly [string, string, string];

export type Site = { name: string; url: string; headline: string; description: string };
export type Section = { id: SectionId; label: string };

export type Profile = {
  greeting: string;
  roles: readonly string[];
  stages: readonly string[];
  stats: readonly { value: string; label: string }[];
  photo: { src: string; alt: string; width: number; height: number };
};

export type Services = { intro: string; items: readonly { id: ServiceId; title: string; text: string }[] };
export type Quality = { title: string; text: string; proof: string; pillars: readonly string[] };
export type Adapt = { title: string; intro: string; cases: readonly { title: string; text: string }[]; closing: string };

export type CareerItem = {
  period: string;
  title: string;
  place: string;
  text: string;
  kind: "trabajo" | "estudio";
  current?: boolean;
};

export type Project = {
  name: string;
  role: string;
  summary: string;
  highlight?: string;
  details: readonly string[];
  bullets?: readonly string[];
  tech?: readonly string[];
  link?: { href: string; label: string };
  /** Ocupa todo el ancho de la fila. */
  featured?: boolean;
  /** Capturas en `public/proyectos/`. La primera es la portada. Se ocultan con NEXT_PUBLIC_SHOW_PROJECT_IMAGES=false. */
  images?: readonly { src: string; alt: string }[];
};
export type Company = { name: string; note: string; projects: readonly Project[] };

export type ContactLink = { id: ContactId; label: string; value: string; href: string };
export type Contact = { title: string; text: string; links: readonly ContactLink[] };
export type WhatsappFloat = { label: string; href: string };

/** Textos de la interfaz que no son contenido: botones, etiquetas y títulos de sección. */
export type Ui = {
  meta: { title: string; ogLocale: string };
  nav: { label: string; goHome: string; openMenu: string; closeMenu: string; switchTo: string; switchLabel: string };
  hero: { stagesLabel: string; seeProjects: string; contactMe: string };
  headings: {
    services: { eyebrow: string; title: Heading };
    about: { eyebrow: string; title: Heading };
    projects: { eyebrow: string; title: Heading };
    tech: { eyebrow: string; title: Heading };
    contact: { eyebrow: string };
  };
  about: { career: string; work: string; study: string };
  tech: { featured: string; note: string; tools: string };
  project: { more: string; less: string; screenshots: string; tech: string };
  gallery: { eyebrow: string; dialog: string; close: string; prev: string; next: string; view: string };
  footer: { versionTitle: string };
  /** Aviso para quien llega con el navegador en el otro idioma. Va escrito en ese otro idioma. */
  suggest: { text: string; go: string; stay: string };
};

export type Content = {
  site: Site;
  sections: readonly Section[];
  profile: Profile;
  services: Services;
  quality: Quality;
  adapt: Adapt;
  career: readonly CareerItem[];
  companies: readonly Company[];
  contact: Contact;
  whatsappFloat: WhatsappFloat;
  ui: Ui;
};
