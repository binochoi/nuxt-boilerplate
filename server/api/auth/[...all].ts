import { Auth } from '../../libs/better-auth/better-auth';

export default defineEventHandler(
  (e) => Auth()
    .handler(
      toWebRequest(e),
    ),
);
