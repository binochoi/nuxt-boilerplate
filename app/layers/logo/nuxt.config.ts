import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: [
    { path: './components', prefix: 'Logo' },
  ],
  imports: {
    dirs: [
      'composables',
      'types',
      'stores',
    ],
  },
});
