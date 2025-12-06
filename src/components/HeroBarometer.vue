<template>
  <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Hilfe für Menschen in Not
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-blue-100">
        Unterstützen Sie unser Projekt für eine bessere Zukunft
      </p>
      
      <!-- Spendenbarometer -->
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mt-8">
        <div class="mb-4">
          <p class="text-2xl md:text-3xl font-bold mb-2 transition-all duration-300">
            {{ formatCurrency(currentAmount) }} von {{ formatCurrency(targetAmount) }}
          </p>
          <p class="text-blue-200 text-sm md:text-base transition-all duration-300">
            {{ Math.round((currentAmount / targetAmount) * 100) }}% des Ziels erreicht
          </p>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full bg-white/20 rounded-full h-6 md:h-8 overflow-hidden">
          <div 
            class="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2"
            :style="{ width: `${Math.min((currentAmount / targetAmount) * 100, 100)}%` }"
          >
            <span v-if="(currentAmount / targetAmount) * 100 > 10" class="text-white text-xs font-semibold">
              {{ Math.round((currentAmount / targetAmount) * 100) }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentAmount: {
    type: Number,
    required: true
  },
  targetAmount: {
    type: Number,
    required: true
  }
})

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
</script>

