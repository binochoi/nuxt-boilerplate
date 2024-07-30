import { createNuxtApiHandler } from 'trpc-nuxt';
import { router } from 'server/trpc';
import * as endpoint from 'server/endpoints';

export const appRouter = router(endpoint);
export type AppRouter = typeof appRouter;
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
