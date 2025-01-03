<script setup lang="ts">
import SelectStyle from './SelectStyle.vue';
// import { Textarea } from 'app/components/ui/shadcn/';

const { form } = useLogoGenerateForm();
</script>

<template>
  <div>
    <SelectStyle v-model="form.style" />
    <h1>Generate Logo</h1>
  </div>
</template>
