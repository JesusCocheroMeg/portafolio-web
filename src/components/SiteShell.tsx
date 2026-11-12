import { Manrope } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { LangSuggest } from "@/components/LangSuggest";
import { getContent, homePath, type Lang } from "@/content";
import { flags } from "@/lib/flags";
import "@/app/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Datos para el <head> de cada idioma: título, Open Graph y las versiones en otros idiomas (hreflang). */
export function buildMetadata(lang: Lang): Metadata {
  const { site, ui } = getContent(lang);
  const title = `${site.name} · ${ui.meta.title}`;
  return {
    metadataBase: new URL(site.url),
    title,
    description: site.description,
    alternates: {
      canonical: homePath[lang],
      languages: { es: homePath.es, en: homePath.en, "x-default": homePath.es },
    },
    openGraph: {
      type: "website",
      locale: ui.meta.ogLocale,
      alternateLocale: getContent(lang === "es" ? "en" : "es").ui.meta.ogLocale,
      url: homePath[lang],
      siteName: site.name,
      title,
      description: site.headline,
    },
    twitter: { card: "summary_large_image" },
  };
}

/** Estructura común de las dos versiones: <html lang>, menú, pie, botón de WhatsApp y analítica. */
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const { site, sections, ui } = getContent(lang);
  const otherLang: Lang = lang === "es" ? "en" : "es";
  const other = { lang: otherLang, href: homePath[otherLang] };
  return (
    <html lang={lang} suppressHydrationWarning className={`${manrope.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <ParticlesBackground />
        <Navbar name={site.name} sections={sections} labels={ui.nav} other={other} />
        {children}
        <Footer lang={lang} />
        <WhatsAppButton lang={lang} />
        <LangSuggest lang={lang} other={other} labels={ui.suggest} />
        {flags.umamiWebsiteId && (
          // Analítica sin cookies. Solo cuenta en los dominios de producción.
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={flags.umamiWebsiteId}
            data-domains="jesuscochero.dev,jesuscochero.web.app"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
