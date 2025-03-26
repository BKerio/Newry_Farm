/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('./assets/About/Image7.jpg')",
        'gradient': "linear-gradient(to right, #f0932b, #eb4d4b)",
      }
    },
  },
  plugins: [],
}