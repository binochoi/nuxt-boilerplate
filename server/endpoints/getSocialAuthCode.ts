import * as v from 'valibot';
import { procedure } from 'server/trpc';
import schema from 'global/dtos/loginSocial';
import { generateCodeVerifier } from 'arctic';
import { useOauth } from '../services/useOAuth';

export default procedure
  .input((i) => v.parse(schema, i))
  .query(
    ({ input }) => {
      const oauth = useOauth(input.provider);
      const codeVerifier = generateCodeVerifier();
      return oauth.createAuthorizationURL('', codeVerifier);
    },
  );
