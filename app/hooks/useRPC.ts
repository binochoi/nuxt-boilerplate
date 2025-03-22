import rpc from 'api-to-rpc';
import { type API } from '~~/.nuxt/.rpc-definition';

const config = useRuntimeConfig();
export const useRPC = () => rpc<API>({
  baseURL: config.baseURL,
});
