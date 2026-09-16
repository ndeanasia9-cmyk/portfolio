import React from 'react'
import { leadership } from '../data/profile.js'
import { SectionHeading } from './Experience.jsx'

export default function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 py-16">
      <SectionHeading
        title="Leadership"
        subtitle="Elected and appointed positions, most recent first"
      />

      <ol className="mt-8 relative border-l border-ink-200/60 dark:border-ink-500/40 ml-1">
        {leadership.map((item, i) => (
          <li key={i} className="relative pl-8 pb-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-brass" />
            <p className="text-sm text-ink-400 dark:text-ledger-400">{item.period}</p>
            <h3 className="font-display text-lg text-ink-900 dark:text-ledger-50 mt-1">
              {item.role}
            </h3>
            <p className="text-sm text-ink-600 dark:text-ledger-300 mt-0.5">{item.org}</p>
            {item.note && (
              <p className="text-xs text-brass mt-1.5">{item.note}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
