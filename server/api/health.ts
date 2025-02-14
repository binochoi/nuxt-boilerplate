import { client } from 'server/libs/drizzle/drizzle';

export default defineEventHandler(async () => {
  const [row] = await client()`select 'OK'`;
  return row['?column?'];
});
