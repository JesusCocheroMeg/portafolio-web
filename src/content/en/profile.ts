// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { Profile } from "../types";

export const profile: Profile = {
  greeting: "Hi! I'm",
  roles: ["Full stack developer", "Software project lead", "From idea to production"],
  stages: ["Analysis", "Design", "Development", "Testing", "Deployment", "Documentation"],
  // Pasar a «3+ years» en abr 2027, igual que en español.
  stats: [
    { value: "2.5+ years", label: "of professional experience" },
    { value: "6+", label: "systems in production" },
    { value: "1", label: "AI product on the way: ARM" },
  ],
  photo: { src: "/jesus-cochero.webp", alt: "Jesús Cochero", width: 640, height: 800 },
};
