import React, { useEffect, useState } from 'react'
import { profile, navSections } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'
import profilePhoto from '../assets/profile.jpg'

export default function Sidebar() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Mobile top bar — fixed, always on top, always the same rich navy regardless of light/dark mode */}
      <div className="lg:hidden fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-gradient-to-r from-ink-900 to-ink-800 px-5">
        <div className="flex items-center gap-3">
          <div className="pulse-ring h-9 w-9 shrink-0" style={{ '--pulse-color': '#C6A15B' }}>
            <img
              src={profilePhoto}
              alt={profile.name}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-brass/70"
            />
          </div>
          <span className="font-display text-sm text-ledger-50">{profile.name}</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-brass/30"
        >
          <span
            className={`block h-px w-4 bg-ledger-100 transition-transform ${
              open ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-4 bg-ledger-100 transition-transform ${
              open ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* A fixed header needs its height reserved in the page flow on mobile */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      {/* Sidebar / drawer — permanently deep navy + gold, the site's identity rail */}
      <aside
        className={`fixed left-0 z-30 flex w-72 flex-col justify-between bg-gradient-to-b from-ink-800 to-ink-900 px-7 py-9 transition-transform duration-300
          top-16 bottom-0 lg:inset-y-0 lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          border-r border-brass/15 overflow-y-auto`}
        style={{ boxShadow: '6px 0 24px -12px rgba(5, 11, 24, 0.6)' }}
      >
        <div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="pulse-ring relative h-16 w-16 shrink-0" style={{ '--pulse-color': '#C6A15B' }}>
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-16 w-16 rounded-full object-cover ring-[3px] ring-brass/70"
                style={{ boxShadow: '0 6px 18px -4px rgba(5, 11, 24, 0.6)' }}
              />
              <span className="absolute -inset-[3px] rounded-full border border-brass/25" />
            </div>
            <div>
              <p className="font-display text-lg leading-tight">
                <span className="foil-text">Ndeanasia</span>
                <br />
                <span className="text-ledger-50">Starson Macha</span>
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ledger-300 lg:mt-4">
            {profile.title}
          </p>

          <div className="my-7 border-t border-brass/15" />

          <nav aria-label="Section navigation">
            <ul className="space-y-1">
              {navSections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(section.id)}
                    className={`flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm transition-colors ${
                      active === section.id
                        ? 'text-brass-light font-medium'
                        : 'text-ledger-300 hover:text-ledger-50'
                    }`}
                  >
                    <span
                      className={`h-px w-4 transition-all ${
                        active === section.id ? 'bg-brass-light w-6' : 'bg-ink-500'
                      }`}
                    />
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <div className="mb-5 border-t border-brass/15" />
          <div className="space-y-1.5 text-xs text-ledger-300">
            <p>{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="block hover:text-brass-light transition-colors">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="block hover:text-brass-light transition-colors">
              {profile.phone}
            </a>
          </div>
          <div className="mt-5">
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed left-0 right-0 top-16 bottom-0 z-20 bg-ink-950/60 lg:hidden"
        />
      )}
    </>
  )
}
