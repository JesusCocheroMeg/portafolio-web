import { Reveal } from "@/components/Reveal";
import { Highlight, SectionTitle } from "@/components/SectionTitle";
import { techIcons } from "@/components/icons";
import { getContent, type Lang } from "@/content";
import { techStack, tools, type TechName } from "@/content/tech";

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

export function Tech({ lang }: { lang: Lang }) {
  const { ui } = getContent(lang);
  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow={ui.headings.tech.eyebrow}>
          <Highlight heading={ui.headings.tech.title} />
        </SectionTitle>
      </Reveal>

      <Reveal className="space-y-12">
        <TechGrid
          title={ui.tech.featured}
          note={ui.tech.note}
          items={techStack}
        />
        <TechGrid title={ui.tech.tools} items={tools} />
      </Reveal>
    </section>
  );
}
