const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false,
  // https://tailwindcss.com/docs/controlling-file-size#removing-unused-css
  purge: ['./src/**/*.tsx'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
}
