module.exports = {
  purge: ['./src/**/*.css', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/ui')]
}
