import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Tech } from "@/components/sections/Tech";
import type { Lang } from "@/content";

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <main className="relative z-10 flex-1">
      <Hero lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Tech lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
