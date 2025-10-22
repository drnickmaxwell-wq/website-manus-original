"use client";
export default function FinanceBanner() {
  return (
    <section className="relative my-10 rounded-2xl smh-glass">
      <div className="p-6 md:p-8">
        <h3 className="smh-heading text-xl md:text-2xl">0% Finance Available</h3>
        <p className="smh-text-dim mt-2 max-w-2xl">
          Spread the cost of your treatment with flexible monthly plans, including interest-free options (subject to status).
        </p>
        <div className="mt-4">
          <a href="/fees" className="smh-btn">Check Eligibility</a>
        </div>
      </div>
    </section>
  );
}

