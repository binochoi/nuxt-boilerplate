/* eslint-disable global-require */
import { type Config } from 'tailwindcss';
import { generateColorPalette } from './app/utils/generateColorPalette';

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
        tertiary: generateColorPalette('--color-tertiary'),
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@inspira-ui/plugins'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
