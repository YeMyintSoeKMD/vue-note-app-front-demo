<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg">
      <div class="p-6 space-y-1">
        <h2 class="text-2xl font-bold text-center text-gray-900">Create account</h2>
        <p class="text-center text-gray-600">Sign up to start taking notes</p>
      </div>
      <div class="p-6 pt-0">
        <form class="space-y-4">
          <div class="space-y-2">
            <label for="name" class="text-sm font-medium text-gray-700">Full Name</label>
            <div class="relative">
              <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
            <div class="relative">
              <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div class="space-y-2">
            <label for="password" class="text-sm font-medium text-gray-700">Password</label>
            <div class="relative">
              <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Create a password"
                class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <EyeIcon v-if="showPassword" class="h-4 w-4" />
                <EyeSlashIcon v-else class="h-4 w-4" />
              </button>
            </div>
          </div>
          <div class="space-y-2">
            <label for="confirmPassword" class="text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="relative">
              <MagnifyingGlassIcon class="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Create Account
          </button>
        </form>
        <div class="mt-4 text-center text-sm">
          <span class="text-gray-600">Already have an account? </span>
          <router-link to="/auth/login" class="text-blue-600 hover:underline">
            Sign in
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const showPassword = ref(false)
</script>
