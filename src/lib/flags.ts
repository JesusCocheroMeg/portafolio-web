/**
 * Interruptores que se fijan al compilar (el sitio es estático).
 * Para cambiar uno en producción: editar la variable en GitHub y volver a publicar.
 */
export const flags = {
  /** Imágenes de los proyectos. Encendidas salvo que la variable valga "false". */
  showProjectImages: process.env.NEXT_PUBLIC_SHOW_PROJECT_IMAGES !== "false",
} as const;
