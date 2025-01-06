<script setup lang="ts">
import { LogoPrompt } from '~~/server/types/logo';

const colors: LogoPrompt['color'][] = ['random', 'white', 'gray', 'black', 'red', 'purple', 'pink', 'orange', 'yellow', 'blue', 'green', 'teal', 'brown'] as const;
type Color = typeof colors[number];
const colorGradients = {
  random: 'linear-gradient(45deg, #FF70A6 0%, #FF9770 30%, #FFD670 60%, #70D6FF 100%)',
  white: 'linear-gradient(45deg, #FFFFFF 0%, #F8F9FA 45%, #F1F3F5 55%, #FFFFFF 100%)',
  red: 'linear-gradient(45deg, #FF8A80 0%, #FF5252 50%, #FF1744 100%)',
  blue: 'linear-gradient(45deg, #82B1FF 0%, #448AFF 50%, #2979FF 100%)',
  green: 'linear-gradient(45deg, #B9F6CA 0%, #69F0AE 50%, #00E676 100%)',
  teal: 'linear-gradient(45deg, #A7FFEB 0%, #64FFDA 50%, #1DE9B6 100%)',
  yellow: 'linear-gradient(45deg, #FFE57F 0%, #FFD740 50%, #FFC400 100%)',
  purple: 'linear-gradient(45deg, #EA80FC 0%, #E040FB 50%, #D500F9 100%)',
  pink: 'linear-gradient(45deg, #FF80AB 0%, #FF4081 50%, #F50057 100%)',
  orange: 'linear-gradient(45deg, #FFB74D 0%, #FFA726 50%, #FF9100 100%)',
  brown: 'linear-gradient(45deg, #BCAAA4 0%, #8D6E63 50%, #5D4037 100%)',
  gray: 'linear-gradient(45deg, #CFD8DC 0%, #90A4AE 50%, #607D8B 100%)',
  black: 'linear-gradient(45deg, #424242 0%, #212121 50%, #000000 100%)',
} as const;

const modelValue = defineModel<Color>({ required: true, default: 'random' });
const isSelected = (color: Color) => modelValue.value === color;
const getTooltipColor = (color: Color) => {
  switch (color) {
  case 'white':
  case 'random':
    return;
  default:
    return color;
  }
};
</script>

<template>
  <div class="py-4 overflow-x-auto">
    <div class="palette gap-4 px-4">
      <div
        v-for="colorName in colors"
        :key="colorName"
        class="w-12 h-12 inline-flex justify-center items-center"
      >
        <ATooltip
          :title="colorName"
          :color="getTooltipColor(colorName)"
          placement="top"
        >
          <div>
            <div
              class="dye w-7 h-7 rounded-lg transition-transform duration-200 ease-out cursor-pointer"
              :class="[
                'hover:rotate-45 active:rotate-45 ring-2 ring-slate-500 ring-opacity-5',
                isSelected(colorName) && 'rotate-45',
              ]"
              :style="{
                background: colorGradients[colorName],
              }"
              @click="modelValue = colorName"
            ></div>
          </div>
        </ATooltip>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.palette > .dye {
    @apply relative;
    &::after {
        content: '';
        @apply absolute top-0 left-0 w-full h-full rounded-lg shadow-md shadow-slate-800 opacity-15;
        @apply transition-opacity ease-out duration-500;
    }
    &:hover::after,
    &:active::after {
        @apply opacity-30;
    }
}
</style>
