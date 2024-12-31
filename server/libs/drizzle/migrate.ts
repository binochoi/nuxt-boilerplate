import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { url as connectionString } from './drizzle';

const client = postgres(connectionString);
const db = drizzle(client);
migrate(db, { migrationsFolder: './.cache/.migrations' })
  .then(() => client.end());
