import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6">
      <div className="grid min-h-[calc(100svh-11rem)] items-center gap-12 md:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="text-lg font-semibold text-muted">
            {profile.greeting} <span aria-hidden="true">👋</span>
          </p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-r from-ink to-accent-2 bg-clip-text text-transparent">{site.name}</span>
          </h1>
          <p className="mt-4 min-h-[2.5em] text-2xl font-bold sm:text-3xl">
            <Typewriter words={profile.roles} />
          </p>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug">{site.headline}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{site.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Etapas que cubro">
            {profile.stages.map((s) => (
              <li key={s} className="rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-semibold text-muted">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-2">
              Ver proyectos
            </a>
            <a href="#contacto" className="rounded-lg border border-line bg-surface/70 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-accent-2">
              Contáctame
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/60 via-accent-2/20 to-transparent blur-2xl" />
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              priority
              className="relative rounded-[1.75rem] border border-line object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 bg-surface/90 p-5 sm:p-6">
              <dt className="text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="text-2xl font-extrabold tracking-tight text-accent-2 sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
