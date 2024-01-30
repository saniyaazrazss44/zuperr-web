/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: '#D4E6F9',
        btnBlue : '#2645B5',
        btnDarkBlue : '#1a307e',
        textBlue : '#3D81D9',
        footerBg : '#5B95D2',
      }
    },
  },
  plugins: [],
}

