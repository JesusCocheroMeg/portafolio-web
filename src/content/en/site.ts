// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { Section, Site } from "../types";

export const site: Site = {
  name: "Jesús Cochero",
  url: "https://jesuscochero.dev",
  headline: "Secure, efficient applications that show up in your results.",
  description:
    "I take business projects all the way from idea to production, focused on improving your operations and your numbers.",
};

export const sections: readonly Section[] = [
  { id: "inicio", label: "Home" },
  { id: "servicios", label: "Services" },
  { id: "sobre-mi", label: "About" },
  { id: "proyectos", label: "Projects" },
  { id: "tecnologias", label: "Tech" },
  { id: "contacto", label: "Contact" },
];
