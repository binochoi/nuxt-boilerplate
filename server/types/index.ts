import type { RequestContext } from 'server/libs/trpc/trpc';

import type { Auth } from '~~/server/libs/better-auth/better-auth';

type Provider<T extends object> = {
  inject: (context: RequestContext) => T;
}

type InjectDependencies<T extends {
  [K: string]: Provider<any>;
}> = {
  [K in keyof T]: ReturnType<T[K]['inject']>;
}

export type { Provider, InjectDependencies };
export type * from '~~/server/libs/better-auth/better-auth';
