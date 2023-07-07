const elementsSizes = {
  xs: '24px',
  sm: '32px',
  base: '50px',
  lg: '60px',
  xl: '72px',
}

const headingStyles = {
  fontWeight: '500',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: 420 + 29.98 + 'px',
      sm: 580 + 29.98 + 'px',
      md: 720 + 29.98 + 'px',
      lg: 992 + 29.98 + 'px',
      xl: (1280 + 29.98) + 'px',
    },

    colors: {
      stone: {
        700: '#472C2E',
        400: '#593E3F',
        500: '#6F4F5D',
        DEFAULT: '#6F4F5D',
        600: '#5D3F4C',
        300: '#C0C0C0',
        50: '#F8F8F8',
      },
      zinc: {
        700: '#40354B',
        400: '#BDB3C0',
        300: '#D9D9D9',
        100: '#F3F3F3',
      },
      neutral: {
        800: '#232323',
        100: '#F5F5F5',
      },
      blue: '#2980b9',
      red: '#c0392b',
      green: '#27ae60',
      yellow: '#f39c12',
      gray: '#2B2531',
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },


    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
      },
      inputSize: elementsSizes,
      btnSize: elementsSizes,
      backgroundColor: {
        l1: 'var(--bg1)',
        l2: 'var(--bg2)',
        l3: 'var(--bg3)',
      },
      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.1xl': ['1.5625rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: headingStyles,
            h2: headingStyles,
            h3: headingStyles,
            h4: headingStyles,
            h5: headingStyles,
            h6: headingStyles,
            b: headingStyles,
            strong: headingStyles,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@qpokychuk/tailwind-button-plugin')({
      lightColorOpacity: 0.16,
      lightColorOpacityHover: 0.24,
      withFocusStyles: true
    }),
    require('@qpokychuk/tailwind-image-ratio-plugin'),
    require('tailwindcss-interaction-media'),
    require('./tailwind.form.js'),

  ],
}
