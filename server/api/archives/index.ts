import ArchiveService from '~~/server/services/archive.service';

export default defineEventHandler(async (e) => {
  const { getShowcaseList } = ArchiveService();
  const rows = await getShowcaseList(e.context.user.id);
  return rows;
});
