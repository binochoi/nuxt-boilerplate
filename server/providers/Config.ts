import * as v from 'valibot';
import { RequestContext } from 'server/libs/trpc/trpc';

const schema = v.object({
  BASE_URL: v.optional(v.string(), 'https://localhost:5819'),
  DB_CONNECTION_STRING: v.string(),
  GOOGLE_CLIENT_ID: v.string(),
  GOOGLE_CLIENT_SECRET: v.string(),
  TRUSTED_ORIGINS: v.optional(v.string(), '*'),
});
const validateByEnv = (env: object) => v.parse(schema, env);
export default (c: RequestContext) => validateByEnv(c.event.context.cloudflare.env);
