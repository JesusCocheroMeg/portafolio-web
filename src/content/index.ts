import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export type { Content, Lang } from "./types";

const all: Record<Lang, Content> = { es, en };

export const langs: readonly Lang[] = ["es", "en"];

/** Ruta de inicio de cada idioma. El español queda en la raíz para no romper enlaces viejos. */
export const homePath: Record<Lang, string> = { es: "/", en: "/en/" };

export const getContent = (lang: Lang): Content => all[lang];
