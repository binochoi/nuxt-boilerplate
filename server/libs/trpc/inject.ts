import { middleware, type RequestContext } from './trpc';

type Provider<T extends object> = {
  inject: (context: RequestContext) => T;
}
export const inject = <TInjectables extends { [K: string]: Provider<any> }>(injectables: TInjectables) => middleware(
  async ({ ctx, next }) => next({
    ctx: {
      ...ctx,
      ...Object.fromEntries(Object.entries(injectables).map(([key, fn]) => [key, fn.inject(ctx)])) as {
        [K in keyof TInjectables]: ReturnType<TInjectables[K]['inject']>
      },
    },
  }),
);
