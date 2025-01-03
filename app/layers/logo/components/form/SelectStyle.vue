<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import { LogoPrompt } from '~~/server/types/logo';

const { styles } = useLogoGenerateForm();

const style = defineModel<LogoPrompt['style']>({ required: true });
</script>

<template>
  <div class="max-w-xl m-auto p-4 grid grid-cols-6 gap-4 bg-[#f2f6f8]">
    <button
      v-for="styleName in styles"
      :key="styleName"
      :class="[
        'button',
        'p-2 rounded-md bg-white aspect-square',
      ]"
      @click="style = styleName"
    >
      <div class="p-2 w-full h-full rounded-full bg-slate-300">
      </div>
      {{ styleName }}
    </button>
  </div>
</template>
<style lang="scss" scoped>
.button {
  &:before {

  }
}
</style>
