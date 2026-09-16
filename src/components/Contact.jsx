import React from 'react'
import { profile, referees } from '../data/profile.js'
import { SectionHeading } from './Experience.jsx'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeading title="Contact" />

      <div className="mt-8 plaque flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 p-8">
        <div>
          <h3 className="font-display text-2xl text-ink-900 dark:text-ledger-50 max-w-xs leading-snug">
            Open to accounting, sales and marketing roles.
          </h3>
          <p className="mt-3 text-sm text-ink-500 dark:text-ledger-300">
            {profile.location}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink-800 dark:text-ledger-100 hover:text-brass transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="text-ink-800 dark:text-ledger-100 hover:text-brass transition-colors"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-base text-ink-900 dark:text-ledger-50 mb-4">
          References
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {referees.map((ref) => (
            <div key={ref.name} className="text-sm">
              <p className="font-medium text-ink-800 dark:text-ledger-100">{ref.name}</p>
              <p className="text-ink-500 dark:text-ledger-400">{ref.role}</p>
              <p className="text-ink-500 dark:text-ledger-400">{ref.location}</p>
              <p className="text-brass mt-1">{ref.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
