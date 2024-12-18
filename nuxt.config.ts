import { fileURLToPath } from 'url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      './types/*.d.ts',
      './layers',
      './hooks',
      './utils',
    ],
    autoImport: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nitro-cloudflare-dev',
  ],
  alias: {
    app: fileURLToPath(new URL('./app', import.meta.url)),
    server: fileURLToPath(new URL('./server', import.meta.url)),
    global: fileURLToPath(new URL('./global', import.meta.url)),
  },
  
  compatibilityDate: '2024-11-01',
  devServer: {
    port: Number(process.env.PORT) || 5819,
    https: {
      cert: './localhost.pem',
      key: './localhost-key.pem',
    },
  },
  build: {
    transpile: ['trpc-nuxt', 'primevue'],
  },
  
  devtools: { enabled: false },
  ssr: true,
  srcDir: 'app',
  future: { compatibilityVersion: 4 },
})
