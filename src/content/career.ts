// Fuente: centro/contenido/sobre-mi.md, sección Trayectoria (F13, DEC-06).
export type CareerItem = {
  period: string;
  title: string;
  place: string;
  text: string;
  kind: "trabajo" | "estudio";
  current?: boolean;
};

export const career: CareerItem[] = [
  {
    period: "may 2026 – hoy",
    title: "Desarrollador Semi Senior",
    place: "MEG.IA · Medellín",
    text: "Lidero ARM, un CRM con IA, Conex y el Portal de Clientes, y colaboro en Speech Analytics y Enigma.",
    kind: "trabajo",
    current: true,
  },
  {
    period: "abr 2024 – abr 2026",
    title: "Desarrollador de software",
    place: "One Contact International · Medellín",
    text: "Lideré y desarrollé Focus, el CRM de ventas, y Nova, el ERP de gestión del personal.",
    kind: "trabajo",
  },
  {
    period: "jun 2022 – oct 2024",
    title: "Análisis y Desarrollo de Software",
    place: "SENA · Centro de Servicios y Gestión Empresarial",
    text: "Formación en análisis, diseño y construcción de software.",
    kind: "estudio",
  },
];
