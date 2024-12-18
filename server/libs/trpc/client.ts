import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './app'
export default ({ url }: { url: string }) => createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url,
    }),
  ],
});