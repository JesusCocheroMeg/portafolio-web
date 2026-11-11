// Texto del sitio. Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
export const site = {
  name: "Jesús Cochero",
  url: "https://jesuscochero.dev",
  headline: "Aplicaciones seguras y eficientes que se notan en los resultados.",
  description:
    "Llevo proyectos empresariales completos, de la idea a producción, con foco en que mejoren la operación y las cifras de la empresa.",
} as const;

export const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
] as const;
