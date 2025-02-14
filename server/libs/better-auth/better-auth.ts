/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db, schema } from '../drizzle/drizzle';
import { useConfig } from '../../../server/config';

type Options = {
  baseURL: string,
  secret: string,
  social: {
    google: {
      clientId: string,
      clientSecret: string,
    }
  }
}
const useAuth = ({
  baseURL,
  secret,
  social,
}: Options) => betterAuth({
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
  database: drizzleAdapter(db(), {
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

let auth: ReturnType<typeof useAuth>;
export const Auth = () => auth ??= useAuth({
  ...useConfig(process.env as any),
  secret: useConfig(process.env as any).authSecret,
});
