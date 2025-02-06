<script setup lang="ts">
import SelectStyle from './SelectStyle.vue';
import DescriptionForm from './DescriptionForm.vue';
import ColorPicker from './ColorPicker.vue';

const { form, canSubmit } = useLogoGenerateForm();
const isWithSlogan = ref(false);
const loading = ref(false);
const { logo } = useTrpcClient();
const submit = async () => {
  loading.value = true;
  try {
    if (!form.style) {
      return;
    }
    const { getOneRandomColor } = useLogoColorPicker();
    const { imageLink } = await logo.generate.mutate({
      ...form,
      style: form.style,
      color: form.color === 'random' ? getOneRandomColor() : form.color,
    });
    console.log(imageLink);
  } catch {
    console.error('error');
  }
  loading.value = false;
};
</script>

<template>
  <div class="max-w-xl m-auto mt-20 flex flex-col gap-4">
    {{ form }}
    <SelectStyle v-model="form.style" />
    <ColorPicker v-model="form.color" />
    <div class="px-4">
      <div class="flex items-center gap-2 my-4">
        <PrimeCheckBox
          v-model="isWithSlogan"
          inputId="generate-only-icon"
          binary
        />
        <label for="generate-only-icon">
          generate with slogan
        </label>
      </div>

      <div class="flex flex-col gap-2">
        <AInput
          v-if="isWithSlogan"
          v-model:value="form.slogan"
          size="large"
          placeholder="slogan"
        />
        <DescriptionForm v-model="form.description" />
      </div>
    </div>
    <AButton
      :loading
      size="large"
      class="max-w-36 m-auto"
      :disabled="canSubmit !== true"
      @click="submit"
    >
      로고 생성하기
    </AButton>
  </div>
</template>
