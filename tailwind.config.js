/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: [ "Outfit", "sans-serif"],
        min: [ "Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
