import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative flex items-center gap-3 rounded-full border border-brass/25 bg-ink-900/50 transition-colors hover:border-brass/60 ${
        compact ? 'p-2' : 'w-full px-3 py-2'
      }`}
    >
      <span
        className={`relative flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${
          isDark ? 'bg-ink-600' : 'bg-brass/30'
        }`}
      >
        <span
          className={`absolute h-3.5 w-3.5 rounded-full bg-brass shadow-sm transition-transform duration-300 ${
            isDark ? 'translate-x-4' : 'translate-x-1'
          }`}
        />
      </span>
      {!compact && (
        <span className="text-xs font-medium tracking-wide text-ledger-200">
          {isDark ? 'Dark mode' : 'Light mode'}
        </span>
      )}
    </button>
  )
}
