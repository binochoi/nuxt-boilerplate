import { eq, sql } from 'drizzle-orm';
import { PgTransaction } from 'drizzle-orm/pg-core';
import { db } from '../libs/drizzle/drizzle';
import { user } from '../libs/drizzle/schema';

export const UserRepository = <TDB extends ReturnType<typeof db> | PgTransaction<any, any, any>>(dbOrTx: TDB) => {
  const payOneCredit = async (userId: string) => dbOrTx.update(user).set({ credit: sql`${user.credit} - 1` }).where(eq(user.id, userId));
  return {
    payOneCredit,
  };
};
