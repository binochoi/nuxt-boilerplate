import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/libs/drizzle/schema',
  out: './.cache/.migrations',
  breakpoints: true,
  dbCredentials: {
    url: useRuntimeConfig().dbConnectionStr || '',
  },
});
