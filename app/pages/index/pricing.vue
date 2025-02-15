<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useHead({
  title: t('label.pricing'),
});
const prices = [
  {
    label: t('pricing.free.label'),
    description: t('pricing.free.description'),
    price: '$0',
    pricedProduct: '1 credits',
    features: ['1 credit per week (if not had one)'],
  },
  {
    label: t('pricing.starter.label'),
    description: t('pricing.starter.description'),
    price: '$3',
    pricedProduct: '5 credits',
    features: ['5 workspaces', 'Unlimited testimonials', 'Unlimited projects'],
  },
  {
    label: t('pricing.business.label'),
    description: t('pricing.business.description'),
    price: '$27',
    pricedProduct: '50 credits',
    features: ['5 workspaces', 'Unlimited testimonials', 'Unlimited projects'],
  },
];
</script>
<template>
  <div class="w-full overflow-x-auto">
    <div
      class="
    inline-flex flex-row p-4 gap-4 my-10
    animate-in fade-in slide-in-from-top-3 ease-out duration-500 fill-mode-backwards
    "
    >
      <PricingCard
        v-for="price, key in prices"
        :key
        v-bind="price"
      />
    </div>
  </div>
</template>
