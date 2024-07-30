import * as v from 'valibot';
import { procedure } from 'server/trpc';

const schema = v.object({
  text: v.string(),
});

export default procedure
  .input((i) => v.parse(schema, i))
  .query(
    ({ input }) => ({
      helloworld: input.text,
    }),
  );
