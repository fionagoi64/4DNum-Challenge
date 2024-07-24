/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      background: "rgb(var(--background-color) / <alpha-value>)",
      main: "rgb(var(--main-text-color) / <alpha-value>)",

      nav_item: "rgb(var(--nav-item-color) / <alpha-value>)",
      nav_background: "rgb(var(--nav-background-color) / <alpha-value>)",

      sidebar_background:
        "rgb(var(--sidebar-background-color) / <alpha-value>)",
      sidebar_label: "rgb(var( --sidebar-label-color) / <alpha-value>)",
      sidebar_list_item: "rgb(var( --sidebar-list-item-color) / <alpha-value>)",
      sidebar_border: "rgb(var( --sidebar-border-color) / <alpha-value>)",

      picker_border: "rgb(var( --picker-border-color) / <alpha-value>)",
      picker_text: "rgb(var( --picker-text-color) / <alpha-value>)",
      picker_hover: "rgb(var( --picker-hover-color) / <alpha-value>)",

      card_background: "rgb(var(--card-background-color) / <alpha-value>)",
      card_logo: "rgb(var(--card-logo-background-color) / <alpha-value>)",
      card_date: "rgb(var(--card-date-background-color) / <alpha-value>)",
      card_numbers: "rgb(var(--card-numbers-background-color) / <alpha-value>)",
      numbers_border:
        "rgb(var(--numbers-border-background-color) / <alpha-value>)",

      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      gray: {
        100: "#F0F0F0", //light gray
        200: "#F3F3F3", //light gray
        300: "#CBD5E0", // gray
        400: "#AEAEAE",
        500: "#6C6C6C",
        600: "#464646", //dark gray
      },
      blue: {
        100: "#0093D8", //blue-sg
        200: "#1A81BB", //blue-lucky
        300: "#1D68A2", //blue-perdana
        400: "#1C377B", //blue-indigo
        500: "#2B3F89",
        600: "#264CAA",
      },
      red: {
        100: "#EC2024", //red-sports
        200: "#FA0404", //red-sabah
      },
      purple: {
        100: "#99A2CE", //hover mode
        200: "#492C85", //mode
      },
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
      boxShadow: {
        all: "0 0 6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
