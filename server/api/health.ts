import { client } from 'server/libs/drizzle/drizzle';

export default defineEventHandler(async (event) => {
  const [row] = await client(useRuntimeConfig(event).DB_CONNECTION_STRING)`select 'OK'`;
  return row['?column?'];
});
