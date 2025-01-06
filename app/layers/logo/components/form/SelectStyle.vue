<script setup lang="ts">
import { LogoPrompt } from '~~/server/types/logo';

const { styles } = useLogoGenerateForm();

const style = defineModel<LogoPrompt['style']>({ required: true });
</script>

<template>
  <div class="overflow-x-auto">
    <div class="py-4 grid grid-cols-6 gap-2 max-md:inline-flex">
      <button
        v-for="styleName in styles"
        :key="styleName"
        :class="[
          'w-20',
          'button',
          'rounded-md bg-white aspect-square',
          'flex flex-col justify-center items-center'
        ]"
        @click="style = styleName"
      >
        <div class="w-14 h-14 rounded-full bg-slate-300">
        </div>
        <span class="text-sm opacity-70">{{ styleName }}</span>
      </button>
    </div>
  </div>
</template>
