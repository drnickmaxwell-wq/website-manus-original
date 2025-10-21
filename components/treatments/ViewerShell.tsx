import type { ReactNode } from 'react';

interface ViewerShellProps {
  title: string;
  children: ReactNode;
}

export default function ViewerShell({ title, children }: ViewerShellProps) {
  return (
    <section className="my-12 md:my-16">
      <div className="smh-glass relative overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--smh-text)_12%,transparent)] bg-[color-mix(in_oklab,var(--smh-bg)_88%,transparent)] p-6 md:p-10">
        <header className="flex flex-col gap-2 pb-4 md:flex-row md:items-center md:justify-between">
          <h2 className="smh-heading text-xl md:text-2xl">{title}</h2>
          <span className="text-xs uppercase tracking-[0.35em] text-[color-mix(in_oklab,var(--smh-text-muted)_70%,transparent)]">
            Coming soon
          </span>
        </header>
        <div className="rounded-2xl border border-dashed border-[color-mix(in_oklab,var(--smh-text)_18%,transparent)] bg-[color-mix(in_oklab,var(--smh-bg)_92%,transparent)] p-6 text-center text-sm text-[color-mix(in_oklab,var(--smh-text-muted)_85%,transparent)] md:p-12">
          {children}
        </div>
      </div>
    </section>
  );
}
