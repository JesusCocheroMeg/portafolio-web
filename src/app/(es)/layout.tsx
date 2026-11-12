import { buildMetadata, SiteShell } from "@/components/SiteShell";

export const metadata = buildMetadata("es");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
