import type { RequestContext } from 'server/libs/trpc/trpc';
import type { InjectDependencies, Provider } from 'server/types';

type InjectedService = any;
type Dependencies = {
  [K: string]: Provider<any>
}
function defineService<TFn extends (context: RequestContext) => InjectedService>(
  fn: TFn
): {
  inject: (context: RequestContext) => ReturnType<TFn>;
};
function defineService<
  TInjected extends Dependencies,
  TFn extends (context: RequestContext & InjectDependencies<TInjected>) => InjectedService
>(
  injected: TInjected,
  fn: TFn
): {
  inject: (context: RequestContext) => ReturnType<TFn>;
};

// 구현부
function defineService<
  TInjected extends Dependencies,
  TFn extends(
    (context: RequestContext & InjectDependencies<TInjected>) => InjectedService)
>(
  fnOrInjected: TFn | TInjected,
  maybeFn?: TFn,
) {
  const inject = (context: RequestContext) => {
    if (maybeFn) {
      const injected = Object.entries(fnOrInjected as TInjected).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value.inject(context),
      }), {} as InjectDependencies<TInjected>);

      return maybeFn({
        ...context,
        ...injected,
      }) as ReturnType<TFn> & InjectDependencies<TInjected>;
    }
    return (fnOrInjected as TFn)(context as any);
  };

  return {
    inject,
  };
}

export default defineService;
