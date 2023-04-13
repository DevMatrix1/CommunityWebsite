/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Quintessential:['Quintessential', 'cursive'],
        BarlowCondensed: ['Barlow Condensed',' sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'pulse 50s linear infinite',
    },
    colors:{
      bggradient: "linear-gradient(-15deg,rgba(0,0,0,.1),90%,#00ff7b)"
    }
    },
  },
  plugins: [],
}