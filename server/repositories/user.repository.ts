import { eq, sql } from 'drizzle-orm';
import { db } from '../libs/drizzle/drizzle';
import { user } from '../libs/drizzle/schema';

export const UserRepository = () => {
  const payOneCredit = async (userId: string) => db().update(user).set({ credit: sql`${user.credit} - 1` }).where(eq(user.id, userId));
  return {
    payOneCredit,
  };
};
