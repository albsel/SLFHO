<template>
    <section class="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      <!-- Background images cross-fade: always at least one image visible -->
      <div class="absolute inset-0">
        <!-- Current image -->
        <img
          v-if="images[currentImageIndex]"
          :src="images[currentImageIndex]"
          :alt="`Naturbild ${currentImageIndex + 1}`"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-out"
          :class="isFading ? 'opacity-0' : 'opacity-100'"
          loading="lazy"
        />
        <!-- Next image -->
        <img
          v-if="images[nextImageIndex]"
          :src="images[nextImageIndex]"
          :alt="`Naturbild ${nextImageIndex + 1}`"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-out"
          :class="isFading ? 'opacity-100' : 'opacity-0'"
          loading="lazy"
        />
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-800/55 to-teal-900/60"></div>
      </div>
  
      <!-- Content -->
      <div class="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div class="text-center">
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full animate-pulse">
              <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
  
          <!-- Title -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-2xl">
            Schutz für unsere Natur
          </h1>
          <p class="text-base sm:text-lg md:text-2xl mb-8 md:mb-10 text-green-100 drop-shadow-lg max-w-3xl mx-auto">
            Gemeinsam für eine nachhaltige und grüne Zukunft – jeder Beitrag zählt.
          </p>
  
          <!-- Donate Now Button -->
          <button
            @click="scrollToDonate"
            class="inline-flex items-center px-7 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold md:font-bold text-base md:text-lg rounded-full shadow-2xl transform hover:translate-y-[-2px] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-900 transition-all duration-300 mb-10 md:mb-12"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Jetzt spenden
          </button>
        </div>
  
        <!-- Spendenbarometer -->
        <div
          class="bg-white/15 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 mt-4 md:mt-8 shadow-2xl border border-white/30 max-w-5xl mx-auto transition-all duration-300"
        >
          <!-- Header -->
          <div class="text-center mb-6 md:mb-8">
            <div class="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-500/30 rounded-full mb-3 md:mb-4">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 class="text-lg sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">Unser Spendenbarometer</h2>
            <p class="text-green-100 text-xs sm:text-sm md:text-base">
              Live-Überblick über den aktuellen Spendenstand
            </p>
          </div>
  
          <!-- Amounts -->
          <div class="mb-6 md:mb-8">
            <div class="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
              <div class="text-center md:text-right">
                <p class="text-xs md:text-sm text-green-200 mb-1">Gesammelt</p>
                <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  {{ formatCurrency(currentAmount) }}
                </p>
              </div>
              <div class="hidden md:block text-green-300 text-2xl font-light">/</div>
              <div class="text-center md:text-left">
                <p class="text-xs md:text-sm text-green-200 mb-1">Ziel</p>
                <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-100">
                  {{ formatCurrency(targetAmount) }}
                </p>
              </div>
            </div>
  
            <!-- Percentage Badge -->
            <div class="flex justify-center mb-4 md:mb-6">
              <div
                class="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500/30 backdrop-blur-sm rounded-full border border-green-400/50"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span class="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {{ progressPercentage }}% erreicht
                </span>
              </div>
            </div>
          </div>
  
          <!-- Progress bar -->
          <div class="relative mb-4 md:mb-6">
            <div class="w-full bg-white/20 rounded-full h-6 sm:h-8 md:h-10 overflow-hidden shadow-inner border border-white/30">
              <div
                class="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3 sm:pr-4 shadow-lg bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"
                :style="{ width: barWidth }"
              >
                <span
                  v-if="progressPercentage > 15"
                  class="text-xs sm:text-sm md:text-base font-bold text-white drop-shadow-lg"
                >
                  {{ progressPercentage }}%
                </span>
              </div>
            </div>
            <!-- Markers -->
            <div class="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
              <div
                v-for="marker in [0, 25, 50, 75, 100]"
                :key="marker"
                class="w-[2px] h-4 sm:h-5 md:h-6 bg-white/30 rounded-full"
              />
            </div>
          </div>
  
          <!-- Remaining -->
          <div class="text-center">
            <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p class="text-green-200 text-xs sm:text-sm md:text-base font-semibold">
                Noch
                <span class="text-white font-bold">
                  {{ formatCurrency(Math.max(0, targetAmount - currentAmount)) }}
                </span>
                bis zum Ziel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    currentAmount: {
      type: Number,
      required: true
    },
    targetAmount: {
      type: Number,
      required: true
    }
  });
  
  // Exactly 5 background images
  const images = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80'
  ];
  
  const currentImageIndex = ref(0);
  const nextImageIndex = ref(1);
  const isFading = ref(false);
  
  let displayTimeout = null;
  let fadeTimeout = null;
  
  const DISPLAY_DURATION = 4000; // 4s image fully visible
  const FADE_DURATION = 1600;    // 1.6s cross-fade
  
  const scheduleNext = () => {
    displayTimeout = setTimeout(() => {
      // Prepare next index
      nextImageIndex.value = (currentImageIndex.value + 1) % images.length;
      // Start fade
      isFading.value = true;
  
      fadeTimeout = setTimeout(() => {
        // Commit new current image
        currentImageIndex.value = nextImageIndex.value;
        // Reset fade for next cycle
        isFading.value = false;
        scheduleNext();
      }, FADE_DURATION);
    }, DISPLAY_DURATION);
  };
  
  onMounted(() => {
    // Preload images to avoid flashes
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  
    scheduleNext();
  });
  
  onUnmounted(() => {
    if (displayTimeout) clearTimeout(displayTimeout);
    if (fadeTimeout) clearTimeout(fadeTimeout);
  });
  
  const scrollToDonate = () => {
    const donateSection = document.querySelector('#donate-section');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const progressPercentage = computed(() => {
    if (!props.targetAmount || props.targetAmount <= 0) return 0;
    return Math.min(100, Math.round((props.currentAmount / props.targetAmount) * 100));
  });
  
  const barWidth = computed(() => `${progressPercentage.value}%`);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  </script>
  