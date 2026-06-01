/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
      },
      colors: {
        poke: {
          red: '#e3350d',
          dark: '#b81f00'
        },
        ink: '#2b2b35',
      },
    },
  },
  plugins: [],
}