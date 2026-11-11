import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  SiCloudflare, SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiGooglecloud, SiJavascript,
  SiJsonwebtokens, SiMui, SiMysql, SiNatsdotio, SiNestjs, SiNextdotjs, SiNodedotjs, SiResend,
  SiPostgresql, SiPrisma, SiReact, SiRedux, SiSequelize, SiTailwindcss, SiTypescript, SiVercel, SiVite,
} from "react-icons/si";
import type { TechName } from "@/content/about";
import type { ContactId } from "@/content/contact";

export const techIcons: Record<TechName, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  "Material UI": SiMui,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  NATS: SiNatsdotio,
  Prisma: SiPrisma,
  Sequelize: SiSequelize,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  JWT: SiJsonwebtokens,
  Docker: SiDocker,
  "Google Cloud": SiGooglecloud,
  Vercel: SiVercel,
  Cloudflare: SiCloudflare,
  Resend: SiResend,
  "GitHub Actions": SiGithubactions,
  Git: SiGit,
  GitHub: SiGithub,
};

export const contactIcons: Record<ContactId, IconType> = {
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedinIn,
};
