// Fuente: centro/contenido/proyectos.md (DEC-06). ARM entra por decisión de Jesús (DEC-08).
export type Project = {
  name: string;
  role: string;
  summary: string;
  highlight?: string;
  details: string[];
  bullets?: string[];
  tech?: string[];
  link?: { href: string; label: string };
  /** Ocupa todo el ancho de la fila. */
  featured?: boolean;
};

export type Company = { name: string; note: string; projects: Project[] };

export const companies: Company[] = [
  {
    name: "MEG.IA",
    note: "may 2026 – hoy",
    projects: [
      {
        name: "ARM · CRM con IA que se llena solo",
        featured: true,
        role: "Líder del desarrollo del producto",
        summary:
          "Mientras el equipo habla con sus clientes, la IA registra la venta, programa el seguimiento y avisa qué falta.",
        highlight: "En desarrollo · lanzamiento en 2027, con empresas esperando para usarlo",
        details: [
          "CRM con inteligencia artificial. Mientras el equipo habla con sus clientes por llamada o WhatsApp, la IA registra la venta, programa el seguimiento y avisa qué falta. La persona solo confirma: el tiempo se va en vender, no en digitar.",
          "Mi papel: lidero el desarrollo del producto — estrategia de lanzamiento, plan por etapas, arquitectura, estándares de seguridad y pruebas, y construcción de la plataforma.",
        ],
        bullets: [
          "La IA registra la venta sola",
          "Seguimiento automático por llamada y WhatsApp",
          "Auditoría de todas las llamadas",
          "Informes y tableros sin pedir a desarrollo",
          "Cargas masivas desde cualquier Excel o imagen",
        ],
      },
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
        summary:
          "Contact center con IA: campañas, marcación automática y agentes de voz 24/7. Mi aporte: sistema de tickets y facturación automática.",
        highlight: "2x en la productividad de los agentes, según MEG.IA",
        details: [
          "Plataforma de contact center con IA: campañas de llamadas, marcación automática, supervisión en vivo y agentes de voz que atienden 24/7. 2x en la productividad de los agentes, según MEG.IA. Ayudé a integrar el sistema de tickets y a automatizar la facturación.",
        ],
        link: { href: "https://megia.com.co/productos/enigma", label: "Ver producto" },
      },
    ],
  },
  {
    name: "One Contact International",
    note: "abr 2024 – abr 2026",
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
