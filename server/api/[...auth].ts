import { BetterAuth } from 'server/libs/better-auth/better-auth';

export default defineEventHandler(
  (event) => BetterAuth(useRuntimeConfig(event)).handler(toWebRequest(event)),
);
