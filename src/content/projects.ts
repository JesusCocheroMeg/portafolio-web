// Fuente: centro/contenido/proyectos.md (DEC-06). ARM queda fuera hasta confirmarlo (DEC-07).
export type Project = {
  name: string;
  role: string;
  summary: string;
  highlight?: string;
  details: string[];
  bullets?: string[];
  tech?: string[];
  link?: { href: string; label: string };
};

export type Company = { name: string; note: string; projects: Project[] };

export const companies: Company[] = [
  {
    name: "MEG.IA",
    note: "Empresa actual",
    projects: [
      {
        name: "Speech Analytics",
        role: "Colaborador",
        summary:
          "IA que evalúa el 100 % de las llamadas de un contact center. Mi aporte: tickets, solicitudes y facturación automática.",
        details: [
          "Transcribe y evalúa con IA el 100 % de las llamadas de un contact center, y entrena a los agentes con un cliente simulado. Ayudé a integrar el sistema de tickets y solicitudes de la plataforma, y a automatizar la facturación.",
        ],
        link: { href: "https://megia.com.co/productos/speech-analytics", label: "Ver producto" },
      },
      {
        name: "Enigma",
        role: "Colaborador",
        summary: "Contact center con IA: campañas, marcación automática y agentes de voz 24/7.",
        highlight: "2x en la productividad de los agentes, según MEG.IA",
        details: [
          "Plataforma de contact center con IA: campañas de llamadas, marcación automática, supervisión en vivo y agentes de voz que atienden 24/7. 2x en la productividad de los agentes, según MEG.IA.",
        ],
        link: { href: "https://megia.com.co/productos/enigma", label: "Ver producto" },
      },
    ],
  },
  {
    name: "One Contact International",
    note: "Experiencia anterior",
    projects: [
      {
        name: "CRM de ventas · Focus",
        role: "Líder y desarrollador principal",
        summary:
          "Reemplazó el CRM que se le pagaba a un tercero, con uno hecho a la medida del negocio.",
        highlight: "COP 8–11 M al mes de ahorro, que se mantiene hasta hoy",
        details: [
          "Gestión de ventas de telecomunicaciones (móvil, hogar, internet dedicado y tecnología): clientes, campañas, roles por cargo, historial de cada cambio, agendamiento, logística, inventario y reportes en Excel.",
          "Reemplazó el CRM que se pagaba a un tercero, con un sistema mucho más adecuado al negocio y mejor trazabilidad de las ventas. Ahorro de COP 8–11 millones al mes en lo que se pagaba por el sistema anterior, un resultado que se mantiene hasta hoy.",
        ],
        tech: ["React", "Vite", "Redux", "Material UI", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
      },
      {
        name: "ERP Nova",
        role: "Líder y desarrollador principal",
        summary:
          "Gestión del personal: reclutamiento, contratación, documentos y evaluaciones, con permisos por sede. Agilizó la operación y ordenó la empresa.",
        details: [
          "Plataforma de gestión del personal con arquitectura de microservicios: reclutamiento (candidatos, capacitaciones y asistencia), contratación, documentos, afiliaciones y evaluaciones, con usuarios, roles y permisos por sede.",
          "Despliegue automático con contenedores. Agilizó mucho la operación y mejoró de forma notable la organización de la empresa.",
        ],
        tech: ["NestJS", "NATS", "Prisma", "MySQL", "JWT", "Docker", "GitHub Actions"],
      },
    ],
  },
];
