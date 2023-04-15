/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': 'Playfair Display, serif',
        'montSer': 'Montserrat, sans-serif'
    },
      colors: {
        'darkPurple': '#6B4492',
        'bgColor': '#F9F8F8'
      }
  },
  plugins: [],
  }
}