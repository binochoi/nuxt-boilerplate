import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: [
    { path: './components', prefix: 'Archive' },
  ],
  imports: {
    dirs: [
      'composables',
      'types',
      'stores',
    ],
  },
});
