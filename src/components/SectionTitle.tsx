export function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-2">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{children}</h2>
    </div>
  );
}
