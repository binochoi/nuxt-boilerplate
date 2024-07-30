import { createInsertSchema } from 'drizzle-valibot';
import { user } from '../schema/user.schema';

export const signIn = createInsertSchema(user);
