import type { Lang } from "@/content/types";

const KEY = "lang";

/** Idioma que eligió la persona. Puede no estar disponible (modo privado, almacenamiento bloqueado). */
export function savedLang(): Lang | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "es" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    // Sin almacenamiento: el aviso puede volver a salir, nada más.
  }
}

/** Idioma del navegador reducido a los que tiene el sitio. */
export function browserLang(): Lang {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  return langs[0]?.toLowerCase().startsWith("es") ? "es" : "en";
}
