/* eslint-disable no-use-before-define */
import type { RequestContext } from 'server/libs/trpc/trpc';
import type { InjectDependencies, Provider } from 'server/types';

type InjectedService = {
  [K: string]: (...args: any) => any
};
type Dependencies = {
  [K: string]: Provider<any>
}

function defineService<TFn extends (context: RequestContext) => InjectedService>(
  fn: TFn
): {
  inject: (context: RequestContext) => ReturnType<TFn>;
  $types: ReturnType<TFn>;
  $param: { [K in keyof ReturnType<TFn>]: Parameters<ReturnType<TFn>[K]>[0] };
  $params: { [K in keyof ReturnType<TFn>]: Parameters<ReturnType<TFn>[K]> };
  $returns: { [K in keyof ReturnType<TFn>]: ReturnType<ReturnType<TFn>[K]> };
};
function defineService<
  TInjected extends Dependencies,
  TFn extends (context: RequestContext & InjectDependencies<TInjected>) => InjectedService
>(
  injected: TInjected,
  fn: TFn
): {
  inject: (context: RequestContext) => ReturnType<TFn>;
  $types: ReturnType<TFn>;
  $param: { [K in keyof ReturnType<TFn>]: Parameters<ReturnType<TFn>[K]>[0] };
  $params: { [K in keyof ReturnType<TFn>]: Parameters<ReturnType<TFn>[K]> };
  $returns: { [K in keyof ReturnType<TFn>]: ReturnType<ReturnType<TFn>[K]> };
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
  const $types = {} as any;
    type Logic = typeof $types;

    const $param = {} as {
      [K in keyof Logic]: Parameters<Logic[K]>[0]
    };
    const $params = {} as {
      [K in keyof Logic]: Parameters<Logic[K]>
    };
    const $returns = {} as {
      [K in keyof Logic]: ReturnType<Logic[K]>
    };

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
      inject, $types, $param, $params, $returns,
    };
}

export default defineService;
