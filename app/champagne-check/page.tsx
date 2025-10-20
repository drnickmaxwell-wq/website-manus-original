"use client";

export default function ChampagneCheck() {
  const theme =
    typeof document !== "undefined"
      ? document.documentElement.dataset.theme || "auto"
      : "auto";

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold smh-heading">Champagne Check</h1>

      <section className="p-6 rounded-xl smh-glass space-y-3">
        <p>
          This route is public and routable (no underscore). If you can see this, routing is OK.
        </p>
        <p className="smh-text-dim">
          Current theme attribute: <strong>{theme}</strong>. Use the toggle in the site header or on{" "}
          <a className="underline" href="/champagne">/champagne</a>.
        </p>
        <ul className="list-disc pl-5 smh-text-dim">
          <li>Tokens from <code>/styles/tokens/smh-champagne-tokens.css</code>.</li>
          <li>Theme driven by <code>html[data-theme]</code> = light | dark | auto.</li>
          <li>Verify brand assets on <a className="underline" href="/champagne">/champagne</a> (Assets table).</li>
        </ul>
      </section>
    </main>
  );
}
