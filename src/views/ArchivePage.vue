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
          <h1 class="text-base lg:text-xl font-bold text-gray-900">Archived Notes</h1>
        </div>
      </div>
    </header>

    <div class="p-6 max-w-4xl mx-auto">
      <!-- Search -->
      <div class="mb-6">
        <div class="relative max-w-md">
          <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search archived notes..."
            class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Archived Notes -->
      <div v-if="archivedNotes.length === 0" class="text-center py-12">
        <p class="text-gray-500 text-lg">No archived notes found</p>
        <p class="text-gray-400 text-sm mt-2">
          {{ searchQuery ? "Try adjusting your search" : "Your archived notes will appear here" }}
        </p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="note in archivedNotes"
          :key="note.id"
          class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div class="p-4 pb-3">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold line-clamp-1 text-gray-900">{{ note.title }}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                    {{ note.category }}
                  </span>
                  <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200">
                    Archived
                  </span>
                </div>
              </div>
              <div class="relative">
                <button
                  @click="toggleDropdown(note.id)"
                  class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <EllipsisVerticalIcon class="size-5" />
                </button>
                <div
                  v-if="activeDropdown === note.id"
                  class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10"
                >
                  <div class="py-1">
                    <button class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <ArrowRightIcon class="size-5 mr-2" />
                      Restore
                    </button>
                    <hr class="my-1">
                    <button class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                      <TrashIcon class="size-5 mr-2" />
                      Delete Permanently
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 pt-0">
            <p class="text-gray-600 text-sm line-clamp-3 mb-3">{{ note.content }}</p>
            <div class="space-y-1 text-xs text-gray-400">
              <div class="flex items-center">
                <CalendarIcon class="size-5 mr-2" />
                Created: {{ note.originalDate }}
              </div>
              <div class="flex items-center">
                <CalendarIcon class="size-5 mr-2" />
                Archived: {{ note.archivedAt }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Dialog : to show/hide conditionally -->
    <div v-if="false" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold mb-2">Delete Note Permanently</h3>
        <p class="text-gray-600 mb-4">
          Are you sure you want to permanently delete "note title"? This action cannot be undone.
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
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CalendarIcon, ArrowRightIcon, TrashIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const archivedNotes = ref([
  {
    id: 1,
    title: "Old Project Notes",
    content: "Notes from the completed project last quarter...",
    category: "Work",
    archivedAt: "2024-01-10",
    originalDate: "2023-12-15",
  },
  {
    id: 2,
    title: "Vacation Planning 2023",
    content: "Planning details for last year's summer vacation...",
    category: "Travel",
    archivedAt: "2024-01-08",
    originalDate: "2023-06-20",
  },
  {
    id: 3,
    title: "Course Notes - React Basics",
    content: "Basic React concepts and examples from online course...",
    category: "Learning",
    archivedAt: "2024-01-05",
    originalDate: "2023-11-30",
  },
])
const activeDropdown = ref(null)

const toggleDropdown = (noteId) => {
  activeDropdown.value = activeDropdown.value === noteId ? null : noteId
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
