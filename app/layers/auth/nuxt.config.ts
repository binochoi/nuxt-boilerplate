import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: [
    { path: './components', prefix: 'Auth' },
  ],
  imports: {
    dirs: [
      'composables',
      'types',
      'stores',
    ],
  },
});
