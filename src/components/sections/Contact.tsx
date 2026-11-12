import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { contactIcons } from "@/components/icons";
import { getContent, type Lang } from "@/content";

export function Contact({ lang }: { lang: Lang }) {
  const { contact, ui } = getContent(lang);
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionTitle eyebrow={ui.headings.contact.eyebrow}>{contact.title}</SectionTitle>
        <p className="-mt-6 max-w-2xl text-lg text-muted">{contact.text}</p>
      </Reveal>
      <Reveal className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-2">
          {contact.links.map((l) => {
            const Icon = contactIcons[l.id];
            const external = l.href.startsWith("http");
            return (
              <li key={l.id}>
                <a
                  href={l.href}
                  data-umami-event="contacto"
                  data-umami-event-canal={l.id}
                  data-umami-event-lugar="seccion-contacto"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/80 p-5 transition hover:-translate-y-1 hover:border-accent-2 hover:shadow-lg hover:shadow-accent/20"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-2 transition group-hover:bg-accent group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{l.label}</span>
                    <span className="block truncate text-sm text-muted">{l.value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
