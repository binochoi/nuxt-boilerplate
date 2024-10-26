import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from 'global/schema';

export const client = postgres('');
export const db = drizzle(client, { schema });
