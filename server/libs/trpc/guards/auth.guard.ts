import { TRPCError } from '@trpc/server';
import { Auth } from '../../better-auth/better-auth';
import { middleware } from '../trpc';

export const AuthGuard = () => middleware(async ({ ctx, next }) => {
  const auth = Auth();
  const data = await auth.api.getSession({
    headers: toWebRequest(ctx.event).headers,
  });
  const { session, user } = data || {};
  if (!user || !session) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'session is not exist',
    });
  }
  return next({
    ctx: {
      ...ctx,
      user,
      session,
    },
  });
});
