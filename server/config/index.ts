const assert = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} was not set`);
  }
  return value;
};
const config = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const port = Number(process.env.PORT || 5821);
  const baseURL = isDev ? `https://localhost:${port}` : 'https://lymgo.com';
  return {
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
    public: {
      MEDIA_URL: isDev ? `${baseURL}/__media__` : 'https://media.lymgo.com',
    },
  };
};

export default config;
export type Config = ReturnType<typeof config>;
