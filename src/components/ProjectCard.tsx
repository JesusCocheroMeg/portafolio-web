"use client";

import { useId, useState } from "react";
import Tilt from "react-parallax-tilt";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#6a92ff"
      glareBorderRadius="1rem"
      transitionSpeed={1200}
      className="h-full"
    >
      <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/85 p-6 shadow-lg shadow-black/20 transition hover:border-accent-2 hover:shadow-accent/20">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-2">{project.role}</p>
        <h4 className="mt-2 text-xl font-extrabold">{project.name}</h4>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        {project.highlight && (
          <p className="mt-4 rounded-lg bg-accent/15 px-3 py-2 text-sm font-bold text-accent-2">{project.highlight}</p>
        )}

        {open && (
          <div id={detailsId} className="mt-4 space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-ink/85">
            {project.details.map((d) => (
              <p key={d}>{d}</p>
            ))}
            {project.bullets && (
              <ul className="list-disc space-y-1 pl-5 marker:text-accent-2">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {project.tech && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologías">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border border-line px-2 py-0.5 text-xs font-semibold text-muted">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-bold">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((v) => !v)}
            className="text-accent-2 hover:text-ink"
          >
            {open ? "Ver menos" : "Ver más"}
          </button>
          {project.link && (
            <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              {project.link.label} ↗
            </a>
          )}
        </div>
      </article>
    </Tilt>
  );
}
