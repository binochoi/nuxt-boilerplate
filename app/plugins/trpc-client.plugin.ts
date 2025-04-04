import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client';
import type { AppRouter } from 'server/libs/trpc/app';
import superjson from 'superjson';

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  });

  return {
    provide: { client },
  };
});
