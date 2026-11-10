"use client";

import { useEffect, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ACCENT = "#6a92ff";

async function init(engine: Engine) {
  await loadSlim(engine);
}

function buildOptions(mobile: boolean, reducedMotion: boolean): ISourceOptions {
  return {
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: "transparent" },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: mobile ? 35 : 80, density: { enable: true, width: 1200, height: 800 } },
      paint: { fill: { enable: true, color: { value: ACCENT } } },
      opacity: { value: { min: 0.15, max: 0.6 } },
      size: { value: { min: 1, max: 2.5 } },
      links: {
        enable: !mobile,
        color: ACCENT,
        distance: 140,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: !reducedMotion,
        speed: 0.6,
        direction: "none",
        random: true,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: { onHover: { enable: !mobile && !reducedMotion, mode: "grab" } },
      modes: { grab: { distance: 160, links: { opacity: 0.35 } } },
    },
  };
}

/** Fondo de partículas azules. Se monta después del contenido y respeta «reducir movimiento». */
export function ParticlesBackground() {
  const [options, setOptions] = useState<ISourceOptions | null>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setOptions(buildOptions(window.innerWidth < 768, motion.matches));
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  if (!options) return null;

  return (
    <ParticlesProvider init={init}>
      <Particles id="particulas" options={options} className="pointer-events-none" />
    </ParticlesProvider>
  );
}
