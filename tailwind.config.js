/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        'mp': '100%'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'market': '1fr 4fr',
        'market-sm': '0',
        'upgrade': '2fr 3fr',
        'ino': '1fr 2fr',
        'header-cols': '1fr 8fr 2fr',
        'collection-table': '0.25fr 25% 1fr  1fr  1fr  1fr  2fr  1fr',
        'collection-table-sm': '3fr  1fr',
      },
      boxShadow: {
        'header-shadow': '0 4px 8px 0 rgb(0 0 0 / 63%)',
      },
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'dark-bg': '#202225',
        'light-bg': '#F4F4F4',
        'header': '#04111d',
        'box-bg': '#212226',
        'border-color': '#4C505C',
        'cgray':'#4C505C',
        'secondary-text': '#c8c8c8',
        'footer-gray': '#353841',
        'green': {
          '100': '#B4F8A0',
          '200': '#A5F78D',
          '300': '#96F679',
          '400': '#88F466',
          '500': '#72F34B',
        },
        'warning':{
          100:'#cdae16',
          200:'#E8C721',
          300:'#EACB34',
          400:'#ECD046',
          500:'#EFD96B'
        },
        'alert':{
          100:'#c43934',
          200:'#D0524E',
          300:'#D4625E',
          400:'#D8726E',
          500:'#DD817E'
        },

        'light-primary': '#142A37',
        'light-secondary': '#D84E0C',
        'dark-primary': '#A8A8A8',
        'dark-secondary': '#DC3F10',
        'transparent': 'transparent'

      }
    },
    screens: {
      'tablet': { 'max': '860px', 'min': '699px' },
      'sm': { 'max': '699px' },
      'md': { 'max': '1280px', 'min': '1024px' },
      'hs': '1280px',


      // => @media (min-width: 640px) { ... } 
      'lp': { 'max': '1280px' },
      // 'md': '768px',
      // => @media (min-width: 768px) { ... }
      'xs2x': { 'max': '680px' },
      'lg': { 'max': '1024px' },
      // => @media (min-width: 1024px) { ... }
      'mdx': { 'max': '1440px' },
      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [
    require('flowbite/plugin')
]

}
