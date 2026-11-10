"use client";

import { useEffect, useState } from "react";

/** Escribe y borra cada frase. Con «reducir movimiento» muestra la primera, fija. */
export function Typewriter({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const word = words[index];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = window.setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [animate, deleting, index, text, words]);

  return (
    <span>
      <span className="sr-only">{words.join(". ")}</span>
      <span aria-hidden="true" className="text-accent-2">
        {text}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent-2 align-middle motion-reduce:animate-none" style={{ height: "1em" }} />
      </span>
    </span>
  );
}
