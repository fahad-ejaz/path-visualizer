/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 50 column grid
        '24': 'repeat(24, minmax(0px, 1fr))',
        '100': 'repeat(100, minmax(0, 1fr))'
      },
   
      
    },
  },
  plugins: [],
}

