import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { Singleton } from 'server/utils/Singleton';
import * as schema from './schema';

const url = process.env.DB_CONNECTION_STRING || '';
const client = Singleton((connectionStr: string) => postgres(connectionStr));
const db = Singleton((connectionStr: string) => drizzle(client(connectionStr), { schema }));
export {
  client,
  db,
  url,
  schema,
};
