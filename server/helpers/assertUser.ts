import { H3Event } from 'h3';
import { User } from '../types';

export const assertUser = (e: H3Event) => {
  const user = e.context.user as User;
  if (!user) {
    throw createError('user not found');
  }
  return user;
};
