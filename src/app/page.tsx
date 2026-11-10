import { sections, site } from "@/content/site";

// Esqueleto de secciones: el contenido llega en V2–V5.
export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6"
        >
          {s.id === "inicio" ? (
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              {site.name}
            </h1>
          ) : (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {s.label}
            </h2>
          )}
        </section>
      ))}
    </main>
  );
}
