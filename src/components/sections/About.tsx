import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { techIcons } from "@/components/icons";
import { adapt, quality, techStack, tools, type TechName } from "@/content/about";
import { career } from "@/content/career";

function TechGrid({ title, items }: { title: string; items: readonly TechName[] }) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-bold">{title}</h3>
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {items.map((name) => {
          const Icon = techIcons[name];
          return (
            <li
              key={name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-surface/70 p-4 text-center transition hover:-translate-y-1 hover:border-accent-2 hover:shadow-lg hover:shadow-accent/20"
            >
              <Icon aria-hidden="true" className="h-8 w-8 text-muted transition group-hover:text-accent-2" />
              <span className="text-xs font-semibold">{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow="Sobre mí">
          Cómo <span className="text-accent-2">trabajo</span>
        </SectionTitle>
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-line bg-surface/80 p-6 sm:p-8">
          <h3 className="text-xl font-bold">{quality.title}</h3>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-lg leading-relaxed text-ink/90">
            {quality.text}
          </blockquote>
          <ul className="mt-6 flex flex-wrap gap-2">
            {quality.pillars.map((p) => (
              <li key={p} className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-2">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className="text-2xl font-bold">{adapt.title}</h3>
        <p className="mt-2 text-muted">{adapt.intro}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {adapt.cases.map((c) => (
            <li key={c.title} className="rounded-2xl border border-line bg-surface/70 p-6 transition hover:border-accent-2">
              <h4 className="font-bold text-accent-2">{c.title}</h4>
              <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">{adapt.closing}</p>
      </Reveal>

      <Reveal className="mt-20">
        <h3 className="text-2xl font-bold">Trayectoria</h3>
        <ol className="relative mt-8 space-y-8 border-l border-line pl-8">
          {career.map((c) => (
            <li key={c.period} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.4rem] top-1.5 h-4 w-4 rounded-full border-2 ${
                  c.current
                    ? "border-accent-2 bg-accent shadow-[0_0_12px] shadow-accent-2"
                    : "border-line bg-surface-2"
                }`}
              />
              <p className="text-sm font-bold text-accent-2">
                {c.period}
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs font-semibold text-muted">
                  {c.kind === "trabajo" ? "Trabajo" : "Estudio"}
                </span>
              </p>
              <h4 className="mt-1 text-lg font-bold">{c.title}</h4>
              <p className="text-sm font-semibold text-muted">{c.place}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-20 space-y-12">
        <TechGrid title="Tecnologías" items={techStack} />
        <TechGrid title="Infraestructura y herramientas" items={tools} />
      </Reveal>
    </section>
  );
}
