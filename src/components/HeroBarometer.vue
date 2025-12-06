<template>
  <section class="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
    <!-- Fullscreen Background Images with Fade Transition -->
    <div class="absolute inset-0">
      <transition name="fade" mode="out-in">
        <img 
          :key="currentImageIndex"
          :src="images[currentImageIndex]"
          :alt="`Naturbild ${currentImageIndex + 1}`"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </transition>
      <div class="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/75 to-teal-900/80"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
      <div class="text-center">
        <!-- Icon -->
        <div class="mb-6 flex justify-center">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full animate-pulse">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        
        <!-- Title -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
          Schutz für unsere Natur
        </h1>
        <p class="text-2xl md:text-3xl mb-10 text-green-100 drop-shadow-lg max-w-3xl mx-auto">
          Gemeinsam für eine nachhaltige und grüne Zukunft
        </p>
        
        <!-- Donate Now Button -->
        <button
          @click="scrollToDonate"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 mb-12"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Jetzt spenden
        </button>
      </div>
      
      <!-- Enhanced Spendenbarometer -->
      <div class="bg-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-10 mt-12 shadow-2xl border-2 border-white/30 max-w-5xl mx-auto">
        <!-- Header with Icon -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500/30 rounded-full mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-2">Unser Spendenbarometer</h2>
          <p class="text-green-100 text-sm md:text-base">Jeder Beitrag bringt uns dem Ziel näher</p>
        </div>
        
        <!-- Amount Display -->
        <div class="mb-8">
          <div class="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
            <div class="text-center md:text-right">
              <p class="text-sm md:text-base text-green-200 mb-1">Gesammelt</p>
              <p class="text-4xl md:text-5xl font-bold transition-all duration-300 drop-shadow-lg">
                {{ formatCurrency(currentAmount) }}
              </p>
            </div>
            <div class="hidden md:block text-green-300 text-2xl font-light">/</div>
            <div class="text-center md:text-left">
              <p class="text-sm md:text-base text-green-200 mb-1">Ziel</p>
              <p class="text-3xl md:text-4xl font-semibold text-green-100">
                {{ formatCurrency(targetAmount) }}
              </p>
            </div>
          </div>
          
          <!-- Percentage Badge -->
          <div class="flex justify-center mb-6">
            <div class="inline-flex items-center px-6 py-3 bg-green-500/30 backdrop-blur-sm rounded-full border border-green-400/50">
              <svg class="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span class="text-xl font-bold text-white">
                {{ Math.round((currentAmount / targetAmount) * 100) }}% erreicht
              </span>
            </div>
          </div>
        </div>
        
        <!-- Enhanced Progress Bar -->
        <div class="relative mb-6">
          <div class="w-full bg-white/20 rounded-full h-10 md:h-12 overflow-hidden shadow-inner border border-white/30">
            <div 
              class="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-4 shadow-lg relative overflow-hidden"
              :style="{ width: `${Math.min((currentAmount / targetAmount) * 100, 100)}%` }"
            >
              <!-- Animated shine effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              <!-- Progress percentage inside bar -->
              <span v-if="(currentAmount / targetAmount) * 100 > 15" class="text-white text-sm md:text-base font-bold relative z-10 drop-shadow-lg">
                {{ Math.round((currentAmount / targetAmount) * 100) }}%
              </span>
            </div>
          </div>
          <!-- Progress markers -->
          <div class="absolute top-0 left-0 w-full h-full flex justify-between items-center px-2 pointer-events-none">
            <div v-for="marker in [0, 25, 50, 75, 100]" :key="marker" class="w-1 h-full bg-white/20"></div>
          </div>
        </div>
        
        <!-- Remaining amount with icon -->
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <svg class="w-5 h-5 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p class="text-green-200 text-base md:text-lg font-semibold">
              Noch <span class="text-white font-bold">{{ formatCurrency(Math.max(0, targetAmount - currentAmount)) }}</span> bis zum Ziel
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

// Nature images array
const images = [
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
]

const currentImageIndex = ref(0)
let imageInterval = null

const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const scrollToDonate = () => {
  const donateSection = document.querySelector('section.py-16')
  if (donateSection) {
    donateSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  // Change image every 3-4 seconds (using 3.5 seconds)
  imageInterval = setInterval(changeImage, 3500)
})

onUnmounted(() => {
  if (imageInterval) {
    clearInterval(imageInterval)
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

