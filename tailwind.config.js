/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 0 40px rbg(0, 0, 0)',
      },
    },

    screens: {
      xsm: '0px',
      nsm: '375px',
      hero: '623px',
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      hero: '1152px',
    },
    
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      space: ['Space Grotesk', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'],
    },

    animation: {
      'spin-slow': 'spin 15s linear infinite',
    },

    boxShadow: {
      'xl': '0 0 40px rbg(0, 0, 0)',
    },

  },
  plugins: [],
}