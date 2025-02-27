<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';

defineProps<{
  items: any[],
}>();
const wrapper = useTemplateRef('wrapper');
const wrapperWidth = ref<number>();

const { width } = useWindowSize();
const getItemsPerRow = (width: number) => {
  if (width <= 380) {
    return 1;
  }
  if (width <= 550) {
    return 2;
  }
  return 3;
};
const itemsPerRow = getItemsPerRow(width.value);
const config = useRuntimeConfig();
onMounted(() => {
  wrapperWidth.value = wrapper.value?.offsetWidth;
});
</script>

<template>
  <div ref="wrapper">
    <RecycleScroller
      v-if="wrapperWidth"
      :items="items"
      :item-size="wrapperWidth / itemsPerRow"
      :gridItems="itemsPerRow"
      direction="vertical"
      key-field="id"
    >
      <template #default="{ item }">
        <div
          :key="item.id"
          class="relative h-full bg-gray-200 overflow-hidden cursor-pointer"
        >
          <TheImage :src="`${config.public.media.baseURL}/generated/raw/${item.id}`" />
        </div>
      </template>
    </RecycleScroller>
  </div>
</template>
