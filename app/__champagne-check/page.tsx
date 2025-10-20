export const dynamic = "force-static";

export default function ChampagneCheck() {
  const theme =
    typeof document !== "undefined"
      ? document.documentElement.dataset.theme || "auto"
      : "auto";

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold smh-heading">Champagne Check</h1>
      <p className="smh-text-dim">
        This lightweight route exists for QA. Current theme attribute: <strong>{theme}</strong>.
      </p>
      <p>
        Go to <a className="underline" href="/champagne">/champagne</a> for full diagnostics.
      </p>
    </main>
  );
}
