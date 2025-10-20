import React from "react";
import Head from "next/head";

type JsonLdType =
  | "LocalBusiness"
  | "Organization"
  | "WebSite"
  | "Service"
  | "FAQPage"
  | "BlogPosting"
  | "Person"
  | "BreadcrumbList";

type Props = {
  type: JsonLdType;
  data: Record<string, unknown>;
};

/** Injects JSON-LD schema into <head>. Ensure data matches schema.org spec. */
export default function JsonLd({ type, data }: Props) {
  const payload = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        // Avoid XSS: JSON.stringify with no user input here.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
      />
    </Head>
  );
}

