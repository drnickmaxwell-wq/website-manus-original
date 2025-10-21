'use client';
export default function FinanceBanner() {
  return (
    <section className="relative my-10 rounded-2xl overflow-hidden smh-gold-border">
      <div className="smh-gradient-bg py-8 px-6 md:px-10">
        <h3 className="smh-heading text-xl md:text-2xl">0% Finance Available</h3>
        <p className="max-w-3xl mt-2 opacity-90">
          Spread the cost of your treatment with flexible monthly plans.
        </p>
        <div className="mt-4">
          <a href="/contact" className="smh-btn">Check Eligibility</a>
        </div>
      </div>
    </section>
  );
}
