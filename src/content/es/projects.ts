// Fuente: centro/contenido/proyectos.md (DEC-06). ARM entra por decisión de Jesús (DEC-08).
import type { Company } from "../types";

export const companies: readonly Company[] = [
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
        name: "Conex · CRM para contact centers",
        featured: true,
        role: "Líder del producto",
        summary:
          "CRM a la medida para empresas de contact center: ventas por campañas, seguimiento de cada venta y reportes para toda la operación.",
        highlight: "En producción desde 2025 · usado a diario por unos 200 asesores en dos turnos",
        details: [
          "CRM a la medida que MEG.IA ofrece a empresas de contact center. Organiza las ventas por campañas, con perfiles para asesores, supervisores, back office y administración; registra cada venta en un formulario guiado que evita errores y duplicados, y sigue su estado hasta que se activa, con actualización automática desde el servicio de portabilidad numérica.",
          "Mi papel: lidero el producto —su desarrollo, el soporte y el equipo que trabaja en él—. Es uno de los productos insignia de la empresa, con varias licencias vendidas.",
        ],
        bullets: [
          "Ventas por campañas con 6 perfiles de usuario",
          "Registro guiado con control de duplicados",
          "Seguimiento del estado de cada venta, con actualización automática",
          "Cargas masivas desde Excel, reportes y tableros",
          "Auditorías de calidad y PQR ligadas a cada venta",
        ],
        tech: ["React", "Node.js", "Express", "Sequelize"],
      },
      {
        name: "Portal de Clientes",
        featured: true,
        role: "Líder técnico y desarrollador principal",
        summary:
          "Portal donde los clientes de una empresa de software consultan sus servicios, piden soporte y siguen su consumo y facturación, todo en un solo lugar.",
        highlight: "En producción desde septiembre de 2026",
        details: [
          "Plataforma web que reúne en un solo lugar la relación entre una empresa de software y sus clientes. Cada cliente entra con su cuenta, ve los servicios que tiene contratados, consulta su consumo y sus facturas, y abre solicitudes de soporte con seguimiento de tiempos de respuesta. El equipo interno administra clientes, usuarios, permisos, catálogo de productos y reportes exportables.",
          "Impacto: dio una visión 360° de clientes, licencias y contratos, agilizó la facturación (antes en parte manual) y permitió medir el área de soporte con su propio sistema de tickets.",
          "Mi papel: diseñé y construí la mayor parte de la plataforma —catálogo de servicios, contratación por cliente, facturación integrada con el consumo, reportes a Excel y control de roles y permisos—, desde el prototipo y el MVP hasta producción, y lideré la organización del proyecto.",
        ],
        bullets: [
          "Cada empresa entra con su cuenta y ve solo su información",
          "Servicios contratados, consumo y facturación",
          "Solicitudes de soporte con control de tiempos de respuesta",
          "Reportes exportables a Excel",
          "Roles y permisos configurables",
        ],
        tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Docker"],
        images: [
          { src: "/proyectos/portal/dashboard.webp", alt: "Portal de Clientes: dashboard administrativo con solicitudes de los últimos 30 días y su estado" },
          { src: "/proyectos/portal/solicitudes.webp", alt: "Portal de Clientes: módulo de solicitudes con indicadores y vistas de tablero, tabla, lista y calendario (datos difuminados)" },
          { src: "/proyectos/portal/productos.webp", alt: "Portal de Clientes: catálogo de productos y servicios (datos difuminados)" },
          { src: "/proyectos/portal/reportes.webp", alt: "Portal de Clientes: reportes de consumo de servicios exportables a Excel (datos difuminados)" },
        ],
      },
      {
        name: "Speech Analytics",
        featured: true,
        role: "Colaborador",
        summary:
          "IA que evalúa el 100 % de las llamadas de un contact center. Mi aporte: tickets, solicitudes y facturación automática.",
        details: [
          "Transcribe y evalúa con IA el 100 % de las llamadas de un contact center, y entrena a los agentes con un cliente simulado. Ayudé a integrar el sistema de tickets y solicitudes de la plataforma, y a automatizar la facturación.",
        ],
        link: { href: "https://megia.com.co/productos/speech-analytics", label: "Ver producto" },
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
          "Reemplazó el CRM que se le pagaba a un tercero, con uno hecho a la medida del negocio. Usado a diario por unos 70 usuarios en dos turnos.",
        highlight: "COP 8–11 M al mes de ahorro, que se mantiene hasta hoy",
        details: [
          "Gestión de ventas de telecomunicaciones (móvil, hogar, internet dedicado y tecnología): clientes, campañas, roles por cargo, historial de cada cambio, agendamiento, logística, inventario y reportes en Excel.",
          "El CRM anterior era caro y no se ajustaba al negocio. Focus lo reemplazó con un sistema mucho más adecuado y mejor trazabilidad de las ventas. Ahorro de COP 8–11 millones al mes en lo que se pagaba por el sistema anterior, un resultado que se mantiene hasta hoy.",
          "Lo lideré de punta a punta, de los requisitos con cada área a la capacitación. Tras mi salida sigue en operación y la empresa lo mantiene.",
        ],
        tech: ["React", "Vite", "Redux", "Material UI", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
      },
      {
        name: "ERP Nova",
        role: "Líder y desarrollador principal",
        summary:
          "Centralizó la información e historial de los empleados, antes dispersos y en Excel, y pasó gran parte de los procesos a autogestión del propio empleado.",
        highlight: "Sigue en operación y mantenido por la empresa tras mi salida",
        details: [
          "Plataforma de gestión del personal con arquitectura de microservicios: reclutamiento (candidatos, capacitaciones y asistencia), contratación, documentos, afiliaciones y evaluaciones, con usuarios, roles y permisos por sede.",
          "Despliegue automático con contenedores. Agilizó mucho la operación y mejoró de forma notable la organización de la empresa. Usado a diario por unos 20 administrativos.",
        ],
        tech: ["NestJS", "NATS", "Prisma", "MySQL", "JWT", "Docker", "GitHub Actions"],
        images: [
          { src: "/proyectos/nova/vision-general.webp", alt: "Nova: visión general de contratación con indicadores y gráficas del mes" },
          { src: "/proyectos/nova/empleados.webp", alt: "Nova: lista de empleados con filtros, exportación y cambio de jefe (datos personales difuminados)" },
          { src: "/proyectos/nova/reclutamiento.webp", alt: "Nova: gestión del staff de reclutamiento con estado de formador y reclutador (datos personales difuminados)" },
          { src: "/proyectos/nova/evaluacion.webp", alt: "Nova: configuración del examen de onboarding" },
        ],
      },
    ],
  },
];
