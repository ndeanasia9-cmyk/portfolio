import React from 'react'
import { profile } from '../data/profile.js'
import profilePhoto from '../assets/profile.jpg'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 pt-8 lg:pt-16">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-6 -top-4 hidden h-48 w-48 text-ink-900/[0.05] dark:text-brass/[0.08] sm:block lg:h-56 lg:w-56"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="0.6" />
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i / 48) * Math.PI * 2
          const x1 = 100 + Math.cos(angle) * 84
          const y1 = 100 + Math.sin(angle) * 84
          const x2 = 100 + Math.cos(angle) * 96
          const y2 = 100 + Math.sin(angle) * 96
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.6" />
        })}
      </svg>

      <div className="flex items-center gap-4 lg:hidden">
        <div className="relative shrink-0">
          <img
            src={profilePhoto}
            alt={profile.name}
            className="h-16 w-16 rounded-full object-cover ring-[3px] ring-brass/70"
            style={{ boxShadow: '0 6px 18px -4px rgba(5, 11, 24, 0.35)' }}
          />
          <span className="absolute -inset-[3px] rounded-full border border-brass/25" />
        </div>
        <div>
          <p className="font-display text-lg leading-tight">
            <span className="foil-text">Ndeanasia</span>{' '}
            <span className="text-ink-900 dark:text-ledger-50">Starson Macha</span>
          </p>
          <p className="text-sm text-ink-500 dark:text-ledger-400">{profile.title}</p>
        </div>
      </div>

      <h1 className="mt-8 lg:mt-0 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tightest text-ink-900 dark:text-ledger-50 max-w-2xl">
        Accounting and finance,
        <br />
        practiced through leadership.
      </h1>
      <p className="mt-4 text-sm text-ink-500 dark:text-ledger-400">
        Morogoro, Tanzania — final-year graduate, Mzumbe University
      </p>

      <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-ink-600 dark:text-ledger-300">
        {profile.summary}
      </p>

      <div className="plaque mt-10 flex flex-wrap gap-x-10 gap-y-5 px-6 py-6 max-w-2xl">
        <Fact label="Degree" value="BSc Accountancy & Finance" />
        <Fact label="University" value="Mzumbe University, 2026" />
        <Fact label="Research grade" value="A — Internal Controls & Cash Management" />
      </div>
    </section>
  )
}

function Fact({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-400 dark:text-ledger-400 mb-1">{label}</p>
      <p className="text-sm font-medium text-ink-800 dark:text-ledger-100">{value}</p>
    </div>
  )
}
