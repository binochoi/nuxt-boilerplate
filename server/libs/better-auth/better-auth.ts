/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db, schema } from '../drizzle/drizzle';

type Injections = {
  env?: { [K: string]: string | undefined },
}

export const BetterAuth = ({ env = process.env }: Injections) => betterAuth({
  baseURL: env.BASE_URL!,
  trustedOrigins: [env.TRUSTED_ORIGINS!],
  secret: 'ajsduwqgfqidjw',
  user: {
    additionalFields: {
      // role: {
      //   fieldName: 'role',
      //   type: 'number',
      //   enum: ['NEWBIE', 'VERIFIED'],
      //   defaultValue: 'NEWBIE',
      //   required: true,
      //   input: false, // don't allow user to set role
      // },
    },
  },
  database: drizzleAdapter(db(env.DB_CONNECTION_STRING!), {
    provider: 'pg',
    schema,
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
      redirectURI: `${env.BASE_URL}/api/auth/callback/google`,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
  },
  advanced: {
    cookiePrefix: 'app-session',
  },
  logger: {
    level: 'info',
  }
});

const auth = BetterAuth({});
export { auth };
