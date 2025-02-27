import { procedure, router } from '../trpc';
import { AuthGuard } from '~~/server/libs/trpc/guards/auth.guard';
import ArchiveService from '~~/server/services/archive.service';

const p = procedure.use(AuthGuard());
export default router({
  getShowcaseList: p.query(async ({ ctx }) => {
    const { getShowcaseList } = ArchiveService(ctx);
    const rows = await getShowcaseList(ctx.user.id);
    return rows;
  }),
});
