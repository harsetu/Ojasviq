/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D17',
          900: '#0B1220',
          800: '#111A2E',
          700: '#1A2540',
          600: '#243150',
          500: '#2E3D66',
          400: '#4A5B83',
          300: '#AAB9D1',
          200: '#D5DEED',
          100: '#E8EDF6',
          50: '#F5F7FA',
        },
        gold: {
          600: '#B8932F',
          500: '#D4A83A',
          400: '#E0BE5A',
          300: '#ECD08A',
          200: '#F5E2B8',
          100: '#FBF1D8',
        },
        electric: {
          600: '#2E6FB0',
          500: '#4A90D9',
          400: '#6BAAEA',
          300: '#8FC1F2',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body-lg': ['17px', { lineHeight: '1.7' }],
        'body-xl': ['18px', { lineHeight: '1.7' }],
      },
      maxWidth: {
        'prose-c': '70ch',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
        'slow-spin': 'spin 60s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
