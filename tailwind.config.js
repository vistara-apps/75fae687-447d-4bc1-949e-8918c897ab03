/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsla(210, 36%, 96%, 1)',
        accent: 'hsla(180, 70%, 50%, 1)',
        primary: 'hsla(217, 91%, 53%, 1)',
        surface: 'hsla(0, 0%, 100%, 1)',
        'text-primary': 'hsla(217, 33%, 21%, 1)',
        'text-secondary': 'hsla(217, 33%, 21%, 0.7)',
        dark: {
          bg: 'hsla(230, 35%, 7%, 1)',
          surface: 'hsla(230, 20%, 12%, 1)',
          border: 'hsla(230, 20%, 18%, 1)',
        },
        purple: {
          500: 'hsla(264, 83%, 58%, 1)',
          600: 'hsla(264, 83%, 52%, 1)',
        },
        cyan: {
          400: 'hsla(180, 70%, 50%, 1)',
          500: 'hsla(180, 70%, 45%, 1)',
        },
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        sm: '6px',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 8px 24px hsla(217, 33%, 21%, 0.12)',
        tooltip: '0 4px 16px hsla(217, 33%, 21%, 0.1)',
        'dark-card': '0 8px 24px hsla(0, 0%, 0%, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
