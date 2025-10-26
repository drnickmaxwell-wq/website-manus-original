'use client';

import Link from 'next/link';
import { TREATMENT_GROUPS } from './groups';

export default function GroupSubnav({ group }: { group: keyof typeof TREATMENT_GROUPS }) {
  const g = TREATMENT_GROUPS[group];
  if (!g) return null;

  return (
    <aside className="sticky top-24">
      <div className="text-sm font-semibold mb-2">{g.title}</div>
      <ul className="space-y-1">
        {g.items.map((it) => (
          <li key={it.slug}>
            <Link
              href={`/treatments/${group}/${it.slug}`}
              className="text-sm block px-3 py-2 rounded-md transition-colors duration-200 text-[color:var(--smh-text-dim)] hover:text-[color:var(--smh-text)] hover:bg-[color-mix(in_oklab,var(--smh-primary-magenta)_50%,var(--smh-primary-teal))]"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
