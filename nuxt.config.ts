import { fileURLToPath } from 'url';
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    public: {
      MEDIA_URL: process.env.NODE_ENV === 'development' ? 'https://localhost:5821/__media__' : 'https://media.lymgo.com',
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
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nitro-cloudflare-dev',
    '@ant-design-vue/nuxt',
    '@primevue/nuxt-module',
  ],
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
      '/__media__/**': {
        proxy: 'https://media.lymgo.com/**',
      },
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
