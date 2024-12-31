import type { RequestContext } from 'server/libs/trpc/trpc';

type Provider<T extends object> = {
  inject: (context: RequestContext) => T;
}

type InjectDependencies<T extends {
  [K: string]: Provider<any>;
}> = {
  [K in keyof T]: ReturnType<T[K]['inject']>;
}

export type { Provider, InjectDependencies };
