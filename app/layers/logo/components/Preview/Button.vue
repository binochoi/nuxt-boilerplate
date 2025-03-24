<script setup lang="ts">
const { disabled = false } = defineProps<{
  disabled?: boolean,
}>();
</script>
<template>
  <button
    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
    :class="[
      disabled && 'opacity-60',
    ]"
  >
    <slot>
    </slot>
  </button>
</template>
