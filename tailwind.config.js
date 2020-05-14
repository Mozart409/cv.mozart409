module.exports = {
  purge: ['./src/**/*.css', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors:{
        'graphql':'#e10098'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/ui')]
}
