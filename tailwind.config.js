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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '800px',
      // => @media (min-width: 1024px) { ... }
    }

  },
  plugins: [],
}

