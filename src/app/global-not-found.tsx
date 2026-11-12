import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "800"] });

export const metadata: Metadata = {
  title: "404 · Jesús Cochero",
  robots: { index: false },
};

/** 404 común a los dos idiomas: hay un layout raíz por idioma, así que no hereda ninguno. */
export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${manrope.variable} h-full antialiased`}>
      <body className="grid min-h-full place-items-center px-4 text-center">
        <main>
          <p className="text-6xl font-extrabold text-accent-2">404</p>
          <h1 className="mt-4 text-2xl font-extrabold">Esta página no existe</h1>
          <p lang="en" className="mt-1 text-muted">This page doesn&apos;t exist</p>
          <div className="mt-8 flex justify-center gap-3 text-sm font-bold">
            <Link href="/" className="rounded-lg bg-accent px-5 py-3 text-white transition hover:bg-accent-2">
              Ir al inicio
            </Link>
            <Link href="/en/" lang="en" className="rounded-lg border border-line px-5 py-3 transition hover:border-accent-2">
              Go to the English site
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
