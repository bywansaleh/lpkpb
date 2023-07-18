const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        brand: colors.teal[700],
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },

  corePlugins: {
    container: false,
    aspectRatio: false,
  },

  plugins: [
    function ({ addComponents, matchUtilities, theme }) {
      addComponents({
        '.container': {
          maxWidth: '92rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          // '@screen md': { maxWidth: '50rem' },
          // '@screen lg': { maxWidth: '62rem' },
          // '@screen xl': { maxWidth: '80rem' },
          // '@screen 2xl': { maxWidth: '90rem' },
        },
      });

      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          aspect: (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value,
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              '&::before': {
                content: '""',
                float: 'left',
                paddingTop: `calc(100% / (${value}))`,
              },
              '&::after': {
                clear: 'left',
                content: '""',
                display: 'block',
              },
            },
          }),
        },
        { values: theme('aspectRatio') }
      );
    },
  ],
};

module.exports = config;
