/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        travel: {
          sky: '#87CEEB',
          teal: '#008080',
          coral: '#FF7F50',
          cream: '#FFFDD0'
        }
      }
    },
  },
  plugins: [],
}
