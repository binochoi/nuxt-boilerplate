import { TRPCError } from '@trpc/server';
import { LogoPrompt } from '~~/server/types/logo';
import { procedure, router } from '../trpc';
import { inject } from '../inject';
import logoService from '~~/server/services/logo.service';
import { AuthGuard } from '~~/server/libs/trpc/guards/auth.guard';
import { UserRepository } from '~~/server/repositories/user.repository';

const p = procedure
  .use(
    inject({
      logoService,
    }),
  )
  .use(AuthGuard());
export default router({
  generate: p
    .input((i) => i as LogoPrompt)
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.credit <= 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'credit is not enough',
        });
      }
      const { imageLink } = await ctx.logoService.generate(input);
      await UserRepository().payOneCredit(ctx.user.id);
      return {
        imageLink,
      };
    }),
  suggestLogoShape: p
    .query(({ ctx }) => ctx.logoService.suggestLogoShape()),
});
