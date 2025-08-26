<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Share Note</h3>
        <p class="text-gray-600 text-sm">Share "{{ noteTitle }}" with others by entering their email addresses.</p>
      </div>

      <div class="space-y-4">
        <!-- Email Input -->
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium text-gray-700">Email Addresses</label>
          <div class="flex gap-2">
            <div class="relative flex-1">
              <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input id="email" type="email" placeholder="Enter email address" v-model="currentEmail"
                @keypress="handleKeyPress"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button @click="addEmail" :disabled="!currentEmail"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">
              Add
            </button>
          </div>
        </div>

        <!-- Email Tags -->
        <div v-if="emails.length > 0" class="flex flex-wrap gap-2">
          <span v-for="email in emails" :key="email"
            class="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
            {{ email }}
            <button @click="removeEmail(email)" class="ml-1 hover:bg-gray-300 rounded-full p-0.5">
              <XMarkIcon class="size-5" />
            </button>
          </span>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-2">
          <button @click="$emit('close')"
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-200">
            Cancel
          </button>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center">
            <ShareIcon class="size-5 mr-2" />
            Share Note
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShareIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  isOpen: Boolean,
  noteTitle: String,
  noteId: Number
})

const emit = defineEmits(['close'])

const emails = ref([])
const currentEmail = ref("")

const addEmail = () => {
  if (currentEmail.value && !emails.value.includes(currentEmail.value)) {
    emails.value.push(currentEmail.value)
    currentEmail.value = ""
  }
}

const removeEmail = (emailToRemove) => {
  emails.value = emails.value.filter((email) => email !== emailToRemove)
}

const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    addEmail()
  }
}
</script>
