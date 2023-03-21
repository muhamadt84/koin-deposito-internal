module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'main': '#45405F',
        'primary': '#378DF4',
        'danger': '#C53741',
        'success': '#41AF60',
        'info': '#4657EE',
        'default': '#D2D2D2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
