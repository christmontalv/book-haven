/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
        'white': '#ffffff',
        'black': '#000000',
        'grey': '#e7e7e7',
        'blue-grey': '#58597b',
        'blue': '#1841ff',
        'blue-medium': '#769dff',
        'blue-light': '#cee0ff',
        'blue-extra-light': '#ecf4fe',
        'yellow': '#fbff00',
        'transparent': '#ffffff00',
      },
    fontFamily: {
      sans: [
        '"Segoe UI"',
        'sans-serif'
      ]
    },
    extend: {
    },
  },
  plugins: [],
}