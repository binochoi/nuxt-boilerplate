import { type Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/assets/css/global.css',
    './src/**/*.{vue,ts}',
    './libs/ui/stories/**/*.{vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config;
