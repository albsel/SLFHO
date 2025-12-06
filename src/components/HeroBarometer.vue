<template>
  <section class="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-20 px-4 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="Schutz für unsere Natur"
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-green-600/90 via-emerald-700/85 to-teal-800/90"></div>
    </div>
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <div class="mb-6 flex justify-center md:justify-start">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Schutz für unsere Natur
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-green-100">
            Gemeinsam für eine nachhaltige und grüne Zukunft
          </p>
        </div>
        
        <!-- Hero Image -->
        <div class="hidden md:block">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Gemeinsam schützen wir unsere Natur"
              class="w-full h-[400px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <!-- Spendenbarometer -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mt-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
        <div class="mb-6">
          <div class="flex items-baseline justify-center gap-2 mb-2">
            <p class="text-3xl md:text-4xl font-bold transition-all duration-300">
              {{ formatCurrency(currentAmount) }}
            </p>
            <p class="text-xl md:text-2xl text-green-200">von</p>
            <p class="text-2xl md:text-3xl font-semibold text-green-200">
              {{ formatCurrency(targetAmount) }}
            </p>
          </div>
          <p class="text-green-200 text-base md:text-lg transition-all duration-300 font-medium">
            {{ Math.round((currentAmount / targetAmount) * 100) }}% des Ziels erreicht
          </p>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full bg-white/20 rounded-full h-8 md:h-10 overflow-hidden shadow-inner">
          <div 
            class="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-3 shadow-lg relative overflow-hidden"
            :style="{ width: `${Math.min((currentAmount / targetAmount) * 100, 100)}%` }"
          >
            <!-- Shine effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <span v-if="(currentAmount / targetAmount) * 100 > 12" class="text-white text-sm font-bold relative z-10">
              {{ Math.round((currentAmount / targetAmount) * 100) }}%
            </span>
          </div>
        </div>
        
        <!-- Remaining amount -->
        <p class="text-center text-green-200 text-sm mt-4">
          Noch {{ formatCurrency(Math.max(0, targetAmount - currentAmount)) }} bis zum Ziel
        </p>
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

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>

