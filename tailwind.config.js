module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#010101',
        dark: '#000',
        white: '#fff',
        lightText: '#76797d',
      },

      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
      },

      screens: {
        custom: '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
