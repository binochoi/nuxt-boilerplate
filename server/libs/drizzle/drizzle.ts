import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { Singleton } from '../../utils/Singleton';

const { dbConnectionStr } = useRuntimeConfig();
const client = Singleton(() => postgres(dbConnectionStr));
const db = Singleton(
  () => drizzle(client(), { schema }),
);
export {
  client,
  db,
  schema,
};
