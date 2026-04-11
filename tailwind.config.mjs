/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004D78',
          dark: '#003352',
          light: '#0A6FA0',
        },
        gold: {
          DEFAULT: '#C8963E',
          hover: '#A87A2F',
          light: '#F5E6C8',
        },
        ivory: '#FAF8F5',
        charcoal: '#1A1A2E',
        slate: '#4A5568',
        warmgray: '#E5E0DA',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};
