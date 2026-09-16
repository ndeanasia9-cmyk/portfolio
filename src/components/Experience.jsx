import React from 'react'
import { experience, workshops, research } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeading title="Experience" subtitle="Work, research and applied practice" />

      <div className="mt-8 space-y-8">
        {experience.map((job) => (
          <div key={job.role} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6">
            <p className="text-sm text-ink-400 dark:text-ledger-400">{job.period}</p>
            <div>
              <h3 className="font-display text-lg text-ink-900 dark:text-ledger-50">
                {job.role}
              </h3>
              <p className="text-sm text-brass mt-0.5">{job.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ledger-300 max-w-lg">
                {job.detail}
              </p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6">
          <p className="text-sm text-ink-400 dark:text-ledger-400">Final year</p>
          <div>
            <h3 className="font-display text-lg text-ink-900 dark:text-ledger-50">
              {research.title}
            </h3>
            <p className="text-sm text-brass mt-0.5">
              {research.note} — Grade {research.grade}
            </p>
          </div>
        </div>

        {workshops.map((w) => (
          <div key={w.title} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6">
            <p className="text-sm text-ink-400 dark:text-ledger-400">{w.period}</p>
            <div>
              <h3 className="font-display text-lg text-ink-900 dark:text-ledger-50">
                {w.title}
              </h3>
              <p className="text-sm text-brass mt-0.5">{w.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ledger-300 max-w-lg">
                {w.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-ink-200/50 dark:border-ink-500/30 pb-4">
      <h2 className="font-display text-2xl text-ink-900 dark:text-ledger-50">{title}</h2>
      {subtitle && (
        <span className="text-sm text-ink-400 dark:text-ledger-400">{subtitle}</span>
      )}
    </div>
  )
}
