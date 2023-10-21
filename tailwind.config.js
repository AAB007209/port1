/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',
      // => @media (min-width: 576px) { ... }

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '728px',
      // => @media (min-width: 668px) { ... }

      'lg': '848px',
      // => @media (min-width: 850px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

