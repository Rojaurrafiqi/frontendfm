/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emerald: "#0B9984",
        emerald300: "#D3F1DA",
        emerald500: "#80CBC4",
        textcolor: "#263339",
        dasar: "#F9FAFB",
        dasar300: "#c6c7c8",
        dasar200: "#eff0f1",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
