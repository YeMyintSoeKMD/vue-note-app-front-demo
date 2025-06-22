<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
  >
    <div class="p-4">
      <!-- Edit form: to show/hide conditionally  -->
      <div v-if="false" class="space-y-4">
        <input
          placeholder="Category name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div class="flex gap-2">
          <!-- tick the border when clicked  -->
          <button
            v-for="color in colors"
            :key="color"
            class="w-6 h-6 rounded-full border-2 transition duration-200 border-gray-300"
            :style="{ backgroundColor: color }"
          />
        </div>
        <div class="flex gap-2">
          <button
            class="px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
          >
            <CheckIcon class="size-5 mr-2" />
            Save
          </button>
          <button
            class="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition duration-200 flex items-center"
          >
            <XMarkIcon class="size-5 mr-2" />
            Cancel
          </button>
        </div>
      </div>      
      <!-- Category data  -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div
              class="w-4 h-4 rounded-full"
              :style="{ backgroundColor: category.color }"
            ></div>
            <h3 class="font-semibold">{{ category.name }}</h3>
          </div>
          <div class="flex gap-1">
            <button
              class="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <PencilSquareIcon class="size-5" />
            </button>
            <button
              class="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50"
            >
              <TrashIcon class="size-5" />
            </button>
          </div>
        </div>
        <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
          {{ category.noteCount }} notes
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PencilSquareIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  category: Object,
  colors: Array,
});
</script>
