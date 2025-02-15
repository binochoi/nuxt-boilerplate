import { fileURLToPath } from 'url';
import Aura from '@primevue/themes/aura';

export const useConfig = (env: Record<string, string>) => {
  const isDev = env.NODE_ENV === 'development';
  const baseURL = isDev ? 'https://localhost:5821' : 'https://lymgo.com';
  return {
    appName: 'Lymgo',
    baseURL,
    isDev,
    isProd: !isDev,
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
const config = useConfig(process.env as any);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: config,
  imports: {
    dirs: [
      './types/*.d.ts',
      './layers',
      './hooks',
      './utils',
    ],
    autoImport: true,
  },
  devServer: {
    port: Number(process.env.PORT) || 5821,
    https: {
      cert: './localhost.pem',
      key: './localhost-key.pem',
    },
  },
  components: [
    {
      global: true,
      path: '~/components/ui',
      pathPrefix: false,
    },
    '~/components',
  ],
  extends: [
    './app/layers/logo',
    './app/layers/auth',
    './app/layers/pricing',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nitro-cloudflare-dev',
    '@ant-design-vue/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './app/i18n/config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ko', language: 'ko-KR' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  primevue: {
    components: {
      prefix: 'Prime',
    },
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.darkmode',
        },
      },
    },
  },
  antd: {
    components: ['Textarea'],
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },
  alias: {
    app: fileURLToPath(new URL('./app', import.meta.url)),
    server: fileURLToPath(new URL('./server', import.meta.url)),
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
  },
  compatibilityDate: '2024-11-01',
  build: {
    transpile: ['trpc-nuxt'],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      link: [
        {
          rel: 'icon', type: 'image/png', href: `${config.public.MEDIA_URL}/assets/favicons/favicon-96x96.png`, sizes: '96x96',
        },
        { rel: 'icon', type: 'image/svg+xml', href: `${config.public.MEDIA_URL}/assets/favicons/favicon.svg` },
        { rel: 'shortcut icon', href: `${config.public.MEDIA_URL}/assets/favicons/favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${config.public.MEDIA_URL}/assets/favicons/apple-touch-icon.png` },
        { rel: 'manifest', href: `${config.public.MEDIA_URL}/assets/favicons/site.webmanifest` },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: config.appName },
      ],
    },
    rootAttrs: {
      id: 'app',
    },
  },
  future: { compatibilityVersion: 4 },
  srcDir: 'app/',
  serverDir: 'server/',
  nitro: {
    preset: 'cloudflare_module',
    minify: false,
    rollupConfig: {
      external: ['cloudflare:sockets'],
    },
    routeRules: {
      ...(
        config.baseURL.includes('localhost') ? {
          '/__media__/**': {
            proxy: 'https://media.lymgo.com/**',
          },
        } : undefined),
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
        moduleResolution: 'bundler',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      {
        name: 'configure-response-headers',
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            next();
          });
        },
      },
    ],
  },

  devtools: { enabled: false },
  ssr: false,
});
