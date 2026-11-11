import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { flags } from "@/lib/flags";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Desarrollo de software`,
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: site.name,
    title: `${site.name} · Desarrollo de software`,
    description: site.headline,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning className={`${manrope.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <ParticlesBackground />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
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
