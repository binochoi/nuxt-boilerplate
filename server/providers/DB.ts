import { db } from 'server/libs/drizzle/drizzle';
import defineProvider from '../utils/defineProvider';

export default defineProvider(() => {
  const config = useRuntimeConfig();
  return db(config.DB_CONNECTION_STRING);
});
