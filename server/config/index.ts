type Runtime = 'dev' | 'preview' | 'prod' | 'test';
const assert = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} was not set`);
  }
  return value;
};
export const useBuildtimeConfig = () => {
  const runtime = (process.env.RUNTIME || 'prod') as Runtime;
  const isDev = (['dev', 'preview'] satisfies Runtime[]).includes(runtime as any);
  const port = Number(process.env.PORT || 5821);
  const baseURL = process.env.BASE_URL || isDev ? `https://localhost:${port}` : 'https://lymgo.com';
  const media = {
    baseURL: isDev ? `${baseURL}/__media__` : 'https://media.lymgo.com',
  };
  return {
    runtime,
    appName: 'Lymgo',
    baseURL,
    isDev,
    isProd: !isDev,
    dbConnectionStr: assert('DB_CONNECTION_STRING'),
    authSecret: assert('AUTH_SECRET'),
    cloudflare: {
      r2: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
      },
    },
    social: {
      google: {
        clientId: assert('GOOGLE_CLIENT_ID'),
        clientSecret: assert('GOOGLE_CLIENT_SECRET'),
      },
    },
    media,
    public: { isDev, media },
    openai: {
      apiKey: assert('OPENAI_API_KEY'),
    },
  };
};
export type Config = ReturnType<typeof useBuildtimeConfig>;
