/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep sapphire/navy — the primary surface and text color family.
        ink: {
          DEFAULT: '#0B1930',
          50: '#EEF3FA',
          100: '#D7E2F1',
          200: '#AFC4DE',
          300: '#7C9CC4',
          400: '#4C71A0',
          500: '#2E5080',
          600: '#1D3A64',
          700: '#152A4B',
          800: '#0F1E38',
          900: '#0B1930',
          950: '#050B18',
        },
        // Cool frost — pale surfaces in light mode.
        ledger: {
          DEFAULT: '#D3E0F2',
          50: '#F8FAFD',
          100: '#EFF3F9',
          200: '#E2E9F3',
          300: '#C9D5E6',
        },
        // Gold foil accent — the single warm note against all that blue.
        brass: {
          DEFAULT: '#C6A15B',
          light: '#E7CF94',
          dark: '#8F7133',
        },
      },
      fontFamily: {
        display: ['"Times New Roman"', 'Times', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
}
