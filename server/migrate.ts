import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from './libs/drizzle/drizzle';
import { useBuildtimeConfig } from './config';

const { dbConnectionStr } = useBuildtimeConfig();
migrate(db(dbConnectionStr), { migrationsFolder: './.cache/.migrations' })
  .then(() => client(dbConnectionStr).end());
