import { buildMetadata, SiteShell } from "@/components/SiteShell";

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
