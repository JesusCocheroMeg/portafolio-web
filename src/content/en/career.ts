// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { CareerItem } from "../types";

export const career: readonly CareerItem[] = [
  {
    period: "May 2026 – present",
    title: "Software Developer",
    place: "MEG.IA · Medellín, Colombia",
    text: "I lead ARM (an AI-powered CRM), Conex and the Client Portal, and I contribute to Speech Analytics.",
    kind: "trabajo",
    current: true,
  },
  {
    period: "Apr 2024 – Apr 2026",
    title: "Software Developer",
    place: "One Contact International · Medellín, Colombia",
    text: "I led Focus and Nova end to end, from gathering requirements with each department to training, along with a team of 4. Both are still in operation since I left.",
    kind: "trabajo",
  },
  {
    period: "Jun 2022 – Oct 2024",
    title: "Technologist in Software Analysis and Development",
    place: "SENA, Colombia's national training service",
    text: "Training in software analysis, design and development.",
    kind: "estudio",
  },
];
