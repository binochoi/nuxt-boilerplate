import { db } from 'global/libs/drizzle';
import { RequestContext } from '../trpc';
import Config from './Config';

export default (c: RequestContext) => {
  const config = Config(c);
  return db(config.DB_CONNECTION_STRING);
};
