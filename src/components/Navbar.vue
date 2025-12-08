<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-white shadow-sm transition-all duration-500 ease-in-out"
  >
    <nav class="container flex items-center justify-between h-16">
      <!-- LOGO - Always visible, clickable -->
      <button @click="scrollTo('hero')" class="flex items-center gap-3 group">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full font-bold text-lg bg-brand-primary text-white transition-all duration-300 group-hover:scale-110"
        >
          S
        </div>
        <span
          class="font-bold text-lg md:text-xl tracking-tight text-gray-900 transition-all duration-300 group-hover:text-brand-primary"
        >
          SLFHO
        </span>
      </button>

      <!-- NAV LINKS - Show on offset, hide on scroll -->
      <div class="flex items-center gap-8">
        <button
          @click="scrollTo('hero')"
          :class="[
            'text-base font-medium transition-all duration-500 relative group',
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
            'text-base font-medium transition-all duration-500 relative group',
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
            'text-base font-medium transition-all duration-500 relative group',
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

        <!-- CTA BUTTON - Always visible -->
        <button
          class="bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-brand-primaryDark transition-all duration-300"
          @click="scrollTo('donate-section')"
        >
          Jetzt spenden
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["scrollToSection"]);
const isScrolled = ref(false);

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
</script>
