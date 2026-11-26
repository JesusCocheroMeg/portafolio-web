import { Reveal } from "@/components/Reveal";
import { getContent, type Lang } from "@/content";

/** Tarjeta de Mejora continua: va entre Proyectos y Tecnologías, sin entrada propia en el menú. */
export function Learning({ lang }: { lang: Lang }) {
  const { learning } = getContent(lang);
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <div className="rounded-2xl border border-line bg-surface/80 p-6 sm:p-8">
          <h3 className="text-xl font-bold">{learning.title}</h3>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink/90">{learning.text}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {learning.sources.map((s) => (
              <li key={s.name} className="rounded-xl border border-line bg-surface-2/60 p-4 transition hover:border-accent-2">
                <h4 className="font-bold text-accent-2">{s.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-accent-2">{learning.closing}</p>
        </div>
      </Reveal>
    </section>
  );
}
