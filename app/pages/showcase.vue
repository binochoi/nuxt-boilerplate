<script setup lang="ts">
const route = useRoute();
const imgLink = route.query.imglink as string;
</script>

<template>
  <div>
    <TheImage :src="imgLink" />
  </div>
</template>

<style lang="scss" scoped>
</style>
