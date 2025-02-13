<script setup lang="ts">
defineProps<{
  label: string;
  description: string;
  price: string;
  pricedProduct: string,
  features: string[];
}>();
</script>

<template>
  <div
    class="
    w-[18rem] border-blue-600 rounded-2xl border divide-y divide-gray-200 overflow-hidden
    "
    style="box-shadow: rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px;"
  >
    <div class="p-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold text-gray-600">
          {{ label }}
        </h2>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">
        {{ description }}
      </p>
      <p class="mt-8">
        <span class="text-4xl font-bold tracking-tight text-gray-900">{{ price }}</span>
        <span class="text-base font-medium text-gray-500"> / {{ pricedProduct }}</span>
      </p>
      <a
        href="#"
        target="_blank"
        class="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
      >Get started now</a>
    </div>
    <div class="px-6 pt-6 pb-8">
      <h3 class="text-sm font-medium text-gray-900">
        What's included
      </h3>
      <ul
        role="list"
        class="mt-6 space-y-4"
      >
        <li
          v-for="feature in features"
          :key="feature"
          class="flex space-x-3"
        >
          <div class="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-3 w-3 flex-shrink-0 text-green-500"
            >
              <path
                fill-rule="evenodd"
                d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="text-sm text-gray-500">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
