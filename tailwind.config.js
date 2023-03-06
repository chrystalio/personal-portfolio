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
        'primary': '#071C4D',
        'secondary': '#142F43',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
