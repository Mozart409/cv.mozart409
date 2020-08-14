module.exports = {
  purge: ['./src/**/*.css', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        graphql: '#e10098',
        gitactions: '#2088FF',
        gtm: '#246fdb',
        jest: '#C21325'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ]
}
