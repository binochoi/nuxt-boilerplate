import * as path from 'path';

const isDev = process.env.VITE_ENV !== 'prod';
const defaultMonolithicHost = 'https://example.com';
const {
  MONOLITHIC_HOST = defaultMonolithicHost,
  MONOLITHIC_URL = defaultMonolithicHost,
  PORT,
} = process.env;
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APP_NAME: 'Nuxt 3 Boilerplate',
      MONOLITHIC_HOST,
      MONOLITHIC_URL,
      PORT,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
    },
  },
  devtools: { enabled: isDev },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-proxy-request',
    '@vant/nuxt',
  ],
  alias: {
    src: path.join(__dirname, './src'),
    '@app/ui': path.join(__dirname, './libs/ui'),
    '@global': path.join(__dirname, './global'),
  },
  srcDir: 'src/',
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: `${MONOLITHIC_HOST}/**`,
      },
    },
    compressPublicAssets: true,
    experimental: {
      nodeFetchCompat: true,
    },
    devProxy: {},
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
    server: {
      hmr: {
        protocol: 'ws',
        port: Number(process.env.HMR_PORT || 24678),
        host: '0.0.0.0',
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },
  ssr: true,
  css: ['~/assets/styles/main.scss', 'vue-final-modal/style.css'],
  hooks: {
    'prepare:types': function removeDefaultAliases({ tsConfig }) {
      const aliases = [
        '~',
        '@',
        '@@',
        '~~',
        '#imports',
        '#build',
      ];
      aliases.forEach((alias) => {
        // eslint-disable-next-line no-restricted-syntax, no-param-reassign
        delete tsConfig.compilerOptions?.paths[alias];
        // eslint-disable-next-line no-restricted-syntax, no-param-reassign
        delete tsConfig.compilerOptions?.paths[`${alias}/*`];
      });
    },
  },
});
