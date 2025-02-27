import { client } from 'server/libs/drizzle/drizzle';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const [row] = await client(config.dbConnectionStr)`select 'OK'`;
  return row['?column?'];
});
