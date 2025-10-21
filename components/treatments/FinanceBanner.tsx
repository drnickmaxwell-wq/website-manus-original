export default function FinanceBanner() {
  return (
    <section className="my-12 md:my-16">
      <div className="smh-glass relative overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--smh-text)_10%,transparent)] bg-[color-mix(in_oklab,var(--smh-bg)_92%,transparent)] p-8 md:p-12">
        <div className="absolute inset-y-0 right-0 -z-10 w-40 smh-particles-teal opacity-60" aria-hidden="true" />
        <div className="absolute -right-10 -top-10 -z-20 h-48 w-48 rounded-full bg-gradient-to-br from-[var(--smh-primary-teal)]/40 to-[var(--smh-primary-magenta)]/40 blur-3xl" aria-hidden="true" />
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="smh-heading text-2xl font-semibold md:text-3xl">Finance made flexible</h2>
          <p className="smh-text-dim text-base md:text-lg">
            Spread the cost of treatment with interest-free and low-interest plans, tailored to suit your budget and timeline.
          </p>
          <a className="smh-btn" href="/fees">
            Explore finance options
          </a>
        </div>
      </div>
    </section>
  );
}
