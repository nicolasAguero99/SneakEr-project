/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#020100',
      'paragraph': '#9C9C9C',
      'primary': {
        DEFAULT: '#FFB100',
        200: 'rgba(255, 177, 0, .2)',
        500: 'rgba(255, 177, 0, .5)',
        900: '#FFB100'
      },
      'secondary': '#C1292E',
      'tertiary': '#235789',
      'fourth': '#020100',
    },
    fontFamily: {
      'Lato': ['Lato', "sans-serif"],
      'Montserrat': ['Montserrat', "sans-serif"],
    },
    keyframes: {
      // leftToRight: {
      //   '0%': { transform: 'translateX(-700px)' },
      //   '100%': { transform: 'translateX(0px)' },
      // },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      sneakerEntry : {
        '0%' : {
          transform: 'translateX(1000px)',
          opacity: 0,
        },
        '100%' : {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
    },
    extend: {},
  },
  plugins: [],
}

