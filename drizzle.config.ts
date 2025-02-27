import { defineConfig } from 'drizzle-kit';
import getConfig from './server/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/libs/drizzle/schema',
  out: './.cache/.migrations',
  breakpoints: true,
  dbCredentials: {
    url: getConfig().dbConnectionStr,
  },
});
