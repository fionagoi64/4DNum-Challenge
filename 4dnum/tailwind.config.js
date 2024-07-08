/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      black: {
        100: "#222222",
        200: "#1C1C1C",
        300: colors.black,
      },
      gray: {
        100: "#F3F3F3", //light gray
        200: "#CBD5E0", // gray
        300: "#6C6C6C",
        400: "#464646", //dark gray
      },
      blue: {
        100: "#0093D8", //blue-sg
        200: "#1A81BB", //blue-lucky
        300: "#1D68A2", //blue-perdana
        400: "#1C377B", //blue-indigo
      },
      red: {
        100: "#EC2024", //red-sports
        200: "#FA0404", //red-sabah
      },
      purple: "#492C85", //mode
      yellow: "#F5C500", //
      green: {
        100: "#007A37", //
        200: "#10A226", //green-special
      },
    },
    extend: {},
  },
  plugins: [],
};
