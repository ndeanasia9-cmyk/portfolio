import React from 'react'
import { skills, languages, hobbies } from '../data/profile.js'
import { SectionHeading } from './Experience.jsx'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <SectionHeading title="Skills" />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="font-display text-base text-ink-900 dark:text-ledger-50 mb-3">
              {group.group}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-ink-600 dark:text-ledger-300 pl-4 border-l border-brass/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <h3 className="font-display text-base text-ink-900 dark:text-ledger-50 mb-3">
            Languages
          </h3>
          <ul className="space-y-2">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex justify-between text-sm text-ink-600 dark:text-ledger-300 max-w-[16rem]"
              >
                <span>{lang.name}</span>
                <span className="text-brass">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-ink-900 dark:text-ledger-50 mb-3">
            Interests
          </h3>
          <p className="text-sm leading-relaxed text-ink-600 dark:text-ledger-300 max-w-md">
            {hobbies.slice(0, -1).join(', ')}, and {hobbies[hobbies.length - 1].toLowerCase()}.
          </p>
        </div>
      </div>
    </section>
  )
}
