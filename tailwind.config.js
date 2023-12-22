/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-red': '#ef476f',
        'primary-yellow': '#ffd166',
        'primary-green': '#06d6a0',
        'primary-blue': '#118ab2',
        'primary-dark-blue': '#073b4c',
      }
    },
  },
  plugins: [],
}