<template>
  <div
    class="screen"
    spellcheck="false"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
#app {
  @apply select-none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin: 0;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  position: fixed;
  text-rendering: optimizeLegibility;
  touch-action: manipulation;
  transform: translateZ(0);
  width: 100%;
  -webkit-user-drag: none;
  -ms-content-zooming: none;
  word-wrap: break-word;
  overscroll-behavior-y: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
}
</style>
