import { desc, eq } from 'drizzle-orm';
import { media } from '../libs/drizzle/schema';
import { RequestContext } from '../libs/trpc/trpc';
import DB from '../providers/DB';

export default () => {
  const db = DB();
  const getShowcaseList = async (userId: string) => {
    const rows = await db.query.media.findMany({
      where: eq(media.userId, userId),
      orderBy: desc(media.createdAt),
    });
    return rows;
  };
  return {
    getShowcaseList,
  };
};
