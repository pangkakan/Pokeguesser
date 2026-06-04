/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          red: '#FF6B6B',
          blue: '#4ECDC4',
          yellow: '#FFD93D',
          purple: '#A8E6CF',
          orange: '#FF8B94',
        }
      },
    },
  },
  plugins: [],
}