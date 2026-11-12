// Igual en los dos idiomas. Tecnologías de Focus, Nova y el Portal de Clientes (contenido/proyectos.md)
// e infraestructura de «Me adapto».
export const techStack = [
  "TypeScript", "JavaScript", "React", "Next.js", "Redux", "Material UI", "Tailwind CSS", "Vite",
  "Node.js", "Express", "NestJS", "NATS", "Prisma", "Sequelize", "MySQL", "PostgreSQL", "JWT", "Docker",
] as const;

export const tools = [
  "Google Cloud", "Vercel", "Cloudflare", "Resend", "GitHub Actions", "Git", "GitHub",
] as const;

export type TechName = (typeof techStack)[number] | (typeof tools)[number];
