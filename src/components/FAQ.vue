<template>
  <section id="faq-section" class="py-20 bg-white">
    <div class="container">
      <div class="text-center mb-10">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4"
        >
          <svg
            class="w-8 h-8 text-brand-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Häufig gestellte Fragen
        </h2>
        <p class="text-gray-600">
          Alles, was Sie über unsere Spendenaktion wissen möchten
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in faqData"
          :key="index"
          class="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 ease-out"
        >
          <button
            @click="toggleItem(index)"
            class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-brand-primary/5 transition-all duration-300 ease-in-out group"
          >
            <span
              class="font-semibold text-gray-800 text-lg pr-4 group-hover:text-brand-primaryDark transition-colors duration-300 ease-in-out"
            >
              {{ item.question }}
            </span>
            <svg
              class="w-6 h-6 text-brand-primary flex-shrink-0 transition-all duration-500 ease-in-out group-hover:text-brand-primaryDark"
              :class="{ 'rotate-180': openItems[index] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition name="slide">
            <div
              v-show="openItems[index]"
              class="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
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
import { reactive } from "vue";
import faqData from "../data/faq.json";

const openItems = reactive({});

const toggleItem = (index) => {
  openItems[index] = !openItems[index];
};
</script>

<style scoped>
/* Vue transition classes using Tailwind utilities */
.slide-enter-active {
  @apply transition-all duration-500 max-h-[500px] overflow-hidden;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  @apply transition-all duration-[400ms] max-h-[500px] overflow-hidden;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  @apply max-h-0 opacity-0 pt-0 pb-0;
}

.slide-leave-to {
  @apply max-h-0 opacity-0 pt-0 pb-0;
}
</style>
