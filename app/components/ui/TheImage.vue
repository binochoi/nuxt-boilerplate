<script lang="ts" setup>
import ImageBase, { type State } from './TheImageBase.vue';

defineProps<{
  src?: string,
  isLoading?: boolean,
}>();
const state = defineModel<State>('state');
</script>
<template>
  <ClientOnly>
    <ImageBase
      v-model:state="state"
      :src="src || ''"
      class="w-full h-full flex justify-center items-center"
      imgClass="object-cover w-full h-full hover:scale-110 transition-transform duration-500 animate-in ease-out fade-in fill-mode-backwards"
    >
      <template #loading>
        <TheSpinner
          :size="15"
          class="opacity-20"
        />
      </template>
    </ImageBase>
  </ClientOnly>
</template>
<style lang="scss" scoped>
</style>
