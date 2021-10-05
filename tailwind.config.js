module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#181D29',
        secondary: '#1D2331'
      },
      borderRadius: {
        card: '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
