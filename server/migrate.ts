import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './libs/drizzle/drizzle';

migrate(db(), { migrationsFolder: './.cache/.migrations' })
  .then(() => client().end());
