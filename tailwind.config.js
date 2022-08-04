/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        bg:"#100E35",
        regularPurple:"#AF3BFF",
        maxPurple:"#2E205B",
        bgl1:"#131136",
        bgl2:"#181546",
        left:"#1A1B69",
        right:"#8A165E",
        top:"#165A4F"
      }
    },
  },
  plugins: [],
}
