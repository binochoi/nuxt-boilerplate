<script setup lang="ts">
import SelectStyle from './SelectStyle.vue';
import PromptForm from './PromptForm.vue';
import ColorPicker from './ColorPicker.vue';

const { form } = useLogoGenerateForm();
const loading = ref(false);
const submit = () => loading.value = true;
</script>

<template>
  <div class="max-w-xl m-auto mt-20 flex flex-col gap-4">
    <SelectStyle v-model="form.style" />
    <ColorPicker v-model="form.color" />
    <div class="px-4">
      <PromptForm v-model="form.prompt" />
    </div>
    <AButton
      :loading
      size="large"
      class="max-w-36 m-auto"
      @click="submit"
    >
      로고 생성하기
    </AButton>
  </div>
</template>
