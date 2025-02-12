<!-- eslint-disable vue/no-dupe-keys -->
<script lang="ts" setup>
import { computed, toRefs } from 'vue';

export type State = 'loading' | 'error' | 'loaded';
const props = defineProps<{
  src: string,
  loadingSrc?: string,
  errorSrc?: string,
  imgClass?: string,
  options?: { _any: any }
}>();
const emit = defineEmits<{
  error: [Event],
}>();
const {
  src: _src, loadingSrc, errorSrc,
} = toRefs(props);
const state = defineModel<State>('state', {
  default: 'loading' as State,
});
watch(_src, () => {
  const image = new Image();
  image.src = _src.value;
  image.addEventListener('error', (e) => {
    state.value = 'error';
    emit('error', e);
  });
  image.addEventListener('load', () => state.value = 'loaded');
}, { immediate: true });
const src = computed(() => {
  switch (state.value) {
  case 'error':
    return errorSrc.value;
  case 'loading':
    return loadingSrc.value;
  default:
    return _src.value;
  }
});
</script>
<template>
  <div
    :style="{
    }"
  >
    <img
      v-if="state === 'loaded'"
      :class="imgClass"
      :src="src"
    >
    <slot
      v-else-if="state === 'loading' && typeof loadingSrc === 'undefined'"
      name="loading"
    ></slot>
    <slot
      v-else-if="typeof errorSrc === 'undefined'"
      name="error"
    >
    </slot>
  </div>
</template>
