<template>
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Häufig gestellte Fragen
      </h2>
      
      <div class="space-y-4">
        <div
          v-for="(item, index) in faqData"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            @click="toggleItem(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
          >
            <span class="font-semibold text-gray-800 text-lg pr-4">
              {{ item.question }}
            </span>
            <svg
              class="w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openItems[index] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <transition name="slide">
            <div
              v-show="openItems[index]"
              class="px-6 pb-4 text-gray-600 leading-relaxed"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import faqData from '../data/faq.json'

const openItems = reactive({})

const toggleItem = (index) => {
  openItems[index] = !openItems[index]
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>

