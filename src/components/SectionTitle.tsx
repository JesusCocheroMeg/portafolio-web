import type { Heading } from "@/content/types";

/** Pinta un título con su parte resaltada en azul. */
export function Highlight({ heading: [before, mark, after] }: { heading: Heading }) {
  return (
    <>
      {before}
      <span className="text-accent-2">{mark}</span>
      {after}
    </>
  );
}

export function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-2">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{children}</h2>
    </div>
  );
}
