export const useConfig = (env: Record<string, string>) => {
  const isDev = env.NODE_ENV === 'development';
  const baseURL = isDev ? 'https://localhost:5821' : 'https://lymgo.com';
  return {
    baseURL,
    dbConnectionStr: env.DB_CONNECTION_STRING,
    authSecret: env.AUTH_SECRET,
    social: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    public: {
      MEDIA_URL: isDev ? 'https://localhost:5821/__media__' : 'https://media.lymgo.com',
    },
  };
};
