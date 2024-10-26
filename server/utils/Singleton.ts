/**
 * Singleton(() => {
 *
 * })
 */
export const Singleton = <Res, Params extends Array<any>>(fn: (...params: Params) => Res): (...params: Params) => Res => {
  let cached: Res;
  return (...params: Params) => cached || fn(...params);
};
