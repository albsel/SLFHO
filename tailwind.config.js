/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        brand: {
          primary: '#10b981',      // green-500
          primaryDark: '#059669',  // green-600
          primaryLight: '#34d399', // green-400
          secondary: '#10b981',    // emerald-600
          secondaryDark: '#059669', // emerald-700
          accent: '#14b8a6',       // teal-500
          accentDark: '#0d9488',   // teal-600
          success: '#10b981',      // green-500
          error: '#ef4444',        // red-500
          errorLight: '#f87171',   // red-400
          textLight: '#d1fae5',    // green-100 (for text on dark backgrounds)
          textMedium: '#a7f3d0',   // green-200
          textLighter: '#6ee7b7',  // green-300
        },
        overlay: {
          dark: 'rgba(6, 78, 59, 0.6)',    // green-900/60
          medium: 'rgba(5, 150, 105, 0.55)', // emerald-800/55
          light: 'rgba(20, 184, 166, 0.6)',  // teal-900/60
        }
      },
      // Container Configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      // Max width for content sections
      maxWidth: {
        'content': '1200px',
      },
      // Keyframes
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      // Animations
      animation: {
        shimmer: 'shimmer 2s infinite'
      },
      // Spacing
      spacing: {
        'section': '4rem',  // py-16 equivalent
        'section-sm': '2rem', // py-8 equivalent
      }
    },
  },
  plugins: [],
}

