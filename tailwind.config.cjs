/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  important: false,
  mode: 'jit',
  theme: {
    ...defaultTheme,
    extend: {
    }
  },
  plugins: [
  ],
  corePlugins: {
    preflight: false,
    aspectRatio: true,
    divideStyle: true
  }
}
