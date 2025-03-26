<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const auth = useAuth();
const isSelected = (path: string) => route.fullPath.includes(path);
const selectedClass = 'font-bold text-primary-500';
const menuList = computed(() => [
  {
    label: t('label.pricing'),
    class: isSelected('/pricing') && selectedClass,
    command() {
      router.push('/pricing');
    },
  },
  ...(auth.session.value ? [
    {
      label: t('label.generate'),
      class: isSelected('/generate') && selectedClass,
      command() {
        router.push('/generate');
      },
    },
    {
      label: t('label.archives'),
      class: isSelected('/archives') && selectedClass,
      command() {
        router.push('/archives');
      },
    },
  ] : []),
  auth.session.value ? {
    label: t('label.logout'),
    command: async () => {
      await showConfirm(t('ask_sure_logout'));
      await auth.client.signOut({
        fetchOptions: {
          onSuccess: () => {
            showAlert(t('ask_logout_success'));
            router.push('/');
          },
        },
      });
    },
  } : {
    label: t('label.signup'),
    command: () => router.push('/login'),
  },
]);
</script>
<template>
  <div class="menu-header max-w-6xl m-auto">
    <div class="flex justify-between items-center">
      <NuxtLink
        to="/"
        class="p-2 font-bold text-2xl"
      >
        <div class="w-28 h-28">
          <TheImage
            :src="`${useRuntimeConfig().public.media.baseURL}/logo.webp`"
          />
        </div>
      </NuxtLink>
      <div class="flex items-center">
        <ClientOnly>
          <CreditCountDisplay
            v-if="auth.user.value"
            :count="auth.user.value.credit"
            @click="router.push('/pricing')"
          />
          <PrimeMenubar
            class="m-2"
            :model="menuList"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

/** primevue menu bug */
.menu-header .p-menubar-root-list {
  min-width: 110px !important;
  right: 15px;
  left: inherit !important;
}
.menu-header .p-menubar-item-content {
  color: inherit !important;
}
</style>
