<script setup lang="ts">
import { useArchiveAPI } from '../apis/useArchiveAPI';
import List from './Showcase/List.vue';

const { getShowcaseList } = useArchiveAPI();
const items = ref<any[]>([]);
onMounted(async () => {
  items.value = await getShowcaseList();
});
</script>

<template>
  <div class="rounded-md overflow-hidden">
    <List :items />
  </div>
</template>
