module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme:{
    fontFamily: {
      'serif': ['sans-serif', 'Verdana','Geneva','Tahoma'],
      'body': ['Open Sans'],
     }
    }
}
