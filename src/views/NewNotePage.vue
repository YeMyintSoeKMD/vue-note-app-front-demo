<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-4">
      <div class="flex items-center justify-between px-6 max-w-4xl mx-auto">
        <div class="flex items-center gap-4">
          <router-link to="/dashboard">
            <button
              class="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition duration-200">
              <ArrowLeftIcon class="size-5 mr-2" />
              Back
            </button>
          </router-link>
          <h1 class="text-base lg:text-xl font-bold text-gray-900">New Note</h1>
        </div>
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center">
          <CheckIcon class="size-5 mr-0 lg:mr-2" />
          <span class="hidden lg:inline">Save Note</span>
        </button>
      </div>
    </header>

    <div class="p-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-6">Create New Note</h2>
          <div class="space-y-6">
            <!-- Title -->
            <div class="space-y-2">
              <label for="title" class="text-sm font-medium text-gray-700">Title</label>
              <input id="title" type="text" placeholder="Enter note title..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <!-- Category -->
            <div class="space-y-2">
              <label for="category" class="text-sm font-medium text-gray-700">Category</label>
              <div class="relative">
                <select id="category"
                  class="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a category</option>
                  <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
                <ChevronDownIcon class="size-5 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <!-- Image Upload -->
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Images</label>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input type="file" multiple accept="image/*" @change="handleImageUpload" class="hidden"
                  ref="imageInput" />
                <button type="button" @click="$refs.imageInput.click()" class="cursor-pointer focus:outline-none">
                  <CloudArrowUpIcon class="size-10 mx-auto text-gray-400 mb-2" />
                  <p class="text-sm text-gray-600">
                    Click to upload images or drag and drop
                  </p>
                </button>
              </div>

              <!-- Uploaded Image Preview -->
              <div v-if="uploadedImage" class="relative w-24 h-24 mt-4">
                <img :src="uploadedImage" alt="image" class="w-full h-full object-cover rounded-lg" />
                <button @click="removeImage()"
                  class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600">
                  <XMarkIcon class="size-5" />
                </button>
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-2">
              <label for="content" class="text-sm font-medium text-gray-700">Content</label>
              <textarea id="content" placeholder="Write your note content here..." rows="12"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeftIcon, CheckIcon, CloudArrowUpIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const categories = ["Work", "Personal", "Learning", "Travel"];

const uploadedImage = ref(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadedImage.value = URL.createObjectURL(file);
  }
};

const removeImage = (index) => {
  uploadedImage.value = null;
};
</script>
