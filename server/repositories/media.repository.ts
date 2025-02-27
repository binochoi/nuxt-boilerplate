import { PgTransaction } from 'drizzle-orm/pg-core';
import { db } from '../libs/drizzle/drizzle';
import { media } from '../libs/drizzle/schema/media.shema';

export const MediaRepository = <TDB extends ReturnType<typeof db> | PgTransaction<any, any, any>>(dbOrTx: TDB) => {
  type InsertParam = Pick<typeof media.$inferInsert, 'userId'>;
  const insertOne = (data: InsertParam) => dbOrTx.insert(media).values(data).returning();
  return {
    insertOne,
  };
};
