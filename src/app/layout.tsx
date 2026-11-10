import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ParticlesBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
