import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-page/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        {/* Íconos de redes: V5 */}
      </div>
    </footer>
  );
}
