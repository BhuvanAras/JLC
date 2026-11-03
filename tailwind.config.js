/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E00000',
          'red-deep': '#A90000',
          'red-light': '#FF2B2B',
          'red-glow': 'rgba(224, 0, 0, 0.28)',
          'red-tint': 'rgba(224, 0, 0, 0.05)',
        },
        ivory: {
          DEFAULT: '#F6F5F2',
          light: '#FAFAF8',
          dark: '#EDECE8',
        },
        graphite: {
          DEFAULT: '#171717',
          deep: '#0D0D0D',
          light: '#242424',
          subtle: '#333333',
        },
        softgrey: {
          DEFAULT: '#E8E6E2',
          light: '#F0EFEA',
          dark: '#D8D5CF',
        },
        body: {
          text: '#4A4A4A',
          muted: '#7E7E7E',
          light: '#9E9E9E',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'liquid-sm': '0 8px 24px -6px rgba(23, 23, 23, 0.06)',
        'liquid-md': '0 16px 36px -10px rgba(23, 23, 23, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
        'liquid-lg': '0 24px 48px -12px rgba(23, 23, 23, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.95) inset',
        'liquid-red': '0 16px 36px -8px rgba(224, 0, 0, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
        'soft-glow': '0 0 40px -10px rgba(224, 0, 0, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
