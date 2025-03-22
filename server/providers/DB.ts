import { db } from 'server/libs/drizzle/drizzle';

export default () => db(useRuntimeConfig().dbConnectionStr);
