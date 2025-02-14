<script setup lang="ts">
import ButtonTemplate from './ButtonTemplate.vue';
</script>

<template>
  <ButtonTemplate>
    <template #label>
      {{ $t('start_oauth_with', { provider: 'Apple' }) }}
    </template>
    <template #icon>
      <Icon
        icon="bi:apple"
        width="22"
        class="mr-2 relative -top-[1px]"
      />
    </template>
  </ButtonTemplate>
</template>
