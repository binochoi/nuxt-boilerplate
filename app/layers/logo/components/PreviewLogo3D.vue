<script setup lang="ts">
import { CardContainer, CardBody, CardItem } from '@/components/ui/card-3d';

const props = defineProps<{
  imgSrc: string;
}>();
const imgSrc = ref(props.imgSrc);
const isBgRemoved = ref(false);
const config = useRuntimeConfig();
removeImageBackground(imgSrc.value, { isDev: config.isDev })
  .then(async (src) => {
    imgSrc.value = await src;
    isBgRemoved.value = true;
  });
</script>
<template>
  <ClientOnly>
    <CardContainer>
      <CardBody
        class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
      >
        <CardItem
          :translate-z="100"
          class="w-full max-h-full h-[430px]"
        >
          <TheImage
            :src="imgSrc"
            :disableAnimation="true"
          />
        </CardItem>
        <div
          class="mt-20 flex items-center justify-between transition-opacity"
          :class="{ 'opacity-0': isBgRemoved }"
        >
          <LogoPreviewButton
            :disabled="true"
          >
            <div
              class="flex gap-2"
            >
              배경 제거중 <TheSpinner
                :size="8"
                class="relative top-1"
              />
            </div>
          </LogoPreviewButton>
        </div>
      </CardBody>
    </CardContainer>
  </ClientOnly>
</template>
