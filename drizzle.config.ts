import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/libs/drizzle/schema',
  out: './.cache/.migrations',
  breakpoints: true,
  dbCredentials: {
    url: process.env.DB_CONNECTION_STRING || '',
  },
});
