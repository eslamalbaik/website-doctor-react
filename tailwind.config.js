
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      darkMode: 'media',
      fontFamily: {
        sans: ["Dubai", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
