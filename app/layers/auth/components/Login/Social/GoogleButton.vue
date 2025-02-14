<script setup lang="ts">
import ButtonTemplate from './ButtonTemplate.vue';
</script>

<template>
  <ButtonTemplate>
    <template #label>
      {{ $t('start_oauth_with', { provider: 'Google' }) }}
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
