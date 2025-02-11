<script setup lang="ts">
// import TheImage from '~/components/ui/TheImage.vue';
import { LogoPrompt } from '~~/server/types/logo';

const { styles } = useLogoGenerateForm();
type Style = LogoPrompt['style'];
const style = defineModel<Style>();
const isSelected = (selected: Style) => style.value === selected;
</script>

<template>
  <div class="overflow-x-auto">
    <div class="py-4 grid grid-cols-6 gap-2 max-md:inline-flex">
      <button
        v-for="styleName in [...styles]"
        :key="styleName"
        :class="[
          'w-20',
          'button',
          'rounded-md bg-white aspect-square',
          'flex flex-col justify-center items-center',
        ]"
        @click="style = style === styleName ? undefined : styleName"
      >
        <div class="w-14 h-14 rounded-full bg-slate-300 overflow-hidden relative">
          <TheImage :src="`https://pub-014d1a8171724e399c625602fdc30d53.r2.dev/showcases/${styleName}.webp?ver=2`" />
          <div
            v-show="isSelected(styleName)"
            :class="[
              'absolute inset-0 bg-slate-500 bg-opacity-70 flex justify-center items-center',
              'animate-in fade-in'
            ]"
          >
            <Icon
              icon="mdi:check"
              width="32"
              class="text-white"
            />
          </div>
        </div>
        <span class="text-sm opacity-70">{{ styleName }}</span>
      </button>
    </div>
  </div>
</template>
