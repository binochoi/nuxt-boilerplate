<script setup lang="ts">
const modelValue = defineModel<LogoColor>({ required: true });
const {
  colors, colorGradients, getTooltipColor,
} = useLogoColorPicker();
const isSelected = (color: LogoColor) => modelValue.value === color;
</script>

<template>
  <div class="py-6 overflow-visible bg-gradient-to-b from-slate-50/50 to-white/50">
    <div class="palette gap-4 px-4">
      <div
        v-for="colorName in colors"
        :key="colorName"
        class="w-12 h-12 inline-flex justify-center items-center relative"
      >
        <ATooltip
          :title="colorName"
          :color="getTooltipColor(colorName)"
          placement="top"
          class="cursor-pointer"
          :arrow="false"
          @click="modelValue = colorName"
        >
          <div>
            <div
              class="absolute inset-0 blur-md opacity-20 scale-75 transition-opacity duration-300 select-none"
              :style="{ background: colorGradients[colorName || 'black'] }"
            ></div>
            <div
              class="dye w-7 h-7 rounded-lg transition-transform duration-200 ease-out"
              :class="[
                'hover:rotate-45 active:rotate-45 ring-2 ring-slate-500 ring-opacity-5',
                isSelected(colorName) && 'rotate-45',
              ]"
              :style="{
                background: colorGradients[colorName || 'black'],
              }"
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
