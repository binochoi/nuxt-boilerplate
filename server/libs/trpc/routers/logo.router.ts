import { LogoPrompt } from '~~/server/types/logo';
import { procedure, router } from '../trpc';
import { inject } from '../inject';
import logoService from '~~/server/services/logo.service';

const p = procedure.use(
  inject({
    logoService,
  }),
);
export default router({
  generate: p
    .input((i) => i as LogoPrompt)
    .mutation(({ ctx, input }) => ctx.logoService.generate(input)),
  suggestLogoShape: p
    .query(({ ctx }) => ctx.logoService.suggestLogoShape()),
});
