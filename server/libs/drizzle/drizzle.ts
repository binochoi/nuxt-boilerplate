import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const client = (dbConnectionStr: string) => postgres(dbConnectionStr);
const db = (dbConnectionStr: string) => drizzle(client(dbConnectionStr), { schema });
export {
  client,
  db,
  schema,
};
