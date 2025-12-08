<template>
  <section
    id="hero"
    class="relative min-h-[80vh] md:min-h-[70vh] text-white overflow-hidden"
  >
    <!-- Background image cross-fade -->
    <div class="absolute inset-0">
      <!-- Current image -->
      <img
        v-if="images[currentImageIndex]"
        :key="`current-${currentImageIndex}`"
        :src="images[currentImageIndex]"
        :alt="`Naturbild ${currentImageIndex + 1}`"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out"
        :class="isFading ? 'opacity-0' : 'opacity-100'"
      />
      <!-- Next image -->
      <img
        v-if="images[nextImageIndex]"
        :key="`next-${nextImageIndex}`"
        :src="images[nextImageIndex]"
        :alt="`Naturbild ${nextImageIndex + 1}`"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out"
        :class="isFading ? 'opacity-100' : 'opacity-0'"
      />

      <!-- Dark overlay for readability -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- LEFT: Text + Barometer -->
          <div class="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <!-- Eyebrow -->
            <p
              class="uppercase tracking-wide text-xs md:text-sm text-brand-100 mb-2"
            >
              SLFHO – Natur schützen
            </p>

            <!-- Headline -->
            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Für eine Zukunft,
              <span class="block text-brand-accent">
                die wir lieben können.
              </span>
            </h1>

            <!-- Subtext -->
            <p class="text-base sm:text-lg md:text-xl mb-8 text-brand-100">
              Deine Spende unterstützt Projekte für Wälder, Wasser und
              Artenvielfalt.
            </p>

            <!-- CTA -->
            <div class="flex justify-center lg:justify-start">
              <button class="btn-primary" @click="scrollToDonate">
                <svg
                  class="btn-primary-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Jetzt spenden
              </button>
            </div>

            <!-- Progress hint -->
            <p
              class="mt-4 text-sm text-brand-100 flex items-center justify-center lg:justify-start"
            >
              <span
                class="inline-block w-2 h-2 bg-brand-accent rounded-full mr-2"
              ></span>
              {{ progressPercentage }}% des Spendenziels erreicht
            </p>

            <!-- BAROMETER CARD -->
            <div
              class="mt-10 bg-gradient-to-br from-emerald-900/40 via-green-800/30 to-teal-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-emerald-400/20"
            >
              <!-- Header -->
              <p class="text-sm text-brand-100 text-center lg:text-left">
                Unser Spendenbarometer
              </p>

              <!-- Amounts -->
              <div
                class="flex items-center justify-center lg:justify-start gap-6 mt-4"
              >
                <div>
                  <p class="text-xs text-brand-100/80">Gesammelt</p>
                  <p class="text-3xl font-bold">
                    {{ formatCurrency(currentAmount) }}
                  </p>
                </div>

                <div class="hidden md:block text-brand-100/70 text-3xl">/</div>

                <div>
                  <p class="text-xs text-brand-100/80">Ziel</p>
                  <p class="text-2xl font-semibold">
                    {{ formatCurrency(targetAmount) }}
                  </p>
                </div>
              </div>

              <!-- Progress bar -->
              <div class="mt-6">
                <div
                  class="w-full bg-white/20 rounded-full h-6 overflow-hidden"
                >
                  <div
                    class="h-full bg-gradient-to-r from-brand-500 to-brand-accent transition-all duration-700 ease-out rounded-full flex items-center justify-end pr-4"
                    :style="{ width: barWidth }"
                  >
                    <span
                      v-if="progressPercentage > 15"
                      class="text-white text-sm font-bold"
                    >
                      {{ progressPercentage }}%
                    </span>
                  </div>
                </div>
              </div>

              <!-- Remaining -->
              <p class="mt-4 text-sm text-brand-100 text-center lg:text-left">
                Noch
                <span class="font-bold text-white">
                  {{
                    formatCurrency(Math.max(0, targetAmount - currentAmount))
                  }}
                </span>
                bis zum Ziel.
              </p>
            </div>
          </div>

          <!-- RIGHT: Image column aligned with container grid -->
          <div class="hidden lg:flex justify-center">
            <div
              class="rounded-[2.5rem] overflow-hidden shadow-lg border border-white/20 w-full max-w-lg relative"
            >
              <img
                v-for="(img, idx) in images"
                :key="`right-${idx}`"
                :src="img"
                alt="Naturlandschaft"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-in-out"
                :class="
                  idx === currentImageIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                "
              />
              <!-- Maintain aspect ratio -->
              <div class="pb-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  currentAmount: {
    type: Number,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
});

// 🔁 Nature images - beautiful landscapes
const images = [
  // Waterfall / energy
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=85",
  // Forest light
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85",
  // Lake and mountains
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
  // Green meadow with flowers
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
];

const currentImageIndex = ref(0);
const nextImageIndex = ref(1);
const isFading = ref(false);

let displayTimeout = null;
let fadeTimeout = null;

const DISPLAY_DURATION = 4000; // 4 seconds visible
const FADE_DURATION = 1400; // 1.4 seconds cross-fade

const scheduleNext = () => {
  displayTimeout = setTimeout(() => {
    nextImageIndex.value = (currentImageIndex.value + 1) % images.length;
    isFading.value = true;

    fadeTimeout = setTimeout(() => {
      currentImageIndex.value = nextImageIndex.value;
      isFading.value = false;
      scheduleNext();
    }, FADE_DURATION);
  }, DISPLAY_DURATION);
};

onMounted(() => {
  // Preload images to avoid flicker
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
  const donateSection = document.querySelector("#donate-section");
  if (donateSection) {
    donateSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const progressPercentage = computed(() =>
  props.targetAmount && props.targetAmount > 0
    ? Math.min(
        100,
        Math.round((props.currentAmount / props.targetAmount) * 100)
      )
    : 0
);

const barWidth = computed(() => `${progressPercentage.value}%`);

const formatCurrency = (amount) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
</script>
