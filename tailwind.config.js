/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F7F7F7',
        border: 'rgba(0, 0, 0, 0.08)',
        'text-primary': '#111111',
        'text-secondary': 'rgba(0, 0, 0, 0.6)',
        'cta-fill': '#111111',
        'cta-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'General Sans', '-apple-system', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
        'image': '14px',
        'pill': '999px',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'eyebrow': '0.15em',
      },
      lineHeight: {
        'hero': '1.05',
      },
      backgroundImage: {
        'accent-gradient': 'radial-gradient(circle, rgba(138,43,226,1) 0%, rgba(0,255,255,1) 100%)',
      }
    },
  },
  plugins: [],
}
