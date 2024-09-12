import { createNuxtApiHandler } from 'trpc-nuxt';
import { router } from 'server/trpc';
import * as routers from 'server/routers';

export const appRouter = router(routers);
export type AppRouter = typeof appRouter;
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
