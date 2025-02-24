/**
 * Singleton(() => {
 *
 * })
 */
export const Singleton = <Res, Params extends Array<any>>(fn: (...params: Params) => Res): (...params: Params) => Res => {
  let cached: typeof fn;
  return (...params: Params) => {
    if (cached) {
      return cached(...params);
    }
    cached = fn;
    return cached(...params);
  };
};
