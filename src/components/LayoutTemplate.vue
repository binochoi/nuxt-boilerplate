<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
</script>
<template>
  <div class="overflow-x-hidden">
    <slot></slot>
    <ModalsContainer />
  </div>
</template>
<style lang="scss" scoped>
</style>
