// Fuente: centro/contenido/en/sitio.md. Si difieren, gana el contenido.
import type { Adapt, Quality } from "../types";

export const quality: Quality = {
  title: "What I guarantee",
  text: "From my experience in software development, product quality is vital: how secure it is, how it uses resources, how optimized it is, how solid its architecture is and how easy it is to maintain. Custom development is a valuable and costly investment, and without quality it ends up wasted. That's what I guarantee: in the long run, it's what makes a system profitable and the investment worthwhile.",
  proof: "Proof of that: the systems I've built are still running, and the companies maintain them without depending on me.",
  pillars: ["Security", "Resource usage", "Optimization", "Architecture", "Maintainability"],
};

export const adapt: Adapt = {
  title: "I adapt to what your company needs",
  intro:
    "I make a point of understanding your business so I can recommend what really works for you. Every project is a balance between what it needs and what it costs.",
  cases: [
    {
      title: "I work with what you already use",
      text: "If you already have infrastructure, like Vercel or Google Cloud, I build on it. If you don't, I recommend the best option based on my experience and what the platform needs. Same with your tools: if you document in Confluence, for example, I adapt and work there without a problem, even if it's not the one I've used most. And if you use something I don't know, I first do a thorough review to understand how it's set up; if needed, I bring in a specialist in that technology so development doesn't stall.",
    },
    {
      title: "If budget or time is tight",
      text: "I'll suggest simpler, more affordable alternatives: lighter infrastructure, starting with the essential features and leaving the rest for later, or using existing tools that serve the same purpose, even if they're less powerful. Together we'll look at what can be achieved with the time and budget available. The work is still professional.",
    },
    {
      title: "If it's a large platform",
      text: "Millions of users need large infrastructure, and that costs more.",
    },
    {
      title: "If there are only a few users",
      text: "The infrastructure is simpler and the project cost drops a lot.",
    },
  ],
  closing:
    "How I start depends on the case and the context. On a new project, I first run a diagnosis: that's where we measure how many users to expect and what the platform really needs. If the project is already underway, I join what exists and review only what's needed to keep going. That way the balance lands in the right place.",
};
