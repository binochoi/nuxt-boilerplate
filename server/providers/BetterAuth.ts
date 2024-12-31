import defineProvider from 'server/utils/defineProvider';
import { BetterAuth } from '../libs/better-auth/better-auth';

export default defineProvider(() => BetterAuth(useRuntimeConfig()));
