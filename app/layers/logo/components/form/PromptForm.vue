<script setup lang="ts">

const prompt = defineModel<string>({ required: true });
const isAiGenerating = ref(false);
</script>

<template>
  <AInput
    v-model="prompt"
    size="large"
    placeholder="로고의 모양을 설명해주세요"
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
          @click="isAiGenerating = true"
        />
        <!-- <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" /> -->
      </a-tooltip>
    </template>
  </AInput>
</template>
