<template>
  <div class="max-w-6xl m-auto">
    <div class="flex justify-between items-center">
      <NuxtLink
        to="/"
        class="p-2 font-bold text-2xl"
      >
        <div class="w-28 h-28">
          <TheImage
            :src="`${useRuntimeConfig().public.MEDIA_URL}/logo.webp`"
          />
        </div>
      </NuxtLink>
      <div class="flex items-center">
        <ClientOnly>
          <PrimeMenubar
            class="m-2"
            :model="[
              {
                label: 'Pricing',
                command() {
                  $router.push('/pricing');
                },
              },
              {
                label: 'Generate',
                command() {
                  $router.push('/generate')
                }
              },
              {
                label: 'Sign Up'
              }
            ]"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

/** primevue menu bug */
.p-menubar-root-list {
  min-width: 110px !important;
  right: 15px;
  left: inherit !important;
}
</style>
