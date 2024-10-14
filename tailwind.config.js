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
          'from': {transform: 'translateX(0%)'},
          'to': {transform: 'translateX(-100%)'}
        }
      },
      animation: {
        moving: 'moving 30s linear 0s infinite forwards'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}