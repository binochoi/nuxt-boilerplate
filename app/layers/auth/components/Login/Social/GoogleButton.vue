<script setup lang="ts">
import ButtonTemplate from './ButtonTemplate.vue';
</script>

<template>
  <ButtonTemplate>
    <template #label>
      Continue with Google
    </template>
    <template #icon>
      <Icon
        icon="devicon:google"
        width="20"
        class="mr-2"
      />
    </template>
  </ButtonTemplate>
</template>
