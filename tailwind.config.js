module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        customUp: 'customUp 500ms ease-in-out',
        customDown: 'customDown 500ms ease-in-out',

      },
      keyframes: {
        customUp: {
          '0%': {
            transform: 'translate(0,-1.5rem)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1'
          },
        },
        customDown: {
          '0%': {
            transform: 'translate(0,-5rem)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1'
          },
        },
      },
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
  plugins: [require('@tailwindcss/line-clamp')],
}
