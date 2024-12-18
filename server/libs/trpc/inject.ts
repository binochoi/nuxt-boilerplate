import { middleware, RequestContext } from './trpc';

export default <TInjectables extends { [K: string]: (context: RequestContext) => any }>(injectables: TInjectables) => middleware(
  async ({ ctx, next }) => next({
    ctx: {
      ...ctx,
      ...Object.fromEntries(Object.entries(injectables).map(([key, fn]) => [key, fn(ctx)])) as {
        [K in keyof TInjectables]: ReturnType<TInjectables[K]>
      },
    },
  }),
);
