// Fuente: centro/contenido/sobre-mi.md (DEC-06). Si difieren, gana el contenido.
import type { Adapt, Learning, Quality } from "../types";

export const quality: Quality = {
  title: "Lo que garantizo",
  text: "Desde mi experiencia en desarrollo de software, la calidad del producto es vital: qué tan seguro es, cómo consume los recursos, qué tan optimizado está, qué tan sólida es su arquitectura y qué tan fácil es de mantener. El desarrollo a la medida es una inversión valiosa y costosa, y sin calidad termina desaprovechándose. Eso es lo que garantizo: a la larga es lo que hace rentable un sistema y lo que hace que la inversión valga la pena.",
  proof: "Prueba de ello: los sistemas que he construido siguen funcionando y las empresas los mantienen sin depender de mí.",
  pillars: ["Seguridad", "Uso de recursos", "Optimización", "Arquitectura", "Mantenibilidad"],
};

export const adapt: Adapt = {
  title: "Me adapto a lo que la empresa necesita",
  intro:
    "Me preocupo por entender tu negocio, para recomendarte lo que de verdad te conviene. Cada proyecto es una balanza entre lo que necesita y lo que cuesta.",
  cases: [
    {
      title: "Trabajo con lo que ya usan",
      text: "Si ya tienen infraestructura, como Vercel o Google Cloud, trabajo sobre ella. Si no la tienen, les recomiendo la mejor opción según mi experiencia y lo que necesite la plataforma. Lo mismo con sus herramientas: si documentan en Confluence, por ejemplo, me adapto y trabajo ahí sin problema, aunque no sea la que más he usado. Y si usan algo que no conozco, primero hago una revisión a fondo para entender cómo está montado; si hace falta, me apoyo en un especialista en esa tecnología para que el desarrollo no se detenga.",
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
};

// Aprobado por Jesús el 2026-11-25.
export const learning: Learning = {
  title: "Mejora continua",
  text: "Tengo una base sólida y la demuestro en cada proyecto que entrego. Aun así, seguir creciendo es para mí un hábito y un reto personal: cada semana dedico tiempo a aprender y a sacar adelante proyectos personales, donde profundizo en lo que ya domino y lo pulo en la práctica, para aportarle a tu empresa soluciones con más conocimiento y más calidad. Por eso, si tu proyecto pide algo que aún no he hecho, lo resuelvo con la misma base y de forma profesional.",
  sources: [
    { name: "Udemy", text: "Plan anual desde 2025: profundizo en los detalles técnicos del desarrollo y en IA." },
    { name: "Imperio Agéntico", text: "Comunidad de IA y agentes, de las más fuertes de Latinoamérica: intercambio con otros desarrolladores lo que funciona en proyectos reales." },
    { name: "YouTube y canales técnicos", text: "Sigo de cerca lo nuevo y me quedo solo con lo que eleva la calidad de lo que construyo." },
  ],
  closing: "Lo que aprendo no se queda en cursos: termina en sistemas que hoy usan empresas reales.",
};
