import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático: `next build` genera `out/`, que se publica en Firebase Hosting.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
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
