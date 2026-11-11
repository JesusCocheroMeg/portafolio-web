import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
