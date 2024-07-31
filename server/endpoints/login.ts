import * as v from 'valibot';
import { procedure } from 'server/trpc';
import * as user from 'global/dtos/user.dto';

export default procedure
  .input((i) => v.parse(user.signIn, i))
  .query(
    ({ input }) => ({
      helloworld: input.nickname,
    }),
  );
