/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        purple: {
          100: "#99A2CE", //hover refresh
          200: "#2A5CD6", //dark damacai
          300: "#264CAA", //refresh button
          400: "#492C85", //dark theme
          500: "#264EFF",
        },
        gray: {
          100: "#A5A5A5", //dark picker text
          200: "#CBD5E0", //theme button
          300: "#9E9E9E", //icon
          400: "#6D6D6D", //picker text
          500: "#767676", //special draw
          600: "#464646", //dark prize
          700: "#4C4C4C", //dark border
          800: "#3A3A3A",
          900: "#EAEAEA",
        },
        blue: {
          100: "#0093D8", //singapore
          200: "#1A81BB", //lucky
          300: "#1D377B", //damacai
          400: "#1E68A2", //perdana
          500: "#EDF2F7",
        },
        yellow: {
          100: "#F5C530", //sandakan
        },
        red: {
          100: "#EC2024", //sports
          200: "#FA0504", //sabah
          300: "#FF0000",
        },
        green: {
          100: "#017A37", //sandakan prize
          200: "#0FA227", //special
        },
        black: {
          100: "#000000",
          200: "#070707", //dark date
          300: "#1A202C", //theme text
          400: "#1C1C1C", //dark number
          500: "#222222", //dark bg
        },
        white: {
          100: "#FFFFFF",
          200: "#EAEAEA", //dark sizebar item
          300: "#F0F0F0", //date picker
          400: "#F5F5F5", //bg
          500: "#F3F3F3",
        },
      },
      margin: {
        "2px": "2px",
      },
      padding: {
        "14px": "14px",
      },
      boxShadow: {
        all: "0 0 6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
