import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { techIcons } from "@/components/icons";
import { techStack, tools, type TechName } from "@/content/about";

function TechGrid({ title, note, items }: { title: string; note?: string; items: readonly TechName[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      {note && <p className="mt-2 max-w-3xl text-muted">{note}</p>}
      <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
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

export function Tech() {
  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow="Tecnologías">
          Con qué <span className="text-accent-2">construyo</span>
        </SectionTitle>
      </Reveal>

      <Reveal className="space-y-12">
        <TechGrid
          title="Tecnologías destacadas"
          note="Las que más he usado en producción. No son las únicas: me adapto a las que ya use tu equipo o a las que pida el proyecto."
          items={techStack}
        />
        <TechGrid title="Infraestructura y herramientas destacadas" items={tools} />
      </Reveal>
    </section>
  );
}
