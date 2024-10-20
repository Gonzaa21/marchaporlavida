// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        abrilFatface:['AbrilFatface'],
        montserrat:['Montserrat'],
        tanach: ['Tanach']
      },
      keyframes: {
        moving: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'}
        }
      },
      animation: {
        moving: 'moving 20s linear infinite'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}