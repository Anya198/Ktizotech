import type { Config } from "tailwindcss"

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        'blue-d': 'var(--blue-d)',
        'blue-lt': 'var(--blue-lt)',
        'blue-mid': 'var(--blue-mid)',
        navy: 'var(--navy)',
        'navy-d': 'var(--navy-d)',
        text: 'var(--text)',
        text2: 'var(--text2)',
        text3: 'var(--text3)',
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        border: 'var(--border)',
        border2: 'var(--border2)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        standard: '0 2px 14px rgba(22, 43, 84, 0.08)',
        elevated: '0 8px 40px rgba(22, 43, 84, 0.13)'
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '18px',
        pill: '40px'
      },
      keyframes: {
        'star-btn': {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
      },
      animation: {
        'star-btn': 'star-btn var(--duration) linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config
