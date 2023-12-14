import wretch from 'wretch';
import FormDataAddon from 'wretch/addons/formData';
import AbortAddon from 'wretch/addons/abort';
import { retry } from 'wretch/middlewares';

const base = wretch()
  // .middlewares([
  //   retry({
  //     delayTimer: 500,
  //     maxAttempts: 3,
  //     retryOnNetworkError: false,
  //     resolveWithLatestResponse: false,
  //   }),
  // ])
  .addon(FormDataAddon)
  .addon(AbortAddon());

/**
 * @example
 * ```typescript
 * const { api, abort } = defineApi();
 *
 * // GET
 * const data = await api().get().json<any[]>();
 *
 * // POST
 * const formData = new FormData();
 * formData.append(file);
 * const data = await api().formData({ file }).post().text();
 *
 * // DELETE
 * await api().delete().res();
 * ```
 */
const defineApi = (baseUri = '') => {
  let controller: AbortController;
  const router = useRouter();
  return {
    api: (uri = '') => {
      controller = new AbortController();
      return base
        .resolve((r) => {
          r.unauthorized(() => {
            router.replace('/login');
          });
          return r;
        })
        .url(baseUri)
        .url(uri)
        .signal(controller);
    },
    abort: () => controller?.abort(),
  };
};
export {
  defineApi,
};
