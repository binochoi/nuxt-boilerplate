import { client } from 'server/libs/drizzle/drizzle';
import Config from '../providers/Config';

export default defineEventHandler(async (event) => {
  const [row] = await client(Config({event}).DB_CONNECTION_STRING)`select 'OK'`;
  return row['?column?'];
});
