/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a500ff",
          "secondary": "#0093c2",
          "accent": "#00d9ff",
          "neutral": "#1f1f1f",
          "base-100": "#2b2b2b",
          "info": "#00bcff",
          "success": "#a1f900",
          "warning": "#ffc700",
          "error": "#ff7774",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}