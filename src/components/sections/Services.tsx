import type { IconType } from "react-icons";
import { FaCloud, FaCogs, FaCubes, FaHandsHelping, FaRobot } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { services, type ServiceId } from "@/content/services";

const icons: Record<ServiceId, IconType> = {
  custom: FaCubes,
  ai: FaRobot,
  automation: FaCogs,
  continue: FaHandsHelping,
  cloud: FaCloud,
};

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow="Servicios">
          Qué puedo hacer por <span className="text-accent-2">tu empresa</span>
        </SectionTitle>
        <p className="-mt-6 max-w-2xl text-lg text-muted">{services.intro}</p>
      </Reveal>

      <ul className="mt-10 flex flex-wrap justify-center gap-5">
        {services.items.map((s, i) => {
          const Icon = icons[s.id];
          return (
            <li key={s.id} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/85 p-6 transition hover:-translate-y-1 hover:border-accent-2 hover:shadow-lg hover:shadow-accent/20">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-2 transition group-hover:bg-accent group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
