import { BetterAuth } from 'server/libs/better-auth/better-auth';
import Config from '../providers/Config';

export default defineEventHandler(
  (event) => BetterAuth({ env: Config({ event }) }).handler(toWebRequest(event)),
);
