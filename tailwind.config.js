/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          surface: '#F5F5F7',
          headline: '#1D1D1F',
          body: '#424245',
          muted: '#86868B',
          accent: '#0071E3',
          border: '#E5E5E7',
        },
        dark: {
          bg: '#08090B',
          surface: '#101217',
          elevated: '#181B22',
          headline: '#F5F5F7',
          body: '#D2D2D7',
          accent: '#57C7F7',
          border: '#292D35',
        },
        geo: {
          cyan: '#57C7F7',
          blue: '#0071E3',
          emerald: '#30D158',
          amber: '#FF9F0A',
          indigo: '#5856D6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Inter', 'Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
