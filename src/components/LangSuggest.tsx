"use client";

import { useState, useSyncExternalStore } from "react";
import type { Lang, Ui } from "@/content/types";
import { browserLang, saveLang, savedLang } from "@/lib/lang";

const noop = () => () => {};

/**
 * Aviso discreto para quien llega con el navegador en el otro idioma y aún no ha elegido.
 * No redirige: así Google ve las dos versiones y los enlaces compartidos abren donde deben.
 */
export function LangSuggest({ lang, other, labels }: { lang: Lang; other: { lang: Lang; href: string }; labels: Ui["suggest"] }) {
  const [dismissed, setDismissed] = useState(false);
  // En el servidor no hay navegador: el aviso solo aparece al hidratar.
  const suggest = useSyncExternalStore(
    noop,
    () => savedLang() === null && browserLang() !== lang,
    () => false,
  );

  if (!suggest || dismissed) return null;

  return (
    <div
      lang={other.lang}
      role="region"
      aria-label={labels.text}
      className="fixed inset-x-4 bottom-24 z-40 mx-auto flex max-w-md flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface/95 p-4 text-sm shadow-2xl shadow-black/40 backdrop-blur-md sm:bottom-6"
    >
      <p className="font-semibold">{labels.text}</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            saveLang(lang);
            setDismissed(true);
          }}
          className="font-bold text-muted hover:text-ink"
        >
          {labels.stay}
        </button>
        <a
          href={other.href}
          onClick={() => saveLang(other.lang)}
          data-umami-event="cambiar-idioma"
          data-umami-event-idioma={other.lang}
          data-umami-event-lugar="aviso"
          className="rounded-lg bg-accent px-3 py-1.5 font-bold text-white transition hover:bg-accent-2"
        >
          {labels.go}
        </a>
      </div>
    </div>
  );
}
