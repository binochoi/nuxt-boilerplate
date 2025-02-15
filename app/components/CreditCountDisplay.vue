<script setup lang="ts">
defineProps<{
  count: number;
}>();
</script>
<template>
  <div
    class="
  flex flex-row items-center gap-2 px-4 py-2 cursor-pointer opacity-60
  hover:scale-110 hover:opacity-100 hover:text-primary-400
  active:scale-110 active:opacity-100 active:text-primary-400
  transition-all
  "
  >
    <Icon
      icon="lucide-lab:card-credit"
      class="text-2xl"
    />
    <span class="text-lg">{{ count }}</span>
  </div>
</template>
