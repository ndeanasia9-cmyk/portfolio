import React from 'react'
import { profile, navSections } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ink-900 to-ink-950 border-t border-brass/15">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-base">
              <span className="foil-text">Ndeanasia</span>{' '}
              <span className="text-ledger-50">Starson Macha</span>
            </p>
            <p className="mt-1 text-sm text-ledger-400 max-w-xs">{profile.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:flex sm:flex-col sm:gap-2">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-ledger-300 hover:text-brass-light transition-colors"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="block text-ledger-300 hover:text-brass-light transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="block mt-1 text-ledger-300 hover:text-brass-light transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brass/10 flex flex-col gap-2 text-xs text-ledger-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
