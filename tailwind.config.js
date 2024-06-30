/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': "#00A6FB",
        'primary-400': "#0582CA",
        'primary-300': "#006494",
        'primary-200': "#003554",
        'primary-150': "#002534",
        'primary-100': "#051923"
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

