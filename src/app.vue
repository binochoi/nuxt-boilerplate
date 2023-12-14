<script setup lang="ts">
const config = useRuntimeConfig();
useHead({
  titleTemplate: (title) => `${config.public.APP_NAME} ${title ? `-${title}` : ''}`,
  meta: [],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage spellcheck="false" />
  </NuxtLayout>
  <NuxtLoadingIndicator />
</template>

<style lang="scss" scoped>
img[lazy=loading] {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    filter: opacity(0);
}

img[lazy=loaded] {
    filter: opacity(1);
}
</style>
