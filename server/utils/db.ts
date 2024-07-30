import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from 'global/schema';
import connection from 'server/config/connection';

export const client = new Pool(connection);
export const db = drizzle(client, { schema });
