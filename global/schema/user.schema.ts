/* eslint-disable @typescript-eslint/no-namespace */
import { relations } from 'drizzle-orm';
import {
  char,
  pgTable, smallint, timestamp, uniqueIndex, varchar,
} from 'drizzle-orm/pg-core';
import { type SocialProvider } from 'global/enums/SocialProvider';
import v from 'global/validations/user.validation';
import { type Role, role } from 'global/enums/UserRole';

export const user = pgTable('users', {
  id: varchar('id', { length: v.id.max }).primaryKey(),
  role: smallint('role').$type<Role>().default(role.NEWBIE).notNull(),
  nickname: varchar('nickname', {
    length: v.nickname.max,
  }).notNull().unique(),
}, (user) => ({
  userIdIndex: uniqueIndex('user_id_index').on(user.id),
}));
export const userDetail = pgTable('user_details', {
  id: varchar('id', { length: v.id.max }).notNull().unique(),
  socialProvider: smallint('social_provider').$type<SocialProvider>(),
  createdAt: timestamp('sign_up_date').notNull(),
  latestAccessAt: timestamp('last_access_at').notNull(),
}, (user) => ({
  userIdIndex: uniqueIndex('user_detail_id_index').on(user.id),
}));
const BCRYPT_HASH_LENGTH = 60;
export const userSecret = pgTable('user_secrets', {
  id: varchar('id', { length: v.id.max }).notNull().unique(),
  password: char('password', {
    length: BCRYPT_HASH_LENGTH,
  }),
}, (user) => ({
  userIdIndex: uniqueIndex('user_secret_id_index').on(user.id),
}));

export const userRelations = relations(user, ({ one }) => ({
  detail: one(userDetail, {
    fields: [user.id],
    references: [userDetail.id],
  }),
  secret: one(userSecret, {
    fields: [user.id],
    references: [userSecret.id],
  }),
}));
