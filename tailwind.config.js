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
        'primary-blue': '#219ebc',
        'primary-dark-blue': '#073b4c',
        'primary-orange': '#fb8500',
        'secondary-yellow': '#ffb703',
        'secondary-blue': '#118ab2',
        'secondary-dark-blue': '#023047',
      }
    },
  },
  plugins: [],
}