import { defineConfig } from 'drizzle-kit';
import { useConfig } from './server/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/libs/drizzle/schema',
  out: './.cache/.migrations',
  breakpoints: true,
  dbCredentials: {
    url: useConfig(process.env as any).dbConnectionStr || '',
  },
});
