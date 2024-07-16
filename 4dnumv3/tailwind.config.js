/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      background: "rgb(var(--background-color) / <alpha-value>)",
      default: "rgb(var(--default-color) / <alpha-value>)",
      heading: "rgb(var(--heading-color) / <alpha-value>)",
      surface: "rgb(var( --surface-color) / <alpha-value>)",

      navitem: "rgb(var(--nav-color) / <alpha-value>)",
      navbg: "rgb(var(--nav-background-color) / <alpha-value>)",
      navmobilebg: "rgb(var(--nav-mobile-background-color) / <alpha-value>)",
      sidebarbg: "rgb(var(--nav-sidebar-background-color) / <alpha-value>)",
      sidebaritem: "rgb(var( --nav-sidebar-color) / <alpha-value>)",
      sidebarhover: "rgb(var(--nav-sidebar-hover-color) / <alpha-value>)",

      transparent: colors.transparent,
      white: colors.white,
      black: {
        100: colors.black,
        200: "#1A1F2B",
        300: "#222222",
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
        500: "#2B3F89",
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
    extend: {
      margin: {
        "2px": "2px",
      },
      padding: {
        "14px": "14px",
      },
    },
  },
  plugins: [],
};
