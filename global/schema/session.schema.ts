import {
  text, pgTable, timestamp, uniqueIndex, varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { user } from './user.schema';

export const session = pgTable('sessions', {
  id: text('id').primaryKey(),
  userId: varchar('user_id').notNull(),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
}, (session) => ({
  sessionIdIndex: uniqueIndex('session_id_index').on(session.id),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.id],
    references: [user.id],
  }),
}));
