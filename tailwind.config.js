module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#181D29',
        secondary: '#1D2331',
        icons: {
          github: "#010101",
          discord: "#5865F2",
          youtube: "#ff0000",
          twitch: "#6441A5",
          instagram: "#C13584",
          twitter: "#36D8FF"
        }
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
