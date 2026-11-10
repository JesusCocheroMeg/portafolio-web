import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiGooglecloud, SiJavascript,
  SiJsonwebtokens, SiMui, SiMysql, SiNatsdotio, SiNestjs, SiNextdotjs, SiNodedotjs, SiNotion,
  SiPrisma, SiReact, SiRedux, SiSequelize, SiTypescript, SiVercel, SiVite,
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
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  NATS: SiNatsdotio,
  Prisma: SiPrisma,
  Sequelize: SiSequelize,
  MySQL: SiMysql,
  JWT: SiJsonwebtokens,
  Docker: SiDocker,
  "Google Cloud": SiGooglecloud,
  Vercel: SiVercel,
  "GitHub Actions": SiGithubactions,
  Git: SiGit,
  GitHub: SiGithub,
  Notion: SiNotion,
};

export const contactIcons: Record<ContactId, IconType> = {
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedinIn,
};
