/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emerald: '#0B9984',
        emerald300: '#D3F1DA',
        dasar:'#F9FAFB',
      },
      fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
    },
    },
  },
  plugins: [],
};