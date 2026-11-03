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
          'red-light': '#FF2E2E',
          'red-dark': '#9E0000',
          'red-glow': 'rgba(224, 0, 0, 0.4)',
          'red-subtle': 'rgba(224, 0, 0, 0.08)',
        },
        dark: {
          base: '#090909',
          surface1: '#121212',
          surface2: '#1A1A1A',
          surface3: '#242424',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
        },
        light: {
          primary: '#F5F5F5',
          secondary: '#D4D4D4',
          muted: '#8E8E8E',
          dim: '#555555',
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'red-sm': '0 0 15px -3px rgba(224, 0, 0, 0.3)',
        'red-md': '0 0 30px -5px rgba(224, 0, 0, 0.4)',
        'red-lg': '0 0 50px -10px rgba(224, 0, 0, 0.5)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

