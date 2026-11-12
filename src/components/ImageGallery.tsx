"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Ui } from "@/content/types";

type Image = { readonly src: string; readonly alt: string };

/**
 * Galería a pantalla completa: imagen grande, flechas, miniaturas y teclado (← → Esc).
 * Se monta en <body> para que la inclinación de la tarjeta no la deforme.
 */
export function ImageGallery({
  title,
  images,
  labels,
  onClose,
}: {
  title: string;
  images: readonly Image[];
  labels: Ui["gallery"];
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const total = images.length;
  const go = useCallback((step: number) => setIndex((i) => (i + step + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const current = images[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog.replace("{title}", title)}
      className="fixed inset-0 z-[100] flex flex-col bg-page/95 backdrop-blur-md"
      onClick={onClose}
    >
      <header className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-2">{labels.eyebrow}</p>
          <h2 className="truncate text-lg font-extrabold sm:text-xl">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-muted" aria-live="polite">
            {index + 1} / {total}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="grid size-10 place-items-center rounded-full border border-line text-xl text-muted transition hover:border-accent-2 hover:text-ink"
          >
            ×
          </button>
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- sitio estático, sin optimizador de imágenes */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full rounded-xl border border-line object-contain shadow-2xl shadow-black/50"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={labels.prev}
              className="absolute left-2 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 text-xl text-ink transition hover:border-accent-2 sm:left-6 sm:grid"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={labels.next}
              className="absolute right-2 top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 text-xl text-ink transition hover:border-accent-2 sm:right-6 sm:grid"
            >
              ›
            </button>
          </>
        )}
      </div>

      <footer className="px-4 pb-5 pt-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="mx-auto max-w-3xl text-center text-sm text-muted">{current.alt}</p>
        {total > 1 && (
          <ul className="mt-4 flex justify-center gap-3 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <li key={img.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={labels.view.replace("{n}", String(i + 1))}
                  aria-current={i === index}
                  className={`block overflow-hidden rounded-lg border-2 transition ${i === index ? "border-accent-2" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" className="h-14 w-24 object-cover object-top sm:h-16 sm:w-28" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </footer>
    </div>,
    document.body,
  );
}
