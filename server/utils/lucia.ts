import { Lucia, TimeSpan } from 'lucia';
import { DrizzlePostgreSQLAdapter as Adapter } from '@lucia-auth/adapter-drizzle';
import { user, session } from 'global/schema';
import { db } from './db';

const adapter = new Adapter(db, session, user);
const twoWeeks = new TimeSpan(2, 'w');
export const lucia = new Lucia(adapter, {
  sessionExpiresIn: twoWeeks,
});
