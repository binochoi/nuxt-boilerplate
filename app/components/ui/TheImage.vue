<script lang="ts" setup>
import ImageBase, { type State } from './TheImageBase.vue';

const props = defineProps<{
  src?: string,
  isLoading?: boolean,
  disableAnimation?: boolean,
}>();
const state = defineModel<State>('state');
const imgClass = computed(() => `
  w-full h-full object-cover
  ${props.disableAnimation ? '' : 'hover:scale-110 active:scale-110 transition-transform duration-500 animate-in ease-out fade-in fill-mode-backwards'}
`);
</script>
<template>
  <ClientOnly>
    <ImageBase
      v-model:state="state"
      :src="src || ''"
      class="w-full h-full flex justify-center items-center"
      :imgClass
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
