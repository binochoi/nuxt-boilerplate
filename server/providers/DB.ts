import { db } from 'server/libs/drizzle/drizzle';
import defineProvider from '../utils/defineProvider';

export default defineProvider(() => db(useRuntimeConfig().dbConnectionStr));
