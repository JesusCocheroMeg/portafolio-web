import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Highlight, SectionTitle } from "@/components/SectionTitle";
import { getContent, type Lang } from "@/content";

export function Projects({ lang }: { lang: Lang }) {
  const { companies, ui } = getContent(lang);
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow={ui.headings.projects.eyebrow}>
          <Highlight heading={ui.headings.projects.title} />
        </SectionTitle>
      </Reveal>

      <div className="space-y-16">
        {companies.map((c) => (
          <div key={c.name}>
            <Reveal>
              <h3 className="text-2xl font-bold">
                {c.name} <span className="ml-2 text-sm font-semibold text-muted">· {c.note}</span>
              </h3>
            </Reveal>
            <ul className="mt-6 grid items-start gap-6 md:grid-cols-2">
              {c.projects.map((p, i) => (
                <li key={p.name} className={`h-full ${p.featured ? "md:col-span-2" : ""}`}>
                  <Reveal delay={i * 0.1} className="h-full">
                    <ProjectCard project={p} labels={ui.project} galleryLabels={ui.gallery} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
