import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getContent, type Lang } from "@/content";

// Imagen para compartir en redes (Open Graph), una por idioma.
export const ogSize = { width: 1200, height: 630 };

export function ogAlt(lang: Lang) {
  const { site } = getContent(lang);
  return `${site.name} — ${site.headline}`;
}

const fontDir = join(process.cwd(), "node_modules/@fontsource/manrope/files");

export async function renderOgImage(lang: Lang) {
  const { site } = getContent(lang);
  const [bold, medium] = await Promise.all([
    readFile(join(fontDir, "manrope-latin-800-normal.woff")),
    readFile(join(fontDir, "manrope-latin-500-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1c 0%, #16213b 100%)",
          color: "#eaf0ff",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ width: 96, height: 8, borderRadius: 4, background: "#3a6dff" }} />
        <div style={{ marginTop: 40, fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 40, fontWeight: 500, color: "#9aa7c4", maxWidth: 960 }}>
          {site.headline}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: bold, weight: 800, style: "normal" },
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
