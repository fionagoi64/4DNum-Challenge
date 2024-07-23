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

      magnum_background: "rgb(var(--magnum-background-color) / <alpha-value>)",
      magnum_prize: "rgb(var(--magnum-prize-color) / <alpha-value>)",
      magnum_title: "rgb(var(--magnum-title-color) / <alpha-value>)",
      magnum_border: "rgb(var(--magnum-border-color) / <alpha-value>)",
      magnum_header: "rgb(var(--magnum-header-border-color) / <alpha-value>)",

      damacai_background:
        "rgb(var(--damacai-background-color) / <alpha-value>)",
      damacai_prize: "rgb(var(--damacai-prize-color) / <alpha-value>)",
      damacai_title: "rgb(var(--damacai-title-color) / <alpha-value>)",
      damacai_border: "rgb(var(--damacai-border-color) / <alpha-value>)",
      damacai_header: "rgb(var(--damacai-header-border-color) / <alpha-value>)",

      sports_background: "rgb(var(--sports-background-color) / <alpha-value>)",
      sports_prize: "rgb(var(--sports-prize-color) / <alpha-value>)",
      sports_title: "rgb(var(--sports-title-color) / <alpha-value>)",
      sports_border: "rgb(var(--sports-border-color) / <alpha-value>)",
      sports_header: "rgb(var(--sports-header-border-color) / <alpha-value>)",

      singapore_background:
        "rgb(var(--singapore-background-color) / <alpha-value>)",
      singapore_prize: "rgb(var(--singapore-prize-color) / <alpha-value>)",
      singapore_title: "rgb(var(--singapore-title-color) / <alpha-value>)",
      singapore_border: "rgb(var(--singapore-border-color) / <alpha-value>)",
      singapore_header:
        "rgb(var(--singapore-header-border-color) / <alpha-value>)",

      sandakan_background:
        "rgb(var(--sandakan-background-color) / <alpha-value>)",
      sandakan_prize: "rgb(var(--sandakan-prize-color) / <alpha-value>)",
      sandakan_title: "rgb(var(--sandakan-title-color) / <alpha-value>)",
      sandakan_border: "rgb(var(--sandakan-border-color) / <alpha-value>)",
      sandakan_header:
        "rgb(var(--sandakan-header-border-color) / <alpha-value>)",

      sabah_background: "rgb(var(--sabah-background-color) / <alpha-value>)",
      sabah_prize: "rgb(var(--sabah-prize-color) / <alpha-value>)",
      sabah_title: "rgb(var(--sabah-title-color) / <alpha-value>)",
      sabah_border: "rgb(var(--sabah-border-color) / <alpha-value>)",
      sabah_header: "rgb(var(--sabah-header-border-color) / <alpha-value>)",

      special_background:
        "rgb(var(--special-background-color) / <alpha-value>)",
      special_prize: "rgb(var(--special-prize-color) / <alpha-value>)",
      special_title: "rgb(var(--special-title-color) / <alpha-value>)",
      special_border: "rgb(var(--special-border-color) / <alpha-value>)",
      special_header: "rgb(var(--special-header-border-color) / <alpha-value>)",

      lucky_background: "rgb(var(--lucky-background-color) / <alpha-value>)",
      lucky_prize: "rgb(var(--lucky-prize-color) / <alpha-value>)",
      lucky_title: "rgb(var(--lucky-title-color) / <alpha-value>)",
      lucky_border: "rgb(var(--lucky-border-color) / <alpha-value>)",
      lucky_header: "rgb(var(--lucky-header-border-color) / <alpha-value>)",

      perdana_background:
        "rgb(var(--perdana-background-color) / <alpha-value>)",
      perdana_prize: "rgb(var(--perdana-prize-color) / <alpha-value>)",
      perdana_title: "rgb(var(--perdana-title-color) / <alpha-value>)",
      perdana_border: "rgb(var(--perdana-border-color) / <alpha-value>)",
      perdana_header: "rgb(var(--perdana-header-border-color) / <alpha-value>)",

      grand_background: "rgb(var(--grand-background-color) / <alpha-value>)",
      grand_prize: "rgb(var(--grand-prize-color) / <alpha-value>)",
      grand_title: "rgb(var(--grand-title-color) / <alpha-value>)",
      grand_border: "rgb(var(--grand-border-color) / <alpha-value>)",
      grand_header: "rgb(var(--grand-header-border-color) / <alpha-value>)",

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
