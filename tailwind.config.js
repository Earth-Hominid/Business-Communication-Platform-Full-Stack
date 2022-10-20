/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '540px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        paytoneone: ['Paytone One', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        abrilfatface: ['Abril Fatface', 'cursive'],
        tinos: ['Tinos', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    fontFamily: true,
  },
};

module.exports = nextConfig;
