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
body {
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

#app {
  @apply h-full
}
.screen {
  @apply h-full overflow-x-hidden overflow-y-auto;
}

body {
  --sb-track-color: #f2f6f8;
  --sb-thumb-color: #d8d8d8;
  --sb-size: 5px;
}

* {
  @apply outline-none;
}
*::-webkit-scrollbar {
  width: var(--sb-size);
  height: var(--sb-size);
}

*::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 5px;
}

@supports not selector(::-webkit-scrollbar) {
  * {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>
