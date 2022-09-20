/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smX: '320px',
        md: '600px',
        smB: '680px',
        mdB: '880px',
      }
    }
  },
  plugins: [],
}