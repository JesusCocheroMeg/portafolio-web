"use client";

import { useEffect, useState } from "react";
import type { Lang, Section, Ui } from "@/content/types";
import { saveLang } from "@/lib/lang";

type Props = {
  name: string;
  sections: readonly Section[];
  labels: Ui["nav"];
  /** Idioma al que lleva el selector y su ruta de inicio. */
  other: { lang: Lang; href: string };
};

export function Navbar({ name, sections, labels, other }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-surface/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label={labels.label}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#inicio"
          className="text-lg font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent-2">J</span>C
          <span className="sr-only"> — {name}, {labels.goHome}</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm font-semibold text-muted transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
        <a
          href={other.href}
          hrefLang={other.lang}
          lang={other.lang}
          aria-label={labels.switchLabel}
          title={labels.switchLabel}
          data-umami-event="cambiar-idioma"
          data-umami-event-idioma={other.lang}
          onClick={(e) => {
            saveLang(other.lang);
            // Conserva la sección en la que está (#proyectos, #contacto…).
            if (location.hash) {
              e.preventDefault();
              location.href = other.href + location.hash;
            }
          }}
          className="rounded-md border border-line px-2.5 py-1 text-xs font-bold text-muted transition hover:border-accent-2 hover:text-ink"
        >
          {labels.switchTo}
        </a>
        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        </div>
      </nav>

      {open && (
        <ul id="menu-movil" className="border-t border-line px-4 pb-4 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block py-3 text-base font-semibold text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
