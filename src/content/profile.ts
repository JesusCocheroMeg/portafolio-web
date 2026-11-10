// Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
export const profile = {
  greeting: "¡Hola! Soy",
  roles: [
    "Desarrollador full stack",
    "Líder de proyectos de software",
    "De la idea a producción",
  ],
  stages: ["Análisis", "Diseño", "Construcción", "Pruebas", "Despliegue", "Documentación"],
  photo: { src: "/jesus-cochero.webp", alt: "Jesús Cochero", width: 640, height: 800 },
} as const;
