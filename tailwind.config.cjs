const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      inherit: colors.inherit,
      transparent: colors.transparent,
      current: colors.current,
      white: colors.white,
      black: colors.black,
      grey: colors.neutral,
      pink: "#d2647d",
    },
    extend: {
      colors: {
        grey: {
          750: "#333",
          850: "#1e1e1e",
        },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "can-hover": { raw: "(hover: hover) and (pointer: fine)" },
        "vertical": { raw: "(max-aspect-ratio: 1)"},
        "horizontal": { raw: "(min-aspect-ratio: 1)"}
      },
      aspectRatio: {
        cinema: "2.39/1",
      },
      animation: {
        "slide-in":
          "slide-in 0.25s ease-in-out forwards, fade-in 0.25s ease-in-out forwards",
        "slide-out":
          "slide-out 0.25s ease-in-out forwards, fade-out 0.25s ease-in-out forwards",
        "fade-in": "fade-in 0.25s ease-in-out forwards",
        "fade-out": "fade-out 0.25s ease-in-out forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-5%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        "fade-out": {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("scrolled", "[data-scroll='true'] &");
      addVariant("shown", "[data-visible='true'] &");
      addVariant("hiding", "[data-visible='hiding'] &");
    }),
  ],
};
