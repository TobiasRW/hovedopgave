/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#2a4b9a",
        "white": "#faf9f7",
        "pink": "#f0ccd3",
        "green": "#c7f9cc",
        "emerald": "#57cc99",
        "black": "#101720",
        "red": "#dd1d1d",
      },
      screens: {
        "xs": "375px",
        "xsm": "425px",
        "sm": "640px",
        "2lg": "1200px",
        "3xl": "1920px",
      },
      fontFamily: {
        "cabinet": ["cabinet", "sans-serif"],
        "archivo": ["Archivo", "sans-serif;"]
      },
    },
  },
  plugins: [],
}