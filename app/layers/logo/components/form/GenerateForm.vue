<script setup lang="ts">
import SelectStyle from './SelectStyle.vue';
import DescriptionForm from './DescriptionForm.vue';
import ColorPicker from './ColorPicker.vue';

const router = useRouter();
const { t } = useI18n();
const { form, canSubmit } = useLogoGenerateForm();
const loading = ref(false);
const { logo } = useTrpcClient();
const { user } = useAuth();
const submit = async () => {
  if (
    !user.value
    || !form.style
  ) {
    return;
  }
  if (!user.value.credit) {
    showAlert(t('require_credit'));
    router.push('/pricing');
    return;
  }
  loading.value = true;
  try {
    const { getOneRandomColor } = useLogoColorPicker();
    const { imageLink } = await logo.generate.mutate({
      ...form,
      style: form.style,
      color: form.color === 'random' ? getOneRandomColor() : form.color,
    });
    user.value.credit -= 1;
    // eslint-disable-next-line no-console
    console.log(imageLink);
    removeImageBackground(imageLink || '');
  } catch {
    // eslint-disable-next-line no-console
    console.error('error');
  }
  loading.value = false;
};
</script>

<template>
  <div class="max-w-xl m-auto mt-20 flex flex-col gap-4">
    <SelectStyle v-model="form.style" />
    <ColorPicker v-model="form.color" />
    <div class="px-4">
      <div class="flex flex-col gap-2">
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
