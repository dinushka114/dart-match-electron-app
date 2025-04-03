/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        brown: {
          800: '#6B4F3B',
          600: '#9C7B5E',
        },
        yellow: {
          700: '#D8A400',
          500: '#E0B200',
        },
      },
    },
  },
  plugins: [],
}
