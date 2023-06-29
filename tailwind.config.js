/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
     },
     colors: {
      primary: '#92A8D1'
     }
    },
  },
  plugins: [],
}
