import {
  pgTable, text, timestamp, uuid,
} from 'drizzle-orm/pg-core';

export const media = pgTable('media', {
  id: uuid().primaryKey().defaultRandom(),
  userId: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
