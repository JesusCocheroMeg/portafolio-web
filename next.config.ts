import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático: `next build` genera `out/`, que se publica en Firebase Hosting.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Varios layouts raíz (uno por idioma): la 404 común vive en app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
