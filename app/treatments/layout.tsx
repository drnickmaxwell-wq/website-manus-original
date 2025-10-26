import type { ReactNode } from 'react';

export default function TreatmentsLayout({ children }: { children: ReactNode }) {
  return <section className="relative">{children}</section>;
}
