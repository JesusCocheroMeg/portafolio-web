// Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
export const quality = {
  title: "Lo que garantizo",
  text: "Desde mi experiencia en desarrollo de software, la calidad del producto es vital: qué tan seguro es, cómo consume los recursos, qué tan optimizado está, qué tan sólida es su arquitectura y qué tan fácil es de mantener. El desarrollo a la medida es una inversión valiosa y costosa, y sin calidad termina desaprovechándose. Eso es lo que garantizo: a la larga es lo que hace rentable un sistema y lo que hace que la inversión valga la pena.",
  proof: "Prueba de ello: los sistemas que he construido siguen funcionando y las empresas los mantienen sin depender de mí.",
  pillars: ["Seguridad", "Uso de recursos", "Optimización", "Arquitectura", "Mantenibilidad"],
} as const;

export const adapt = {
  title: "Me adapto a lo que la empresa necesita",
  intro:
    "Me preocupo por entender tu negocio, para recomendarte lo que de verdad te conviene. Cada proyecto es una balanza entre lo que necesita y lo que cuesta.",
  cases: [
    {
      title: "Trabajo con lo que ya usan",
      text: "Si ya tienen infraestructura, como Vercel o Google Cloud, trabajo sobre ella. Si no la tienen, les recomiendo la mejor opción según mi experiencia y lo que necesite la plataforma. Lo mismo con sus herramientas: si documentan en Notion, por ejemplo, me adapto y trabajo ahí sin problema, aunque no sea la que más he usado. Y si usan algo que no conozco, primero hago una revisión a fondo para entender cómo está montado; si hace falta, me apoyo en un especialista en esa tecnología para que el desarrollo no se detenga.",
    },
    {
      title: "Si el presupuesto o el tiempo es ajustado",
      text: "Te propongo alternativas más sencillas y económicas: una infraestructura más simple, empezar con las funciones esenciales y dejar el resto para después, o usar herramientas que ya existen y cumplen el mismo propósito, aunque sean menos potentes. Revisamos juntos qué se puede lograr con el tiempo y el presupuesto que hay. El trabajo sigue siendo profesional.",
    },
    {
      title: "Si es una plataforma grande",
      text: "Para millones de usuarios se necesita una infraestructura grande, y eso cuesta más.",
    },
    {
      title: "Si son pocos usuarios",
      text: "La infraestructura es más sencilla y el costo del proyecto baja mucho.",
    },
  ],
  closing:
    "Cómo empiezo depende del caso y del contexto. En un proyecto nuevo, primero hago un diagnóstico: ahí se mide cuántos usuarios se esperan y qué necesita de verdad la plataforma. Si el proyecto ya está en marcha, me sumo a lo que existe y reviso solo lo necesario para continuar. Así la balanza queda en el punto correcto.",
} as const;

// Tecnologías de Focus, Nova y el Portal de Clientes (contenido/proyectos.md) e infraestructura de «Me adapto».
export const techStack = [
  "TypeScript", "JavaScript", "React", "Next.js", "Redux", "Material UI", "Tailwind CSS", "Vite",
  "Node.js", "Express", "NestJS", "NATS", "Prisma", "Sequelize", "MySQL", "PostgreSQL", "JWT", "Docker",
] as const;

export const tools = [
  "Google Cloud", "Vercel", "Cloudflare", "Resend", "GitHub Actions", "Git", "GitHub",
] as const;

export type TechName = (typeof techStack)[number] | (typeof tools)[number];
