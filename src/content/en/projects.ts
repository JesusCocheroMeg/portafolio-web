// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido. Mismos proyectos, tecnologías,
// enlaces y capturas que en español: solo cambia el texto.
import type { Company } from "../types";

export const companies: readonly Company[] = [
  {
    name: "MEG.IA",
    note: "May 2026 – present",
    projects: [
      {
        name: "ARM · The AI CRM that fills itself in",
        featured: true,
        role: "Product development lead",
        summary:
          "While your team talks to customers, the AI records the sale, schedules the follow-up and flags what's missing.",
        highlight: "In development · launching in 2027, with companies waiting to use it",
        details: [
          "An AI-powered CRM. While your team talks to customers by phone or WhatsApp, the AI records the sale, schedules the follow-up and flags what's missing. People just confirm: time goes into selling, not typing.",
          "My role: I lead product development — launch strategy, phased plan, architecture, security and testing standards, and building the platform.",
        ],
        bullets: [
          "The AI records the sale on its own",
          "Automatic follow-up by phone and WhatsApp",
          "Every call audited",
          "Reports and dashboards without asking the dev team",
          "Bulk uploads from any Excel file or image",
        ],
      },
      {
        name: "Hermes · AI agents for WhatsApp",
        featured: true,
        role: "Forward Deployed Engineer",
        summary:
          "I deploy AI agents that handle customer service and sales over WhatsApp for small businesses: I connect them to what each business knows, test them and make sure the team actually uses them.",
        highlight: "Since November 2026 · each client with its own agent and isolated data",
        details: [
          "Hermes is MEG.IA's product for customer service and sales over WhatsApp with artificial intelligence. My job is to bring it into each business and make it work day to day: from the kickoff visit, where I learn how they sell and what their customers ask, to the handover, when the team uses it without depending on me.",
          "The technical side: I turn the business's catalogs, prices and documents into a knowledge base (RAG) the agent queries; I configure its instructions and scenarios, and test it before go-live. Each client's data is kept separate, and I verify that an agent never answers with another client's data.",
          "I'm also the client's voice to the team building Hermes: I report what breaks or gets in the way on the platform, prioritized by impact, and propose improvements.",
        ],
        bullets: [
          "Phased rollout plan with success criteria",
          "Per-client knowledge base (RAG)",
          "Agent instructions, scenarios and testing",
          "Data isolation between clients",
          "Role-based training and handover sign-off",
          "Product QA and feedback",
        ],
        tech: ["AI agents", "RAG", "Prompt engineering", "WhatsApp", "MCP"],
        link: { href: "https://megia.com.co/productos/hermes", label: "See Hermes" },
      },
      {
        name: "Conex · CRM for contact centers",
        featured: true,
        role: "Product lead",
        summary:
          "A custom CRM for contact center companies: campaign-based sales, tracking for every sale and reports for the whole operation.",
        highlight: "In production since 2025 · used daily by about 200 agents across two shifts",
        details: [
          "A custom CRM that MEG.IA offers to contact center companies. It organizes sales by campaign, with profiles for agents, supervisors, back office and admins; it records each sale through a guided form that prevents errors and duplicates, and tracks its status until activation, with automatic updates from the number portability service.",
          "My role: I lead the product — its development, support and the team working on it. It's one of the company's flagship products, with several licenses sold.",
        ],
        bullets: [
          "Campaign-based sales with 6 user profiles",
          "Guided entry with duplicate control",
          "Status tracking for every sale, updated automatically",
          "Bulk uploads from Excel, reports and dashboards",
          "Quality audits and customer claims linked to each sale",
        ],
        tech: ["React", "Node.js", "Express", "Sequelize"],
      },
      {
        name: "Client Portal",
        featured: true,
        role: "Tech lead and lead developer",
        summary:
          "A portal where a software company's clients check their services, request support and track their usage and billing, all in one place.",
        highlight: "In production since September 2026",
        details: [
          "A web platform that brings the relationship between a software company and its clients into one place. Each client logs in with their account, sees the services they've contracted, checks their usage and invoices, and opens support requests with response-time tracking. The internal team manages clients, users, permissions, the product catalog and exportable reports.",
          "Impact: it gave a 360° view of clients, licenses and contracts, sped up billing (previously partly manual) and made it possible to measure the support team with its own ticketing system.",
          "My role: I designed and built most of the platform — service catalog, per-client contracts, billing integrated with usage, Excel reports and role and permission control — from prototype and MVP to production, and I led the project's organization.",
        ],
        bullets: [
          "Each company logs in and sees only its own information",
          "Contracted services, usage and billing",
          "Support requests with response-time control",
          "Reports exportable to Excel",
          "Configurable roles and permissions",
        ],
        tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Docker"],
        images: [
          { src: "/proyectos/portal/dashboard.webp", alt: "Client Portal: admin dashboard with requests from the last 30 days and their status" },
          { src: "/proyectos/portal/solicitudes.webp", alt: "Client Portal: requests module with indicators and board, table, list and calendar views (data blurred)" },
          { src: "/proyectos/portal/productos.webp", alt: "Client Portal: product and service catalog (data blurred)" },
          { src: "/proyectos/portal/reportes.webp", alt: "Client Portal: service usage reports exportable to Excel (data blurred)" },
        ],
      },
    ],
  },
  {
    name: "One Contact International",
    note: "Apr 2024 – Apr 2026",
    projects: [
      {
        name: "Sales CRM · Focus",
        role: "Lead and main developer",
        summary:
          "It replaced the CRM the company was paying a third party for with one built around the business. Used daily by about 70 users across two shifts.",
        highlight: "Removed the monthly fee for the external CRM, a saving that holds to this day",
        details: [
          "Telecom sales management (mobile, home, dedicated internet and technology): customers, campaigns, role-based access, a history of every change, scheduling, logistics, inventory and Excel reports.",
          "The previous CRM was expensive and didn't fit the business. Focus replaced it with a much better-suited system and better sales traceability. The company stopped paying the monthly fee for the old system, a saving that holds to this day.",
          "I led it end to end, from requirements with each department to training. Since I left, it's still in operation and the company maintains it.",
        ],
        tech: ["React", "Vite", "Redux", "Material UI", "Node.js", "Express", "Sequelize", "MySQL", "JWT"],
      },
      {
        name: "Nova ERP",
        role: "Lead and main developer",
        summary:
          "It centralized employee information and history, previously scattered across Excel files, and moved much of the processes to employee self-service.",
        highlight: "Still in operation and maintained by the company since I left",
        details: [
          "A workforce management platform with a microservices architecture: recruiting (candidates, training and attendance), hiring, documents, benefit enrollments and evaluations, with users, roles and permissions per site.",
          "Automated container deployments. It greatly sped up operations and noticeably improved the company's organization. Used daily by about 20 administrative staff.",
        ],
        tech: ["NestJS", "NATS", "Prisma", "MySQL", "JWT", "Docker", "GitHub Actions"],
        images: [
          { src: "/proyectos/nova/vision-general.webp", alt: "Nova: hiring overview with monthly indicators and charts" },
          { src: "/proyectos/nova/empleados.webp", alt: "Nova: employee list with filters, export and manager change (personal data blurred)" },
          { src: "/proyectos/nova/reclutamiento.webp", alt: "Nova: recruiting staff management with trainer and recruiter status (personal data blurred)" },
          { src: "/proyectos/nova/evaluacion.webp", alt: "Nova: onboarding exam setup" },
        ],
      },
    ],
  },
];
