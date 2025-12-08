<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-white shadow-sm transition-all duration-500 ease-in-out"
  >
    <nav class="container flex items-center justify-between h-16 px-4">
      <!-- LOGO - Always visible, clickable -->
      <button
        @click="scrollTo('hero')"
        class="flex items-center gap-2 md:gap-3 group"
      >
        <div
          class="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full font-bold text-base md:text-lg bg-brand-primary text-white transition-all duration-300 group-hover:scale-110"
        >
          S
        </div>
        <span
          class="font-bold text-base md:text-lg lg:text-xl tracking-tight text-gray-900 transition-all duration-300 group-hover:text-brand-primary"
        >
          SLFHO
        </span>
      </button>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-brand-primary transition-colors"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop NAV LINKS - Show on offset, hide on scroll -->
      <div class="hidden md:flex items-center gap-6 lg:gap-8">
        <button
          @click="scrollTo('hero')"
          :class="[
            'text-sm lg:text-base font-medium transition-all duration-500 relative group',
            isScrolled
              ? 'opacity-0 -translate-y-2 pointer-events-none'
              : 'text-gray-700 hover:text-brand-primary opacity-100 translate-y-0',
          ]"
        >
          <span class="relative z-10">Start</span>
          <span
            class="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></span>
        </button>

        <button
          @click="scrollTo('donate-section')"
          :class="[
            'text-sm lg:text-base font-medium transition-all duration-500 relative group',
            isScrolled
              ? 'opacity-0 -translate-y-2 pointer-events-none'
              : 'text-gray-700 hover:text-brand-primary opacity-100 translate-y-0',
          ]"
        >
          <span class="relative z-10">Spenden</span>
          <span
            class="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></span>
        </button>

        <button
          @click="scrollTo('faq-section')"
          :class="[
            'text-sm lg:text-base font-medium transition-all duration-500 relative group',
            isScrolled
              ? 'opacity-0 -translate-y-2 pointer-events-none'
              : 'text-gray-700 hover:text-brand-primary opacity-100 translate-y-0',
          ]"
        >
          <span class="relative z-10">FAQ</span>
          <span
            class="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></span>
        </button>

        <!-- CTA BUTTON - Always visible on desktop -->
        <button
          class="bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-brand-primaryDark transition-all duration-300 whitespace-nowrap"
          @click="scrollTo('donate-section')"
        >
          Jetzt spenden
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <div
      :class="[
        'md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden',
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div class="container px-4 py-4 space-y-4">
        <button
          @click="handleMobileClick('hero')"
          class="block w-full text-left text-base font-medium text-gray-700 hover:text-brand-primary py-2 transition-colors"
        >
          Start
        </button>

        <button
          @click="handleMobileClick('donate-section')"
          class="block w-full text-left text-base font-medium text-gray-700 hover:text-brand-primary py-2 transition-colors"
        >
          Spenden
        </button>

        <button
          @click="handleMobileClick('faq-section')"
          class="block w-full text-left text-base font-medium text-gray-700 hover:text-brand-primary py-2 transition-colors"
        >
          FAQ
        </button>

        <button
          class="w-full bg-brand-primary text-white font-semibold text-sm px-4 py-3 rounded-md hover:bg-brand-primaryDark transition-all duration-300"
          @click="handleMobileClick('donate-section')"
        >
          Jetzt spenden
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["scrollToSection"]);
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const scrollTo = (id) => emit("scrollToSection", id);

const handleMobileClick = (id) => {
  mobileMenuOpen.value = false;
  scrollTo(id);
};
</script>
