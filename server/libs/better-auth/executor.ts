import { BetterAuth } from './better-auth';

const auth = BetterAuth(process.env as any);
export { auth };
