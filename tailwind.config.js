/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#F66B0E',
        'secondary': '#205375',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
