import React from 'react'
import { education } from '../data/profile.js'
import { SectionHeading } from './Experience.jsx'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16">
      <SectionHeading title="Education" />

      <div className="mt-8 space-y-8">
        {education.map((item) => (
          <div key={item.degree} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6">
            <p className="text-sm text-ink-400 dark:text-ledger-400">{item.period}</p>
            <div>
              <h3 className="font-display text-lg text-ink-900 dark:text-ledger-50">
                {item.degree}
              </h3>
              <p className="text-sm text-brass mt-0.5">{item.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
