<script setup lang="ts">

const description = defineModel<string>({ required: true });
const isAiGenerating = ref(false);
const { session } = useAuth();
const { t } = useI18n();
const { api } = useRPC();
const suggestLogoShape = async () => {
  if (!session.value) {
    showToast(t('ask_login_required'));
    return;
  }
  isAiGenerating.value = true;
  try {
    const sentence = await api.logo.shape.$get();
    if (!sentence) {
      return;
    }
    description.value = sentence;
  } catch {
    /** */
  } finally {
    isAiGenerating.value = false;
  }
};
</script>

<template>
  <AInput
    v-model:value="description"
    size="large"
    placeholder="Describe a shape of logo"
  >
    <template #suffix>
      <a-tooltip :title="isAiGenerating ? 'generating...' : 'ai random generate'">
        <Icon
          width="22"
          icon="healthicons:artificial-intelligence"
          class="ease-out transition-all cursor-pointer"
          :class="[
            'hover:opacity-100 active:opacity-100 opacity-60',
            'hover:scale-110 active:scale-110',
            'hover:text-blue-500 active:text-blue-500',
            isAiGenerating && 'blur-[1.5px] animate-spin',
            isAiGenerating ? 'text-blue-500' : 'text-slate-500',
          ]"
          @click="suggestLogoShape"
        />
        <!-- <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" /> -->
      </a-tooltip>
    </template>
  </AInput>
</template>
