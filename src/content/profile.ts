// Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
export const profile = {
  greeting: "¡Hola! Soy",
  roles: [
    "Desarrollador full stack",
    "Líder de proyectos de software",
    "De la idea a producción",
  ],
  stages: ["Análisis", "Diseño", "Construcción", "Pruebas", "Despliegue", "Documentación"],
  // Cifras de un vistazo (F12). Pasar a «+3 años» en abr 2027.
  stats: [
    { value: "+2,5 años", label: "de experiencia en empresas" },
    { value: "+6", label: "sistemas en producción" },
    { value: "1", label: "producto con IA en camino: ARM" },
  ],
  photo: { src: "/jesus-cochero.webp", alt: "Jesús Cochero", width: 640, height: 800 },
} as const;
