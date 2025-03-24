<script setup lang="ts">
import List from './Showcase/List.vue';

const items = ref<any[]>([]);
onMounted(async () => {
  const { data } = await useAsyncData(async () => useRPC().api.archives.$get());
  items.value = data.value || [];
});
</script>

<template>
  <div class="rounded-md overflow-hidden">
    <List :items />
  </div>
</template>
