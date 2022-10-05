/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        "can-hover": { raw: "(hover: hover) and (pointer: fine)" },
      },
      animation: {
        "slide-in": "slide-in 0.25s ease-in-out forwards",
        "slide-out": "slide-out 0.25s ease-in-out forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-5%)", opacity: "0" },
          "100%": { transform: "translateY(0 )", opacity: "100%" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)", opacity: "100%" },
          "100%": { transform: "translateY(-5%)", opacity: "0" },
        },
      },
    },
  },
};
