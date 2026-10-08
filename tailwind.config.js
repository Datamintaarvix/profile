/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#050914',
          850: '#07111F',
          800: '#0A1424',
          750: '#0E1D33',
          700: '#142542',
          600: '#1E3A5F',
        },
        electric: {
          500: '#0066FF',
          600: '#0052CC',
          400: '#3385FF',
        },
        cyan: {
          brand: '#00F0FF',
          mint: '#00E5BE',
          deep: '#0284C7',
        },
        violet: {
          brand: '#8B00FF',
          deep: '#6C00FF',
          glow: '#7D00FF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 240, 255, 0.08), 0 8px 24px 0 rgba(139, 0, 255, 0.15)',
        'glow-cyan': '0 0 25px -3px rgba(0, 240, 255, 0.35)',
        'glow-violet': '0 0 30px -3px rgba(139, 0, 255, 0.4)',
        'glow-blue': '0 0 30px -3px rgba(0, 102, 255, 0.4)',
        'glow-button': '0 4px 20px 0 rgba(0, 240, 255, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
