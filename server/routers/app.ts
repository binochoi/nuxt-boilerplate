import { procedure, router } from 'server/trpc';
import * as dto from '../../global/dtos/app.dto';

export default router({
  getHellWorld: procedure
    .input(dto.getHelloWorld)
    .query(
      ({ input }) => ({
        helloworld: input.text,
      }),
    ),
});
