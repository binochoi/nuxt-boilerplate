import { H3Event } from 'h3';
import { Session } from '../types';

export const assertSession = (e: H3Event) => {
  const session = e.context.session as Session;
  if (!session) {
    throw createError('Session not found');
  }
  return session;
};
