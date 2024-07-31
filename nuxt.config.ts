import { fileURLToPath } from 'url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-07-31',
  ssr: true,
  devServer: {
    port: Number(process.env.PORT),
    host: '0.0.0.0',
    // https: {
    //   cert: './0.0.0.0.pem',
    //   key: './0.0.0.0-key.pem',
    // }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  alias: {
    app: fileURLToPath(new URL('./app', import.meta.url)),
    server: fileURLToPath(new URL('./server', import.meta.url)),
    global: fileURLToPath(new URL('./global', import.meta.url)),
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  runtimeConfig: {
    public: {
      appName: 'Nuxt 3 Boilerplate',
    },
    googleOauthClient: '',
    googleOauthSecret: '',
    oAuthredirectUrl: '',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
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
  imports: {
    dirs: [
      // './global/constants',
      './layers',
      './hooks',
      './utils',
    ],
    autoImport: true,
  },
  srcDir: 'app/',
  serverDir: 'server/',
});
