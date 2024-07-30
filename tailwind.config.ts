/* eslint-disable global-require */
import { type Config } from 'tailwindcss';
import { generateColorPalette } from './src/utils/generateColorPalette';

export default {
  content: [
    './**/*.{vue,ts}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: generateColorPalette('--color-primary'),
        secondary: generateColorPalette('--color-secondary'),
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;
