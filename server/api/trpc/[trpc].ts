import { createNuxtApiHandler } from 'trpc-nuxt';
import { router } from 'server/trpc';
import { helloWorld } from 'server/controllers/helloWorld.controller';
// import * as auth from '~/server1/controllers/auth.controller';

export const appRouter = router({
  helloWorld,
  // ...auth,
});
export type AppRouter = typeof appRouter;
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
