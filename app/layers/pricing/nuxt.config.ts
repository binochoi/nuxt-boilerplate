import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: [
    { path: './components', prefix: 'Pricing' },
  ],
  imports: {
    dirs: [
      'composables',
      'types',
      'stores',
    ],
  },
});
