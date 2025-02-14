export const useConfig = (env: Record<string, string>) => ({
  baseURL: 'https://localhost:5821',
  dbConnectionStr: env.DB_CONNECTION_STRING,
  authSecret: env.AUTH_SECRET,
  social: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  public: {
    MEDIA_URL: env.NODE_ENV === 'development' ? 'https://localhost:5821/__media__' : 'https://media.lymgo.com',
  },
});
