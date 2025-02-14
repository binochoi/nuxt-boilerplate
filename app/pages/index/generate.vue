<script setup lang="ts">
import GenerateForm from '~/layers/logo/components/form/GenerateForm.vue';

const preventLeave = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};
onMounted(() => window.addEventListener('beforeunload', preventLeave));
onUnmounted(() => window.removeEventListener('beforeunload', preventLeave));
</script>

<template>
  <GenerateForm />
</template>
