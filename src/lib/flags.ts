/**
 * Interruptores que se fijan al compilar (el sitio es estático).
 * Para cambiar uno en producción: editar la variable en GitHub y volver a publicar.
 */
export const flags = {
  /** Imágenes de los proyectos. Encendidas salvo que la variable valga "false". */
  showProjectImages: process.env.NEXT_PUBLIC_SHOW_PROJECT_IMAGES !== "false",
  /** ID del sitio en Umami Cloud. Vacío = sin analítica (local, vistas previas). */
  umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "",
} as const;
