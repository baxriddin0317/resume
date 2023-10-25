/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          gray: {
            DEFAULT: '#F0F0F0',
            '100': '#DEDEDE',
            '200': '#707070'
          },
          blue: {
            DEFAULT: '#2E5A81'
          },
          black: {
            DEFAULT: '#3D3D3D',
            '100': '#909090',
          },
          red: {
            DEFAULT: '#D94F4F'
          }
        }
      },
      fontFamily: {
        'montserat': [ 'Montserrat', 'sans-serif']
      },
      borderRadius: {
        '25': "25px"
      },
      spacing:{
        '30': "30px"
      }
    },
  },
  plugins: [],
}
