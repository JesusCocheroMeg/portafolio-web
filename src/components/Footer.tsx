import { contactIcons } from "@/components/icons";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { version } from "../../package.json";

const RELEASES_URL = "https://github.com/JesusCocheroMeg/portafolio-web/releases";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-page/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 pb-24 pt-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} ·{" "}
          <a
            href={`${RELEASES_URL}/tag/v${version}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver qué cambió en esta versión"
            className="font-mono text-xs transition hover:text-accent-2"
          >
            v{version}
          </a>
        </p>
        <ul className="flex gap-2">
          {contact.links.map((l) => {
            const Icon = contactIcons[l.id];
            const external = l.href.startsWith("http");
            return (
              <li key={l.id}>
                <a
                  href={l.href}
                  aria-label={l.label}
                  data-umami-event="contacto"
                  data-umami-event-canal={l.id}
                  data-umami-event-lugar="pie"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-2 hover:text-accent-2"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
