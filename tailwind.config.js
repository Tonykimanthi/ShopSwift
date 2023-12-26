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
        'secondary-yellow': '#ffb703',
        'primary-green': '#06d6a0',
        'primary-blue': '#219ebc',
        'primary-lightblue': '#8ECAE6',
        'primary-darkblue': '#073b4c',
        'secondary-blue': '#118ab2',
        'secondary-dark-blue': '#023047',
        'primary-orange': '#fb8500',
      }
    },
  },
  plugins: [],
}