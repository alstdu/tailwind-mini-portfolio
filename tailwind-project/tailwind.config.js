/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.html'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'developer': '#74C0FC',
      'designer': '#ffe8bb',
      'enthusiast': '#E8DAEF',
      'white': '#fff',
    },
    fontSize: {
    },
    fontFamily: {
      sans: ['sans-serif'],
    }
  },
  plugins: [],
}
