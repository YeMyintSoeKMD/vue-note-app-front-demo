<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-4">
      <div class="flex items-center justify-between px-6 max-w-4xl mx-auto">
        <div class="flex items-center gap-4">
          <router-link to="/dashboard">
            <button class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition duration-200">
              <ArrowLeftIcon class="size-5 mr-2" />
              Back
            </button>
          </router-link>
          <h1 class="text-base lg:text-xl font-bold text-gray-900">Manage Categories</h1>
        </div>
        <button
          @click="isAddingCategory = true"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
        >
          <PlusIcon class="size-5 mr-0 lg:mr-2" />
          <span class="hidden lg:inline">Add Category</span>
        </button>
      </div>
    </header>

    <div class="p-6 max-w-4xl mx-auto">
      <!-- Add New Category Form: to show/hide conditionally -->
      <div v-if="false" class="bg-white rounded-lg shadow-xs border border-gray-200 mb-6">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">Add New Category</h2>
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="categoryName" class="text-sm font-medium text-gray-700">Category Name</label>
              <input
                id="categoryName"
                type="text"
                placeholder="Enter category name..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Color</label>
              <div class="flex gap-2">
                <!-- thick border when clicked -->
                <button
                  v-for="color in colors"
                  :key="color"
                  class="w-8 h-8 rounded-full border-2 transition duration-200 border-gray-300"
                  :style="{ backgroundColor: color }"
                />
              </div>
            </div>
            <div class="flex gap-2">
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
              >
                <CheckIcon class="size-5 mr-2" />
                Save Category
              </button>
              <button
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200 flex items-center"
              >
                <XMarkIcon class="size-5 mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Categories List -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :colors="colors"
        />
      </div>
    </div>

    <!-- Delete Confirmation Dialog : to show/hide conditionally -->
    <div v-if="false" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold mb-2">Delete Category</h3>
        <p class="text-gray-600 mb-4">
          Are you sure you want to delete "to show category name"? This action cannot be undone.
        </p>
        <div class="flex justify-end gap-2">
          <button
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200"
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryCard from '../components/CategoryCard.vue'
import { ArrowLeftIcon, CheckIcon, PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const categories = ref([
  { id: 1, name: "Work", color: "#3B82F6", noteCount: 12 },
  { id: 2, name: "Personal", color: "#10B981", noteCount: 8 },
  { id: 3, name: "Learning", color: "#F59E0B", noteCount: 15 },
  { id: 4, name: "Travel", color: "#EF4444", noteCount: 5 },
])
const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#06B6D4", "#84CC16"]
</script>
