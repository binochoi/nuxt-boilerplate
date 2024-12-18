import { createNuxtApiHandler } from 'trpc-nuxt';
import { router } from 'server/libs/trpc/trpc';
import * as routers from 'server/libs/trpc/routers';

export const appRouter = router(routers);
export type AppRouter = typeof appRouter;
export default createNuxtApiHandler({
  router: appRouter,
  async createContext(event) {
    const accessToken = getCookie(event, 'access_token');
    return {
      event,
      user: accessToken || '',
    };
  },
});
