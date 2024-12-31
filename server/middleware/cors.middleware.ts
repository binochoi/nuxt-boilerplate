/* eslint-disable no-param-reassign */
/**
 * nitro 자체 문제로, 이 미들웨어를 통해서만 cors 조작 가능
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD',
    'Access-Control-Allow-Origin': config.CLIENT_HOST || 'localhost',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // "Access-Control-Allow-Headers": '*',
    // "Access-Control-Expose-Headers": '*'
  });
  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204;
    event.node.res.statusMessage = 'No Content.';
    return 'OK';
  }
});
