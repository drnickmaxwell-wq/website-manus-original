/** Minimal analytics helpers (console only). Wire to GA4/PostHog later. */
export function track(event: string, payload?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // Replace with gtag/posthog as needed
    console.debug("[analytics]", event, payload || {});
  }
}

