import { fileURLToPath } from 'url';
import Aura from '@primevue/themes/aura';
import rpc from 'nitro-rpc-definition';
import { useBuildtimeConfig } from './server/config';

const config = useBuildtimeConfig();
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: config,
  routeRules: {
    '/*': {
      prerender: true,
    },
  },
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
    port: Number(process.env.PORT),
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
    './app/layers/archive',
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
    'shadcn-nuxt',
    'nuxt-workers',
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
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui/lib',
  },
  alias: {
    app: fileURLToPath(new URL('./app', import.meta.url)),
    server: fileURLToPath(new URL('./server', import.meta.url)),
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2024-11-01',
  app: {
    buildAssetsDir: '_assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      link: [
        {
          rel: 'icon', type: 'image/png', href: `${config.media.baseURL}/assets/favicons/favicon-96x96.png`, sizes: '96x96',
        },
        { rel: 'icon', type: 'image/svg+xml', href: `${config.media.baseURL}/assets/favicons/favicon.svg` },
        { rel: 'shortcut icon', href: `${config.media.baseURL}/assets/favicons/favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${config.media.baseURL}/assets/favicons/apple-touch-icon.png` },
        { rel: 'manifest', href: `${config.media.baseURL}/assets/favicons/site.webmanifest` },
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
    minify: false,
    preset: 'cloudflare_module',
    rollupConfig: {
      external: ['cloudflare:sockets', '@aws-sdk/client-s3'],
    },
    routeRules: {
      ...(
        config.isDev ? {
          '/__media__/**': {
            proxy: 'https://media.lymgo.com/**',
          },
        } : undefined),
    },
    logLevel: 4,
    modules: [rpc()],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
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
    worker: {
      format: 'es',
    },
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
