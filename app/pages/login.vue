<script setup lang="ts">
const goToOAuth = (provider: 'google') => useAuth().client.signIn.social({ provider });
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="
      max-w-sm flex flex-col gap-2
      animate-in fade-in slide-in-from-top-3 ease-out fill-mode-backwards
      "
    >
      <AuthLoginSocialDiscordButton />
      <AuthLoginSocialGoogleButton @click="goToOAuth('google')" />
      <AuthLoginSocialAppleButton />
    </div>
  </div>
</template>
