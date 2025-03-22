import { Auth } from '~~/server/libs/better-auth/better-auth';

export default defineEventHandler(
  (e) => Auth()
    .handler(
      toWebRequest(e),
    ),
);
