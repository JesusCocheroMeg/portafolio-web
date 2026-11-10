import { contactIcons } from "@/components/icons";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-page/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
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
