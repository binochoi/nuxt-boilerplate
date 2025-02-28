/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db, schema } from '../drizzle/drizzle';
import { Config } from '../../config';

const useAuth = ({
  baseURL,
  authSecret: secret,
  social,
  dbConnectionStr,
}: Config) => betterAuth({
  baseURL,
  trustedOrigins: [baseURL],
  secret,
  user: {
    additionalFields: {
      credit: {
        type: 'number',
        defaultValue: 1,
      },
    },
  },
  database: drizzleAdapter(db(dbConnectionStr), {
    provider: 'pg',
    schema,
  }),
  socialProviders: {
    google: {
      redirectURI: `${baseURL}/api/auth/callback/google`,
      ...social.google,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 50, // 50 days
    updateAge: 60 * 60 * 24 * 7, // 7 day (every 1 day the session expiration is updated)
  },
  advanced: {
    cookiePrefix: 'app-session',
  },
  logger: {
    level: 'info',
  },
});
export default useAuth;
export const Auth = () => useAuth(useRuntimeConfig());
