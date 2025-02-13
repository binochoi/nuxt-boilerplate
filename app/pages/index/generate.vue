<script setup lang="ts">
import GenerateForm from '~/layers/logo/components/form/GenerateForm.vue';

const preventLeave = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = ''; // Chrome에서 필요
};
onMounted(() => window.addEventListener('beforeunload', preventLeave));
onUnmounted(() => window.removeEventListener('beforeunload', preventLeave));
</script>

<template>
  <GenerateForm />
</template>
