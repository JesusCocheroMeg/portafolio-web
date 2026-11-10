// Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
export const quality = {
  title: "Lo que garantizo",
  text: "Desde mi experiencia en desarrollo de software, la calidad del producto es vital: qué tan seguro es, cómo consume los recursos, qué tan optimizado está, qué tan sólida es su arquitectura y qué tan fácil es de mantener. Eso es algo que garantizo: a la larga es lo que hace rentable un sistema y lo que hace que la inversión valga la pena.",
  pillars: ["Seguridad", "Uso de recursos", "Optimización", "Arquitectura", "Mantenibilidad"],
} as const;

export const adapt = {
  title: "Me adapto a lo que la empresa necesita",
  intro: "Cada proyecto es una balanza entre lo que necesita y lo que cuesta.",
  cases: [
    {
      title: "Trabajo con lo que ya usan",
      text: "Si ya tienen infraestructura, como Vercel, Google Cloud o Microsoft Azure, trabajo sobre ella. Si no la tienen, les recomiendo la mejor opción según mi experiencia y lo que necesite la plataforma. Y si la documentación vive en Notion, documento en Notion.",
    },
    {
      title: "Si es una plataforma grande",
      text: "Para millones de usuarios se necesita una infraestructura grande, y eso cuesta más.",
    },
    {
      title: "Si son pocos usuarios",
      text: "La infraestructura es más sencilla y el costo del proyecto baja mucho.",
    },
    {
      title: "Si el presupuesto es ajustado",
      text: "Se puede usar una infraestructura más sencilla y económica, empezar con las funciones esenciales y dejar el resto para después, o reducir la cantidad de pruebas. El trabajo sigue siendo profesional.",
    },
  ],
  closing:
    "Cómo empiezo depende del caso y del contexto. En un proyecto nuevo, primero hago un diagnóstico: ahí se mide cuántos usuarios se esperan y qué necesita de verdad la plataforma. Si el proyecto ya está en marcha, me sumo a lo que existe y reviso solo lo necesario para continuar. Así la balanza queda en el punto correcto.",
} as const;

// Tecnologías de Focus y Nova (contenido/proyectos.md) e infraestructura de «Me adapto».
export const techStack = [
  "TypeScript", "JavaScript", "React", "Next.js", "Redux", "Material UI", "Vite",
  "Node.js", "Express", "NestJS", "NATS", "Prisma", "Sequelize", "MySQL", "JWT", "Docker",
] as const;

export const tools = [
  "Google Cloud", "Vercel", "GitHub Actions", "Git", "GitHub", "Notion",
] as const;

export type TechName = (typeof techStack)[number] | (typeof tools)[number];
