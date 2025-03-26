<script setup lang="ts">
import PreviewLogo3D from '~/layers/logo/components/PreviewLogo3D.vue';

const config = useRuntimeConfig();
const id = useRouteParams<string>('id');
</script>
<template>
  <div class="w-full h-full flex justify-center items-center bg-gray-900">
    <PreviewLogo3D
      class="animate-in fade-in slide-out-to-bottom-2 duration-500"
      :imgSrc="`${config.public.media.baseURL}/generated/raw/${id}`"
    />
  </div>
</template>
