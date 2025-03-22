import { Auth } from '~~/server/libs/better-auth/better-auth';

export default defineEventHandler(async (e) => {
  const auth = Auth();
  const { headers } = e;
  const session = await auth.api.getSession({
    headers,
  });
  e.context.user = session?.user;
  e.context.session = session?.session;
});
