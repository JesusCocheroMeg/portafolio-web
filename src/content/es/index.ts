import type { Content } from "../types";
import { adapt, quality } from "./about";
import { career } from "./career";
import { contact, whatsappFloat } from "./contact";
import { profile } from "./profile";
import { companies } from "./projects";
import { services } from "./services";
import { sections, site } from "./site";
import { ui } from "./ui";

export const es: Content = { site, sections, profile, services, quality, adapt, career, companies, contact, whatsappFloat, ui };
