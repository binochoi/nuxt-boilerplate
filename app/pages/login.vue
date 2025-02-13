<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="
      max-w-sm flex flex-col gap-2
      animate-in fade-in slide-in-from-top-3 ease-out fill-mode-backwards
      "
    >
      <AuthLoginSocialDiscordButton />
      <AuthLoginSocialGoogleButton />
      <AuthLoginSocialAppleButton />
    </div>
  </div>
</template>
