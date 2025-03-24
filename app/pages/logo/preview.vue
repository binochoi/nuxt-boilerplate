<script setup lang="ts">
import PreviewLogo3D from '~/layers/logo/components/PreviewLogo3D.vue';

const config = useRuntimeConfig();
</script>
<template>
  <div>
    <PreviewLogo3D :imgSrc="`${config.public.media.baseURL}/generated/raw/5257bef2-a5f0-4e59-9776-09dfdc9c30f6`" />
  </div>
</template>
