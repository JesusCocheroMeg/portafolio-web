import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { companies } from "@/content/projects";

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow="Proyectos">
          Lo que he <span className="text-accent-2">construido</span>
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
                <li key={p.name} className="h-full">
                  <Reveal delay={i * 0.1} className="h-full">
                    <ProjectCard project={p} />
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
