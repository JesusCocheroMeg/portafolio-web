import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Tech } from "@/components/sections/Tech";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </main>
  );
}
